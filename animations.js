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
      // Hero có thuộc tính data-hero-static (trang chủ index.html): tiêu đề, phụ đề, nút
      // hiện ngay, không fade-in. Các trang khác không có thuộc tính này nên giữ nguyên hiệu ứng.
      if (document.querySelector('[data-hero-static]')) return;

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

/**
 * ==============================================================================
 * TAB BAR – VẠCH CHỈ BÁO TRƯỢT KHI CHUYỂN MỤC (KHÔNG CẦN GSAP)
 * ==============================================================================
 * Khối này chạy độc lập với khối GSAP ở trên: vẫn hoạt động khi GSAP chưa tải
 * hoặc khi người dùng bật prefers-reduced-motion (lúc đó vạch đổi chỗ tức thì).
 *
 * 1. Tạo một vạch duy nhất .td-tabbar-indicator trong .td-tabbar, đặt dưới icon đang chọn.
 * 2. Chạm mục khác: vạch trượt sang icon mới, màu active chuyển theo, trượt xong
 *    (~260ms) mới chuyển trang. Trang nào không có mục chọn sẵn: vạch hiện dần tại mục vừa chạm.
 * 3. Neo trong cùng trang (index.html → #thoi-khoa): vạch trượt, trình duyệt tự cuộn.
 *    Trên index.html vạch bám theo vị trí cuộn (IntersectionObserver): Thời Khóa / Giáo Lý.
 * 4. Quay lại bằng nút Back (bfcache): vạch về đúng mục của trang đó.
 * SLIDE_MS phải khớp với --td-tabbar-slide trong styles.css.
 * ==============================================================================
 */
(function () {
  'use strict';

  var SLIDE_MS = 260;
  var reduceQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

  function reducedMotion() {
    return !!(reduceQuery && reduceQuery.matches);
  }

  // "/" và "/index.html" là cùng một trang
  function pagePath(url) {
    return url.pathname.replace(/\/index\.html$/, '/');
  }

  function isSamePage(url) {
    return url.origin === location.origin &&
      pagePath(url) === pagePath(location) &&
      url.search === location.search;
  }

  function initTabbarIndicator() {
    var bar = document.querySelector('.td-tabbar');
    if (!bar || bar.querySelector('.td-tabbar-indicator')) return;

    var items = Array.prototype.slice.call(bar.querySelectorAll('.td-tabbar-item'));
    if (!items.length) return;

    // Mục active gốc của trang (theo HTML) và các mục neo tới section ngay trong trang này
    var homeItem = null;
    var spyItems = [];
    items.forEach(function (item) {
      if (!homeItem && item.getAttribute('aria-current') === 'page') homeItem = item;
      var url = new URL(item.href, location.href);
      if (url.hash && isSamePage(url)) {
        var section = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (section) spyItems.push({ item: item, section: section, hash: url.hash, inBand: false });
      }
    });

    var indicator = document.createElement('span');
    indicator.className = 'td-tabbar-indicator';
    indicator.setAttribute('aria-hidden', 'true');
    bar.appendChild(indicator);
    bar.classList.add('has-indicator');

    var current = null;
    var readyFrame = 0;

    /* ---------- Vị trí & trạng thái ---------- */
    function setCurrent(item) {
      current = item;
      items.forEach(function (el) {
        if (el === item) el.setAttribute('aria-current', 'page');
        else el.removeAttribute('aria-current');
      });
    }

    function setX(item) {
      if (!item || !bar.getClientRects().length) return; // TabBar đang ẩn (từ 1024px)
      var barBox = bar.getBoundingClientRect();
      var box = item.getBoundingClientRect();
      var width = indicator.offsetWidth || 16;
      var x = box.left - barBox.left - bar.clientLeft + (box.width - width) / 2;
      indicator.style.transform = 'translateX(' + x.toFixed(2) + 'px)';
    }

    function setVisible(visible) {
      indicator.classList.toggle('is-visible', visible);
    }

    // Đặt tức thì, không chuyển động; bật lại transition ở khung hình kế tiếp
    function jumpTo(item) {
      cancelAnimationFrame(readyFrame);
      bar.classList.remove('is-ready');
      setCurrent(item);
      setX(item);
      setVisible(!!item);
      void indicator.offsetWidth; // ép trình duyệt áp dụng vị trí trước khi bật transition
      readyFrame = requestAnimationFrame(function () {
        bar.classList.add('is-ready');
      });
    }

    // Trượt sang mục mới (hoặc hiện dần tại chỗ nếu trước đó chưa có vạch)
    function slideTo(item) {
      if (!item || reducedMotion() || !bar.classList.contains('is-ready')) {
        jumpTo(item);
        return;
      }
      if (!indicator.classList.contains('is-visible')) {
        bar.classList.remove('is-ready');
        setX(item);
        void indicator.offsetWidth;
        bar.classList.add('is-ready');
      } else {
        setX(item);
      }
      setCurrent(item);
      setVisible(true);
    }

    /* ---------- Chuyển trang sau khi trượt xong ---------- */
    var pendingHref = null;
    var navTimer = 0;

    function cancelPending() {
      pendingHref = null;
      clearTimeout(navTimer);
      indicator.removeEventListener('transitionend', onSlideEnd);
    }

    function go() {
      var href = pendingHref;
      cancelPending();
      if (href) location.href = href;
    }

    function onSlideEnd(event) {
      if (event.target === indicator) go();
    }

    function navigateAfterSlide(href) {
      cancelPending();
      pendingHref = href;
      indicator.addEventListener('transitionend', onSlideEnd);
      navTimer = setTimeout(go, SLIDE_MS + 30); // dự phòng nếu transitionend không tới (tổng ≤ 300ms)
    }

    /* ---------- Bám theo vị trí cuộn trên trang có neo (index.html) ---------- */
    var spyLocked = false;
    var holdForLoad = false; // mở trang kèm neo: giữ mục của neo tới khi trang tải xong
    var spyInstant = true;   // lúc mới tải: đổi mục tức thì, không trượt
    var idleTimer = 0;
    var lockTimer = 0;

    // Section được xem là "đang xem" khi chạm dải giữa màn hình (49%–51% chiều cao)
    function measureBands() {
      var h = window.innerHeight;
      spyItems.forEach(function (spy) {
        var r = spy.section.getBoundingClientRect();
        spy.inBand = r.top < h * 0.51 && r.bottom > h * 0.49;
      });
    }

    function pickSpy() {
      for (var i = 0; i < spyItems.length; i++) {
        if (spyItems[i].inBand) return spyItems[i].item;
      }
      return homeItem;
    }

    function syncSpy() {
      if (spyLocked || pendingHref) return;
      var target = pickSpy();
      if (target === current) return;
      if (spyInstant) jumpTo(target);
      else slideTo(target);
    }

    function releaseSpy() {
      spyLocked = false;
      holdForLoad = false;
      clearTimeout(idleTimer);
      clearTimeout(lockTimer);
      measureBands();
      syncSpy();
    }

    // Khoá tạm trong lúc trang tự cuộn tới mục vừa chạm, tránh vạch nhảy qua lại giữa chừng
    function lockSpy() {
      if (!spyItems.length) return;
      spyLocked = true;
      clearTimeout(idleTimer);
      clearTimeout(lockTimer);
      idleTimer = setTimeout(releaseSpy, 400);
      lockTimer = setTimeout(releaseSpy, 2000);
    }

    // Tạm tắt scroll-behavior: smooth của trang; đọc lại style để trình duyệt áp dụng ngay
    function suspendSmoothScroll() {
      var root = document.documentElement;
      root.style.scrollBehavior = 'auto';
      void getComputedStyle(root).scrollBehavior;
      return function () { root.style.scrollBehavior = ''; };
    }

    function instantScroll(fn) {
      var restore = suspendSmoothScroll();
      fn();
      restore();
    }

    function scrollToTop() {
      if (reducedMotion()) instantScroll(function () { window.scrollTo(0, 0); });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ---------- Khởi tạo ---------- */
    var hashSpy = null;
    spyItems.forEach(function (spy) {
      if (spy.hash === location.hash) hashSpy = spy;
    });

    var initial = homeItem;
    if (spyItems.length) {
      measureBands();
      initial = hashSpy ? hashSpy.item : pickSpy();
    }
    jumpTo(initial);

    if (spyItems.length) {
      if (hashSpy) {
        spyLocked = true;
        holdForLoad = true;
      }

      if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            spyItems.forEach(function (spy) {
              if (spy.section === entry.target) spy.inBand = entry.isIntersecting;
            });
          });
          syncSpy();
        }, { rootMargin: '-49% 0px -49% 0px', threshold: 0 });
        spyItems.forEach(function (spy) { observer.observe(spy.section); });
      }

      window.addEventListener('scroll', function () {
        if (!spyLocked) return;
        clearTimeout(idleTimer);
        idleTimer = setTimeout(releaseSpy, 150);
      }, { passive: true });

      var onLoaded = function () {
        requestAnimationFrame(function () {
          if (holdForLoad) {
            // ScrollTrigger (khối GSAP ở trên) gọi scrollTo(0, 0) lúc load khiến trình duyệt bỏ qua
            // việc cuộn tới neo (vd. bấm Thời Khóa từ trang con). Nếu người dùng chưa tự cuộn,
            // đưa section của neo lên đầu màn hình như hành vi mặc định của trình duyệt.
            var nav = performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
            measureBands();
            if (!hashSpy.inBand && (!nav || nav.type === 'navigate')) {
              instantScroll(function () { hashSpy.section.scrollIntoView({ block: 'start' }); });
            }
            releaseSpy();
          }
          setTimeout(function () { spyInstant = false; }, 300);
        });
      };
      if (document.readyState === 'complete') onLoaded();
      else window.addEventListener('load', onLoaded);
    } else {
      spyInstant = false;
    }

    /* ---------- Chạm vào mục ---------- */
    bar.addEventListener('click', function (event) {
      var link = event.target.closest ? event.target.closest('.td-tabbar-item') : null;
      if (!link || !bar.contains(link) || event.defaultPrevented) return;
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if ((link.target && link.target !== '_self') || link.hasAttribute('download')) return;

      if (link === current) {
        if (pendingHref) event.preventDefault(); // đang trượt tới chính mục này: chờ chuyển trang
        return; // chạm lại mục đang chọn: giữ hành vi mặc định
      }

      var url = new URL(link.href, location.href);

      if (isSamePage(url)) {
        cancelPending();
        lockSpy();
        slideTo(link);
        if (!url.hash) {
          // Ví dụ "Giáo Lý" trên index.html: cuộn về đầu trang thay vì tải lại
          event.preventDefault();
          scrollToTop();
          if (location.hash) history.pushState(null, '', url.pathname + url.search);
        } else if (reducedMotion()) {
          // Neo #... khi giảm chuyển động: trình duyệt nhảy thẳng tới section, không cuộn mượt
          setTimeout(suspendSmoothScroll(), 0);
        }
        return; // neo #...: để trình duyệt tự cuộn tới section
      }

      if (url.origin !== location.origin) return;

      if (reducedMotion()) {
        cancelPending();
        jumpTo(link); // đổi chỗ tức thì, trình duyệt chuyển trang ngay
        return;
      }

      // Trượt xong mới chuyển trang; chạm mục khác trong lúc chờ thì đổi đích, trượt tiếp
      event.preventDefault();
      slideTo(link);
      navigateAfterSlide(link.href);
    });

    /* ---------- Đổi kích thước / xoay màn hình ---------- */
    // Chỉ tính lại khi bề ngang TabBar đổi (thanh địa chỉ co/giãn khi cuộn cũng gây resize).
    // ResizeObserver chạy trước khi vẽ khung hình nên vạch không bị lệch dù chỉ một khung.
    var lastBarWidth = bar.clientWidth;
    function onBarResize() {
      var width = bar.clientWidth;
      if (width === lastBarWidth) return;
      lastBarWidth = width;
      jumpTo(current);
    }
    if ('ResizeObserver' in window) {
      new ResizeObserver(onBarResize).observe(bar);
    } else {
      window.addEventListener('resize', onBarResize);
      window.addEventListener('orientationchange', onBarResize);
    }

    /* ---------- Quay lại bằng Back/Forward (bfcache) ---------- */
    window.addEventListener('pageshow', function (event) {
      if (!event.persisted) return;
      cancelPending();
      spyLocked = false;
      if (spyItems.length) measureBands();
      jumpTo(spyItems.length ? pickSpy() : homeItem);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabbarIndicator);
  } else {
    initTabbarIndicator();
  }
})();
