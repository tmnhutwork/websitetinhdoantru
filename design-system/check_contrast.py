"""Kiểm tra tương phản các cặp chữ/nền của design system (WCAG 2.x).

Chạy:  python3 design-system/check_contrast.py
Đọc design-system/tokens.json, in từng cặp ở cả theme Sáng và Tối,
thoát với mã 1 nếu có cặp không đạt. Chạy lại mỗi khi đổi token màu.
"""
import json
import os
import re
import sys

TEXT = 4.5   # chữ thường
UI = 3.0     # viền control, vòng focus, icon, đồ họa

# (màu trước, [các nền], ngưỡng, ghi chú)
PAIRS = [
    ("ink", ["bg", "surface", "surface-sunken", "accent-soft", "success-soft", "danger-soft"], TEXT, "chữ chính"),
    ("ink-muted", ["bg", "surface", "surface-sunken", "accent-soft"], TEXT, "chữ phụ"),
    ("ink-subtle", ["bg", "surface", "surface-sunken", "accent-soft", "success-soft"], TEXT, "metadata 14px"),
    ("accent", ["bg", "surface", "surface-sunken", "accent-soft"], TEXT, "chữ nhấn, link, eyebrow"),
    ("primary", ["bg", "surface", "surface-sunken"], TEXT, "chữ màu primary"),
    ("on-primary", ["primary", "primary-hover"], TEXT, "chữ trên nút primary"),
    ("success", ["bg", "surface", "success-soft"], TEXT, "chữ trạng thái xong"),
    ("danger", ["bg", "surface", "danger-soft"], TEXT, "chữ lỗi"),
    ("bg", ["ink"], TEXT, "toast (nền ink, chữ bg)"),
    ("line-strong", ["bg", "surface", "surface-sunken"], UI, "viền control"),
    ("focus-ring", ["bg", "surface", "surface-sunken", "accent-soft"], UI, "vòng focus"),
    ("accent", ["surface", "accent-soft"], UI, "vạch TabBar, vòng tiến độ, viền chip đã chọn"),
    ("success", ["surface-sunken", "success-soft"], UI, "tiến độ xong, icon check"),
    ("seal", ["bg", "surface"], UI, "con triện (đồ họa)"),
]


def hex_to_rgb(value):
    h = value.lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    return tuple(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))


def luminance(rgb):
    def channel(c):
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = (channel(c) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def ratio(a, b):
    la, lb = luminance(hex_to_rgb(a)), luminance(hex_to_rgb(b))
    return (max(la, lb) + 0.05) / (min(la, lb) + 0.05)


def main():
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "tokens.json")
    data = json.load(open(path, encoding="utf-8"))
    themes = [t["id"] for t in data["color"]["themes"]]
    tokens = {}
    for t in data["color"]["tokens"]:
        v = t["value"]
        tokens[t["name"]] = v if isinstance(v, dict) else {themes[0]: v}

    def value(name, theme):
        v = tokens[name].get(theme, tokens[name][themes[0]])
        m = re.fullmatch(r"\{(.+)\}", v)
        return value(m.group(1), theme) if m else v

    total = fails = 0
    for theme in themes:
        print(f"\n== Theme {theme}")
        for fg, bgs, need, note in PAIRS:
            for bg in bgs:
                a, b = value(fg, theme), value(bg, theme)
                r = ratio(a, b)
                ok = r >= need
                total += 1
                fails += not ok
                mark = "OK  " if ok else "FAIL"
                print(f"{mark} {r:5.2f}:1 (cần {need}) {fg:12} {a} trên {bg:15} {b}  {note}")
    print(f"\n{total} cặp, {fails} cặp không đạt")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
