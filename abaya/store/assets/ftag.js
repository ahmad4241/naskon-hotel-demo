/* سيدة العباية — footer with hanging brand tag (?ft=4). All classes are prefixed "tg" to avoid clashes. */
(function(){
if(!/ft=4/.test(location.search))return;
var D=document,L=MS.L,T=MS.T,I=MS.I,WA=MS.WA;
var sv=D.querySelector('.sv2');if(sv)sv.remove();
var ft=D.getElementById('ft');ft.className='tgft';
var IC={
 tr:'<svg viewBox="0 0 32 32"><path d="M3 8h15v13H3zM18 12h6l4 5v4h-10z"/><circle cx="8" cy="23" r="2.4"/><circle cx="23" cy="23" r="2.4"/></svg>',
 pay:'<svg viewBox="0 0 32 32"><rect x="3" y="8" width="26" height="17" rx="2"/><path d="M3 13h26M8 20h6"/></svg>',
 ex:'<svg viewBox="0 0 32 32"><path d="M6 12h18l-4-4M26 20H8l4 4"/></svg>',
 mm:'<svg viewBox="0 0 32 32"><path d="M5 22L22 5l5 5-17 17z"/><path d="M10 17l2 2M14 13l2 2M18 9l2 2"/></svg>',
 pin:'<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
 clk:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
 ph:'<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/></svg>'};
var MAP='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Karbala Al-Naqeeb MS ABAYA');
function cols(){return [
 [T('التسوق','Shop'),[['category.html?c=daily',T('عبايات يومية','Everyday')],['category.html?c=formal',T('عبايات رسمية','Formal')],['category.html?c=occasion',T('عبايات مناسبات','Occasion')],['category.html?c=design',T('تصاميم سيدة العباية','MS ABAYA Signatures')],['category.html?c=under',T('تحت العباية','Under the abaya')],['category.html?l=vip','VIP']]],
 [T('خدمة العملاء','Client care'),[['tailoring.html',T('التفصيل الخاص','Made to measure')],['sizes.html',T('دليل المقاسات','Size guide')],['policies.html#delivery',T('التوصيل','Delivery')],['policies.html#exchange',T('الاستبدال','Exchanges')],['account.html#orders',T('تتبع الطلب','Track your order')]]],
 [T('الدار','The house'),[['about.html',T('من نحن','About us')],['contact.html',T('تواصلي معنا','Contact us')],['policies.html',T('السياسات','Policies')]]]]}
function visit(){return '<ul class="tgvi"><li>'+IC.pin+'<span>'+T('كربلاء · حي النقيب','Karbala · Al-Naqeeb')+'</span></li><li>'+IC.clk+'<span>'+T('يومياً ١١ صباحاً – ١١ مساءً','Daily 11am – 11pm')+'</span></li><li>'+IC.ph+'<a dir="ltr" href="tel:+9647744807778">0774 480 7778</a></li></ul>'}
function render(){
 var svc=[['tr',T('توصيل لكل العراق','Delivery across Iraq'),T('خلال ٣–٤ أيام','Within 3–4 days')],['pay',T('الدفع عند الاستلام','Cash on delivery'),T('أو بالبطاقة','or by card')],['ex',T('استبدال سهل','Easy exchange'),T('خلال ٣ أيام','Within 3 days')],['mm',T('تفصيل خاص','Made to measure'),T('خلال أسبوع إلى أسبوعين','In 1–2 weeks')]];
 ft.innerHTML=
 '<div class="tgsv"><div class="tgw">'+svc.map(function(s){return '<div>'+IC[s[0]]+'<b>'+s[1]+'</b><span>'+s[2]+'</span></div>'}).join('')+'</div></div>'+
 '<div class="tgw tgmain">'+
  '<div class="tgstg"><svg class="tgcord" viewBox="0 0 40 120" preserveAspectRatio="none"><path d="M20 0 C20 40 14 70 20 120"/><path d="M23 0 C23 40 17 70 23 120"/></svg>'+
   '<div class="tgtag" id="tgtag" role="button" tabindex="0" aria-label="'+T('اقلبي البطاقة','Flip the tag')+'"><div class="tgin">'+
    '<div class="tgface tgfront"><i class="tghole"></i><span class="tglogo"><svg><use href="#full"/></svg></span><span class="tgsub">'+T('صُنعت بعناية في كربلاء','Crafted with care in Karbala')+'</span></div>'+
    '<div class="tgface tgback"><i class="tghole"></i><span class="tgs"><svg><use href="#s2"/></svg></span>'+
     '<p class="tgty">'+T('شكراً لاختياركِ سيدة العباية. صُنعت كل قطعة بعناية لتكون جزءاً من أناقتكِ.','Thank you for choosing MS ABAYA. Every piece is crafted with care to become part of your elegance.')+'</p>'+
     '<ul><li>'+T('كربلاء · حي النقيب','Karbala · Al-Naqeeb')+'</li><li>'+T('يومياً ١١ صباحاً – ١١ مساءً','Daily 11am – 11pm')+'</li><li dir="ltr">0774 480 7778</li></ul>'+
     '<a class="tgwa" target="_blank" rel="noopener" href="https://wa.me/'+WA+'">'+I.wa+'<span>'+T('راسلينا','Message us')+'</span></a></div>'+
   '</div></div><span class="tghint">'+T('اضغطي على البطاقة لقلبها','Tap the tag to flip it')+'</span></div>'+
  '<div class="tgcopy"><span class="tgk">'+T('الأتيليه','The atelier')+'</span><h3>'+T('عباءة تُصنع لكِ،<br>وتبقى معكِ','An abaya made for you,<br>that stays with you')+'</h3>'+
   '<p class="tglead">'+T('زوري بوتيكنا في كربلاء، أو تحدّثي مع الأتيليه مباشرة لتختاري قماشكِ ومقاسكِ.','Visit our boutique in Karbala, or talk to the atelier directly to choose your fabric and fit.')+'</p>'+
   '<div class="tgbtn"><a class="tgb1" target="_blank" rel="noopener" href="https://wa.me/'+WA+'">'+I.wa+'<span>'+T('تحدّثي مع الأتيليه','Talk to the atelier')+'</span></a><a class="tgb2" target="_blank" rel="noopener" href="'+MAP+'">'+IC.pin+'<span>'+T('زوري البوتيك','Visit the boutique')+'</span></a></div>'+
   visit()+'</div>'+
 '</div>'+
 '<div class="tgw tglinks">'+cols().map(function(c){return '<details class="tgcol"><summary><span>'+c[0]+'</span><i></i></summary><ul>'+c[1].map(function(x){return '<li><a href="'+x[0]+'">'+x[1]+'</a></li>'}).join('')+'</ul></details>'}).join('')+
  '<div class="tgcol tgsoc"><span class="tgh">'+T('تابعينا','Follow us')+'</span><div><a href="https://instagram.com/mss.abaya" target="_blank" rel="noopener" aria-label="Instagram">'+I.ig+'</a><a href="#" aria-label="Facebook">'+I.fb+'</a><a href="https://wa.me/'+WA+'" target="_blank" rel="noopener" aria-label="WhatsApp">'+I.wa+'</a></div></div></div>'+
 '<div class="tgz"><div class="tgw"><span class="tgc" dir="ltr">© 2026 MS ABAYA</span><span class="tgpay"><i>'+T('الدفع عند الاستلام','Cash on delivery')+'</i><i>Mastercard</i></span></div></div>';
 var tag=D.getElementById('tgtag');
 function flip(e){if(e.target.closest('a'))return;tag.classList.toggle('tgflip')}
 tag.onclick=flip;tag.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();flip(e)}};
 if(matchMedia('(min-width:900px)').matches)[].forEach.call(ft.querySelectorAll('details.tgcol'),function(d){d.open=true});
}
MS.onLang.push(render);render();
var last=scrollY,v=0,a=0;function tick(){var y=scrollY;v+=(y-last)*.04;last=y;v*=.9;a+=(v-a)*.12;a*=.94;var t=D.getElementById('tgtag');if(t)t.style.setProperty('--sw',Math.max(-5,Math.min(5,a)).toFixed(2)+'deg');requestAnimationFrame(tick)}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)tick();
var css=D.createElement('style');css.textContent=[
'.tgft{margin-top:100px;background:#f3ebdf;color:var(--ink);overflow:hidden}.tgft *{letter-spacing:0}',
'.tgw{max-width:var(--max);margin:auto;padding:0 var(--pad)}',
'.tgsv{background:#fff;border-bottom:1px solid rgba(76,5,13,.08)}.tgsv .tgw{display:grid;grid-template-columns:1fr 1fr;gap:0}',
'.tgsv .tgw>div{display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;padding:22px 8px}',
'.tgsv .tgw>div:nth-child(odd){border-inline-end:1px solid rgba(76,5,13,.08)}.tgsv .tgw>div:nth-child(-n+2){border-bottom:1px solid rgba(76,5,13,.08)}',
'.tgsv svg{width:28px;height:28px;fill:none;stroke:var(--wine);stroke-width:1.2;stroke-linejoin:round;margin-bottom:6px}.tgsv b{font-weight:500;font-size:13px}.tgsv span{font-size:11.5px;color:var(--mute)}',
'.tgmain{display:grid;justify-items:center;gap:30px;padding-top:0;padding-bottom:44px}',
'.tgstg{display:flex;flex-direction:column;align-items:center}',
'.tgcord{width:30px;height:84px;fill:none;stroke:#1d1414;stroke-width:2.4;stroke-linecap:round;display:block;margin-bottom:-18px;position:relative;z-index:2}',
'.tgtag{--sw:0deg;width:224px;height:384px;perspective:1100px;transform-origin:50% -70px;transform:rotate(var(--sw));cursor:pointer;animation:tgsw 6s ease-in-out infinite;outline:none}',
'@keyframes tgsw{0%,100%{rotate:-1.6deg}50%{rotate:1.6deg}}',
'.tgin{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .9s cubic-bezier(.3,.7,.2,1)}.tgtag.tgflip .tgin{transform:rotateY(180deg)}',
'.tgface{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:16px;background:radial-gradient(ellipse at 30% 20%,rgba(255,255,255,.07),transparent 60%),linear-gradient(160deg,#560a16,#3f0610 70%,#36050d);color:#f2e7d8;display:flex;flex-direction:column;align-items:center;padding:52px 22px 24px;box-shadow:0 30px 50px -24px rgba(60,10,15,.55)}',
'.tghole{position:absolute;top:16px;left:50%;width:44px;height:14px;margin-left:-22px;border-radius:8px;background:#f3ebdf;box-shadow:0 0 0 3px #c9c4bd,0 0 0 4px #8d8780,inset 0 2px 3px rgba(0,0,0,.25)}',
'.tgfront{justify-content:flex-end;padding-bottom:40px}.tglogo{line-height:0}.tglogo svg{width:180px;height:111px}',
'.tgsub{margin-top:22px;font-size:11.5px;color:rgba(242,231,216,.6);text-align:center}',
'.tgback{transform:rotateY(180deg);text-align:center;gap:14px}.tgs{line-height:0;color:#d8b875}.tgs svg{width:40px;height:39px}',
'.tgty{font-size:12px;line-height:1.85;color:rgba(242,231,216,.85)}',
'.tgback ul{list-style:none;font-size:11.5px;color:rgba(242,231,216,.7);display:grid;gap:5px;border-top:1px solid rgba(242,231,216,.15);padding-top:12px;width:100%}',
'.tgwa{margin-top:auto;display:inline-flex;align-items:center;gap:8px;height:38px;padding:0 18px;border:1px solid rgba(216,184,117,.7);color:#e2c58a;font-size:12px;border-radius:19px}.tgwa svg{width:15px;height:15px;fill:currentColor}',
'.tghint{margin-top:16px;font-size:11.5px;color:var(--mute);display:flex;align-items:center;gap:8px}.tghint:before,.tghint:after{content:"";width:18px;height:1px;background:var(--gold)}',
'.tgcopy{display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;max-width:520px}',
'.tgk{font-size:12px;color:var(--gold)}html[lang=en] .tgk{font:400 10.5px var(--enb);letter-spacing:.24em!important;text-transform:uppercase}',
'.tgcopy h3{font:400 30px/1.45 var(--ar);color:var(--wine)}html[lang=en] .tgcopy h3{font-family:var(--en);font-size:32px;line-height:1.3}',
'.tglead{font-size:14px;line-height:1.9;color:var(--mute)}',
'.tgbtn{display:grid;grid-template-columns:1fr 1fr;gap:8px;width:100%}.tgbtn a{display:flex;align-items:center;justify-content:center;gap:8px;height:50px;font-size:13px;padding:0 10px}.tgbtn svg{width:16px;height:16px;flex:none}',
'.tgb1{background:var(--wine);color:#fff}.tgb1 svg{fill:#fff}.tgb2{border:1px solid rgba(76,5,13,.3);color:var(--wine)}.tgb2 svg{fill:none;stroke:var(--wine);stroke-width:1.5}',
'.tgvi{list-style:none;display:grid;gap:10px;margin-top:6px}.tgvi li{display:flex;align-items:center;justify-content:center;gap:10px;font-size:13.5px}.tgvi svg{width:17px;height:17px;fill:none;stroke:var(--gold);stroke-width:1.4;flex:none}',
'.tglinks{border-top:1px solid rgba(76,5,13,.1)}',
'.tgcol{border-bottom:1px solid rgba(76,5,13,.1)}.tgcol summary{list-style:none;display:flex;justify-content:space-between;align-items:center;padding:18px 0;cursor:pointer;font-size:15px;color:var(--wine)}.tgcol summary::-webkit-details-marker{display:none}',
'.tgcol summary i{position:relative;width:12px;height:12px}.tgcol summary i:before,.tgcol summary i:after{content:"";position:absolute;inset:5.5px 0 auto;height:1px;background:currentColor;transition:transform .3s}.tgcol summary i:after{transform:rotate(90deg)}.tgcol[open] summary i:after{transform:none}',
'.tgcol ul{list-style:none;display:grid;gap:13px;padding:0 0 20px}.tgcol a{font-size:14px;color:var(--ink);transition:color .2s}.tgcol a:hover{color:var(--wine)}',
'.tgsoc{display:flex;justify-content:space-between;align-items:center;padding:16px 0;border-bottom:0}.tgh{font-size:15px;color:var(--wine)}',
'.tgsoc div{display:flex;gap:10px}.tgsoc a{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(76,5,13,.2);transition:all .3s}.tgsoc svg{width:17px;height:17px;fill:var(--wine)}.tgsoc a:hover{background:var(--wine)}.tgsoc a:hover svg{fill:#fff}',
'.tgz{background:var(--wine);color:rgba(242,231,216,.7)}.tgz .tgw{display:flex;flex-direction:column-reverse;align-items:center;gap:10px;padding-block:18px calc(18px + env(safe-area-inset-bottom))}',
'.tgc{font:400 10.5px var(--enb);letter-spacing:.2em!important}.tgpay{display:flex;gap:8px}.tgpay i{font-style:normal;font-size:11px;border:1px solid rgba(242,231,216,.25);padding:4px 10px}',
'@media(min-width:900px){',
' .tgsv .tgw{grid-template-columns:repeat(4,1fr)}.tgsv .tgw>div{flex-direction:row;justify-content:center;gap:10px;padding:26px 8px;border-bottom:0!important;border-inline-end:1px solid rgba(76,5,13,.08)}.tgsv .tgw>div:last-child{border-inline-end:0}.tgsv svg{margin:0}.tgsv span:before{content:"· ";color:var(--gold)}',
' .tgmain{grid-template-columns:auto 1fr;justify-items:start;align-items:center;gap:100px;padding-bottom:70px}.tgstg{padding-inline-start:30px}',
' .tgtag{width:260px;height:446px}.tglogo svg{width:210px;height:129px}.tgcord{height:100px}',
' .tgcopy{align-items:flex-start;text-align:start;max-width:560px}.tgcopy h3{font-size:44px}html[lang=en] .tgcopy h3{font-size:46px}.tgbtn{width:auto;grid-template-columns:auto auto}.tgbtn a{padding:0 26px}.tgvi li{justify-content:flex-start}',
' .tglinks{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;padding-top:44px;padding-bottom:44px}.tgcol{border:0}.tgcol summary{pointer-events:none;padding:0 0 18px;font-size:14px}.tgcol summary i{display:none}',
' .tgsoc{flex-direction:column;align-items:flex-start;gap:18px;padding:0}',
' .tgz .tgw{flex-direction:row;justify-content:space-between}}',
'@media(prefers-reduced-motion:reduce){.tgtag{animation:none}}'
].join('\n');D.head.appendChild(css);
})();
