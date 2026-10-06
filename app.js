/**
 * TỊNH ĐỘ · AN TRÚ - CORE INTERACTIVE ENGINE
 * Lightweight, accessible, and responsive
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. ARTICLES & TEACHINGS DATABASE
     ========================================================================== */
  const ARTICLES = [
    {
      id: 'nhap-mon-tinh-do',
      category: 'nhap-mon',
      categoryName: 'Nhập Môn Tịnh Độ',
      dotClass: 'dot-amber',
      badge: 'Căn Bản',
      title: 'Pháp Môn Tịnh Độ Là Gì? Vì Sao Thích Hợp Nhất Với Người Thời Nay?',
      excerpt: 'Tịnh Độ là pháp môn nương tựa vào Phật lực đại nguyện của Đức Từ Phụ A Di Đà, dung hợp cả Tự lực và Tha lực, thích hợp cho mọi căn cơ giữa thời mạt pháp bận rộn.',
      readTime: '6 phút đọc',
      author: 'Lời Ban Biên Tập · Tịnh Độ An Trú',
      date: 'Thường Niệm',
      image: 'assets/images/amitabha.jpg',
      content: `
        <p>Pháp môn Tịnh Độ là một trong những pháp môn thù thắng bậc nhất của Phật giáo Đại Thừa. "Tịnh" là thanh tịnh, "Độ" là cõi nước. Tịnh Độ ở đây chỉ cõi Tây Phương Cực Lạc do Đức Phật A Di Đà giáo hóa, cách cõi Ta Bà này mười muôn ức cõi Phật.</p>
        
        <h3>Vì sao thời nay nên chọn Tịnh Độ?</h3>
        <p>Giữa thời đại công nghệ số với nhịp sống hối hả, con người phải đối mặt với vô vàn áp lực, lo toan và phiền não bủa vây. Việc tu tập các pháp môn đòi hỏi đoạn tận sạch mọi phiền não kiến hoặc, tư hoặc như Thiền định quả thực rất khó khăn cho người tại gia.</p>
        
        <blockquote>
          "Thời mạt pháp, ức ức người tu hành, hiếm có một người đắc đạo; chỉ nương vào niệm Phật mà thoát khỏi luân hồi." — Kinh Đại Tập
        </blockquote>

        <p>Pháp môn Tịnh Độ thù thắng ở chỗ: <strong>Đới nghiệp vãng sanh</strong> (mang theo nghiệp cũ mà sinh về cõi Cực Lạc). Khi sinh về cõi ấy, nhờ hoàn cảnh trang nghiêm thù thắng, gần gũi Phật và các bậc Bồ Tát, chúng ta sẽ không còn thoái chuyển, một đời thẳng tiến đến quả vị Vô Thượng Chánh Đẳng Chánh Giác.</p>

        <h3>Cách bắt đầu cho người mới</h3>
        <p>Chỉ cần mỗi ngày dành ra 15 đến 30 phút tĩnh tâm, ngồi ngay ngắn hoặc đi kinh hành, chí thành xưng niệm sáu chữ hồng danh: <em>Nam Mô A Di Đà Phật</em>. Giữ tâm luôn nghĩ nhớ đến Phật, bớt tranh chấp hơn thua, ăn chay phóng sanh tùy duyên, hồi hướng công đức vãng sanh Tây Phương.</p>
      `
    },
    {
      id: 'tam-tu-luong-cot-tuy',
      category: 'tam-tu-luong',
      categoryName: 'Tam Tư Lương',
      dotClass: 'dot-emerald',
      badge: 'Cốt Lõi',
      title: 'Tam Tư Lương: Chiếc Kiềng Ba Chân "Tín - Nguyện - Hạnh" Quyết Định Vãng Sanh',
      excerpt: 'Ngẫu Ích Đại Sư dạy: "Được vãng sanh hay không hoàn toàn do Tín - Nguyện có hay không; phẩm vị cao hay thấp do Trì Danh sâu hay cạn." Hiểu rõ ba món tư lương để vững vàng bước đi.',
      readTime: '8 phút đọc',
      author: 'Ngẫu Ích Đại Sư · Di Đà Yếu Giải',
      date: 'Tông Chỉ',
      image: 'assets/images/lotus.jpg',
      content: `
        <p>Người xưa muốn đi xa nghìn dặm phải chuẩn bị lương thực và lộ phí, gọi là "Tư Lương". Hành giả muốn vãng sanh về cõi Tây Phương Cực Lạc cũng phải chuẩn bị ba món tư lương quý báu không thể thiếu: <strong>Tín, Nguyện, và Hạnh</strong>.</p>

        <h3>1. TÍN (Lòng tin sâu xa vững chắc)</h3>
        <p>Tín bao gồm Sáu thứ Tin (Lục Tín):</p>
        <ul>
          <li><strong>Tin Tự:</strong> Tin nơi tâm mình thanh tịnh vốn có thể sanh về Cực Lạc.</li>
          <li><strong>Tin Tha:</strong> Tin lời dạy của Đức Thích Ca và 48 lời đại nguyện của Phật A Di Đà là chân thật.</li>
          <li><strong>Tin Nhân:</strong> Tin niệm Phật là nhân lành xuất thế gian.</li>
          <li><strong>Tin Quả:</strong> Tin cõi Cực Lạc và sự vãng sanh là kết quả tất yếu của nhân niệm Phật.</li>
          <li><strong>Tin Sự:</strong> Tin thế giới Cực Lạc mười muôn ức cõi là có thật về mặt hiện tượng.</li>
          <li><strong>Tin Lý:</strong> Tin mười muôn ức cõi chẳng rời một niệm thanh tịnh của tự tâm.</li>
        </ul>

        <h3>2. NGUYỆN (Ý nguyện thiết tha)</h3>
        <p>Nguyện là chán lìa cõi khổ Ta Bà ngũ trược, tha thiết mong cầu được sanh về cõi nước thanh tịnh của Đức Phật A Di Đà. Ý nguyện này phải sâu sắc như con thơ nhớ mẹ hiền, như người tù mong ngày giải thoát.</p>

        <h3>3. HẠNH (Hành trì chuyên nhất)</h3>
        <p>Hạnh là đem tâm niệm Phật gắn liền vào đời sống. Mỗi ngày bền bỉ xưng danh, không gián đoạn, không hoài nghi, không xen tạp. "Một câu A Di Đà Phật niệm cho thuần thục, vọng niệm tự tiêu trừ."</p>
      `
    },
    {
      id: 'kinh-a-di-da-dai-y',
      category: 'kinh-dien',
      categoryName: 'Kinh Điển Cốt Tủy',
      dotClass: 'dot-indigo',
      badge: 'Bộ Kinh Gối Đầu',
      title: 'Kinh A Di Đà: Bản Kinh Ngắn Gọn Nhất Nhưng Viên Mãn Nhất Về Cõi Cực Lạc',
      excerpt: 'Được Đức Bổn Sư Thích Ca tự thuyết không cần ai thưa thỉnh, Kinh A Di Đà phác họa khung cảnh tráng lệ, thanh tịnh của cõi Tây Phương cùng sự hộ niệm của mười phương Chư Phật.',
      readTime: '7 phút đọc',
      author: 'Kinh Điển Đại Thừa · HT Thích Trí Tịnh dịch',
      date: 'Kinh Tạng',
      image: 'assets/images/mala-sutra.jpg',
      content: `
        <p>Trong toàn bộ Đại Tạng Kinh, phần lớn các kinh điển đều do đệ tử thưa hỏi rồi Đức Phật mới thuyết pháp giải thích. Duy chỉ có <strong>Kinh A Di Đà</strong> là bản kinh đặc biệt: Đức Phật Thích Ca "vô vấn tự thuyết" (tự thương xót căn tánh chúng sanh mà tuyên thuyết không cần đợi thưa hỏi).</p>

        <h3>Cảnh giới Cực Lạc trang nghiêm</h3>
        <p>Kinh mô tả cõi Cực Lạc không có các khổ, chỉ hưởng những điều an vui: cây báu bảy tầng, lưới báu bảy tầng, lan can bảy tầng bao bọc; ao thất bảo chứa đầy nước tám công đức; hoa sen to như bánh xe với đủ sắc xanh, vàng, đỏ, trắng, tỏa ánh sáng vi diệu và ngát hương thơm thanh khiết.</p>

        <blockquote>
          "Chúng sanh trong cõi đó không có các điều khổ, chỉ hưởng những điều vui, nên cõi đó tên là Cực Lạc." — Kinh A Di Đà
        </blockquote>

        <h3>Điều kiện để được vãng sanh</h3>
        <p>Đức Phật chỉ dạy: "Chẳng thể dùng chút ít thiện căn phước đức nhân duyên mà được sanh về cõi đó. Nếu có thiện nam tử, thiện nữ nhân nào nghe nói Đức Phật A Di Đà, rồi chấp trì danh hiệu, hoặc một ngày, hai ngày, cho đến bảy ngày, một lòng không xao động, thì người đó khi lâm chung, Phật A Di Đà cùng hàng Thánh chúng sẽ hiện thân trước mặt."</p>
      `
    },
    {
      id: 'phuong-phap-thap-niem-ky-so',
      category: 'phuong-phap',
      categoryName: 'Phương Pháp Niệm Phật',
      dotClass: 'dot-rose',
      badge: 'Trị Tán Loạn',
      title: 'Phương Pháp "Thập Niệm Ký Số" Của Ấn Quang Đại Sư - Chế Ngự Vọng Tưởng',
      excerpt: 'Tuyệt kỹ giữ tâm không chạy theo tạp niệm: niệm từ 1 đến 10 câu, ghi nhớ rõ ràng từng số trong tâm mà không cần lần chuỗi, giúp định tâm kỳ diệu.',
      readTime: '9 phút đọc',
      author: 'Ấn Quang Đại Sư · Tịnh Độ Văn Sao',
      date: 'Hành Trì',
      image: 'assets/images/temple.jpg',
      content: `
        <p>Rất nhiều hành giả than phiền: "Khi con bắt đầu niệm Phật, tại sao vọng tưởng lại khởi lên cuồn cuộn nhiều hơn lúc bình thường?" Ấn Quang Đại Sư — vị Tổ thứ 13 của Tịnh Độ Tông — đã chỉ ra diệu pháp vô cùng hiệu nghiệm mang tên <strong>Thập Niệm Ký Số</strong>.</p>

        <h3>Thập Niệm Ký Số là gì?</h3>
        <p>Nghĩa là khi niệm Phật, cứ mỗi câu niệm, tâm lại ghi nhớ số thứ tự từ 1 đến 10. Xong câu thứ 10 thì quay trở lại câu số 1. Không dùng chuỗi hạt đếm tay, chỉ dùng tâm tưởng để nhớ số.</p>

        <blockquote>
          "Tâm khởi niệm, miệng xưng ra, tai nghe vào, ý ghi nhớ số câu. Bốn mối quy về một, vọng tưởng tự nhiên không chỗ nương náu." — Ấn Quang Đại Sư
        </blockquote>

        <h3>Hai cách đếm theo nhịp:</h3>
        <ul>
          <li><strong>Cách 1 (Liền mạch):</strong> Đếm liên tục từ câu 1 đến câu 10.</li>
          <li><strong>Cách 2 (Chia làm hai nhịp - Rất khuyên dùng):</strong> Đếm từ 1 đến 5, rồi đếm từ 6 đến 10. Hoặc đếm theo nhịp 3 - 3 - 4 (1-2-3, 4-5-6, 7-8-9-10). Tuyệt đối không đếm lên đến 20 hay 30 vì sẽ sinh mệt tâm.</li>
        </ul>

        <p>Nếu trong khi đếm mà quên mất đang ở số mấy, chứng tỏ vọng tưởng vừa chen vào, hãy lập tức nhẹ nhàng quay về lại số 1 mà tiếp tục. Kiên trì một tháng, quý vị sẽ thấy tâm mình trở nên tĩnh lặng và an lạc lạ kỳ.</p>
      `
    },
    {
      id: 'khai-thi-tinh-khong',
      category: 'khai-thi',
      categoryName: 'Khai Thị Cao Tăng',
      dotClass: 'dot-gold',
      badge: 'Trí Tuệ',
      title: 'Khai Thị Về Công Cứ Cuộc Đời: Buông Xả Tâm Bám Chấp Giữa Cõi Vô Thường',
      excerpt: 'Mọi danh vọng, tiền tài, nhà cửa khi nhắm mắt xuôi tay đều phải để lại cõi trần gian. Thứ duy nhất mang theo được chính là nghiệp lực và câu niệm Phật trong tâm khảm.',
      readTime: '5 phút đọc',
      author: 'Pháp Sư Tịnh Không',
      date: 'Lời Vàng',
      image: 'assets/images/amitabha.jpg',
      content: `
        <p>Người thế gian cả đời bận rộn bươn chải lo toan: sáng đi làm, tối về nhà, gom góp tích lũy tài sản, chăm lo gia quyến. Đó là bổn phận đời thường. Thế nhưng, người học Phật phải có cái nhìn sáng suốt của bậc trí tuệ: Tất cả những thứ đó có mang theo được khi hơi thở cuối cùng dứt đoạn hay không?</p>

        <blockquote>
          "Vạn ban đới bất khứ, duy hữu nghiệp tùy thân." (Muôn thứ đều không mang theo được, chỉ có nghiệp là theo mình mà thôi).
        </blockquote>

        <p>Biết được như thế, ta sống trong đời với tâm thái: <strong>Tùy duyên mà không bám chấp</strong>. Việc cần làm thì tận tâm chu toàn, nhưng trong lòng luôn có chỗ an trú vững chắc cho câu hồng danh <em>Nam Mô A Di Đà Phật</em>.</p>
        
        <p>Hãy xem cõi đời như một quán trọ qua đường, còn Tây Phương Cực Lạc mới chính là quê hương vĩnh hằng đích thực của chân tâm bản tánh chúng ta.</p>
      `
    },
    {
      id: 'chuyen-vang-sanh-chan-that',
      category: 'vang-sanh',
      categoryName: 'Chuyện Vãng Sanh',
      dotClass: 'dot-stone',
      badge: 'Cảm Ứng',
      title: 'Gương Sáng Vãng Sanh: Cụ Bà 84 Tuổi Biết Trước Ngày Giờ Ra Đi Trong Nụ Cười',
      excerpt: 'Câu chuyện có thật củng cố lòng tin sắt đá của người tu Tịnh Độ: Không bệnh tật đau đớn, tắm gội sạch sẽ, tự biết trước ngày giờ rồi ngồi niệm Phật mà vãng sanh.',
      readTime: '7 phút đọc',
      author: 'Ghi chép từ Ban Hộ Niệm',
      date: 'Cảm Ứng Hiện Đời',
      image: 'assets/images/lotus.jpg',
      content: `
        <p>Sự thù thắng nhất của pháp môn Tịnh Độ chính là cái chết của người niệm Phật thường diễn ra trong thanh thản, tự tại, không bị đau đớn hành hạ của tứ đại phân ly.</p>

        <p>Tại một miền quê thanh bình, cụ bà Nguyễn Thị An (pháp danh Diệu Âm) thọ 84 tuổi. Cụ quy y Tam Bảo từ năm 60 tuổi, giữ hạnh ăn chay trường và mỗi ngày bền bỉ niệm từ 2 vạn đến 3 vạn câu Phật hiệu. Suốt hơn hai mươi năm, dù mưa hay nắng, thời khóa công phu của cụ chưa từng gián đoạn.</p>

        <h3>Hiện tướng tốt lành khi lâm chung</h3>
        <p>Ba ngày trước khi xả bỏ báo thân, cụ vui vẻ gọi con cháu lại căn dặn: <em>"Đúng 9 giờ sáng ngày Rằm tháng này, Đức Phật A Di Đà sẽ đến đón mẹ về Tây Phương. Các con hãy lo niệm Phật trợ niệm cho mẹ, chớ có khóc lóc làm động tâm mẹ."</em></p>

        <p>Đúng sáng ngày Rằm, sau khi tắm gội sạch sẽ, đắp y trang nghiêm, cụ ngồi ngay ngắn trên giường, miệng mỉm cười xưng niệm Phật hiệu theo tiếng chuông mõ của đạo tràng hộ niệm. Đến đúng 9 giờ, cụ nhẹ nhàng thở ra một hơi thở êm dịu rồi chắp tay tạ thế. Căn phòng bỗng ngập tràn mùi hương sen thoang thoảng suốt mấy canh giờ, nét mặt cụ hồng hào tươi vui như người đang ngủ say.</p>

        <p>Sự ra đi an lành ấy là minh chứng hùng hồn nhất cho lời đại nguyện tiếp dẫn của Đức Phật A Di Đà: Hễ ai có lòng tin sâu và nguyện thiết, quyết định không luống uổng một đời!</p>
      `
    }
  ];

  /* ==========================================================================
     2. 48 VOWS DATA
     ========================================================================== */
  const VOWS = [
    { num: 1, name: 'Cõi nước không có ba đường ác', desc: 'Khi con thành Phật, cõi nước con nếu có địa ngục, ngạ quỷ, súc sanh thì con không ở ngôi Chánh Giác.' },
    { num: 2, name: 'Không đọa lại vào ba đường ác', desc: 'Hàng thiên nhân trong cõi nước con sau khi thọ chung nếu còn đọa lại vào ba ác đạo thì con không ở ngôi Chánh Giác.' },
    { num: 3, name: 'Thân hình sắc vàng rực rỡ', desc: 'Hàng thiên nhân trong cõi nước con nếu thân hình không có màu vàng ròng thì con không ở ngôi Chánh Giác.' },
    { num: 4, name: 'Hình mạo bình đẳng không sai khác', desc: 'Hàng thiên nhân trong cõi nước con nếu có hình sắc xinh đẹp hay xấu xí sai khác nhau thì con không ở ngôi Chánh Giác.' },
    { num: 11, name: 'Trụ bực Chánh Định chắc chắn đắc Niết Bàn', desc: 'Hàng thiên nhân trong cõi nước con nếu không trụ vào bực Chánh Định Tụ và ắt đạt đến Đại Niết Bàn thì con không ở ngôi Chánh Giác.' },
    { num: 12, name: 'Ánh sáng vô lượng chiếu khắp mười phương', desc: 'Ánh sáng của con nếu có ngằn hạn chẳng chiếu soi đến trăm ngàn muôn ức cõi Phật thì con không ở ngôi Chánh Giác.' },
    { num: 13, name: 'Tuổi thọ vô lượng vô biên', desc: 'Tuổi thọ của con nếu có ngằn hạn chỉ đến trăm ngàn muôn ức kiếp thì con không ở ngôi Chánh Giác.' },
    { num: 18, name: 'MƯỜI NIỆM TẤT CẢ ĐƯỢC VÃNG SANH (Bổn Nguyện Cốt Tủy)', desc: 'Khi con thành Phật, chúng sanh trong mười phương chí tâm tin ưa, muốn sanh về cõi nước con, cho đến mười niệm, nếu không được vãng sanh thì con không ở ngôi Chánh Giác. Duy trừ kẻ phạm năm tội nghịch và phỉ báng Chánh pháp.', key: true },
    { num: 19, name: 'Phật và Thánh chúng hiện đến đón tiếp', desc: 'Chúng sanh phát tâm Bồ Đề, tu các công đức, chí tâm phát nguyện muốn sanh về cõi nước con, lúc lâm chung nếu con cùng đại chúng không hiện ra trước mắt người ấy thì con không ở ngôi Chánh Giác.', key: true },
    { num: 20, name: 'Nghe danh hiệu phát tâm cầu sanh', desc: 'Chúng sanh mười phương nghe danh hiệu con, chuyên nhớ cõi nước con, trồng các cội công đức, chí tâm hồi hướng muốn sanh về cõi con, nếu chẳng được toại nguyện thì con không ở ngôi Chánh Giác.', key: true },
    { num: 22, name: 'Bồ Tát một đời bổ xứ thành Phật', desc: 'Các vị Bồ Tát ở cõi khác sanh về nước con đều đến bực Nhất Sanh Bổ Xứ, rốt ráo thành Phật, trừ những vị vì đại nguyện muốn trở lại Ta Bà độ sanh.' },
    { num: 48, name: 'Chứng các pháp nhẫn bất thoái chuyển', desc: 'Các vị Bồ Tát ở mười phương thế giới nghe danh hiệu con lập tức đắc được Đệ nhất nhẫn, Đệ nhị nhẫn và Đệ tam pháp nhẫn, ở nơi Phật pháp vĩnh viễn không còn thoái chuyển.' }
  ];

  /* ==========================================================================
     3. AUDIO SYNTHESIS ENGINE (Chuông Chánh Niệm & Mõ Thiền qua Web Audio API)
     Không lo lỗi 404 mạng, phát âm thanh chuông ngân thanh tịnh tự nhiên
     ========================================================================== */
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Play Temple Bell (Đại Hồng Chung) - Deep, resonant, rich overtones
  function playSingingBell() {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    
    // Đại Hồng Chung has a very deep fundamental, a long decay, and a slow "wobble" (beating)
    // Using 108Hz as the sacred fundamental frequency
    const partials = [
      { f: 54,    g: 0.7,  d: 12.0 }, // Sub-hum (very deep resonance)
      { f: 108,   g: 1.0,  d: 9.0 },  // Fundamental
      { f: 109.5, g: 0.6,  d: 9.0 },  // Beating frequency (creates the "wa-wa-wa" wobble)
      { f: 162,   g: 0.4,  d: 6.0 },  // Perfect 5th
      { f: 270,   g: 0.3,  d: 4.0 },  // Major 10th
      { f: 432,   g: 0.15, d: 2.0 },  // Higher overtone
      { f: 756,   g: 0.05, d: 1.0 }   // Initial metallic shimmer
    ];

    partials.forEach(partial => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(partial.f, now);

      // Heavy wooden log strike: Attack is slightly rounded, not a sharp click
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(partial.g, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + partial.d);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + partial.d + 1);
    });

    // Add a low-pitched "thud" for the physical impact of the heavy wooden striker
    const strikeOsc = ctx.createOscillator();
    const strikeGain = ctx.createGain();
    strikeOsc.type = 'triangle';
    strikeOsc.frequency.setValueAtTime(90, now);
    strikeOsc.frequency.exponentialRampToValueAtTime(40, now + 0.15);
    
    strikeGain.gain.setValueAtTime(0, now);
    strikeGain.gain.linearRampToValueAtTime(0.6, now + 0.02);
    strikeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    
    strikeOsc.connect(strikeGain);
    strikeGain.connect(ctx.destination);
    
    strikeOsc.start(now);
    strikeOsc.stop(now + 0.5);
  }

  // Play Wooden Fish (Mõ Gõ) - Improved Synthesis
  function playWoodenFish() {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    
    // 1. The hollow wooden body resonance (Sine wave)
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'sine';
    // Mõ has a distinct, somewhat high hollow pitch. 
    osc.frequency.setValueAtTime(700, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.05);

    // Envelope: extremely sharp attack, rapid decay
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(1.5, now + 0.005);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    // 2. The wooden tap/click (Short square/noise burst)
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    clickOsc.type = 'square';
    clickOsc.frequency.setValueAtTime(2500, now);
    
    filter.type = 'bandpass';
    filter.frequency.value = 2500;
    filter.Q.value = 1.5;

    clickGain.gain.setValueAtTime(0, now);
    clickGain.gain.linearRampToValueAtTime(0.5, now + 0.002);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
    
    clickOsc.connect(filter);
    filter.connect(clickGain);
    clickGain.connect(ctx.destination);

    // Start and stop
    osc.start(now);
    osc.stop(now + 0.2);
    
    clickOsc.start(now);
    clickOsc.stop(now + 0.05);
  }

  /* ==========================================================================
     4. DIGITAL MALA (CHỦ ĐỀ NIỆM PHẬT & LẦN CHUỖI)
     ========================================================================== */
  const MALA_STORAGE_KEY_TODAY = 'tinhdo_mala_today';
  const MALA_STORAGE_KEY_TOTAL = 'tinhdo_mala_total';
  const MALA_STORAGE_KEY_DATE = 'tinhdo_mala_date';

  let currentChantText = 'Nam Mô A Di Đà Phật';
  let targetBeads = 108;
  let countToday = 0;
  let countTotal = 0;

  function initMalaState() {
    const todayStr = new Date().toDateString();
    const savedDate = localStorage.getItem(MALA_STORAGE_KEY_DATE);

    if (savedDate !== todayStr) {
      countToday = 0;
      localStorage.setItem(MALA_STORAGE_KEY_DATE, todayStr);
      localStorage.setItem(MALA_STORAGE_KEY_TODAY, '0');
    } else {
      countToday = parseInt(localStorage.getItem(MALA_STORAGE_KEY_TODAY) || '0', 10);
    }

    countTotal = parseInt(localStorage.getItem(MALA_STORAGE_KEY_TOTAL) || '0', 10);
    updateMalaUI();
  }

  function incrementMala() {
    countToday++;
    countTotal++;

    localStorage.setItem(MALA_STORAGE_KEY_TODAY, countToday.toString());
    localStorage.setItem(MALA_STORAGE_KEY_TOTAL, countTotal.toString());

    // Play Sound if checkbox checked
    const soundChecked = document.getElementById('check-sound')?.checked;
    if (soundChecked) {
      if (countToday % targetBeads === 0) {
        playSingingBell(); // Full bell upon completing 108 beads
      } else {
        playWoodenFish();  // Gentle wooden fish on each bead
      }
    }

    updateMalaUI(true);
  }

  function updateMalaUI(didPulse = false) {
    const beadNumEl = document.getElementById('bead-number');
    const beadTextEl = document.getElementById('bead-text');
    const countTodayEl = document.getElementById('stat-count-today');
    const countTotalEl = document.getElementById('stat-count-total');
    const trackProgress = document.getElementById('track-progress');

    const beadInCycle = countToday % targetBeads;

    if (beadNumEl) {
      beadNumEl.textContent = beadInCycle === 0 && countToday > 0 ? targetBeads : beadInCycle;
      if (didPulse) {
        beadNumEl.classList.remove('pulse');
        void beadNumEl.offsetWidth; // trigger reflow
        beadNumEl.classList.add('pulse');
      }
    }

    if (beadTextEl) {
      beadTextEl.textContent = currentChantText;
    }

    if (countTodayEl) countTodayEl.textContent = countToday;
    if (countTotalEl) countTotalEl.textContent = countTotal;

    // SVG Progress
    if (trackProgress) {
      const circumference = 2 * Math.PI * 120; // ~753.98
      const percent = (beadInCycle === 0 && countToday > 0 ? targetBeads : beadInCycle) / targetBeads;
      const offset = circumference - (percent * circumference);
      trackProgress.style.strokeDashoffset = offset;
    }
  }

  /* ==========================================================================
     5. RENDER ARTICLES & FILTER ENGINE
     ========================================================================== */
  let currentCategory = 'all';
  let currentSearch = '';
  let currentViewMode = 'grid'; // 'grid' or 'list'

  function renderArticles() {
    const container = document.getElementById('cards-container');
    const emptyState = document.getElementById('empty-state');
    const countAllEl = document.getElementById('count-all');
    if (!container) return;

    if (countAllEl) {
      countAllEl.textContent = ARTICLES.length;
    }

    const filtered = ARTICLES.filter(art => {
      const matchCat = currentCategory === 'all' || art.category === currentCategory;
      const q = currentSearch.toLowerCase().trim();
      const matchSearch = !q ||
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.categoryName.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    container.className = currentViewMode === 'list' ? 'cards-grid list-view' : 'cards-grid';

    container.innerHTML = filtered.map(item => `
      <article class="article-card" data-id="${item.id}" tabindex="0" role="button" aria-label="Đọc bài: ${item.title}">
        <div class="card-image-wrap">
          <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy">
          <span class="card-floating-badge">${item.badge}</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="category-dot ${item.dotClass}"></span>
            <span>${item.categoryName}</span>
            <span>·</span>
            <span>${item.readTime}</span>
          </div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-excerpt">${item.excerpt}</p>
          <div class="card-footer">
            <span>${item.author}</span>
            <span class="card-read-more">Đọc tiếp &rarr;</span>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click events
    container.querySelectorAll('.article-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openReaderModal(id);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = card.getAttribute('data-id');
          openReaderModal(id);
        }
      });
    });
  }

  /* ==========================================================================
     6. READER MODAL & FONT SCALING
     ========================================================================== */
  let currentModalFontSize = 17; // px

  function openReaderModal(articleId) {
    const article = ARTICLES.find(a => a.id === articleId);
    if (!article) return;

    const overlay = document.getElementById('reader-modal-overlay');
    const titleEl = document.getElementById('modal-article-title');
    const metaCategoryEl = document.getElementById('modal-category-pill');
    const metaReadTimeEl = document.getElementById('modal-read-time');
    const authorDateEl = document.getElementById('modal-author-date');
    const imageEl = document.getElementById('modal-hero-image');
    const textEl = document.getElementById('modal-article-text');

    if (titleEl) titleEl.textContent = article.title;
    if (metaCategoryEl) metaCategoryEl.textContent = article.categoryName;
    if (metaReadTimeEl) metaReadTimeEl.textContent = article.readTime;
    if (authorDateEl) authorDateEl.textContent = `${article.author} · ${article.date}`;
    if (imageEl) {
      imageEl.src = article.image;
      imageEl.alt = article.title;
    }
    if (textEl) {
      textEl.innerHTML = article.content;
      textEl.style.fontSize = `${currentModalFontSize}px`;
    }

    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      // Scroll modal body to top
      const bodyEl = document.getElementById('modal-body');
      if (bodyEl) bodyEl.scrollTop = 0;
    }
  }

  function closeReaderModal() {
    const overlay = document.getElementById('reader-modal-overlay');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function adjustFontSize(delta) {
    currentModalFontSize = Math.min(Math.max(currentModalFontSize + delta, 14), 26);
    const textEl = document.getElementById('modal-article-text');
    if (textEl) {
      textEl.style.fontSize = `${currentModalFontSize}px`;
    }
  }

  /* ==========================================================================
     7. 48 VOWS & DEDICATION MODALS
     ========================================================================== */
  function openVowsModal() {
    const overlay = document.getElementById('vows-modal-overlay');
    const container = document.getElementById('vows-list-container');
    if (container && container.children.length === 0) {
      container.innerHTML = VOWS.map(vow => `
        <div class="vow-item ${vow.key ? 'key-vow' : ''}">
          <div class="vow-header">
            <span class="vow-num">Nguyện thứ ${vow.num}</span>
            <span class="vow-name">${vow.name}</span>
          </div>
          <p class="vow-content">${vow.desc}</p>
        </div>
      `).join('');
    }
    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeVowsModal() {
    const overlay = document.getElementById('vows-modal-overlay');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function openDedicationModal() {
    const overlay = document.getElementById('dedication-modal-overlay');
    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      playSingingBell();
    }
  }

  function closeDedicationModal() {
    const overlay = document.getElementById('dedication-modal-overlay');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /* ==========================================================================
     8. SETUP EVENT LISTENERS
     ========================================================================== */
  function setupEventListeners() {
    // Theme toggle
    const themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) {
      // Check saved theme
      if (localStorage.getItem('tinhdo_theme') === 'dark') {
        document.body.classList.add('dark-mode');
      }
      themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('tinhdo_theme', isDark ? 'dark' : 'light');
      });
    }

    // Mindful Bell Button
    const bellBtn = document.getElementById('btn-mindful-bell');
    if (bellBtn) {
      bellBtn.addEventListener('click', () => {
        playSingingBell();
        bellBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { bellBtn.style.transform = ''; }, 150);
      });
    }

    // Category pills filter
    const categoryButtons = document.querySelectorAll('.pill-btn');
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderArticles();
      });
    });

    // Search input
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('btn-clear-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        if (clearBtn) clearBtn.style.display = currentSearch ? 'flex' : 'none';
        renderArticles();
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          currentSearch = '';
          clearBtn.style.display = 'none';
          renderArticles();
          searchInput.focus();
        }
      });
    }

    // View mode switch (Grid vs List)
    const viewGridBtn = document.getElementById('view-grid');
    const viewListBtn = document.getElementById('view-list');
    if (viewGridBtn && viewListBtn) {
      viewGridBtn.addEventListener('click', () => {
        viewGridBtn.classList.add('active');
        viewListBtn.classList.remove('active');
        currentViewMode = 'grid';
        renderArticles();
      });
      viewListBtn.addEventListener('click', () => {
        viewListBtn.classList.add('active');
        viewGridBtn.classList.remove('active');
        currentViewMode = 'list';
        renderArticles();
      });
    }

    // Reset filters button in empty state
    const resetBtn = document.getElementById('btn-reset-filters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentCategory = 'all';
        currentSearch = '';
        if (searchInput) searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
        categoryButtons.forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-category') === 'all');
        });
        renderArticles();
      });
    }

    // Mala chant mode toggle
    const btnChant6 = document.getElementById('btn-chant-6');
    const btnChant4 = document.getElementById('btn-chant-4');
    if (btnChant6 && btnChant4) {
      btnChant6.addEventListener('click', () => {
        btnChant6.classList.add('active');
        btnChant4.classList.remove('active');
        currentChantText = 'Nam Mô A Di Đà Phật';
        updateMalaUI();
      });
      btnChant4.addEventListener('click', () => {
        btnChant4.classList.add('active');
        btnChant6.classList.remove('active');
        currentChantText = 'A Di Đà Phật';
        updateMalaUI();
      });
    }

    // Mala Mode (Manual vs Auto)
    const btnModeManual = document.getElementById('btn-mode-manual');
    const btnModeAuto = document.getElementById('btn-mode-auto');
    const autoModeSettings = document.getElementById('auto-mode-settings');
    const autoSpeedSlider = document.getElementById('auto-speed-slider');
    const autoSpeedVal = document.getElementById('auto-speed-val');
    const btnAutoToggle = document.getElementById('btn-auto-toggle');
    const hintText = document.querySelector('.mala-hint');

    let autoModeInterval = null;
    let isAutoPlaying = false;
    let autoSpeedSeconds = 3;

    function stopAutoMala() {
      if (autoModeInterval) {
        clearInterval(autoModeInterval);
        autoModeInterval = null;
      }
      isAutoPlaying = false;
      if (btnAutoToggle) {
        btnAutoToggle.textContent = 'Bắt Đầu Niệm Tự Động';
        btnAutoToggle.classList.remove('btn-secondary');
        btnAutoToggle.classList.add('btn-primary');
      }
    }

    function startAutoMala() {
      stopAutoMala(); // Clear existing if any
      isAutoPlaying = true;
      if (btnAutoToggle) {
        btnAutoToggle.textContent = 'Tạm Dừng Niệm Tự Động';
        btnAutoToggle.classList.remove('btn-primary');
        btnAutoToggle.classList.add('btn-secondary');
      }
      // Instant first chant
      incrementMala();
      autoModeInterval = setInterval(() => {
        incrementMala();
      }, autoSpeedSeconds * 1000);
    }

    if (btnModeManual && btnModeAuto) {
      btnModeManual.addEventListener('click', () => {
        btnModeManual.classList.add('active');
        btnModeAuto.classList.remove('active');
        if (autoModeSettings) autoModeSettings.style.display = 'none';
        if (hintText) hintText.style.display = 'block';
        stopAutoMala();
      });

      btnModeAuto.addEventListener('click', () => {
        btnModeAuto.classList.add('active');
        btnModeManual.classList.remove('active');
        if (autoModeSettings) autoModeSettings.style.display = 'block';
        if (hintText) hintText.style.display = 'none';
      });
    }

    if (autoSpeedSlider && autoSpeedVal) {
      autoSpeedSlider.addEventListener('input', (e) => {
        autoSpeedSeconds = parseInt(e.target.value, 10);
        autoSpeedVal.textContent = autoSpeedSeconds + ' giây/câu';
        
        // If currently playing, restart interval with new speed
        if (isAutoPlaying) {
          startAutoMala();
        }
      });
    }

    if (btnAutoToggle) {
      btnAutoToggle.addEventListener('click', () => {
        if (isAutoPlaying) {
          stopAutoMala();
        } else {
          startAutoMala();
        }
      });
    }

    // Interactive bead area
    const beadArea = document.getElementById('bead-interactive-area');
    if (beadArea) {
      beadArea.addEventListener('click', incrementMala);
      beadArea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          incrementMala();
        }
      });
    }

    // Global Spacebar listener for chanting
    window.addEventListener('keydown', (e) => {
      // Don't trigger if user is typing in search input
      if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
      if (e.code === 'Space') {
        e.preventDefault();
        incrementMala();
      }
      if (e.key === 'Escape') {
        closeReaderModal();
        closeVowsModal();
        closeDedicationModal();
      }
    });

    // Reset counter button
    const resetCounterBtn = document.getElementById('btn-reset-counter');
    if (resetCounterBtn) {
      resetCounterBtn.addEventListener('click', () => {
        if (confirm('Bạn có muốn bắt đầu lại chu kỳ chuỗi 108 câu hôm nay? (Số tổng tích lũy vẫn được lưu giữ)')) {
          countToday = 0;
          localStorage.setItem(MALA_STORAGE_KEY_TODAY, '0');
          updateMalaUI();
        }
      });
    }

    // Dedication modal buttons
    const btnHoiHuong = document.getElementById('btn-hoi-huong');
    const btnCloseDedication = document.getElementById('btn-close-dedication');
    const btnFinishDedication = document.getElementById('btn-finish-dedication');
    if (btnHoiHuong) btnHoiHuong.addEventListener('click', openDedicationModal);
    if (btnCloseDedication) btnCloseDedication.addEventListener('click', closeDedicationModal);
    if (btnFinishDedication) btnFinishDedication.addEventListener('click', closeDedicationModal);

    // 48 Vows buttons
    const btnView48 = document.getElementById('btn-view-48-vows');
    const btnCloseVows = document.getElementById('btn-close-vows');
    if (btnView48) btnView48.addEventListener('click', openVowsModal);
    if (btnCloseVows) btnCloseVows.addEventListener('click', closeVowsModal);

    // Reader Modal controls
    const btnCloseModal = document.getElementById('btn-close-modal');
    const btnFontInc = document.getElementById('btn-font-increase');
    const btnFontDec = document.getElementById('btn-font-decrease');
    const btnCopyQuote = document.getElementById('btn-copy-quote');
    const readerOverlay = document.getElementById('reader-modal-overlay');

    if (btnCloseModal) btnCloseModal.addEventListener('click', closeReaderModal);
    if (readerOverlay) {
      readerOverlay.addEventListener('click', (e) => {
        if (e.target === readerOverlay) closeReaderModal();
      });
    }
    if (btnFontInc) btnFontInc.addEventListener('click', () => adjustFontSize(2));
    if (btnFontDec) btnFontDec.addEventListener('click', () => adjustFontSize(-2));
    if (btnCopyQuote) {
      btnCopyQuote.addEventListener('click', () => {
        const text = document.getElementById('modal-article-title')?.textContent || '';
        navigator.clipboard.writeText(`"${text}" — Tịnh Độ An Trú`).then(() => {
          btnCopyQuote.title = 'Đã sao chép!';
          setTimeout(() => { btnCopyQuote.title = 'Sao chép trích dẫn'; }, 1500);
        });
      });
    }

    // Guide button in hero
    const btnGuide = document.getElementById('btn-open-guide');
    if (btnGuide) {
      btnGuide.addEventListener('click', () => {
        openReaderModal('nhap-mon-tinh-do');
      });
    }

    // Footer filter links
    document.querySelectorAll('.footer-filter-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const cat = link.getAttribute('data-cat');
        if (cat) {
          currentCategory = cat;
          categoryButtons.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-category') === cat);
          });
          renderArticles();
        }
      });
    });

    // Hero Mood Pills Logic
    const MOOD_DATA = {
      'binh-an': {
        label: '<span class="icon-leaf">🍃</span> LỜI NHẮN CHO BẠN',
        title: 'Thở sâu một hơi, buông lỏng hai&nbsp;vai...',
        meaning: 'Bình an không phải là nơi không có bão giông, mà là khả năng giữ được tâm thế nhẹ nhõm giữa dòng đời bộn bề.',
        practice: 'Nhắm mắt lại, nhận diện hơi thở vào ra. Từ từ thả lỏng sự căng thẳng trên từng thớ cơ của bạn.',
        result: 'Tâm trí lắng đọng, giảm bớt lo âu và khôi phục năng lượng tích cực tức thì.',
        resTime: '<span class="icon">⏱</span> 10 phút',
        resLabel: 'PHÁP THOẠI NGẮN DỄ HIỂU',
        resTitle: 'Trở Về Với Hơi Thở & Nụ Cười Yên Tĩnh',
        resDesc: 'Lời khuyên ấm áp dành cho tâm hồn mỏi mệt...',
        resImg: 'assets/images/Muon-tim-su-binh-an.png',
        categoryClick: 'khai-thi'
      },
      'kho-dau': {
        label: '<span class="icon-leaf">🌱</span> LỜI KHUYÊN CHO BẠN',
        title: 'Khổ đau là bài học, không phải bản&nbsp;án...',
        meaning: 'Hãy cho phép mình được buồn. Vạn pháp vốn vô thường, duyên sinh duyên diệt, mọi chuyện rồi sẽ nhẹ nhàng qua đi.',
        practice: 'Chấp nhận thực tại, không trốn tránh. Khởi lòng từ bi với chính nỗi đau mà mình đang mang.',
        result: 'Chuyển hóa nỗi đau thành sự thấu cảm sâu sắc và tuệ giác rộng lớn.',
        resTime: '<span class="icon">⏱</span> 15 phút',
        resLabel: 'CHỮA LÀNH TÂM HỒN',
        resTitle: 'Chuyển Hóa Khổ Đau Thành Đóa Hoa Tuệ Giác',
        resDesc: 'Phương pháp vượt qua nghịch cảnh theo tinh thần Phật giáo...',
        resImg: 'assets/images/Muon-hoc-cach-doi-dien-kho-dau.png',
        categoryClick: 'khai-thi'
      },
      'co-ban': {
        label: '<span class="icon-leaf">📖</span> HÀNH TRANG CHO BẠN',
        title: 'Đạo Phật không xa vời, ở ngay&nbsp;đây...',
        meaning: 'Cốt tủy của Đạo Phật không nằm ở hình thức cầu kỳ, mà bắt đầu từ việc sống tử tế và hiểu rõ tự tâm mình.',
        practice: 'Tin sâu nhân quả. Tránh xa các việc ác nhỏ nhất, siêng năng làm những việc lành trong khả năng.',
        result: 'Xây dựng phước báu vững chắc, mang lại cuộc sống bình an cho bản thân và gia đình.',
        resTime: '<span class="icon">⏱</span> 20 phút',
        resLabel: 'DÀNH CHO NGƯỜI MỚI',
        resTitle: 'Đạo Phật Là Gì? Vì Sao Chúng Ta Cần Tu Học?',
        resDesc: 'Giải đáp những thắc mắc đầu tiên trên con đường tìm hiểu đạo...',
        resImg: 'assets/images/Muon-hieu-Phat-Phap-co-ban.png',
        categoryClick: 'nhap-mon'
      },
      'niem-phat': {
        label: '<span class="icon-leaf">📿</span> PHƯƠNG PHÁP CHO BẠN',
        title: 'Chỉ cần một câu Phật hiệu, gom nhiếp sáu&nbsp;căn...',
        meaning: 'Một câu Nam Mô A Di Đà Phật tuy vô cùng ngắn gọn nhưng lại bao hàm trọn vẹn vạn đức của mười phương.',
        practice: 'Niệm rõ ràng từng chữ, tai nghe thật rõ ràng. Có thể kết hợp đếm từ 1-10 để tâm không chạy tán loạn.',
        result: 'Dứt trừ phiền não, làm chủ vọng niệm và đánh thức trí tuệ sáng suốt từ nội tâm.',
        resTime: '<span class="icon">⏱</span> Thực hành',
        resLabel: 'HƯỚNG DẪN THỰC HÀNH',
        resTitle: 'Phương Pháp Thập Niệm Ký Số Khắc Phục Vọng Tưởng',
        resDesc: 'Cách đếm từ 1 đến 10 giúp câu Phật hiệu rõ ràng, tâm không tán loạn...',
        resImg: 'assets/images/Muon-bat-dau-niem-Phat.png',
        categoryClick: 'phuong-phap'
      },
      'tinh-do': {
        label: '<span class="icon-leaf">🪷</span> KHAI THỊ CHO BẠN',
        title: 'Cực Lạc không xa, ở ngay tâm thanh&nbsp;tịnh...',
        meaning: 'Tịnh Độ nương tựa vào đại nguyện cứu độ của Phật A Di Đà, là pháp môn phù hợp với mọi căn cơ chúng sanh.',
        practice: 'Chuẩn bị đủ ba món hành trang cốt lõi: Tín sâu, Nguyện thiết và Hạnh chuyên nhất.',
        result: 'Được đới nghiệp vãng sanh, vĩnh viễn thoát khỏi bánh xe luân hồi sinh tử.',
        resTime: '<span class="icon">⏱</span> 12 phút',
        resLabel: 'CỐT TỦY PHÁP MÔN',
        resTitle: 'Tam Tư Lương: Tín - Nguyện - Hạnh Trọn Vẹn',
        resDesc: 'Chiếc kiềng ba chân vững chắc quyết định sự thành tựu của hành giả...',
        resImg: 'assets/images/Muon-tim-hieu-ve-Tinh-Do.png',
        categoryClick: 'tam-tu-luong'
      }
    };

    const moodPills = document.querySelectorAll('.mood-pill');
    
    let currentScrollAnimationId = null;
    
    function cancelScroll() {
      if (currentScrollAnimationId !== null) {
        cancelAnimationFrame(currentScrollAnimationId);
        currentScrollAnimationId = null;
        document.documentElement.style.scrollBehavior = '';
        window.removeEventListener('wheel', cancelScroll);
        window.removeEventListener('touchmove', cancelScroll);
      }
    }

    // Custom smooth scroll function (easeOutQuart)
    function smoothScrollTo(targetY, duration) {
      cancelScroll(); // Hủy animation cũ nếu có

      const startY = window.scrollY;
      const distance = targetY - startY;
      let startTime = null;

      // Tạm thời vô hiệu hóa scroll-behavior: smooth của CSS
      document.documentElement.style.scrollBehavior = 'auto';
      // Nếu người dùng chủ động cuộn chuột/chạm lướt, hủy ngay hiệu ứng tự động để không bị giật lag
      window.addEventListener('wheel', cancelScroll, { passive: true });
      window.addEventListener('touchmove', cancelScroll, { passive: true });

      // Easing function: Bắt đầu rất nhanh (không độ trễ), hãm phanh mượt mà lúc dừng
      function easeOutQuart(t, b, c, d) {
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
      }

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const nextY = easeOutQuart(timeElapsed, startY, distance, duration);
        window.scrollTo(0, nextY);
        
        if (timeElapsed < duration) {
          currentScrollAnimationId = requestAnimationFrame(animation);
        } else {
          // Đảm bảo dừng chính xác ở đích
          window.scrollTo(0, targetY);
          cancelScroll(); // Dọn dẹp listener và phục hồi CSS
        }
      }
      
      currentScrollAnimationId = requestAnimationFrame(animation);
    }

    moodPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        // Update active state
        moodPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        // Update content
        const moodKey = pill.getAttribute('data-mood');
        const data = MOOD_DATA[moodKey];
        if (data) {
          document.getElementById('sol-title').innerHTML = data.title;
          const solMeaningEl = document.getElementById('sol-meaning');
          if (solMeaningEl) solMeaningEl.textContent = data.meaning;
          
          const solPracticeEl = document.getElementById('sol-practice');
          if (solPracticeEl) solPracticeEl.textContent = data.practice;
          
          const solResultEl = document.getElementById('sol-result');
          if (solResultEl) solResultEl.textContent = data.result;
          
          const labelEl = document.querySelector('.solution-label');
          if (labelEl) labelEl.innerHTML = data.label;
          
          const resTimeEl = document.getElementById('res-time');
          if (resTimeEl) resTimeEl.innerHTML = data.resTime;
          
          const resLabelEl = document.getElementById('res-label');
          if (resLabelEl) resLabelEl.textContent = data.resLabel;
          
          const resTitleEl = document.getElementById('res-title');
          if (resTitleEl) resTitleEl.textContent = data.resTitle;
          
          const resDescEl = document.getElementById('res-desc');
          if (resDescEl) resDescEl.textContent = data.resDesc;
          
          const resImgEl = document.getElementById('res-img');
          if (resImgEl) resImgEl.src = data.resImg;

          const resBtn = document.getElementById('res-btn');
          if (resBtn) {
            resBtn.onclick = () => {
              const filterBtn = document.querySelector(`[data-category='${data.categoryClick}']`);
              if (filterBtn) filterBtn.click();
            };
          }
          
          // Scroll to show both pills and solution card clearly
          const moodSelector = document.getElementById('mood-selector');
          if (moodSelector) {
            const navbarHeight = 70; // Chiều cao của thanh điều hướng (navbar)
            // Cuộn cho phần moodSelector nằm ngay sát dưới navbar, che đi toàn bộ đoạn văn bên trên
            const targetY = moodSelector.getBoundingClientRect().top + window.scrollY - navbarHeight - 4;
            smoothScrollTo(targetY, 600); // 600ms duration with easeOutQuart
          }
        }
      });
    });
  }

  /* ==========================================================================
     9. INITIALIZATION
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initMalaState();
    renderArticles();
    setupEventListeners();
    syncFooterCurtainHeight();
  });

  /* ==========================================================================
     10. FOOTER CURTAIN REVEAL SYNC (CHUẨN SEED.COM)
     Đo lường tự động chiều cao dải màu Tây Phương Cực Lạc để tạo hiệu ứng mở màn hoàn hảo
     ========================================================================== */
  function syncFooterCurtainHeight() {
    const mantra = document.querySelector('.footer-mantra-strip');
    if (mantra) {
      const h = mantra.offsetHeight;
      if (h > 0) {
        document.documentElement.style.setProperty('--mantra-height', h + 'px');
      }
    }
  }

  window.addEventListener('resize', syncFooterCurtainHeight);
  window.addEventListener('load', syncFooterCurtainHeight);
  if ('ResizeObserver' in window) {
    const mantraEl = document.querySelector('.footer-mantra-strip');
    if (mantraEl) {
      new ResizeObserver(syncFooterCurtainHeight).observe(mantraEl);
    }
  }

})();
