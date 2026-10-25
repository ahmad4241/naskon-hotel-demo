/* سيدة العباية — categories previews: ?cat=1 editorial index · ?cat=2 arches · ?cat=3 mosaic */
(function(){
var m=location.search.match(/cat=([123])/);if(!m)return;var V=+m[1];
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
function render(){({1:v1,2:v2,3:v3})[V]()}
MS.onLang.push(render);render();
})();
