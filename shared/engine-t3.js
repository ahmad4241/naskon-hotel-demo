/* Naskon hotel template 3 (motion): engine. Copy of the shared engine with t3 interface strings.
   One template file + one data file per hotel (data/<slug>.json).
   Usage: t1.html?h=<slug>&lang=ar|en  */
(function () {
  'use strict';

  var params = new URLSearchParams(location.search);
  var slug = (params.get('h') || 'waha-t3').replace(/[^a-z0-9-]/gi, '') || 'waha-t3';
  var lang = params.get('lang') === 'en' ? 'en' : (params.get('lang') === 'ar' ? 'ar' : null);
  if (!lang) { try { lang = localStorage.getItem('nk-lang'); } catch (e) {} }
  if (lang !== 'en') lang = 'ar';

  /* Interface text. Arabic is Modern Standard Arabic. */
  var UI = {
    ar: {
      demo: 'نموذج تجريبي من ناسكون',
      book_now: 'احجز الآن',
      check_avail: 'تحقق من التوفر',
      checkin: 'الوصول', checkout: 'المغادرة', guests: 'الضيوف', room: 'الغرفة', dates: 'التواريخ',
      send_wa: 'أرسل الطلب على واتساب', book_wa: 'احجز على واتساب', book: 'احجز',
      rooms: 'الغرف', inside: 'داخل الفندق', inside_title: 'أكثر من مكان للنوم.', reviews: 'آراء الضيوف', said: 'قالوا عنا',
      location: 'الموقع', near: 'على بعد خطوات', faq: 'قبل وصولك', welcome: 'أهلاً بكم',
      from: 'من', per_night: '/ الليلة', book_room: 'احجز هذه الغرفة', details: 'التفاصيل والحجز',
      directions: 'الاتجاهات على خرائط Google', reception: 'الاستقبال', whatsapp: 'واتساب', instagram: 'إنستغرام',
      rating_google: 'تقييم الضيوف على Google', on_google: 'على Google', rooms_label: 'غرفة وجناح', to_centre: 'دقائق إلى مركز المدينة', reception_24: 'ساعة استقبال',
      contact: 'تواصل معنا', explore: 'تصفّح', address_h: 'العنوان', rights: 'جميع الحقوق محفوظة.', message_us: 'راسلنا الآن', pause_motion: 'إيقاف الحركة', cta_title: 'جاهز لإقامة هادئة؟', cta_text: 'احجز مباشرة عبر واتساب، ويؤكد الفندق حجزك خلال دقائق.', scroll_hint: 'مرّر للأسفل', rooms_sub: 'اختر غرفتك، وأرسل طلبك بخطوة واحدة.', guests_rating: 'تقييم الضيوف', amen_title: 'كل ما تحتاجه', view: 'احجز', by_numbers: 'بالأرقام', of: 'من',
      made_by: 'صمّم الموقع بواسطة ناسكون', lang_switch: 'EN', menu: 'القائمة', close: 'إغلاق',
      prev: 'السابق', next: 'التالي', breakfast_included: 'الفطور مشمول', price_on_request: 'السعر عند الطلب',
      wa_note: 'يُفتح واتساب برسالة جاهزة تتضمن تفاصيل طلبك، ويؤكد الفندق الحجز معك مباشرة.',
      hero_t1: 'إقامة هادئة،\nوإطلالة لا تُنسى.', hero_t2: 'نوم هادئ.\nصباح أجمل.',
      checkin_q: 'وقت الدخول والخروج', checkin_a: 'الدخول من الساعة {in}، والخروج حتى الساعة {out}.',
      guests_n: function (n) { return n === 1 ? 'ضيف واحد' : n === 2 ? 'ضيفان' : n <= 10 ? n + ' ضيوف' : n + ' ضيفًا'; },
      nights_n: function (n) { return n === 1 ? 'ليلة واحدة' : n === 2 ? 'ليلتان' : n <= 10 ? n + ' ليالٍ' : n + ' ليلة'; },
      reviews_n: function (n) { return 'من ' + n + ' مراجعة'; },
      wa_msg: 'مرحبًا {hotel}،\nأرغب بحجز {room}\nالوصول: {in}\nالمغادرة: {out}\nعدد الضيوف: {guests}\n(عبر موقع الفندق)'
    },
    en: {
      demo: 'Demo by Naskon',
      book_now: 'Book now',
      check_avail: 'Check availability',
      checkin: 'Check-in', checkout: 'Check-out', guests: 'Guests', room: 'Room', dates: 'Dates',
      send_wa: 'Send request on WhatsApp', book_wa: 'Book on WhatsApp', book: 'Book',
      rooms: 'Rooms', inside: 'Inside the hotel', inside_title: 'More than a place to sleep.', reviews: 'Guest reviews', said: 'What guests say',
      location: 'Location', near: 'Steps away', faq: 'Before you arrive', welcome: 'Welcome',
      from: 'From', per_night: '/ night', book_room: 'Book this room', details: 'Details & booking',
      directions: 'Directions on Google Maps', reception: 'Reception', whatsapp: 'WhatsApp', instagram: 'Instagram',
      rating_google: 'Guest rating on Google', on_google: 'on Google', rooms_label: 'Rooms & suites', to_centre: 'Minutes to the city centre', reception_24: 'Hour reception',
      contact: 'Contact', explore: 'Explore', address_h: 'Address', rights: 'All rights reserved.', message_us: 'Message us', pause_motion: 'Pause motion', cta_title: 'Ready for a calm stay?', cta_text: 'Book directly on WhatsApp and the hotel confirms within minutes.', scroll_hint: 'Scroll', rooms_sub: 'Pick your room and send your request in one step.', guests_rating: 'Guest rating', amen_title: 'Everything you need', view: 'Book', by_numbers: 'At a glance', of: 'of',
      made_by: 'Website by Naskon', lang_switch: 'ع', menu: 'Menu', close: 'Close',
      prev: 'Previous', next: 'Next', breakfast_included: 'Breakfast included', price_on_request: 'Price on request',
      wa_note: 'WhatsApp opens with a ready message containing your request, and the hotel confirms with you directly.',
      hero_t1: 'A calm stay,\nan unforgettable view.', hero_t2: 'Quiet nights.\nBetter mornings.',
      checkin_q: 'Check-in and check-out', checkin_a: 'Check-in from {in}, check-out until {out}.',
      guests_n: function (n) { return n === 1 ? '1 guest' : n + ' guests'; },
      nights_n: function (n) { return n === 1 ? '1 night' : n + ' nights'; },
      reviews_n: function (n) { return 'from ' + n + ' reviews'; },
      wa_msg: 'Hello {hotel},\nI would like to book: {room}\nCheck-in: {in}\nCheck-out: {out}\nGuests: {guests}\n(via the hotel website)'
    }
  };

  /* Naskon's own WhatsApp: demo booking requests go here, never to the hotel. */
  var NASKON_WA = '';

  var data = null;
  function L(v) { if (v == null) return ''; if (typeof v === 'object' && !Array.isArray(v)) { if (v.t != null) return L(v.t); return v[lang] || v.ar || v.en || ''; } return String(v); }
  function U(k) { return UI[lang][k]; }
  function get(obj, path) { return path.split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj); }
  function has(v) { return Array.isArray(v) ? v.length > 0 : v != null && v !== '' && !(typeof v === 'object' && Object.keys(v).length === 0); }
  function fill(tpl, map) { return tpl.replace(/\{(\w+)\}/g, function (_, k) { return map[k] != null ? map[k] : ''; }); }
  function waNumber() { return String((data.demo && NASKON_WA) ? NASKON_WA : (data.whatsapp || '')).replace(/\D/g, ''); }

  function fmtDate(iso) {
    if (!iso) return '';
    var d = new Date(iso + 'T12:00:00');
    try { return d.toLocaleDateString(lang === 'ar' ? 'ar-IQ' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' }); }
    catch (e) { return iso; }
  }
  function isoAdd(days) { var d = new Date(); d.setDate(d.getDate() + days); return d.toISOString().slice(0, 10); }

  /* Bind one element (and its subtree) against a scope. */
  function bind(root, scope) {
    var nodes = [root].concat(Array.prototype.slice.call(root.querySelectorAll('*')));
    nodes.forEach(function (el) {
      if (!el.getAttribute) return;
      var done = el.closest && el.closest('[data-bound]');
      if (done && done !== root && !root.hasAttribute('data-bound-pending')) return;
      var a;
      if ((a = el.getAttribute('data-if')) !== null) {
        var neg = a.charAt(0) === '!'; var v = get(scope, neg ? a.slice(1) : a);
        var ok = has(v); if (neg) ok = !ok; if (!ok) { el.hidden = true; }
      }
      if ((a = el.getAttribute('data-t')) !== null) el.textContent = L(get(scope, a));
      if ((a = el.getAttribute('data-ui')) !== null) el.textContent = U(a);
      if ((a = el.getAttribute('data-src')) !== null) { var s = get(scope, a); if (s) el.src = s; else el.hidden = true; }
      if ((a = el.getAttribute('data-alt')) !== null) el.alt = L(get(scope, a));
      if ((a = el.getAttribute('data-bg')) !== null) { var b = get(scope, a); if (b) el.style.backgroundImage = 'url("' + b + '")'; }
      if ((a = el.getAttribute('data-aria')) !== null) el.setAttribute('aria-label', U(a));
    });
  }

  function renderLists(root) {
    Array.prototype.slice.call(root.querySelectorAll('template[data-each]')).forEach(function (tpl) {
      var list = get(data, tpl.getAttribute('data-each')) || [];
      var limit = parseInt(tpl.getAttribute('data-limit') || '0', 10);
      if (limit) list = list.slice(0, limit);
      var frag = document.createDocumentFragment();
      list.forEach(function (item, i) {
        var node = tpl.content.cloneNode(true);
        var wrap = document.createElement('div'); wrap.appendChild(node);
        var scope = Object.assign({}, data, { item: item, i: i });
        Array.prototype.slice.call(wrap.children).forEach(function (c) {
          c.setAttribute('data-bound-pending', '');
          bind(c, scope); decorate(c, item, i);
          c.removeAttribute('data-bound-pending'); c.setAttribute('data-bound', '');
          frag.appendChild(c);
        });
      });
      tpl.parentNode.insertBefore(frag, tpl);
    });
  }

  /* Per-item extras: guests label, price, room booking buttons. */
  function decorate(el, item, i) {
    Array.prototype.slice.call(el.querySelectorAll('[data-guests]')).forEach(function (g) { g.textContent = U('guests_n')(item.guests || 2); });
    Array.prototype.slice.call(el.querySelectorAll('[data-price]')).forEach(function (p) {
      p.textContent = item.price ? (U('from') + ' ' + L(item.price) + ' ' + U('per_night')) : U('price_on_request');
    });
    Array.prototype.slice.call(el.querySelectorAll('[data-pick-room]')).concat(el.hasAttribute('data-pick-room') ? [el] : []).forEach(function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); pickRoom(i); });
    });
  }

  /* Booking form. */
  var state = { room: 0, guests: 2 };
  function pickRoom(i) {
    state.room = i;
    Array.prototype.forEach.call(document.querySelectorAll('[name="room"]'), function (sel) { sel.value = String(i); });
    openBooking();
  }
  function openBooking() {
    var bar = document.getElementById('bar');
    if (bar && window.matchMedia('(min-width: 960px)').matches) {
      bar.scrollIntoView({ behavior: 'smooth', block: 'center' });
      var first = bar.querySelector('input'); if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, 400);
      updateSummary(); return;
    }
    var sheet = document.getElementById('booking');
    if (sheet && sheet.tagName === 'DIALOG' && sheet.showModal) { if (!sheet.open) sheet.showModal(); }
    else if (sheet) sheet.scrollIntoView({ behavior: 'smooth', block: 'center' });
    updateSummary();
  }
  function updateSummary() {
    var f = document.querySelector('form[data-booking]'); if (!f) return;
    var a = f.elements['in'].value, b = f.elements['out'].value;
    var n = Math.max(1, Math.round((new Date(b) - new Date(a)) / 864e5) || 1);
    var g = document.querySelectorAll('[data-guest-count]');
    Array.prototype.forEach.call(g, function (x) { x.textContent = U('guests_n')(state.guests); });
    var s = document.querySelectorAll('[data-nights]');
    Array.prototype.forEach.call(s, function (x) { x.textContent = U('nights_n')(n); });
  }
  function setupBooking() {
    Array.prototype.forEach.call(document.querySelectorAll('form[data-booking]'), function (f) {
      var sel = f.elements['room'];
      if (sel && data.rooms) {
        data.rooms.forEach(function (r, i) { var o = document.createElement('option'); o.value = String(i); o.textContent = L(r.name); sel.appendChild(o); });
      }
      var today = isoAdd(0);
      if (f.elements['in']) { f.elements['in'].min = today; f.elements['in'].value = isoAdd(1); }
      if (f.elements['out']) { f.elements['out'].min = isoAdd(1); f.elements['out'].value = isoAdd(3); }
      f.addEventListener('change', function (e) {
        if (e.target.name === 'in') {
          var next = new Date(e.target.value); next.setDate(next.getDate() + 1);
          var nx = next.toISOString().slice(0, 10); f.elements['out'].min = nx;
          if (f.elements['out'].value <= e.target.value) f.elements['out'].value = nx;
        }
        if (e.target.name === 'room') state.room = parseInt(e.target.value, 10) || 0;
        Array.prototype.forEach.call(document.querySelectorAll('form[data-booking]'), function (o) {
          if (o === f) return;
          ['in', 'out', 'room'].forEach(function (k) { if (o.elements[k] && f.elements[k]) { o.elements[k].min = f.elements[k].min; o.elements[k].value = f.elements[k].value; } });
        });
        updateSummary();
      });
      Array.prototype.forEach.call(f.querySelectorAll('[data-step]'), function (btn) {
        btn.addEventListener('click', function () {
          state.guests = Math.min(12, Math.max(1, state.guests + parseInt(btn.getAttribute('data-step'), 10)));
          updateSummary();
        });
      });
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var room = data.rooms && data.rooms[state.room] ? L(data.rooms[state.room].name) : '';
        var msg = fill(U('wa_msg'), {
          hotel: L(data.name), room: room,
          'in': fmtDate(f.elements['in'].value), out: fmtDate(f.elements['out'].value),
          guests: U('guests_n')(state.guests)
        });
        var num = waNumber();
        var url = 'https://wa.me/' + num + '?text=' + encodeURIComponent(msg);
        window.open(url, '_blank', 'noopener');
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-open-booking]'), function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); openBooking(); });
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-close-booking]'), function (b) {
      b.addEventListener('click', function () { var d = document.getElementById('booking'); if (d && d.close) d.close(); });
    });
    updateSummary();
  }

  /* Links that depend on data. */
  function setupLinks() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-link]'), function (a) {
      var k = a.getAttribute('data-link'), href = '';
      if (k === 'tel' && data.phone) href = 'tel:' + data.phone.replace(/\s/g, '');
      if (k === 'wa' && waNumber()) href = 'https://wa.me/' + waNumber();
      if (k === 'ig' && data.instagram) href = 'https://instagram.com/' + data.instagram.replace(/^@/, '');
      if (k === 'maps' && data.mapsUrl) href = data.mapsUrl;
      if (k === 'naskon') href = 'https://naskon.com';
      if (href) { a.href = href; if (/^https/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; } }
      else a.hidden = true;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-show]'), function (el) {
      var k = el.getAttribute('data-show');
      if (k === 'phone') el.textContent = data.phone || '';
      if (k === 'ig') el.textContent = data.instagram || '';
      if (k === 'rating') el.textContent = data.rating ? Number(data.rating).toFixed(1) : '';
      if (k === 'reviews_n') el.textContent = data.reviewsCount ? U('reviews_n')(data.reviewsCount) : '';
      if (k === 'rooms_total') el.textContent = data.roomsTotal || '';
      if (k === 'hero') el.textContent = L(data.heroTitle) || U(el.getAttribute('data-default'));
      if (k === 'checkin_a') el.textContent = fill(U('checkin_a'), { 'in': data.checkin || '', out: data.checkout || '' });
      if (k === 'stars') { var r = Math.round(data.rating || 0); el.textContent = '★★★★★'.slice(0, r) + '☆☆☆☆☆'.slice(0, 5 - r); el.setAttribute('aria-label', (data.rating || '') + ' / 5'); }
    });
  }

  /* Carousels: arrow buttons scroll their track. */
  function setupCarousels() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-carousel]'), function (wrap) {
      var track = wrap.querySelector('[data-track]'); if (!track) return;
      Array.prototype.forEach.call(wrap.querySelectorAll('[data-dir]'), function (btn) {
        btn.addEventListener('click', function () {
          var step = track.clientWidth * 0.8 * (btn.getAttribute('data-dir') === 'next' ? 1 : -1);
          if (document.documentElement.dir === 'rtl') step = -step;
          track.scrollBy({ left: step, behavior: 'smooth' });
        });
      });
    });
  }

  /* Gentle reveal on scroll; content is visible without it. */
  function setupReveal() {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var els = document.querySelectorAll('.reveal, .slide');
    if (reduce || !('IntersectionObserver' in window)) { Array.prototype.forEach.call(els, function (e) { e.classList.add('in'); }); return; }
    document.documentElement.classList.add('js-reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(els, function (e) { io.observe(e); });
  }

  function setupLang() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-action="lang"]'), function (b) {
      b.addEventListener('click', function () {
        var next = lang === 'ar' ? 'en' : 'ar';
        try { localStorage.setItem('nk-lang', next); } catch (e) {}
        var p = new URLSearchParams(location.search); p.set('lang', next);
        location.search = p.toString();
      });
    });
  }

  function setupMenu() {
    var menu = document.getElementById('menu');
    Array.prototype.forEach.call(document.querySelectorAll('[data-action="menu"]'), function (b) {
      b.addEventListener('click', function () { if (menu && menu.showModal) menu.showModal(); });
    });
    if (menu) menu.addEventListener('click', function (e) { if (e.target.closest('a') || e.target === menu || e.target.closest('[data-close-menu]')) menu.close(); });
  }

  function applyTheme() {
    var root = document.documentElement;
    root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    var key = root.getAttribute('data-accent') || 'accent';
    if (data.colors && data.colors[key]) root.style.setProperty('--accent', data.colors[key]);
    if (data.colors && data.colors.accentInk) root.style.setProperty('--accent-ink', data.colors.accentInk);
    document.title = L(data.name) + (data.city ? ' · ' + L(data.city) : '');
    if (data.demo) { var m = document.createElement('meta'); m.name = 'robots'; m.content = 'noindex, nofollow'; document.head.appendChild(m); }
  }

  function start(d) {
    /* t3 has a light header: use the hotel's dark logo when there is one. */
    if (d && d.logoDark) d.logo = d.logoDark;
    data = d;
    applyTheme();
    renderLists(document.body);
    bind(document.body, data);
    setupLinks(); setupBooking(); setupCarousels(); setupLang(); setupMenu(); setupReveal();
    document.documentElement.classList.add('ready');
  }

  function fail() {
    document.body.innerHTML = '<p style="padding:40px;font:16px system-ui;text-align:center">' +
      (lang === 'ar' ? 'تعذّر تحميل بيانات الفندق.' : 'Could not load the hotel details.') + '</p>';
  }

  window.NaskonHotel = {
    boot: function () {
      fetch('data/' + slug + '.json', { cache: 'no-cache' })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(start).catch(fail);
    }
  };
})();
