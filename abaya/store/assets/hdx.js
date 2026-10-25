/* header previews: ?h=1 classic centred · ?h=2 wordmark · ?h=3 with category row */
(function(){
var D=document,H=D.documentElement,B=D.body,L=MS.L,T=MS.T,I=MS.I;
var m=location.search.match(/h=([123])/),V=m?+m[1]:2;H.setAttribute('data-h',V);
var hd=D.getElementById('hd'),ann=D.getElementById('ann');
var bMenu=D.getElementById('bMenu'),bBag=D.getElementById('bBag'),bLang=D.getElementById('bLang'),acc=hd.querySelector('a.ic'),mk=hd.querySelector('.mk');
var bS=D.createElement('button');bS.className='ic';bS.setAttribute('aria-label','بحث');bS.innerHTML=I.search;bS.onclick=function(){MS.openSearch()};
bLang.innerHTML='<span class="lt"></span>';bLang.classList.add('lg');
var s=D.createElement('div');s.className='s';s.append(bMenu,bLang);
var e=D.createElement('div');e.className='e';e.append(acc,bBag);
if(V===2){mk.innerHTML='<span class="wm2">MS ABAYA</span>'}
var dS=D.createElement('nav');dS.className='dn';var dE=D.createElement('nav');dE.className='dn';
s.append(dS);e.insertBefore(dE,e.firstChild);
var mega=D.createElement('div');mega.className='mega';
hd.innerHTML='';hd.append(s,mk,e,mega);hd.classList.add('hv');
function dnR(){var l=L();
 dS.innerHTML='<a href="home2.html">'+T('الرئيسية','Home')+'</a><a href="category.html" class="hasm" data-mega>'+T('المتجر','Shop')+'<i></i></a><a href="tailoring.html">'+T('التفصيل الخاص','Made to measure')+'</a><a href="category.html?l=vip" class="vipn">VIP</a>';
 dE.innerHTML='<a href="about.html">'+T('من نحن','About')+'</a><a href="contact.html">'+T('تواصلي معنا','Contact')+'</a>';
 var cats=MS.CATS.filter(function(c){return c.id!=='under'}).map(function(c){return '<a href="category.html?c='+c.id+'">'+c[l]+'</a>'}).join('');
 var un=MS.CATS.filter(function(c){return c.id==='under'})[0];
 mega.innerHTML='<div class="mg">'+
  '<div class="mc"><em>'+T('العبايات','Abayas')+'</em><a href="category.html">'+T('كل العبايات','All abayas')+'</a>'+cats+'</div>'+
  '<div class="mc"><em>'+un[l]+'</em><a href="category.html?c=under">'+T('الكل','All')+'</a>'+un.subs.map(function(x){return '<a href="category.html?c=under&s='+x.id+'">'+x[l]+'</a>'}).join('')+'</div>'+
  '<div class="mc"><em>'+T('حسب المستوى','By level')+'</em><a href="category.html?l=daily">'+T('يومي','Everyday')+'</a><a href="category.html?l=lux">'+T('فاخر','Luxury')+'</a><a href="category.html?l=vip">VIP</a></div>'+
  '<div class="mc"><em>'+T('مختارات','Edits')+'</em><a href="category.html?s=new">'+T('وصل حديثاً','New in')+'</a><a href="category.html?s=sale">'+T('العروض','Offers')+'</a><a href="tailoring.html">'+T('التفصيل الخاص','Made to measure')+'</a></div>'+
  '<a class="mt" href="category.html?s=new"><span class="ph2"><svg><use href="#s1"/></svg></span><b>'+T('القطع الجديدة','New arrivals')+'</b><small>'+T('اكتشفي المجموعة','Discover the collection')+' ←</small></a>'+
  '<a class="mt nv2" href="category.html?l=vip"><span class="ph2"><svg><use href="#s1"/></svg></span><b>VIP</b><small>'+T('المجموعة الخاصة','The private collection')+' ←</small></a>'+
  '</div>'}
MS.onLang.push(dnR);
var mt;function mOpen(){clearTimeout(mt);hd.classList.add('mo')}function mClose(){mt=setTimeout(function(){hd.classList.remove('mo')},160)}
hd.addEventListener('mouseover',function(ev){if(ev.target.closest('[data-mega]')||ev.target.closest('.mega'))mOpen()});
hd.addEventListener('mouseout',function(ev){if(ev.target.closest('[data-mega]')||ev.target.closest('.mega'))mClose()});
if(V===3){var nv=D.createElement('nav');nv.className='nv';hd.appendChild(nv)}
function txt(){D.querySelector('#bLang .lt').textContent=L()==='ar'?'EN':'ع';
 if(V===3)nv.innerHTML=[['category.html',T('كل العبايات','All abayas')],['category.html?c=under',T('تحت العباية','Under the abaya')],['category.html?l=vip','VIP'],['tailoring.html',T('التفصيل الخاص','Made to measure')],['category.html?s=sale',T('العروض','Offers')],['category.html?s=new',T('وصل حديثاً','New in')]].map(function(x){return '<a href="'+x[0]+'">'+x[1]+'</a>'}).join('')}
var ml=D.createElement('button');ml.className='mlang';ml.onclick=function(){MS.setLang(L()==='ar'?'en':'ar')};
var top=D.querySelector('#ovM .top');if(top)top.insertBefore(ml,top.firstChild);
function mlt(){ml.textContent=L()==='ar'?'English':'العربية'}
MS.onLang.push(txt);MS.onLang.push(mlt);txt();mlt();
if(V===2){var ANN=[T('التوصيل لجميع محافظات العراق','Delivery to all Iraqi governorates'),T('الدفع عند الاستلام أو بالبطاقة','Cash on delivery or card'),T('تفصيل خاص خلال أسبوع إلى أسبوعين','Made to measure in 1–2 weeks')];
 function mq(){var r=[T('التوصيل لجميع محافظات العراق','Delivery to all Iraqi governorates'),T('الدفع عند الاستلام أو بالبطاقة','Cash on delivery or card'),T('تفصيل خاص خلال أسبوع إلى أسبوعين','Made to measure in 1–2 weeks'),T('استبدال خلال ٣ أيام','Exchange within 3 days')].map(function(t){return '<span>'+t+'</span>'}).join('');ann.innerHTML='<div class="mq"><div class="tr">'+r+r+r+r+'</div></div>'}
 MS.onLang.push(mq);setTimeout(mq,0)}
/* scroll: bar folds away, header hides going down, returns going up */
var ly=scrollY,acc2=0;
function sc(){var y=scrollY,d=y-ly;ly=y;B.classList.toggle('scd',y>8);
 if(y<120){B.classList.remove('hdh');acc2=0;return}
 acc2=(d>0)===(acc2>0)?acc2+d:d;if(acc2>24)B.classList.add('hdh');else if(acc2<-12)B.classList.remove('hdh')}
addEventListener('scroll',sc,{passive:true});sc();
})();
