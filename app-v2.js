/**
 * ==============================================================================
 * TỊNH ĐỘ · AN TRÚ - PHƯƠNG ÁN 2 INTERACTIVE UX CONTROLLER
 * ==============================================================================
 * Bổ trợ logic kết nối liền mạch giữa Tâm Trạng (Mood) -> Bài Học Cụ Thể (Prescription)
 * và 3 Trụ Cột Tu Học Tuần Tự (3 Curated Pillars).
 * Hoạt động mượt mà cùng app.js, hoàn toàn không xung đột.
 * ==============================================================================
 */

(function () {
  'use strict';

  // Bản đồ liên kết giữa Tâm Trạng và Bài viết giải pháp cụ thể
  const MOOD_TARGET_MAP = {
    'binh-an': {
      articleId: 'khai-thi-tinh-khong',
      catKey: 'khai-thi',
      ctaText: 'Đọc bài gỡ rối: Buông Xả Tâm Bám Chấp',
      badge: 'Bình An Trong Hiện Tại',
      title: 'Buông Xả Tâm Bám Chấp Giữa Cõi Vô Thường'
    },
    'kho-dau': {
      articleId: 'khai-thi-tinh-khong',
      catKey: 'khai-thi',
      ctaText: 'Đọc bài: Chuyển Hóa Khổ Đau Thành Tuệ Giác',
      badge: 'Chữa Lành & Thấu Cảm',
      title: 'Chuyển Hóa Khổ Đau Thành Đóa Hoa Tuệ Giác'
    },
    'co-ban': {
      articleId: 'nhap-mon-tinh-do',
      catKey: 'nhap-mon',
      ctaText: 'Đọc bài: Pháp Môn Tịnh Độ Căn Bản Là Gì?',
      badge: 'Nền Tảng Cho Người Mới',
      title: 'Pháp Môn Tịnh Độ: Căn Bản Cho Người Thời Nay'
    },
    'niem-phat': {
      articleId: 'phuong-phap-thap-niem-ky-so',
      catKey: 'phuong-phap',
      ctaText: 'Học phương pháp: Thập Niệm Ký Số Trừ Vọng Niệm',
      badge: 'Hành Trì Đúng Pháp',
      title: 'Phương Pháp Thập Niệm Ký Số Ấn Quang Đại Sư'
    },
    'tinh-do': {
      articleId: 'tam-tu-luong-cot-tuy',
      catKey: 'tam-tu-luong',
      ctaText: 'Đọc bài: Tam Tư Lương Tín – Nguyện – Hạnh',
      badge: 'Cốt Tủy Vãng Sanh',
      title: 'Tam Tư Lương: Chiếc Kiềng Ba Chân Vãng Sanh'
    }
  };

  document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. CẬP NHẬT GIAO DIỆN & NÚT CTA TRÊN MOOD PRESCRIPTION CARD
       -------------------------------------------------------------------------- */
    const solCtaBtn = document.getElementById('btn-mood-read-article');
    const solCtaText = document.getElementById('sol-cta-text');
    const resFloatingBadge = document.getElementById('res-floating-badge');
    const resFloatingTitle = document.getElementById('res-floating-title');
    const moodPills = document.querySelectorAll('.mood-pill');

    function updateMoodPrescription(moodKey) {
      const target = MOOD_TARGET_MAP[moodKey] || MOOD_TARGET_MAP['binh-an'];
      if (solCtaText) {
        solCtaText.textContent = target.ctaText;
      }
      if (resFloatingBadge) {
        resFloatingBadge.innerHTML = `<span>✨</span> ${target.badge}`;
      }
      if (resFloatingTitle) {
        resFloatingTitle.textContent = target.title;
      }
    }

    // Lắng nghe sự kiện click mood pills để đồng bộ
    moodPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const moodKey = pill.getAttribute('data-mood');
        updateMoodPrescription(moodKey);
      });
    });

    // Khởi tạo ban đầu
    const initialMood = document.querySelector('.mood-pill.active')?.getAttribute('data-mood') || 'binh-an';
    updateMoodPrescription(initialMood);

    /* --------------------------------------------------------------------------
       2. TƯƠNG TÁC NHẢY TỪ MOOD XUỐNG BÀI VIẾT + HIỆU ỨNG TỎA SÁNG (GLOW PULSE)
       -------------------------------------------------------------------------- */
    if (solCtaBtn) {
      solCtaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const activeMood = document.querySelector('.mood-pill.active')?.getAttribute('data-mood') || 'binh-an';
        const target = MOOD_TARGET_MAP[activeMood] || MOOD_TARGET_MAP['binh-an'];

        // 1. Kích hoạt bộ lọc Tất Cả để đảm bảo bài viết mục tiêu hiện diện
        const filterAllBtn = document.querySelector(`[data-category='all']`);
        if (filterAllBtn) filterAllBtn.click();

        // 2. Tìm thẻ card của bài viết mục tiêu
        setTimeout(() => {
          const targetCard = document.querySelector(`.article-card[data-id="${target.articleId}"]`);
          if (targetCard) {
            // Cuộn êm ái tới bài viết
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Thêm hiệu ứng phát sáng kim sắc
            targetCard.classList.remove('highlight-target');
            void targetCard.offsetWidth; // trigger reflow
            targetCard.classList.add('highlight-target');

            // Tự gỡ bỏ sau 3.6s
            setTimeout(() => {
              targetCard.classList.remove('highlight-target');
            }, 3600);
          }
        }, 150);
      });
    }

    /* --------------------------------------------------------------------------
       3. ĐIỀU HƯỚNG 3 TRỤ CỘT TU HỌC (3 CURATED PILLARS TABS)
       -------------------------------------------------------------------------- */
    const pillarButtons = document.querySelectorAll('.v2-pillar-card-btn');
    
    // Ánh xạ 3 Trụ Cột vào các category có sẵn trong app.js
    const PILLAR_CATEGORY_MAP = {
      'pillar-1': 'nhap-mon',    // Khởi Tâm & Nhập Môn
      'pillar-2': 'tam-tu-luong',// Cốt Lõi & Phương Pháp
      'pillar-3': 'vang-sanh'    // Hộ Niệm & Vãng Sanh
    };

    pillarButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        pillarButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const pillarId = btn.getAttribute('data-pillar');
        const targetCategory = PILLAR_CATEGORY_MAP[pillarId];

        if (targetCategory) {
          const catPill = document.querySelector(`.category-pills [data-category='${targetCategory}']`);
          if (catPill) {
            catPill.click();
          }
        }
      });
    });

  });
})();
