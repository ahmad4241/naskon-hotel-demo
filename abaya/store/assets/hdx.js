/* header previews: ?h=1 classic centred · ?h=2 wordmark · ?h=3 with category row */
(function(){
var D=document,H=D.documentElement,B=D.body,L=MS.L,T=MS.T,I=MS.I;
var m=location.search.match(/h=([123])/),V=m?+m[1]:2;H.setAttribute('data-h',V);
var hd=D.getElementById('hd'),ann=D.getElementById('ann');
var bMenu=D.getElementById('bMenu'),bBag=D.getElementById('bBag'),bLang=D.getElementById('bLang'),acc=hd.querySelector('a.ic'),mk=hd.querySelector('.mk');
var bS=D.createElement('button');bS.className='ic';bS.setAttribute('aria-label','بحث');bS.innerHTML=I.search;bS.onclick=function(){MS.openSearch()};
bLang.innerHTML='<span class="lt"></span>';bLang.classList.add('lg');
var s=D.createElement('div');s.className='s';s.append(bMenu,bS);
var e=D.createElement('div');e.className='e';e.append(bLang,acc,bBag);
if(V===2){mk.innerHTML='<span class="wm2">MS ABAYA</span>'}
hd.innerHTML='';hd.append(s,mk,e);hd.classList.add('hv');
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
