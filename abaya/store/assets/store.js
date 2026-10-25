/* ===== سيدة العباية — الأجزاء المشتركة لكل صفحات المتجر ===== */
(function(){
var D=document,H=D.documentElement,B=D.body;
var I={
 menu:'<svg viewBox="0 0 24 24"><path d="M3.5 8h17M3.5 16h11"/></svg>',
 bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 12h-11l-1-12z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',
 user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.3" r="3.7"/><path d="M4.8 20c1.2-3.7 4-5.5 7.2-5.5s6 1.8 7.2 5.5"/></svg>',
 globe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z"/></svg>',
 search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',
 heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
 wa:'<svg viewBox="0 0 24 24"><path d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.4 4.8 4.9-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1l-.5-.2z"/></svg>',
 ig:'<svg viewBox="0 0 24 24"><path d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zM17 5.9a1.1 1.1 0 1 0 1.1 1.1A1.1 1.1 0 0 0 17 5.9zM21.3 7.3a5.6 5.6 0 0 0-1.5-4 5.6 5.6 0 0 0-4-1.5C14.3 1.7 9.7 1.7 8.2 1.8a5.6 5.6 0 0 0-4 1.5 5.6 5.6 0 0 0-1.5 4c-.1 1.5-.1 6.1 0 7.6a5.6 5.6 0 0 0 1.5 4 5.6 5.6 0 0 0 4 1.5c1.5.1 6.1.1 7.6 0a5.6 5.6 0 0 0 4-1.5 5.6 5.6 0 0 0 1.5-4c.1-1.5.1-6.1 0-7.6zM19.4 17a3.1 3.1 0 0 1-1.8 1.8c-1.2.5-4.1.4-5.6.4s-4.4.1-5.6-.4A3.1 3.1 0 0 1 4.6 17c-.5-1.2-.4-4.1-.4-5s-.1-3.8.4-5a3.1 3.1 0 0 1 1.8-1.8c1.2-.5 4.1-.4 5.6-.4s4.4-.1 5.6.4A3.1 3.1 0 0 1 19.4 7c.5 1.2.4 4.1.4 5s.1 3.8-.4 5z"/></svg>',
 fb:'<svg viewBox="0 0 24 24"><path d="M14 8.5V6.8c0-.8.5-1 .9-1h2.3V2.2L14 2.2c-3.5 0-4.2 2.6-4.2 4.3v2H7.6v3.7h2.2V22h4.2v-9.8h2.9l.4-3.7z"/></svg>'
};
function L(){return H.lang==='en'?'en':'ar'}
function T(ar,en){return L()==='ar'?ar:en}
function fmt(n){return L()==='ar'?n.toLocaleString('ar-IQ')+' د.ع':'IQD '+n.toLocaleString('en-US')}
function ls(k,v){try{if(v===undefined)return JSON.parse(localStorage.getItem(k)||'null');localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}}
MS.L=L;MS.T=T;MS.fmt=fmt;MS.I=I;
MS.byId=function(id){return MS.PRODUCTS.filter(function(p){return p.id===id})[0]};

/* ---------- shell ---------- */
var over=B.dataset.over==='1';
B.insertAdjacentHTML('afterbegin',
 '<div class="ann" id="ann"></div>'+
 '<header class="hd'+(over?' clear':'')+'" id="hd"><div class="g">'+
  '<button class="ic" id="bMenu" aria-label="القائمة">'+I.menu+'</button>'+
  '<button class="ic" id="bBag" aria-label="الحقيبة">'+I.bag+'<span class="bd" id="bagN"></span></button>'+
  '<a class="ic" href="account.html" aria-label="حسابي">'+I.user+'</a>'+
  '<button class="ic" id="bLang" aria-label="اللغة">'+I.globe+'</button></div>'+
  '<a class="mk" href="index.html" aria-label="سيدة العباية"><svg><use href="#s1"/></svg></a></header>'+
 '<div class="ov l" id="ovM"><div class="bk" data-x></div><div class="pn"><div class="top"><button class="x" data-x aria-label="إغلاق">×</button></div><nav class="mn" id="mn"></nav><div class="meta" id="mmeta"></div></div></div>'+
 '<div class="ov r" id="ovC"><div class="bk" data-x></div><div class="pn"><div class="top"><span class="ttl" id="cTtl"></span><button class="x" data-x aria-label="إغلاق">×</button></div><div id="cList"></div><div class="cart-ft" id="cFt"></div></div></div>'+
 '<div class="so" id="so"><div class="b2"><input id="q" type="search" autocomplete="off"><button class="x" id="sX" aria-label="إغلاق">×</button></div><div class="w"><div class="k" id="sK"></div><div class="chips" id="chips"></div><div class="res" id="res"></div></div></div>'+
 '<a class="wa" id="wa" href="https://wa.me/'+MS.WA+'" target="_blank" rel="noopener" aria-label="واتساب">'+I.wa+'</a>'+
 '<div class="toast" id="toast"></div>');
B.insertAdjacentHTML('beforeend','<footer class="ft" id="ft"></footer>');

/* ---------- announcement ---------- */
var ANN=[['التوصيل لجميع محافظات العراق','Delivery to all Iraqi governorates'],['الدفع عند الاستلام أو بالبطاقة','Cash on delivery or card'],['تفصيل خاص خلال أسبوع إلى أسبوعين','Made to measure in 1–2 weeks']],ai=0;
function annR(){var a=D.getElementById('ann');a.innerHTML=ANN.map(function(t,i){return '<div class="t'+(i===ai?' on':'')+'">'+t[L()==='ar'?0:1]+'</div>'}).join('')}
setInterval(function(){var ts=D.querySelectorAll('#ann .t');if(!ts.length)return;ts[ai].className='t out';ai=(ai+1)%ANN.length;ts[ai].className='t on';setTimeout(function(){[].forEach.call(ts,function(t,i){if(i!==ai)t.className='t'})},650)},4200);

/* ---------- menu ---------- */
function menuR(){var c=MS.CATS.map(function(c){return '<a href="category.html?c='+c.id+'">'+c[L()]+'<small>›</small></a>'}).join('');
 D.getElementById('mn').innerHTML=
  '<div class="k grp">'+T('التسوق','SHOP')+'</div><a href="category.html">'+T('كل العبايات','All abayas')+'</a>'+c+
  '<a class="vip" href="category.html?l=vip">VIP<small>›</small></a>'+
  '<div class="k grp">'+T('خدماتنا','SERVICES')+'</div><a href="tailoring.html">'+T('التفصيل الخاص','Made to measure')+'</a>'+
  '<div class="k grp">'+T('حسابي','ACCOUNT')+'</div><a href="account.html">'+T('تسجيل الدخول','Sign in')+'</a><a href="account.html#orders">'+T('تتبع الطلب','Track order')+'</a><a href="account.html#fav">'+T('المفضلة','Wishlist')+'</a>'+
  '<div class="k grp">'+T('الدار','THE HOUSE')+'</div><a href="about.html">'+T('من نحن','About')+'</a><a href="sizes.html">'+T('دليل المقاسات','Size guide')+'</a><a href="policies.html">'+T('السياسات','Policies')+'</a><a href="contact.html">'+T('تواصلي معنا','Contact')+'</a>';
 D.getElementById('mmeta').innerHTML=T('كربلاء · حي النقيب','Karbala · Al-Naqeeb')+'<br>'+T('يومياً ١١ صباحاً – ١١ مساءً','Daily 11am – 11pm')+'<br><span dir="ltr">0774 480 7778</span>'}

/* ---------- panels ---------- */
function open(id){D.getElementById(id).classList.add('open');B.style.overflow='hidden'}
function close(el){el.classList.remove('open');B.style.overflow=''}
[].forEach.call(D.querySelectorAll('.ov'),function(o){o.addEventListener('click',function(e){if(e.target.closest('[data-x]'))close(o)})});
D.getElementById('bMenu').onclick=function(){open('ovM')};
D.getElementById('bBag').onclick=function(){cartR();open('ovC')};
addEventListener('keydown',function(e){if(e.key==='Escape'){[].forEach.call(D.querySelectorAll('.ov.open'),close);closeS()}});

/* ---------- cart ---------- */
MS.cart=function(){return ls('msCart')||[]};
MS.addToCart=function(id,size,qty,color){var c=MS.cart(),f=c.filter(function(x){return x.id===id&&x.size===size})[0];if(f)f.qty+=qty||1;else c.push({id:id,size:size||null,qty:qty||1,color:color||0});ls('msCart',c);badge();toast(T('أُضيفت إلى الحقيبة','Added to bag'))};
function badge(){var n=MS.cart().reduce(function(s,x){return s+x.qty},0),b=D.getElementById('bagN');b.textContent=n||'';b.dataset.n=n}
function cartR(){var c=MS.cart(),l=L();D.getElementById('cTtl').textContent=T('الحقيبة','Your bag')+(c.length?' ('+c.reduce(function(s,x){return s+x.qty},0)+')':'');
 if(!c.length){D.getElementById('cList').innerHTML='<div class="empty">'+T('حقيبتكِ فارغة','Your bag is empty')+'</div>';D.getElementById('cFt').innerHTML='<a class="btn ghost" href="category.html" style="width:100%">'+T('تسوّقي الآن','Shop now')+'</a>';return}
 var tot=0;D.getElementById('cList').innerHTML=c.map(function(x,i){var p=MS.byId(x.id);if(!p)return '';tot+=p.price*x.qty;return '<div class="ci"><img src="'+p.img+'" alt=""><div class="i"><b>'+p[l]+'</b><span>'+(x.size?T('المقاس ','Size ')+x.size+' · ':'')+T('الكمية ','Qty ')+x.qty+'</span><div>'+fmt(p.price*x.qty)+'</div><button class="rm" data-i="'+i+'">'+T('إزالة','Remove')+'</button></div></div>'}).join('');
 D.getElementById('cFt').innerHTML='<div class="row"><span>'+T('المجموع','Subtotal')+'</span><b style="font-weight:500">'+fmt(tot)+'</b></div><div style="color:var(--mute);font-size:12px">'+T('أجور التوصيل تُحسب حسب المحافظة عند إتمام الطلب','Delivery fee is calculated by governorate at checkout')+'</div><a class="btn" href="checkout.html">'+T('إتمام الطلب','Checkout')+'</a>';
 [].forEach.call(D.querySelectorAll('#cList .rm'),function(b){b.onclick=function(){var c=MS.cart();c.splice(+b.dataset.i,1);ls('msCart',c);badge();cartR()}})}

/* ---------- wishlist ---------- */
MS.favs=function(){return ls('msFav')||[]};
MS.toggleFav=function(id){var f=MS.favs(),i=f.indexOf(id);if(i>-1)f.splice(i,1);else f.push(id);ls('msFav',f);toast(i>-1?T('أُزيلت من المفضلة','Removed from wishlist'):T('أُضيفت إلى المفضلة','Added to wishlist'));return i===-1};

/* ---------- product card ---------- */
MS.card=function(p){var l=L(),fav=MS.favs().indexOf(p.id)>-1,tg='';
 if(p.lvl==='vip')tg+='<span class="tg vip">VIP</span>';
 if(p.old)tg+='<span class="tg sale">'+T('خصم','SALE')+'</span>';
 else if(p.isNew)tg+='<span class="tg">'+T('جديد','NEW')+'</span>';
 var ltd=p.stock<=3?'<div class="ltd">'+T('كمية محدودة · متبقٍ '+p.stock.toLocaleString('ar-IQ'),'Limited · '+p.stock+' left')+'</div>':'';
 return '<a class="pc fade" href="product.html?p='+p.id+'"><div class="im"><div class="tags">'+tg+'</div><button class="fav'+(fav?' on':'')+'" data-fav="'+p.id+'" aria-label="'+T('المفضلة','Wishlist')+'">'+I.heart+'</button><img src="'+p.img+'" alt="'+p[l]+'" loading="lazy"></div>'+
  '<div class="nm"><span>'+p[l]+'</span><span class="pr">'+fmt(p.price)+(p.old?'<s>'+fmt(p.old)+'</s>':'')+'</span></div><div class="ds">'+p['d'+l]+'</div>'+ltd+'<div class="sw">'+p.colors.map(function(c){return '<i style="background:'+c.h+'"></i>'}).join('')+'</div></a>'};
D.addEventListener('click',function(e){var f=e.target.closest('[data-fav]');if(!f)return;e.preventDefault();e.stopPropagation();f.classList.toggle('on',MS.toggleFav(f.dataset.fav))},true);

/* ---------- search ---------- */
var so=D.getElementById('so'),q=D.getElementById('q');
var KW={bareeq:'سوداء اسود رسمية كريستال ترتر black formal crystal',
 'black-rose':'بيج مطرزة تطريز ورد زهور beige embroidered floral','autumn':'بني يومية مخمل brown everyday velvet',
 pearl:'عاجي ابيض شيفون مناسبات ivory white chiffon occasion',spring:'رمادي ملونة زهور يومية grey colourful floral'};
function nz(t){return (t||'').toLowerCase().replace(/[ً-ْـ]/g,'').replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي')}
function sR(){var v=nz(q.value.trim()),l=L(),h=MS.PRODUCTS.filter(function(p){return !v||nz(p.ar+' '+p.en+' '+p.dar+' '+p.den+' '+(KW[p.id]||'')+' '+MS.CATS.filter(function(c){return c.id===p.cat})[0].ar).indexOf(v)>-1});
 D.getElementById('res').innerHTML=h.length?h.map(function(p){return '<a href="product.html?p='+p.id+'"><img src="'+p.img+'" alt=""><div><b>'+p[l]+'</b><span>'+p['d'+l]+' · '+fmt(p.price)+'</span></div></a>'}).join(''):'<div class="empty">'+T('لا توجد نتائج مطابقة','No matching results')+'</div>'}
MS.openSearch=function(){D.getElementById('sK').textContent=T('عمليات بحث شائعة','Popular searches');q.placeholder=T('ابحثي عن عباءة، لون، أو قماش…','Search abayas, colours, fabrics…');
 var ch=L()==='ar'?['سوداء','مطرزة','شيفون','رسمية','مناسبات','يومية']:['Black','Embroidered','Chiffon','Formal','Occasion','Everyday'];
 D.getElementById('chips').innerHTML=ch.map(function(t){return '<button>'+t+'</button>'}).join('');
 [].forEach.call(D.querySelectorAll('#chips button'),function(b){b.onclick=function(){q.value=b.textContent;sR()}});
 sR();so.classList.add('open');B.style.overflow='hidden';setTimeout(function(){q.focus()},350)};
function closeS(){so.classList.remove('open');B.style.overflow=''}
D.getElementById('sX').onclick=closeS;q.addEventListener('input',sR);

/* ---------- footer ---------- */
function ftR(){D.getElementById('ft').innerHTML='<div class="in2">'+
 '<div><a class="mk" href="index.html" aria-label="سيدة العباية"><svg><use href="#full"/></svg></a><p style="color:var(--mute);font-size:12.5px;margin-top:14px;max-width:26em">'+T('براند عراقي متخصص بالعبايات النسائية الفاخرة، بخامات مميزة وتصاميم مبتكرة.','An Iraqi house of luxury women’s abayas — distinctive fabrics, original design.')+'</p>'+
 '<div class="soc"><a href="https://instagram.com/mss.abaya" target="_blank" rel="noopener" aria-label="Instagram">'+I.ig+'</a><a href="#" aria-label="Facebook">'+I.fb+'</a><a href="https://wa.me/'+MS.WA+'" target="_blank" rel="noopener" aria-label="WhatsApp">'+I.wa+'</a></div></div>'+
 '<div><h4>'+T('التسوق','Shop')+'</h4><ul>'+MS.CATS.map(function(c){return '<li><a href="category.html?c='+c.id+'">'+c[L()]+'</a></li>'}).join('')+'<li><a href="category.html?l=vip">VIP</a></li></ul></div>'+
 '<div><h4>'+T('المساعدة','Help')+'</h4><ul><li><a href="tailoring.html">'+T('التفصيل الخاص','Made to measure')+'</a></li><li><a href="sizes.html">'+T('دليل المقاسات','Size guide')+'</a></li><li><a href="policies.html#delivery">'+T('التوصيل','Delivery')+'</a></li><li><a href="policies.html#exchange">'+T('الاستبدال','Exchanges')+'</a></li><li><a href="account.html#orders">'+T('تتبع الطلب','Track order')+'</a></li></ul></div>'+
 '<div><h4>'+T('الدار','The house')+'</h4><ul><li>'+T('كربلاء · حي النقيب','Karbala · Al-Naqeeb')+'</li><li>'+T('يومياً ١١ صباحاً – ١١ مساءً','Daily 11am – 11pm')+'</li><li dir="ltr" style="text-align:inherit">0774 480 7778</li><li><a href="about.html">'+T('من نحن','About')+'</a> · <a href="contact.html">'+T('تواصلي معنا','Contact')+'</a></li></ul>'+
 '<div class="pay" style="margin-top:14px"><span>'+T('الدفع عند الاستلام','Cash on delivery')+'</span><span>Mastercard</span></div></div>'+
 '</div><small style="max-width:var(--max);margin-inline:auto">© 2026 MS ABAYA</small>'}

/* ---------- header state ---------- */
var hd=D.getElementById('hd');function hdr(){if(over)hd.classList.toggle('clear',scrollY<innerHeight*.75)}
addEventListener('scroll',hdr,{passive:true});

/* ---------- toast ---------- */
var tt;function toast(m){var t=D.getElementById('toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){t.classList.remove('on')},1800)}
MS.toast=toast;

/* ---------- reveal ---------- */
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
MS.observe=function(){D.querySelectorAll('.fade:not(.in)').forEach(function(e){io.observe(e)})};

/* ---------- language ---------- */
MS.onLang=[];
function apply(){D.querySelectorAll('[data-ar]').forEach(function(e){e.innerHTML=e.getAttribute('data-'+L())});annR();menuR();ftR();badge();MS.onLang.forEach(function(f){f()});MS.observe()}
MS.setLang=function(l){H.lang=l;H.dir=l==='ar'?'rtl':'ltr';ls('msLangS',l);try{localStorage.setItem('msLang',l)}catch(e){}apply()};
D.getElementById('bLang').onclick=function(){MS.setLang(L()==='ar'?'en':'ar')};
MS.start=function(){apply();hdr()};
})();
