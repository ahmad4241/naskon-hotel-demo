/* سيدة العباية — header: one design, two layouts (phone / laptop) */
(function(){
var D=document,H=D.documentElement,B=D.body,L=MS.L,T=MS.T,I=MS.I;
var hd=D.getElementById('hd'),ann=D.getElementById('ann');
var bMenu=D.getElementById('bMenu'),bBag=D.getElementById('bBag'),bLang=D.getElementById('bLang'),acc=hd.querySelector('a.ic'),mk=hd.querySelector('.mk');
bLang.innerHTML=I.globe+'<span class="lt"></span>';bLang.classList.add('lg');
mk.innerHTML='<span class="wm2">MS ABAYA</span>';
var r1=D.createElement('div');r1.className='r1';
var s=D.createElement('div');s.className='s';s.append(bMenu,bLang);/* language shows in the header on laptop only; on phones it lives in the menu */
var e=D.createElement('div');e.className='e';e.append(acc,bBag);
r1.append(s,mk,e);
var nav=D.createElement('nav');nav.className='dn';
var mega=D.createElement('div');mega.className='mega';
hd.innerHTML='';hd.append(r1,nav,mega);hd.classList.add('hv');

function render(){var l=L();
 D.querySelector('#bLang .lt').textContent=l==='ar'?'English':'العربية';
 nav.innerHTML=[
  ['home2.html',T('الرئيسية','Home')],
  ['category.html',T('المتجر','Shop'),'mega'],
  ['category.html?s=new',T('وصل حديثاً','New in')],
  ['category.html?l=vip','VIP','vipn'],
  ['tailoring.html',T('التفصيل الخاص','Made to measure')],
  ['about.html',T('من نحن','About us')],
  ['contact.html',T('تواصلي معنا','Contact')]
 ].map(function(x){return '<a href="'+x[0]+'"'+(x[2]==='mega'?' data-mega class="hasm"':x[2]?' class="'+x[2]+'"':'')+'><span>'+x[1]+'</span>'+(x[2]==='mega'?'<i></i>':'')+'</a>'}).join('');
 var cats=MS.CATS.filter(function(c){return c.id!=='under'}).map(function(c){return '<a href="category.html?c='+c.id+'">'+c[l]+'</a>'}).join('');
 var un=MS.CATS.filter(function(c){return c.id==='under'})[0];
 mega.innerHTML='<div class="mg">'+
  '<div class="mc"><em>'+T('العبايات','Abayas')+'</em><a href="category.html">'+T('كل العبايات','All abayas')+'</a>'+cats+'</div>'+
  '<div class="mc"><em>'+un[l]+'</em><a href="category.html?c=under">'+T('الكل','All')+'</a>'+un.subs.map(function(x){return '<a href="category.html?c=under&s='+x.id+'">'+x[l]+'</a>'}).join('')+'</div>'+
  '<div class="mc"><em>'+T('حسب المستوى','By level')+'</em><a href="category.html?l=daily">'+T('يومي','Everyday')+'</a><a href="category.html?l=lux">'+T('فاخر','Luxury')+'</a><a href="category.html?l=vip">VIP</a><a href="category.html?s=sale">'+T('العروض','Offers')+'</a></div>'+
  '<a class="mt" href="category.html?s=new"><span class="ph2"><svg><use href="#s1"/></svg></span><b>'+T('القطع الجديدة','New arrivals')+'</b><small>'+T('اكتشفي المجموعة','Discover the collection')+'</small></a>'+
  '<a class="mt nv2" href="category.html?l=vip"><span class="ph2"><svg><use href="#s1"/></svg></span><b>VIP</b><small>'+T('المجموعة الخاصة','The private collection')+'</small></a>'+
 '</div>';
}
MS.onLang.push(render);

/* shop panel (laptop only) */
var mt,lap=matchMedia('(min-width:1024px)');
function mOpen(){if(!lap.matches)return;clearTimeout(mt);hd.classList.add('mo')}
function mClose(){mt=setTimeout(function(){hd.classList.remove('mo')},180)}
hd.addEventListener('mouseover',function(ev){if(ev.target.closest('[data-mega]')||ev.target.closest('.mega'))mOpen();else if(ev.target.closest('.dn a'))hd.classList.remove('mo')});
hd.addEventListener('mouseleave',mClose);
mega.addEventListener('mouseleave',mClose);
lap.addEventListener('change',function(){hd.classList.remove('mo')});

/* scroll: the header stays with you; it turns solid as soon as you start scrolling */
function sc(){var y=scrollY;B.classList.toggle('scd',y>8);if(B.dataset.over==='1')hd.classList.toggle('clear',y<40&&!hd.classList.contains('mo'))}
addEventListener('scroll',sc,{passive:true});sc();
})();
