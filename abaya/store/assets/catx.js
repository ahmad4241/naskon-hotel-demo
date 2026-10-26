/* سيدة العباية — categories previews: ?cat=1 editorial index · ?cat=2 arches · ?cat=3 mosaic */
(function(){
var m=location.search.match(/cat=([1-5])/),V=m?+m[1]:5;
var D=document,L=MS.L,T=MS.T,sec=D.getElementById('catSec'),ct=D.getElementById('ct');
var PH=!/photos=1/.test(location.search);
sec.classList.add('cx','cx'+V);ct.className='cxb';
var ORD=['formal','occasion','design','daily','under'];
var DS={formal:['للعمل والمناسبات الرسمية','For work and formal occasions'],occasion:['لأمسياتكِ الخاصة','For your special evenings'],design:['قطع حصرية من الدار','Exclusive pieces from the house'],daily:['أناقة عملية لكل يوم','Effortless elegance, every day'],under:['فساتين · سوت','Dresses · Suits']};
var TONE={formal:'t1',occasion:'t2',design:'t3',daily:'t4',under:'t5'};
function c(id){return MS.CATS.filter(function(x){return x.id===id})[0]}
function pic(cat){return PH?'<span class="cph '+TONE[cat.id]+'"><svg><use href="#s1"/></svg></span>':'<img src="'+cat.img+'" alt="" loading="lazy">'}
function subs(cat){return cat.subs?'<span class="cs">'+cat.subs.map(function(s){return '<a href="category.html?c=under&s='+s.id+'">'+s[L()]+'</a>'}).join('')+'</span>':''}
function v1(){var l=L();
 ct.innerHTML='<div class="ix">'+ORD.map(function(id){var k=c(id);return '<a class="ir" href="category.html?c='+id+'" data-id="'+id+'"><span class="th">'+pic(k)+'</span><span class="nm">'+k[l]+'</span><span class="ds">'+DS[id][l==='ar'?0:1]+'</span><i>←</i></a>'}).join('')+
  '</div><div class="ixp" id="ixp">'+ORD.map(function(id){return '<span data-id="'+id+'">'+pic(c(id))+'</span>'}).join('')+'</div>';
 var pv=D.getElementById('ixp');
 function sel(id){[].forEach.call(pv.children,function(s){s.classList.toggle('on',s.dataset.id===id)});[].forEach.call(ct.querySelectorAll('.ir'),function(r){r.classList.toggle('act',r.dataset.id===id)})}
 [].forEach.call(ct.querySelectorAll('.ir'),function(r){r.addEventListener('mouseenter',function(){sel(r.dataset.id)})});
 sel(ORD[0])}
function v2(){var l=L();
 ct.innerHTML='<div class="ar2">'+ORD.map(function(id){var k=c(id);return '<a class="ac" href="category.html?c='+id+'"><span class="arch">'+pic(k)+'</span><span class="nm">'+k[l]+'</span><span class="ds">'+DS[id][l==='ar'?0:1]+'</span></a>'}).join('')+'</div>'}
function v3(){var l=L(),A=['formal','occasion','design','daily'];
 ct.innerHTML='<div class="bx">'+A.map(function(id,i){var k=c(id);return '<a class="bt b'+i+(PH&&id!=='design'?' lt':'')+'" href="category.html?c='+id+'">'+pic(k)+'<span class="ov"></span><span class="lb"><span class="ds">'+DS[id][l==='ar'?0:1]+'</span><span class="nm">'+k[l]+'</span><span class="go">'+T('تسوّقي','Shop')+' <i>←</i></span></span></a>'}).join('')+
  (function(){var u=c('under');return '<div class="bt bu"><span class="cph t5f"><svg><use href="#s1"/></svg></span><span class="lb"><span class="ds">'+T('القطعة التي تكتمل بها العباية','The piece that completes the abaya')+'</span><a class="nm" href="category.html?c=under">'+u[l]+'</a>'+subs(u)+'</span></div>'})()+'</div>'}
function v4(){var l=L(),fmt=MS.fmt;
 function cnt(n){return l==='ar'?(n===1?'قطعة واحدة':n===2?'قطعتان':n.toLocaleString('ar-IQ')+(n<=10?' قطع':' قطعة')):(n+(n===1?' piece':' pieces'))}
 ct.innerHTML='<div class="sx4" id="sx4">'+ORD.map(function(id){var k=c(id),ps=MS.PRODUCTS.filter(function(p){return p.cat===id});
  var mini=ps.slice(0,3).map(function(p){return '<a class="mi" href="product.html?p='+p.id+'"><span class="mt">'+(PH?'<span class="cph '+TONE[id]+'"><svg><use href="#s1"/></svg></span>':'<img src="'+p.img+'" alt="" loading="lazy">')+'</span><span class="mp">'+fmt(p.price)+'</span></a>'}).join('');
  return '<article class="k4"><a class="arch" href="category.html?c='+id+'" data-imgs="'+ps.map(function(p){return p.img}).join(',')+'">'+pic(k)+(ps.length?'<span class="cn">'+cnt(ps.length)+'</span>':'')+'</a>'+
   '<div class="hd4"><a class="nm" href="category.html?c='+id+'">'+k[l]+'</a><a class="all" href="category.html?c='+id+'">'+T('الكل','All')+' <i>←</i></a></div><span class="ds">'+DS[id][l==='ar'?0:1]+'</span>'+
   (k.subs?subs(k):'<div class="mrow">'+mini+'</div>')+'</article>'}).join('')+'</div>'+
  '<div class="g1f"><div class="bar"><i id="sx4b"></i></div><div class="ar"><button id="sx4p" aria-label="prev">→</button><button id="sx4n" aria-label="next">←</button></div></div>';
 var r=D.getElementById('sx4');function up(){var mx=r.scrollWidth-r.clientWidth,f=mx>0?Math.abs(r.scrollLeft)/mx:0;D.getElementById('sx4b').style.width=(22+f*78)+'%'}
 r.addEventListener('scroll',up,{passive:true});up();
 var st=function(k){r.scrollBy({left:k*(D.dir==='rtl'?-1:1)*(r.firstChild.getBoundingClientRect().width+18),behavior:'smooth'})};
 D.getElementById('sx4n').onclick=function(){st(1)};D.getElementById('sx4p').onclick=function(){st(-1)};
 if(!PH)[].forEach.call(r.querySelectorAll('.arch'),function(a){var im=a.querySelector('img'),L2=a.dataset.imgs.split(',').filter(Boolean),i=0,t;if(!im||L2.length<2)return;
  a.addEventListener('mouseenter',function(){t=setInterval(function(){i=(i+1)%L2.length;im.src=L2[i]},900)});a.addEventListener('mouseleave',function(){clearInterval(t)})})}
function v5(){var l=L(),A=['design','formal','occasion','daily','under'];
 ct.innerHTML='<div class="g5">'+A.map(function(id,i){var k=c(id);return '<a class="t5x'+(i===0?' big':'')+'" href="category.html?c='+id+'"><span class="arch">'+pic(k)+'</span><span class="nm">'+k[l]+'</span><span class="ds">'+DS[id][l==='ar'?0:1]+'</span></a>'}).join('')+'</div>'}
function render(){({1:v1,2:v2,3:v3,4:v4,5:v5})[V]()}
MS.onLang.push(render);render();
})();
