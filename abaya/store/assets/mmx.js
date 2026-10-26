/* سيدة العباية — «التفصيل الخاص» previews: ?mm=1 atelier steps · ?mm=2 mini builder · ?mm=3 timeline */
(function(){
var m=location.search.match(/mm=([123])/),V=m?+m[1]:2;
var D=document,L=MS.L,T=MS.T,old=D.querySelector('section.mm');
var sec=D.createElement('section');sec.className='mx mx'+V;old.parentNode.replaceChild(sec,old);
var PH=!/photos=1/.test(location.search);
var ph=function(cls){return PH?'<span class="cph '+(cls||'t2')+'"><svg><use href="#s1"/></svg></span>':'<img src="img/detail2.webp" alt="" loading="lazy">'};
var IC={
 d:'<svg viewBox="0 0 48 48"><path d="M17 8h14l-3 5 9 31H11l9-31z"/><path d="M20 13h8"/></svg>',
 f:'<svg viewBox="0 0 48 48"><path d="M8 14c6-4 12 4 18 0s12-4 14 0v22c-2-4-8-4-14 0s-12-4-18 0z"/><path d="M8 14v22"/></svg>',
 c:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="15"/><circle cx="18" cy="19" r="2.4"/><circle cx="28" cy="16" r="2.4"/><circle cx="32" cy="25" r="2.4"/><path d="M24 39c-3 0-4-3-2-5s1-5-2-5"/></svg>',
 s:'<svg viewBox="0 0 48 48"><path d="M6 30l24-24 12 12-24 24z"/><path d="M14 22l3 3M19 17l3 3M24 12l3 3M11 27l3 3"/></svg>'};
var ST=[['d','التصميم','Design','من تصاميم الدار أو فكرتكِ الخاصة','From our designs or your own idea'],['f','القماش','Fabric','خامات حصرية لدى الدار','Fabrics exclusive to the house'],['c','اللون','Colour','كل الألوان متوفرة','Every colour available'],['s','المقاس','Size','على قياساتكِ تماماً','Cut to your exact measurements']];
var head=function(){return '<div class="k">'+T('التفصيل الخاص','MADE TO MEASURE')+'</div><h2 class="h">'+T('عباءتكِ، كما تتخيّلينها','Your abaya, as you imagine it')+'</h2>'};
var cta=function(){return '<a class="btn" href="tailoring.html">'+T('ابدئي طلب التفصيل','Start your order')+'</a>'};
var dur=function(){return '<span class="dur">'+T('جاهزة خلال أسبوع إلى أسبوعين','Ready in 1–2 weeks')+'</span>'};

function v1(){var l=L()==='ar';
 sec.innerHTML='<div class="m1"><div class="m1h">'+head()+'<p>'+T('أربع خطوات بسيطة، وتصلكِ عباءة مفصّلة لكِ وحدكِ.','Four simple steps to an abaya made for you alone.')+'</p></div>'+
  '<div class="m1s">'+ST.map(function(s){return '<div class="st1"><span class="ic">'+IC[s[0]]+'</span><b>'+(l?s[1]:s[2])+'</b><span>'+(l?s[3]:s[4])+'</span></div>'}).join('')+'</div>'+
  '<div class="m1f">'+cta()+dur()+'</div></div>'}

var pick={d:0,f:0,c:0,z:0,file:'',ms:{}};
var DSN=[['البريق','Bareeq','d1'],['الورد الأسود','Black Rose','d2'],['الربيع','Spring','d3']],
 FB=[['كريب','Crepe','مطفي وانسيابي','Matte and fluid','fc'],['شيفون','Chiffon','خفيف وشفاف قليلاً','Light, softly sheer','fh'],['ليننو','Linen','ملمس طبيعي محبوك','Natural woven texture','fl'],['حرير','Silk','لمعة ناعمة','Soft sheen','fs']],
 CL=[['#141414','أسود','Black'],['#4C050D','عنابي','Wine'],['#3e2a20','بنّي','Brown'],['#b9a48c','بيج','Beige'],['#1c2a44','كحلي','Navy'],['#6b6f72','رمادي','Grey']];
var MSR=[['l','الطول','Length'],['s','الكتف','Shoulder'],['b','الصدر','Bust'],['a','طول الكم','Sleeve']];
function v2(){var l=L()==='ar',i=l?0:1,d=DSN[Math.min(pick.d,2)],own=pick.d===3,f=FB[pick.f],c=CL[pick.c];
 var szTxt=pick.z===9?T('حسب قياساتي','My measurements'):MS.SIZES[pick.z];
 var msg=T('مرحباً، أريد تفصيل عباءة:','Hello, I would like a made-to-measure abaya:')+'\n'+T('التصميم: ','Design: ')+(own?T('فكرتي الخاصة','My own idea'):d[i])+'\n'+T('القماش: ','Fabric: ')+f[i]+'\n'+T('اللون: ','Colour: ')+c[l?1:2]+'\n'+T('المقاس: ','Size: ')+szTxt+
  (pick.z===9?'\n'+MSR.map(function(x){return x[l?1:2]+': '+(pick.ms[x[0]]||'-')+' cm'}).join('\n'):'')+(pick.note?'\n'+T('ملاحظات: ','Notes: ')+pick.note:'');
 sec.innerHTML='<div class="m2"><div class="m2l">'+head()+'<p>'+T('صمّمي عباءتكِ الآن، وشاهديها تتغيّر أمامكِ.','Design your abaya now, and watch it change before you.')+'</p>'+
  '<div class="pg2"><i style="width:'+(25*(1+(pick.f>0||pick.c>0)+(pick.c>0)+(pick.z>0)))+'%"></i></div>'+
  '<div class="mrw"><span class="lb">'+T('التصميم','Design')+'<em>'+(own?T('فكرتي الخاصة','My own idea'):d[i])+'</em></span><div class="dz">'+
   DSN.map(function(x,n){return '<button class="dsg'+(pick.d===n?' on':'')+'" data-k="d" data-n="'+n+'"><span class="dpv"><img src="img/mm/'+x[2]+'-em.webp" alt=""><span class="dsh" style="--m:url(img/mm/'+x[2]+'-sh.webp)"></span></span><b>'+x[i]+'</b></button>'}).join('')+
   '<label class="dsg up'+(own?' on':'')+'"><input type="file" accept="image/*" id="upf" hidden><span class="dpv"><svg viewBox="0 0 24 24"><path d="M12 16V5M7.5 9.5L12 5l4.5 4.5M5 19h14"/></svg></span><b>'+(pick.file||T('فكرتي الخاصة','My own idea'))+'</b></label></div></div>'+
  '<div class="mrw"><span class="lb">'+T('القماش','Fabric')+'<em>'+f[i]+'</em></span><div class="fz">'+FB.map(function(x,n){return '<button class="fab'+(pick.f===n?' on':'')+'" data-k="f" data-n="'+n+'"><span class="ftx '+x[4]+'"></span><b>'+x[i]+'</b><span>'+x[i+2]+'</span></button>'}).join('')+'</div></div>'+
  '<div class="mrw"><span class="lb">'+T('اللون','Colour')+'<em>'+c[l?1:2]+'</em></span><div class="cs2 dots">'+CL.map(function(x,n){return '<button class="dt'+(pick.c===n?' on':'')+'" data-k="c" data-n="'+n+'" style="--c:'+x[0]+'" aria-label="'+x[l?1:2]+'"></button>'}).join('')+'</div></div>'+
  '<div class="mrw"><span class="lb">'+T('المقاس','Size')+'<em>'+szTxt+'</em></span><div class="cs2">'+MS.SIZES.map(function(z,n){return '<button class="ch sz'+(pick.z===n?' on':'')+'" data-k="z" data-n="'+n+'">'+z+'</button>'}).join('')+'<button class="ch'+(pick.z===9?' on':'')+'" data-k="z" data-n="9">'+T('قياساتي الخاصة','My measurements')+'</button></div>'+
   (pick.z===9?'<div class="mz">'+MSR.map(function(x){return '<label><span>'+x[l?1:2]+'</span><input type="number" inputmode="decimal" data-ms="'+x[0]+'" value="'+(pick.ms[x[0]]||'')+'" placeholder="'+T('سم','cm')+'"></label>'}).join('')+'</div>':'')+'</div>'+
  '<div class="mrw"><span class="lb">'+T('ملاحظاتكِ','Your notes')+'</span><textarea id="mnote" rows="2" placeholder="'+T('مثلاً: أكمام أوسع، أو تطريز على الظهر','e.g. wider sleeves, or embroidery on the back')+'">'+(pick.note||'')+'</textarea></div></div>'+
  '<div class="m2r"><div class="card"><div class="stage"><div class="abp'+(own?' own':'')+' '+f[4]+'" style="--m:url(img/mm/'+d[2]+'-sh.webp);--e:url(img/mm/'+d[2]+'-em.webp);--c:'+c[0]+'"><i class="c"></i><i class="s"></i><i class="t"></i><i class="e"></i></div>'+
   (own&&pick.img?'<img class="ownimg" src="'+pick.img+'" alt="">':'')+'<span class="tagf">'+f[i]+' · '+c[l?1:2]+'</span></div>'+
  '<div class="sum"><span class="k">'+T('عباءتكِ','Your abaya')+'</span><ul><li><span>'+T('التصميم','Design')+'</span><b>'+(own?T('فكرتي الخاصة','My own idea'):d[i])+'</b></li><li><span>'+T('القماش','Fabric')+'</span><b>'+f[i]+'</b></li><li><span>'+T('اللون','Colour')+'</span><b>'+c[l?1:2]+'</b></li><li><span>'+T('المقاس','Size')+'</span><b>'+szTxt+'</b></li></ul>'+
  '<p class="pn">'+T('يحدّد الأتيليه السعر بعد مراجعة طلبكِ، ويتواصل معكِ خلال يوم عمل.','The atelier confirms the price after reviewing your request, within one working day.')+'</p>'+
  '<a class="btn" href="tailoring.html">'+T('أرسلي الطلب','Send your request')+'</a>'+
  '<a class="wa2" target="_blank" rel="noopener" href="https://wa.me/'+MS.WA+'?text='+encodeURIComponent(msg)+'">'+MS.I.wa+'<span>'+T('أو أرسليه عبر واتساب','Or send it on WhatsApp')+'</span></a>'+dur()+'</div></div></div></div>';
 [].forEach.call(sec.querySelectorAll('[data-k]'),function(b){b.onclick=function(){pick[b.dataset.k]=+b.dataset.n;keep(v2)}});
 var up=D.getElementById('upf');up.onchange=function(){var fl=up.files[0];if(!fl)return;pick.d=3;pick.file=fl.name.length>18?fl.name.slice(0,16)+'…':fl.name;var r=new FileReader();r.onload=function(){pick.img=r.result;keep(v2)};r.readAsDataURL(fl)};
 sec.querySelector('.up').onclick=function(e){if(e.target.tagName!=='INPUT'&&pick.d!==3&&pick.img){pick.d=3;e.preventDefault();keep(v2)}};
 [].forEach.call(sec.querySelectorAll('[data-ms]'),function(x){x.oninput=function(){pick.ms[x.dataset.ms]=x.value;var w=sec.querySelector('.wa2');if(w)w.href=w.href}});
 D.getElementById('mnote').oninput=function(e){pick.note=e.target.value}}
if(V===2&&'IntersectionObserver' in window)new IntersectionObserver(function(e){D.body.classList.toggle('inmm',e[0].isIntersecting)}).observe(sec);
function keep(fn){var y=scrollY;fn();scrollTo(0,y)}

function v3(){var l=L();
 sec.innerHTML='<div class="m3"><div class="m3p">'+ph('t3')+'<div class="m3c">'+head()+'</div></div><div class="m3t"><p class="m3i">'+T('من الفكرة إلى عباءة على قياسكِ، خطوة بخطوة.','From an idea to an abaya cut to you, step by step.')+'</p><div class="tl" id="tl"><i class="tlf" id="tlf"></i>'+
  ST.map(function(s){return '<div class="ts"><span class="ic">'+IC[s[0]]+'</span><div><b>'+(l==='ar'?s[1]:s[2])+'</b><span>'+(l==='ar'?s[3]:s[4])+'</span></div></div>'}).join('')+
  '<div class="ts end"><span class="ic"><svg viewBox="0 0 48 48"><path d="M10 25l9 9 19-20"/></svg></span><div><b>'+T('تصلكِ جاهزة','Delivered to you')+'</b><span>'+T('خلال أسبوع إلى أسبوعين','Within 1–2 weeks')+'</span></div></div></div>'+cta()+'</div></div>';
 var tl=D.getElementById('tl'),f=D.getElementById('tlf'),items=tl.querySelectorAll('.ts');
 function sc(){var r=tl.getBoundingClientRect(),h=innerHeight*.62,p=Math.max(0,Math.min(1,(h-r.top)/r.height));f.style.height=(p*100)+'%';
  [].forEach.call(items,function(it){it.classList.toggle('on',it.getBoundingClientRect().top<h)})}
 addEventListener('scroll',sc,{passive:true});sc()}

function render(){({1:v1,2:v2,3:v3})[V]()}
MS.onLang.push(render);render();
})();
