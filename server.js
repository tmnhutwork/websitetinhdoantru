const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Thư mục gốc của dự án (đường dẫn thật, đã giải symlink)
const ROOT = fs.realpathSync(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

// File chỉ dùng cho máy chủ, khách truy cập không cần xem (so khớp ở thư mục gốc, không phân biệt hoa thường)
const BLOCKED_FILES = new Set(['server.js', 'package.json', 'package-lock.json']);

function sendText(res, status, message) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(message);
}

const notFound = (res) => sendText(res, 404, '404 Không tìm thấy trang');
const badRequest = (res) => sendText(res, 400, '400 Yêu cầu không hợp lệ');

// Kiểm tra một đường dẫn tương đối (so với ROOT) có được phép phục vụ không
function isAllowed(relPath) {
  if (!relPath || path.isAbsolute(relPath)) return false;
  const segments = relPath.split(path.sep);
  // Nằm ngoài thư mục dự án, hoặc có file/thư mục ẩn (.git, .agents, .claude, .env, ...)
  if (segments.some((s) => s.startsWith('.'))) return false;
  if (segments.length === 1 && BLOCKED_FILES.has(segments[0].toLowerCase().replace(/[.\s]+$/, ''))) {
    return false;
  }
  return true;
}

const server = http.createServer((req, res) => {
  try {
    // Bỏ query string và hash
    const rawPath = (req.url || '/').split('?')[0].split('#')[0];

    let reqPath;
    try {
      reqPath = decodeURIComponent(rawPath);
    } catch (e) {
      return badRequest(res); // mã hoá % sai định dạng
    }

    // Chặn ký tự null
    if (reqPath.includes('\0')) return badRequest(res);

    // Coi dấu \ như dấu /, rồi tách thành từng đoạn
    const segments = reqPath.replace(/\\/g, '/').split('/').filter(Boolean);
    if (segments.length === 0) segments.push('index.html');

    // Mọi đoạn bắt đầu bằng "." (kể cả "..") đều bị từ chối
    if (segments.some((s) => s.startsWith('.'))) return notFound(res);

    // Đường dẫn tuyệt đối cuối cùng phải nằm trong thư mục dự án
    const filePath = path.resolve(ROOT, ...segments);
    if (!filePath.startsWith(ROOT + path.sep) || !isAllowed(path.relative(ROOT, filePath))) {
      return notFound(res);
    }
    const ext = path.extname(filePath).toLowerCase();

    // Giải symlink rồi kiểm tra lại, tránh symlink trỏ ra ngoài dự án hoặc vào thư mục ẩn
    fs.realpath(filePath, (realErr, realPath) => {
      if (realErr) return notFound(res);
      if (!realPath.startsWith(ROOT + path.sep) || !isAllowed(path.relative(ROOT, realPath))) {
        return notFound(res);
      }

      fs.readFile(realPath, (err, data) => {
        if (err) {
          if (['ENOENT', 'ENOTDIR', 'EISDIR', 'ENAMETOOLONG'].includes(err.code)) {
            notFound(res);
          } else {
            sendText(res, 500, '500 Lỗi máy chủ nội bộ');
          }
          return;
        }

        res.writeHead(200, {
          'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
          'Cache-Control': 'no-cache'
        });
        res.end(data);
      });
    });
  } catch (e) {
    // Không bao giờ để máy chủ sập vì một yêu cầu lạ
    if (!res.headersSent) sendText(res, 500, '500 Lỗi máy chủ nội bộ');
    else res.end();
  }
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🌸 Tịnh Độ An Trú đã sẵn sàng tại: http://localhost:${PORT}`);
  console.log(`======================================================\n`);
});
