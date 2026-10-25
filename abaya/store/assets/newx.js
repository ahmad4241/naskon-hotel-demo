/* سيدة العباية — «وصل حديثاً» previews: ?new=1 gallery rail · ?new=2 feature + grid · ?new=3 spotlight on felt */
(function(){
var m=location.search.match(/new=([123])/),V=m?+m[1]:1;
var D=document,L=MS.L,T=MS.T,fmt=MS.fmt,I=MS.I,sec=D.getElementById('newSec');
var PH=!/photos=1/.test(location.search);
sec.classList.add('nx','nx'+V);
D.getElementById('rail').style.display='none';sec.querySelector('.prog').style.display='none';
var box=D.createElement('div');box.className='nxb';sec.appendChild(box);
var P=MS.PRODUCTS.slice();
function pic(p,cls){return PH?'<span class="nph'+(cls?' '+cls:'')+'"><svg><use href="#s1"/></svg></span>':'<img src="'+p.img+'" alt="'+p[L()]+'" loading="lazy">'}
function tag(p){return p.lvl==='vip'?'<b class="nt v">VIP</b>':p.old?'<b class="nt s">'+T('خصم','Sale')+'</b>':p.isNew?'<b class="nt">'+T('جديد','New')+'</b>':''}
function price(p){return p.old?'<em>'+fmt(p.price)+'</em><s>'+fmt(p.old)+'</s>':fmt(p.price)}
function fav(p){var on=MS.favs().indexOf(p.id)>-1;return '<button class="nf'+(on?' on':'')+'" data-fav="'+p.id+'" aria-label="'+T('المفضلة','Wishlist')+'">'+I.heart+'</button>'}
function sizes(p){return '<div class="nsz">'+MS.SIZES.map(function(z){return '<button data-add="'+p.id+'" data-size="'+z+'">'+z+'</button>'}).join('')+'</div>'}
var n2=function(i){return (i<9?'0':'')+(i+1)};
D.addEventListener('click',function(e){var b=e.target.closest('[data-add]');if(!b||!sec.contains(b))return;e.preventDefault();MS.addToCart(b.dataset.add,+b.dataset.size,1,0);b.classList.add('ok');setTimeout(function(){b.classList.remove('ok')},900)});

/* ---------- 1: gallery rail with quick add ---------- */
function v1(){box.innerHTML='<div class="g1" id="g1">'+P.map(function(p,i){return '<article class="c1"><a class="im" href="product.html?p='+p.id+'">'+pic(p)+tag(p)+'</a>'+fav(p)+
 '<button class="qa" aria-label="'+T('إضافة سريعة','Quick add')+'">+</button><div class="qs"><span>'+T('اختاري المقاس','Select size')+'</span>'+sizes(p)+'</div>'+
 '<div class="in"><a href="product.html?p='+p.id+'" class="nm">'+p[L()]+'</a><span class="pr">'+price(p)+'</span></div></article>'}).join('')+'</div>'+
 '<div class="g1f"><div class="bar"><i id="g1b"></i></div><div class="ar"><button id="g1p" aria-label="prev">→</button><button id="g1x" aria-label="next">←</button></div></div>';
 var r=D.getElementById('g1');
 function up(){var max=r.scrollWidth-r.clientWidth,x=Math.abs(r.scrollLeft),f=max>0?x/max:0;D.getElementById('g1b').style.width=(20+f*80)+'%'}
 r.addEventListener('scroll',up,{passive:true});up();
 var dir=function(){return D.dir==='rtl'?-1:1},step=function(k){r.scrollBy({left:k*dir()*(r.firstChild.getBoundingClientRect().width+14),behavior:'smooth'})};
 D.getElementById('g1x').onclick=function(){step(1)};D.getElementById('g1p').onclick=function(){step(-1)};
 [].forEach.call(r.querySelectorAll('.qa'),function(b){b.onclick=function(e){e.preventDefault();b.parentNode.classList.toggle('qo')}})}

/* ---------- 2: one featured piece + grid ---------- */
function v2(){var f=P[0],rest=P.slice(1,5),l=L();
 box.innerHTML='<div class="g2"><article class="ft"><a class="im" href="product.html?p='+f.id+'">'+pic(f,'big')+tag(f)+'</a>'+fav(f)+
  '<div class="fi"><span class="k">'+T('قطعة الموسم','PIECE OF THE SEASON')+'</span><a class="nm" href="product.html?p='+f.id+'">'+f[l]+'</a><p>'+f['d'+l]+'</p>'+
  '<div class="fr"><span class="pr">'+price(f)+'</span><span class="sw">'+f.colors.map(function(c){return '<i style="background:'+c.h+'" title="'+c[l]+'"></i>'}).join('')+'</span></div>'+
  '<span class="lb">'+T('المقاس','Size')+'</span>'+sizes(f)+'<a class="btn" href="product.html?p='+f.id+'">'+T('عرض القطعة','View the piece')+'</a></div></article>'+
  '<div class="gr">'+rest.map(function(p){return '<article class="c2"><a class="im" href="product.html?p='+p.id+'">'+pic(p)+tag(p)+'</a>'+fav(p)+'<a class="nm" href="product.html?p='+p.id+'">'+p[l]+'</a><span class="pr">'+price(p)+'</span></article>'}).join('')+'</div></div>'}

/* ---------- 3: spotlight on felt ---------- */
var cur=0,tm;
function v3(){var l=L();
 box.innerHTML='<div class="g3"><div class="st3" id="st3">'+P.map(function(p,i){return '<a class="c3" data-i="'+i+'" href="product.html?p='+p.id+'">'+pic(p,'dk')+'</a>'}).join('')+'</div>'+
  '<div class="i3" id="i3"></div><div class="nv3"><button id="p3" aria-label="prev">→</button><div class="dt3" id="dt3">'+P.map(function(_,i){return '<button data-d="'+i+'"></button>'}).join('')+'</div><button id="x3" aria-label="next">←</button></div></div>';
 function go(i){cur=(i+P.length)%P.length;var cs=D.querySelectorAll('#st3 .c3');
  [].forEach.call(cs,function(c,k){var d=k-cur;if(d>P.length/2)d-=P.length;if(d<-P.length/2)d+=P.length;var s=D.dir==='rtl'?-1:1;
   c.style.transform='translateX(calc(-50% + '+(s*d*62)+'%)) scale('+(d===0?1:.78)+')';c.style.opacity=Math.abs(d)>1?0:d===0?1:.45;c.style.zIndex=10-Math.abs(d);c.classList.toggle('on',d===0)});
  [].forEach.call(D.querySelectorAll('#dt3 button'),function(b,k){b.classList.toggle('on',k===cur)});
  var p=P[cur],x=D.getElementById('i3');x.classList.remove('in');void x.offsetWidth;
  x.innerHTML='<span class="k">'+n2(cur)+' — '+n2(P.length-1)+'</span><a class="nm" href="product.html?p='+p.id+'">'+p[L()]+'</a><p>'+p['d'+L()]+'</p><span class="pr">'+price(p)+'</span><a class="lnk" href="product.html?p='+p.id+'"><span>'+T('اكتشفيها','Discover it')+'</span><i>←</i></a>';x.classList.add('in');
  clearTimeout(tm);tm=setTimeout(function(){go(cur+1)},5500)}
 D.getElementById('x3').onclick=function(){go(cur+1)};D.getElementById('p3').onclick=function(){go(cur-1)};
 [].forEach.call(D.querySelectorAll('#dt3 button'),function(b){b.onclick=function(){go(+b.dataset.d)}});
 [].forEach.call(D.querySelectorAll('#st3 .c3'),function(c){c.addEventListener('click',function(e){if(+c.dataset.i!==cur){e.preventDefault();go(+c.dataset.i)}})});
 var sx=null,st=D.getElementById('st3');st.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
 st.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+((dx<0)===(D.dir==='rtl')?-1:1))},{passive:true});
 go(cur)}

function render(){({1:v1,2:v2,3:v3})[V]()}
MS.onLang.push(render);render();
})();
