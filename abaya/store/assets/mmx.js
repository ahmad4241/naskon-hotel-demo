/* سيدة العباية — «التفصيل الخاص» previews: ?mm=1 atelier steps · ?mm=2 mini builder · ?mm=3 timeline */
(function(){
var m=location.search.match(/mm=([123])/);if(!m)return;var V=+m[1];
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

var pick={d:0,f:0,c:0,z:0};
var DS=[['من تصاميم الدار','House design'],['فكرتي الخاصة','My own idea']],FB=[['كريب','Crepe'],['شيفون','Chiffon'],['ليننو','Linen'],['حرير','Silk']],
 CL=[['#141414','أسود','Black'],['#3e2a20','بنّي','Brown'],['#b9a48c','بيج','Beige'],['#1c2a44','كحلي','Navy'],['#4C050D','عنابي','Wine']];
function v2(){var l=L()==='ar',i=l?0:1;
 function chips(arr,k){return arr.map(function(a,n){return '<button class="ch'+(pick[k]===n?' on':'')+'" data-k="'+k+'" data-n="'+n+'">'+a[i]+'</button>'}).join('')}
 sec.innerHTML='<div class="m2"><div class="m2l">'+head()+'<p>'+T('جرّبي الآن: اختاري، ونكمل معكِ الطلب.','Try it now: choose, and we will complete the order with you.')+'</p>'+
  '<div class="row"><span class="lb">'+T('التصميم','Design')+'</span><div class="cs2">'+chips(DS,'d')+'</div></div>'+
  '<div class="row"><span class="lb">'+T('القماش','Fabric')+'</span><div class="cs2">'+chips(FB,'f')+'</div></div>'+
  '<div class="row"><span class="lb">'+T('اللون','Colour')+'</span><div class="cs2 dots">'+CL.map(function(c,n){return '<button class="dt'+(pick.c===n?' on':'')+'" data-k="c" data-n="'+n+'" style="--c:'+c[0]+'" title="'+c[l?1:2]+'"></button>'}).join('')+'</div></div>'+
  '<div class="row"><span class="lb">'+T('المقاس','Size')+'</span><div class="cs2">'+MS.SIZES.map(function(z,n){return '<button class="ch sz'+(pick.z===n?' on':'')+'" data-k="z" data-n="'+n+'">'+z+'</button>'}).join('')+'<button class="ch'+(pick.z===9?' on':'')+'" data-k="z" data-n="9">'+T('مقاساتي','My measurements')+'</button></div></div></div>'+
  '<div class="m2r"><div class="card"><div class="cim">'+ph('t1')+'<span class="sw" style="background:'+CL[pick.c][0]+'"></span></div><div class="sum"><span class="k">'+T('عباءتكِ','Your abaya')+'</span>'+
  '<ul><li><span>'+T('التصميم','Design')+'</span><b>'+DS[pick.d][i]+'</b></li><li><span>'+T('القماش','Fabric')+'</span><b>'+FB[pick.f][i]+'</b></li><li><span>'+T('اللون','Colour')+'</span><b>'+CL[pick.c][l?1:2]+'</b></li><li><span>'+T('المقاس','Size')+'</span><b>'+(pick.z===9?T('حسب قياساتي','Custom'):MS.SIZES[pick.z])+'</b></li></ul>'+
  '<a class="btn" href="tailoring.html?d='+pick.d+'&f='+pick.f+'&c='+pick.c+'&z='+pick.z+'">'+T('أكملي الطلب','Continue your order')+'</a>'+dur()+'</div></div></div></div>';
 [].forEach.call(sec.querySelectorAll('[data-k]'),function(b){b.onclick=function(){pick[b.dataset.k]=+b.dataset.n;v2()}})}

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
