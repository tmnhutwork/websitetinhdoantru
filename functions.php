<?php
/**
 * ==============================================================================
 * TỊNH ĐỘ · AN TRÚ - WORDPRESS THEME FUNCTIONS & GSAP INTEGRATION
 * ==============================================================================
 * File cấu hình theme WordPress: Tự động nạp GSAP 3 & ScrollTrigger qua CDN chính thức
 * và nạp file script animations.js cho các hiệu ứng chuyển động.
 *
 * Vị trí file trong WordPress:
 * wp-content/themes/[ten-theme-cua-ban]/functions.php
 * ==============================================================================
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Thoát nếu truy cập trực tiếp
}

/**
 * Đăng ký và nạp thư viện GSAP, ScrollTrigger (Official CDN) và file JS Animation
 */
function tinhdo_enqueue_gsap_scripts() {
    
    // 1. Nạp GSAP Core (Phiên bản chính thức từ CDN cdnjs / GreenSock)
    wp_enqueue_script(
        'gsap',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
        array(),
        '3.12.5',
        true // Nạp ở chân trang (Footer)
    );

    // 2. Nạp plugin ScrollTrigger (Phụ thuộc vào 'gsap')
    wp_enqueue_script(
        'gsap-scrolltrigger',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
        array( 'gsap' ),
        '3.12.5',
        true // Nạp ở chân trang (Footer)
    );

    // 3. Nạp file animations.js tùy chỉnh của bạn
    // Kiểm tra vị trí file animations.js trong theme (ở thư mục gốc theme hoặc trong assets/js/)
    $anim_path = get_template_directory() . '/animations.js';
    $anim_uri  = get_template_directory_uri() . '/animations.js';

    if ( ! file_exists( $anim_path ) && file_exists( get_template_directory() . '/assets/js/animations.js' ) ) {
        $anim_path = get_template_directory() . '/assets/js/animations.js';
        $anim_uri  = get_template_directory_uri() . '/assets/js/animations.js';
    }

    $anim_ver = file_exists( $anim_path ) ? filemtime( $anim_path ) : '1.0.0';

    wp_enqueue_script(
        'theme-animations',
        $anim_uri,
        array( 'gsap', 'gsap-scrolltrigger' ), // Đảm bảo GSAP và ScrollTrigger load trước
        $anim_ver,
        true // Nạp ở chân trang (Footer)
    );
}
add_action( 'wp_enqueue_scripts', 'tinhdo_enqueue_gsap_scripts' );

/**
 * Tùy chọn: Thêm thuộc tính 'defer' để tải script bất đồng bộ, tối ưu điểm PageSpeed Google
 */
function tinhdo_add_defer_attribute( $tag, $handle ) {
    $scripts_to_defer = array( 'gsap', 'gsap-scrolltrigger', 'theme-animations' );
    
    if ( in_array( $handle, $scripts_to_defer, true ) ) {
        if ( false === strpos( $tag, 'defer' ) ) {
            return str_replace( ' src', ' defer="defer" src', $tag );
        }
    }
    return $tag;
}
add_filter( 'script_loader_tag', 'tinhdo_add_defer_attribute', 10, 2 );
