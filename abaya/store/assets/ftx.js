/* سيدة العباية — footer + services previews: ?ft=1 wine maison · ?ft=2 boutique card · ?ft=3 quiet luxury */
(function(){
var m=location.search.match(/ft=([123])/);if(!m)return;var V=+m[1];
var D=document,L=MS.L,T=MS.T,I=MS.I,WA=MS.WA;
var sv=D.querySelector('.sv2');if(sv)sv.remove();
var ft=D.getElementById('ft');ft.className='fx fx'+V;
var IC={
 tr:'<svg viewBox="0 0 32 32"><path d="M3 8h15v13H3zM18 12h6l4 5v4h-10z"/><circle cx="8" cy="23" r="2.4"/><circle cx="23" cy="23" r="2.4"/></svg>',
 pay:'<svg viewBox="0 0 32 32"><rect x="3" y="8" width="26" height="17" rx="2"/><path d="M3 13h26M8 20h6"/></svg>',
 ex:'<svg viewBox="0 0 32 32"><path d="M6 12h18l-4-4M26 20H8l4 4"/></svg>',
 pin:'<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
 clk:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
 ph:'<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/></svg>',
 ar:'<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'};
var MAP='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Karbala Al-Naqeeb MS ABAYA');
function svc(){return [['tr',T('توصيل لكل العراق','Delivery across Iraq'),T('خلال ٣–٤ أيام','Within 3–4 days')],['pay',T('الدفع عند الاستلام','Cash on delivery'),T('أو بالبطاقة','or by card')],['ex',T('استبدال سهل','Easy exchange'),T('خلال ٣ أيام','Within 3 days')]]}
function cols(){return [
 [T('التسوق','Shop'),MS.CATS.map(function(c){return ['category.html?c='+c.id,c[L()]]}).concat([['category.html?l=vip','VIP']])],
 [T('المساعدة','Help'),[['tailoring.html',T('التفصيل الخاص','Made to measure')],['sizes.html',T('دليل المقاسات','Size guide')],['policies.html#delivery',T('التوصيل','Delivery')],['policies.html#exchange',T('الاستبدال','Exchanges')],['account.html#orders',T('تتبع الطلب','Track order')]]],
 [T('الدار','The house'),[['about.html',T('من نحن','About us')],['contact.html',T('تواصلي معنا','Contact us')],['policies.html',T('السياسات','Policies')]]]]}
function soc(){return '<a href="https://instagram.com/mss.abaya" target="_blank" rel="noopener" aria-label="Instagram">'+I.ig+'</a><a href="#" aria-label="Facebook">'+I.fb+'</a><a href="https://wa.me/'+WA+'" target="_blank" rel="noopener" aria-label="WhatsApp">'+I.wa+'</a>'}
function acc(){return cols().map(function(c,i){return '<details class="fa"'+(i===0?'':'')+'><summary><span>'+c[0]+'</span><i></i></summary><ul>'+c[1].map(function(x){return '<li><a href="'+x[0]+'">'+x[1]+'</a></li>'}).join('')+'</ul></details>'}).join('')}
function visit(){return '<ul class="vi"><li>'+IC.pin+'<span>'+T('كربلاء · حي النقيب · شارع النهر','Karbala · Al-Naqeeb · Al-Nahr St.')+'</span></li><li>'+IC.clk+'<span>'+T('يومياً ١١ صباحاً – ١١ مساءً','Daily 11am – 11pm')+'</span></li><li>'+IC.ph+'<a dir="ltr" href="tel:+9647744807778">0774 480 7778</a></li></ul>'}
function pays(){return '<span class="py">'+T('الدفع عند الاستلام','Cash on delivery')+'</span><span class="py">Mastercard</span>'}
function yr(){return '<span class="cp" dir="ltr">© 2026 MS ABAYA</span>'}
function r1(){
 ft.innerHTML='<div class="f1s"><div class="w">'+svc().map(function(s){return '<div>'+IC[s[0]]+'<b>'+s[1]+'</b><span>'+s[2]+'</span></div>'}).join('')+'</div></div>'+
 '<div class="f1"><div class="w"><div class="f1b"><a class="mk" href="index.html" aria-label="MS ABAYA"><svg><use href="#full"/></svg></a>'+
 '<p>'+T('براند عراقي متخصص بالعبايات النسائية الفاخرة، بخامات مميزة وتصاميم مبتكرة.','An Iraqi house of luxury women’s abayas, with distinctive fabrics and original design.')+'</p>'+
 '<a class="cta" target="_blank" rel="noopener" href="https://wa.me/'+WA+'">'+I.wa+'<span>'+T('تحدّثي مع الأتيليه','Talk to the atelier')+'</span></a><div class="fso">'+soc()+'</div></div>'+
 '<div class="f1c">'+cols().map(function(c){return '<div class="col"><h4>'+c[0]+'</h4><ul>'+c[1].map(function(x){return '<li><a href="'+x[0]+'">'+x[1]+'</a></li>'}).join('')+'</ul></div>'}).join('')+
 '<div class="col"><h4>'+T('زورينا','Visit us')+'</h4>'+visit()+'</div></div>'+
 '<div class="f1m">'+acc()+'<details class="fa"><summary><span>'+T('زورينا','Visit us')+'</span><i></i></summary>'+visit()+'</details></div></div>'+
 '<div class="f1z"><div class="w">'+yr()+'<div class="pys">'+pays()+'</div></div></div></div>'}
function r2(){
 ft.innerHTML='<div class="f2s"><div class="w">'+svc().map(function(s){return '<div>'+IC[s[0]]+'<span><b>'+s[1]+'</b> '+s[2]+'</span></div>'}).join('')+'</div></div>'+
 '<div class="w f2">'+
 '<div class="f2v"><span class="k">'+T('البوتيك','The boutique')+'</span><h3>'+T('زورينا في كربلاء','Visit us in Karbala')+'</h3>'+visit()+
  '<div class="bt2"><a class="b1" target="_blank" rel="noopener" href="'+MAP+'">'+IC.pin+'<span>'+T('الاتجاهات','Directions')+'</span></a><a class="b2" target="_blank" rel="noopener" href="https://wa.me/'+WA+'">'+I.wa+'<span>'+T('واتساب','WhatsApp')+'</span></a></div></div>'+
 '<div class="f2c">'+cols().map(function(c){return '<div class="col"><h4>'+c[0]+'</h4><ul>'+c[1].map(function(x){return '<li><a href="'+x[0]+'">'+x[1]+'</a></li>'}).join('')+'</ul></div>'}).join('')+'</div>'+
 '<div class="f2m">'+acc()+'</div></div>'+
 '<div class="w f2z"><div class="fso">'+soc()+'</div><div class="pys">'+pays()+'</div>'+yr()+'</div>'+
 '<div class="f2w" aria-hidden="true"><svg><use href="#wmen"/></svg></div>'}
function r3(){
 ft.innerHTML='<div class="w f3">'+
 '<div class="f3s">'+svc().map(function(s){return '<div>'+IC[s[0]]+'<b>'+s[1]+'</b><span>'+s[2]+'</span></div>'}).join('')+'</div>'+
 '<a class="mk" href="index.html" aria-label="MS ABAYA"><svg><use href="#s2"/></svg></a>'+
 '<nav class="f3n">'+cols().map(function(c){return c[1]}).reduce(function(a,b){return a.concat(b)},[]).filter(function(x,i){return i<12}).map(function(x){return '<a href="'+x[0]+'">'+x[1]+'</a>'}).join('')+'</nav>'+
 '<div class="f3v">'+visit()+'</div>'+
 '<div class="fso">'+soc()+'</div>'+
 '<div class="f3z">'+yr()+'<div class="pys">'+pays()+'</div></div></div>'}
function render(){({1:r1,2:r2,3:r3})[V]()}
MS.onLang.push(render);render();
var css=D.createElement('style');css.textContent=[
'.fx{margin-top:100px;padding:0;background:none}.fx .w{max-width:var(--max);margin:auto;padding:0 var(--pad)}',
'.fx svg{flex:none}.fx .vi{list-style:none;display:grid;gap:12px}.fx .vi li{display:flex;align-items:center;gap:12px;font-size:13.5px}.fx .vi svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.3}',
'.fx .fso{display:flex;gap:10px}.fx .fso a{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;transition:all .3s}.fx .fso svg{width:17px;height:17px}',
'.fx .py{display:inline-flex;align-items:center;height:28px;padding:0 12px;font-size:11.5px;border-radius:2px}.fx .pys{display:flex;gap:8px;flex-wrap:wrap}',
'.fx .cp{font:400 10.5px var(--enb);letter-spacing:.2em}',
'.fx details summary{list-style:none;display:flex;justify-content:space-between;align-items:center;padding:18px 0;cursor:pointer;font-size:15px}.fx details summary::-webkit-details-marker{display:none}',
'.fx details summary i{position:relative;width:12px;height:12px}.fx details summary i:before,.fx details summary i:after{content:"";position:absolute;inset:5.5px 0 auto;height:1px;background:currentColor;transition:transform .3s}.fx details summary i:after{transform:rotate(90deg)}.fx details[open] summary i:after{transform:none}',
'.fx details ul{list-style:none;padding:0 0 16px;display:grid;gap:12px}.fx details li a{font-size:14px}.fx details .vi{padding-bottom:18px}',
/* v1 wine maison */
'.fx1 .f1s{background:var(--soft)}.fx1 .f1s .w{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding-block:26px;text-align:center}',
'.fx1 .f1s div{display:flex;flex-direction:column;align-items:center;gap:6px}.fx1 .f1s svg{width:30px;height:30px;fill:none;stroke:var(--wine);stroke-width:1.2;stroke-linejoin:round;margin-bottom:4px}',
'.fx1 .f1s b{font-weight:500;font-size:12.5px;color:var(--ink)}.fx1 .f1s span{font-size:11px;color:var(--mute)}',
'.fx1 .f1{background:#3d040b url(img/felt.webp) center/cover;color:#efe3d3;padding:56px 0 0}',
'.fx1 .f1b{display:flex;flex-direction:column;align-items:center;text-align:center;gap:18px;padding-bottom:30px}',
'.fx1 .mk{color:#efe3d3;line-height:0}.fx1 .mk svg{width:190px;height:117px}',
'.fx1 .f1b p{font-size:13.5px;line-height:1.9;color:rgba(239,227,211,.75);max-width:30em}',
'.fx1 .cta{display:inline-flex;align-items:center;gap:10px;height:48px;padding:0 26px;border:1px solid rgba(201,164,87,.7);color:#e9cf98;font-size:13.5px;transition:all .3s}.fx1 .cta svg{width:17px;height:17px;fill:currentColor}.fx1 .cta:hover{background:#c9a457;color:#3d040b}',
'.fx1 .fso a{border:1px solid rgba(239,227,211,.25);color:#efe3d3}.fx1 .fso svg{fill:#efe3d3}.fx1 .fso a:hover{border-color:#c9a457}',
'.fx1 .f1c{display:none}.fx1 .f1m{border-top:1px solid rgba(239,227,211,.15)}.fx1 .f1m details{border-bottom:1px solid rgba(239,227,211,.15)}.fx1 details a,.fx1 .vi a{color:rgba(239,227,211,.8)}',
'.fx1 .f1z{border-top:1px solid rgba(239,227,211,.15);margin-top:34px}.fx1 .f1z .w{display:flex;flex-direction:column-reverse;align-items:center;gap:14px;padding-block:22px calc(22px + env(safe-area-inset-bottom))}',
'.fx1 .py{border:1px solid rgba(239,227,211,.25);color:rgba(239,227,211,.8)}.fx1 .cp{color:rgba(239,227,211,.55)}',
'@media(min-width:900px){.fx1 .f1s .w{padding-block:34px}.fx1 .f1s div{flex-direction:row;justify-content:center;gap:14px;text-align:start}.fx1 .f1s svg{margin:0}.fx1 .f1s div>b:after{content:" · ";color:var(--gold)}.fx1 .f1s b{font-size:13.5px}.fx1 .f1s span{font-size:13px}',
' .fx1 .f1 .w:first-child{display:grid;grid-template-columns:1.2fr 2fr;gap:60px;align-items:start}.fx1 .f1b{align-items:flex-start;text-align:start}.fx1 .f1m{display:none}',
' .fx1 .f1c{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;padding-top:14px}.fx1 h4{font:400 11px var(--enb);letter-spacing:.22em;color:#c9a457;margin-bottom:18px;text-transform:uppercase}html[lang=ar] .fx1 h4{font-family:var(--arb);letter-spacing:0;font-size:13px}',
' .fx1 .f1c ul{list-style:none;display:grid;gap:11px}.fx1 .f1c a{font-size:13.5px;color:rgba(239,227,211,.78);transition:color .2s}.fx1 .f1c a:hover{color:#fff}.fx1 .f1c .vi li{font-size:13px;color:rgba(239,227,211,.78)}',
' .fx1 .f1z .w{flex-direction:row;justify-content:space-between}}',
/* v2 boutique card */
'.fx2{background:var(--soft);overflow:hidden}.fx2 .f2s{border-bottom:1px solid var(--line)}.fx2 .f2s .w{display:flex;flex-direction:column;gap:12px;padding-block:22px}',
'.fx2 .f2s div{display:flex;align-items:center;gap:12px;font-size:13px;color:var(--mute)}.fx2 .f2s b{font-weight:500;color:var(--ink)}.fx2 .f2s svg{width:24px;height:24px;fill:none;stroke:var(--wine);stroke-width:1.3;stroke-linejoin:round}',
'.fx2 .f2{padding-block:40px 10px;display:grid;gap:30px}',
'.fx2 .f2v{background:#fff;padding:28px 24px;border:1px solid var(--line)}.fx2 .k{font-size:11.5px;color:var(--gold);letter-spacing:.04em}html[lang=en] .fx2 .k{font-family:var(--enb);letter-spacing:.22em;text-transform:uppercase;font-size:10.5px}',
'.fx2 h3{font:400 24px/1.4 var(--ar);color:var(--wine);margin:6px 0 18px}html[lang=en] .fx2 h3{font-family:var(--en);font-size:26px}.fx2 .vi{color:var(--ink)}.fx2 .vi svg{color:var(--wine)}',
'.fx2 .bt2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:22px}.fx2 .bt2 a{display:flex;align-items:center;justify-content:center;gap:8px;height:46px;font-size:13px}.fx2 .bt2 svg{width:16px;height:16px}',
'.fx2 .b1{background:var(--wine);color:#fff}.fx2 .b1 svg{fill:none;stroke:#fff;stroke-width:1.5}.fx2 .b2{border:1px solid rgba(76,5,13,.3);color:var(--wine)}.fx2 .b2 svg{fill:var(--wine)}',
'.fx2 .f2c{display:none}.fx2 .f2m details{border-bottom:1px solid var(--line)}.fx2 .f2m{border-top:1px solid var(--line)}',
'.fx2 .f2z{display:flex;flex-direction:column;align-items:center;gap:16px;padding-block:26px 10px;color:var(--mute)}.fx2 .fso a{border:1px solid var(--line);background:#fff}.fx2 .fso svg{fill:var(--wine)}.fx2 .py{border:1px solid var(--line);background:#fff;color:var(--mute)}',
'.fx2 .f2w{color:var(--wine);opacity:.09;line-height:0;padding:10px var(--pad) calc(6px + env(safe-area-inset-bottom));text-align:center}.fx2 .f2w svg{width:100%;max-width:var(--max);height:auto;aspect-ratio:319.5/47.6}',
'@media(min-width:900px){.fx2 .f2s .w{flex-direction:row;justify-content:space-between;padding-block:26px}.fx2 .f2{grid-template-columns:420px 1fr;gap:70px;padding-block:60px 30px}.fx2 .f2m{display:none}',
' .fx2 .f2c{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;align-content:start}.fx2 h4{font-size:13px;font-weight:400;color:var(--mute);margin-bottom:18px}html[lang=en] .fx2 h4{font:400 10.5px var(--enb);letter-spacing:.22em;text-transform:uppercase}',
' .fx2 .f2c ul{list-style:none;display:grid;gap:11px}.fx2 .f2c a{font-size:14px;color:var(--ink)}.fx2 .f2c a:hover{color:var(--wine)}',
' .fx2 .f2z{flex-direction:row;justify-content:space-between;border-top:1px solid var(--line);padding-block:22px}.fx2 .f2w{padding-top:30px}}',
/* v3 quiet luxury */
'.fx3{background:#fbf8f3;border-top:1px solid var(--line)}.fx3 .f3{display:flex;flex-direction:column;align-items:center;text-align:center;padding-block:44px calc(26px + env(safe-area-inset-bottom))}',
'.fx3 .f3s{display:grid;grid-template-columns:repeat(3,1fr);width:100%;border-bottom:1px solid var(--line);padding-bottom:30px;margin-bottom:40px}',
'.fx3 .f3s div{display:flex;flex-direction:column;align-items:center;gap:5px;padding:0 6px}.fx3 .f3s div+div{border-inline-start:1px solid var(--line)}',
'.fx3 .f3s svg{width:26px;height:26px;fill:none;stroke:var(--gold);stroke-width:1.2;stroke-linejoin:round;margin-bottom:6px}.fx3 .f3s b{font-weight:500;font-size:12.5px;color:var(--ink)}.fx3 .f3s span{font-size:11px;color:var(--mute)}',
'.fx3 .mk{color:var(--wine);line-height:0}.fx3 .mk svg{width:64px;height:62px}',
'.fx3 .f3n{display:flex;flex-wrap:wrap;justify-content:center;gap:12px 22px;margin:28px 0;max-width:640px}.fx3 .f3n a{font-size:13.5px;color:var(--ink);position:relative}.fx3 .f3n a:hover{color:var(--wine)}',
'.fx3 .f3v .vi{justify-items:center;color:var(--mute);gap:10px}.fx3 .f3v .vi li{font-size:13px}.fx3 .f3v svg{color:var(--gold)}',
'.fx3 .fso{margin:26px 0 30px}.fx3 .fso a{border:1px solid var(--line)}.fx3 .fso svg{fill:var(--wine)}.fx3 .fso a:hover{background:var(--wine)}.fx3 .fso a:hover svg{fill:#fff}',
'.fx3 .f3z{width:100%;border-top:1px solid var(--line);padding-top:20px;display:flex;flex-direction:column-reverse;align-items:center;gap:12px;color:var(--mute)}.fx3 .py{border:1px solid var(--line);color:var(--mute)}',
'@media(min-width:900px){.fx3 .f3{padding-block:60px 26px}.fx3 .f3s{max-width:900px}.fx3 .f3s div{flex-direction:row;justify-content:center;gap:10px}.fx3 .f3s svg{margin:0}.fx3 .f3s div>span:before{content:"· ";color:var(--gold)}',
' .fx3 .f3v .vi{display:flex;gap:30px}.fx3 .f3z{flex-direction:row;justify-content:space-between}.fx3 .mk svg{width:76px;height:74px}}'
].join('\n');D.head.appendChild(css);
})();
