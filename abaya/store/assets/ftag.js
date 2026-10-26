/* سيدة العباية — footer with hanging brand tag (?ft=4) */
(function(){
if(!/ft=4/.test(location.search))return;
var D=document,L=MS.L,T=MS.T,I=MS.I,WA=MS.WA;
var sv=D.querySelector('.sv2');if(sv)sv.remove();
var ft=D.getElementById('ft');ft.className='tg';
function links(){return [['category.html?c=daily',T('عبايات يومية','Everyday')],['category.html?c=formal',T('عبايات رسمية','Formal')],['category.html?c=occasion',T('عبايات مناسبات','Occasion')],['category.html?l=vip','VIP'],['tailoring.html',T('التفصيل الخاص','Made to measure')],['sizes.html',T('دليل المقاسات','Size guide')],['policies.html',T('التوصيل والاستبدال','Delivery & exchange')],['about.html',T('من نحن','About us')]]}
function render(){
 ft.innerHTML='<div class="tgw">'+
  '<div class="tgs"><svg class="cord" viewBox="0 0 60 120" preserveAspectRatio="none"><path d="M30 0 C30 40 22 70 30 120"/><path d="M33 0 C33 40 26 70 33 120"/></svg>'+
  '<div class="tag" id="tag" role="button" tabindex="0" aria-label="'+T('اقلبي البطاقة','Flip the tag')+'"><div class="tgi">'+
   '<div class="fc fr"><i class="hole"></i><span class="lg"><svg><use href="#full"/></svg></span><span class="tgm">'+T('صُنعت بعناية في كربلاء','Crafted with care in Karbala')+'</span></div>'+
   '<div class="fc bk"><i class="hole"></i><span class="ks"><svg><use href="#s2"/></svg></span>'+
    '<p class="ty">'+T('شكراً لاختياركِ سيدة العباية. صُنعت كل قطعة بعناية لتكون جزءاً من أناقتكِ.','Thank you for choosing MS ABAYA. Every piece is crafted with care to become part of your elegance.')+'</p>'+
    '<ul><li>'+T('كربلاء · حي النقيب','Karbala · Al-Naqeeb')+'</li><li>'+T('يومياً ١١ صباحاً – ١١ مساءً','Daily 11am – 11pm')+'</li><li dir="ltr">0774 480 7778</li></ul>'+
    '<a class="wa3" target="_blank" rel="noopener" href="https://wa.me/'+WA+'">'+I.wa+'<span>'+T('راسلينا','Message us')+'</span></a></div>'+
  '</div></div><span class="hint">'+T('اضغطي على البطاقة لقلبها','Tap the tag to flip it')+'</span></div>'+
  '<div class="tgr"><span class="k">MS ABAYA</span><h3>'+T('عباءة تُصنع لكِ،<br>وتبقى معكِ','An abaya made for you,<br>that stays with you')+'</h3>'+
   '<nav>'+links().map(function(x){return '<a href="'+x[0]+'">'+x[1]+'</a>'}).join('')+'</nav>'+
   '<div class="so"><a href="https://instagram.com/mss.abaya" target="_blank" rel="noopener" aria-label="Instagram">'+I.ig+'</a><a href="#" aria-label="Facebook">'+I.fb+'</a><a href="https://wa.me/'+WA+'" target="_blank" rel="noopener" aria-label="WhatsApp">'+I.wa+'</a></div></div>'+
 '</div><div class="tgz"><span dir="ltr">© 2026 MS ABAYA</span><span>'+T('الدفع عند الاستلام · Mastercard','Cash on delivery · Mastercard')+'</span></div>';
 var tag=D.getElementById('tag');
 function flip(e){if(e.target.closest('a'))return;tag.classList.toggle('flip')}
 tag.onclick=flip;tag.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();flip(e)}};
}
MS.onLang.push(render);render();
/* swing with scroll velocity */
var last=scrollY,v=0,a=0,raf;function tick(){var y=scrollY;v+=(y-last)*.04;last=y;v*=.9;a+=(v-a)*.12;a*=.94;var t=D.getElementById('tag');if(t)t.style.setProperty('--sw',Math.max(-9,Math.min(9,a)).toFixed(2)+'deg');raf=requestAnimationFrame(tick)}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)tick();
var css=D.createElement('style');css.textContent=[
'.tg{margin-top:100px;background:linear-gradient(#f4ece1,#efe5d7);color:var(--ink);overflow:hidden;position:relative}',
'.tg:before{content:"";position:absolute;inset:0 0 auto;height:14px;background:linear-gradient(#e2d4bf,#efe5d7 70%,transparent)}',
'.tgw{max-width:var(--max);margin:auto;padding:0 var(--pad) 40px;display:grid;justify-items:center;gap:34px}',
'.tgs{position:relative;display:flex;flex-direction:column;align-items:center;padding-top:0}',
'.cord{width:40px;height:92px;fill:none;stroke:#1d1414;stroke-width:2.6;stroke-linecap:round;display:block;margin-bottom:-18px;position:relative;z-index:2}',
'.tag{--sw:0deg;width:224px;height:384px;perspective:1100px;transform-origin:50% -80px;transform:rotate(var(--sw));cursor:pointer;animation:tgsw 6s ease-in-out infinite;outline:none}',
'@keyframes tgsw{0%,100%{rotate:-1.6deg}50%{rotate:1.6deg}}',
'.tgi{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .9s cubic-bezier(.3,.7,.2,1)}',
'.tag.flip .tgi{transform:rotateY(180deg)}',
'.fc{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:16px;background:#4a0812 url(img/felt.webp) center/220% auto;color:#f2e7d8;display:flex;flex-direction:column;align-items:center;padding:52px 22px 24px;box-shadow:0 30px 50px -24px rgba(60,10,15,.55),inset 0 0 0 1px rgba(255,255,255,.06)}',
'.fc:after{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(115deg,rgba(255,255,255,.08),transparent 35%,transparent 70%,rgba(0,0,0,.18));pointer-events:none}',
'.hole{position:absolute;top:16px;left:50%;width:44px;height:14px;margin-left:-22px;border-radius:8px;background:#efe5d7;box-shadow:0 0 0 3px #c9c4bd,0 0 0 4px #8d8780,inset 0 2px 3px rgba(0,0,0,.25)}',
'.fr{justify-content:flex-end;padding-bottom:40px}.fr .lg{line-height:0;color:#f2e7d8}.fr .lg svg{width:180px;height:111px}',
'.fr .tgm{margin-top:22px;text-align:center;font-size:11px;letter-spacing:.04em;color:rgba(242,231,216,.6)}html[lang=en] .fr .tgm{font-family:var(--enb);letter-spacing:.18em;text-transform:uppercase;font-size:9.5px}',
'.bk{transform:rotateY(180deg);text-align:center;gap:14px}.bk .ks{line-height:0;color:#d8b875}.bk .ks svg{width:40px;height:39px}',
'.bk .ty{font-size:12px;line-height:1.85;color:rgba(242,231,216,.85)}',
'.bk ul{list-style:none;font-size:11.5px;color:rgba(242,231,216,.7);display:grid;gap:5px;border-top:1px solid rgba(242,231,216,.15);padding-top:12px;width:100%}',
'.wa3{margin-top:auto;display:inline-flex;align-items:center;gap:8px;height:38px;padding:0 18px;border:1px solid rgba(216,184,117,.7);color:#e2c58a;font-size:12px;border-radius:19px}.wa3 svg{width:15px;height:15px;fill:currentColor}',
'.hint{margin-top:18px;font-size:11.5px;color:var(--mute);display:flex;align-items:center;gap:8px}.hint:before{content:"";width:18px;height:1px;background:var(--gold)}.hint:after{content:"";width:18px;height:1px;background:var(--gold)}',
'.tgr{display:flex;flex-direction:column;align-items:center;text-align:center;gap:20px;max-width:520px}',
'.tgr .k{font:400 10.5px var(--enb);letter-spacing:.3em;color:var(--gold)}',
'.tgr h3{font:400 26px/1.5 var(--ar);color:var(--wine)}html[lang=en] .tgr h3{font-family:var(--en);font-size:28px;line-height:1.35}',
'.tgr nav{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 8px}',
'.tgr nav a{font-size:13px;padding:8px 14px;border:1px solid rgba(76,5,13,.14);border-radius:20px;background:rgba(255,255,255,.45);transition:all .25s}.tgr nav a:hover{background:var(--wine);color:#fff;border-color:var(--wine)}',
'.tgr .so{display:flex;gap:10px}.tgr .so a{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(76,5,13,.18)}.tgr .so svg{width:17px;height:17px;fill:var(--wine)}',
'.tgz{border-top:1px solid rgba(76,5,13,.1);max-width:var(--max);margin:auto;padding:18px var(--pad) calc(18px + env(safe-area-inset-bottom));display:flex;flex-direction:column;align-items:center;gap:6px;font-size:11px;color:var(--mute)}.tgz span:first-child{font:400 10.5px var(--enb);letter-spacing:.2em}',
'@media(min-width:900px){.tgw{grid-template-columns:auto 1fr;justify-items:start;align-items:center;gap:90px;padding-bottom:60px}',
' .tgs{padding-inline-start:40px}.tag{width:250px;height:430px}.fr .lg svg{width:200px;height:123px}.cord{height:110px}',
' .tgr{align-items:flex-start;text-align:start;max-width:none}.tgr h3{font-size:36px}html[lang=en] .tgr h3{font-size:38px}.tgr nav{justify-content:flex-start;max-width:620px}',
' .tgz{flex-direction:row;justify-content:space-between}}',
'@media(prefers-reduced-motion:reduce){.tag{animation:none}}'
].join('\n');D.head.appendChild(css);
})();
