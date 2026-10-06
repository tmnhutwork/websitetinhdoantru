/**
 * ==============================================================================
 * TỊNH ĐỘ · AN TRÚ - GSAP & SCROLLTRIGGER ANIMATION ENGINE
 * ==============================================================================
 * File quản lý toàn bộ hiệu ứng chuyển động và cuộn trang (ScrollTrigger).
 * 
 * Hướng dẫn nhanh cho bạn:
 * 1. gsap.to(target, { ...vars }): Di chuyển từ trạng thái hiện tại đến trạng thái mới
 * 2. gsap.from(target, { ...vars }): Khởi tạo từ trạng thái này và trở về ban đầu
 * 3. gsap.fromTo(target, { fromVars }, { toVars }): Xác định rõ cả 2 trạng thái
 * 4. gsap.timeline(): Tạo chuỗi hoạt ảnh nối tiếp nhau theo thứ tự thời gian
 * ==============================================================================
 */

(function () {
  'use strict';

  // 1. Kiểm tra môi trường GSAP & ScrollTrigger đã sẵn sàng chưa
  if (typeof gsap === 'undefined') {
    console.warn('⚠️ [GSAP]: Thư viện GSAP chưa được tải. Hãy chắc chắn CDN GSAP được nạp trước file này.');
    return;
  }

  // 2. Đăng ký plugin ScrollTrigger với GSAP
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  } else {
    console.warn('⚠️ [ScrollTrigger]: Plugin ScrollTrigger chưa được nạp.');
  }

  // 3. Khởi tạo khi DOM đã tải hoàn tất
  document.addEventListener('DOMContentLoaded', () => {

    // Kiểm tra tuỳ chọn giảm chuyển động của người dùng (Accessibility - A11y)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      console.info('ℹ️ [GSAP]: Chế độ prefers-reduced-motion đang bật, bỏ qua các hiệu ứng chuyển động lớn.');
      return;
    }

    /* ==========================================================================
       1. CẤU HÌNH MẶC ĐỊNH (GSAP DEFAULTS)
       ========================================================================== */
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.8
    });

    /* ==========================================================================
       2. HIỆU ỨNG ENTRANCE KHI VỪA VÀO TRANG (HERO / BANNER)
       ========================================================================== */
    const initHeroAnimation = () => {
      const heroTitle = document.querySelector('.hero-title, .hero-content h1, .banner-title');
      const heroSubtitle = document.querySelector('.hero-subtitle, .hero-content p, .banner-sub');
      const heroButtons = document.querySelectorAll('.hero-cta, .hero-actions .btn, .hero-content .btn');

      if (heroTitle || heroSubtitle || heroButtons.length > 0) {
        const heroTl = gsap.timeline({ delay: 0.2 });

        if (heroTitle) {
          heroTl.from(heroTitle, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
          });
        }

        if (heroSubtitle) {
          heroTl.from(heroSubtitle, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
          }, '-=0.6');
        }

        if (heroButtons.length > 0) {
          heroTl.from(heroButtons, {
            y: 15,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: 'back.out(1.5)'
          }, '-=0.4');
        }
      }
    };

    /* ==========================================================================
       3. HIỆU ỨNG TỰ ĐỘNG THEO CUỘN TRANG (SCROLLTRIGGER REVEAL)
       Chỉ cần thêm class `gsap-fade-up` hoặc `reveal-on-scroll` vào bất kỳ thẻ HTML nào
       ========================================================================== */
    const initScrollReveals = () => {
      if (typeof ScrollTrigger === 'undefined') return;

      // Danh sách các phần tử tự động áp dụng hiệu ứng khi cuộn tới
      const revealElements = document.querySelectorAll('.gsap-fade-up, .reveal-on-scroll');

      revealElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out'
        });
      });

      // Hiệu ứng hiện dần so le (stagger) cho các danh sách thẻ / card
      const cardGrids = document.querySelectorAll('.features-grid, .teachings-grid, .sutra-grid, .faq-grid');
      cardGrids.forEach((grid) => {
        const cards = grid.children;
        if (cards.length > 0) {
          gsap.from(cards, {
            scrollTrigger: {
              trigger: grid,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true
            },
            y: 30,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: 'power2.out'
          });
        }
      });
    };

    /* ==========================================================================
       4. HIỆU ỨNG THANH ĐIỀU HƯỚNG KHI CUỘN (NAVBAR INTERACTION)
       ========================================================================== */
    const initNavbarScroll = () => {
      if (typeof ScrollTrigger === 'undefined') return;
      const navbar = document.querySelector('.navbar, .site-header, header');
      if (!navbar) return;

      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: {
          className: 'is-scrolled',
          targets: navbar
        }
      });
    };

    // Chạy các bộ hiệu ứng cơ bản
    initHeroAnimation();
    initScrollReveals();
    initNavbarScroll();

    /* ==========================================================================
       5. KHU VỰC DÀNH CHO BẠN TỰ DO VIẾT HIỆU ỨNG (CUSTOM ANIMATIONS)
       ==========================================================================
       Bạn có thể thoải mái viết các hiệu ứng mới của mình ngay dưới đây.
       
       MẪU 1: Hiệu ứng một phần tử xuất hiện khi cuộn tới
       ----------------------------------------------------
       gsap.from('.ten-class-cua-ban', {
         scrollTrigger: {
           trigger: '.ten-class-cua-ban',
           start: 'top 80%', // Bắt đầu khi đỉnh của phần tử chạm 80% chiều cao màn hình
           toggleActions: 'play none none reverse'
         },
         opacity: 0,
         y: 50,
         duration: 1
       });

       MẪU 2: Hiệu ứng Parallax (cuộn theo tốc độ khác nền)
       ----------------------------------------------------
       gsap.to('.anh-nen-parallax', {
         scrollTrigger: {
           trigger: '.anh-nen-parallax',
           start: 'top bottom',
           end: 'bottom top',
           scrub: true // Cuộn chuột tới đâu hiệu ứng chạy mượt tới đó
         },
         y: -80,
         ease: 'none'
       });

       MẪU 3: Tạo Timeline liên hoàn nhiều bước
       ----------------------------------------------------
       const myTl = gsap.timeline({
         scrollTrigger: {
           trigger: '#section-dac-biet',
           start: 'top center'
         }
       });
       myTl.from('.buoc-1', { opacity: 0, x: -30, duration: 0.5 })
           .from('.buoc-2', { opacity: 0, x: 30, duration: 0.5 }, '-=0.2')
           .from('.buoc-3', { scale: 0.8, opacity: 0, duration: 0.6 }, '+=0.1');
       ========================================================================== */

    // [BẮT ĐẦU VIẾT HIỆU ỨNG CỦA BẠN TẠI ĐÂY]
    

  });
})();
