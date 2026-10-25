/* menu previews: ?m=1 drawer · ?m=2 full screen on wine felt */
(function(){
var D=document,H=D.documentElement,L=MS.L,T=MS.T,I=MS.I;
var m=location.search.match(/m=([12])/),V=m?+m[1]:1;H.setAttribute('data-m',V);
var ov=D.getElementById('ovM'),pn=ov.querySelector('.pn'),top=pn.querySelector('.top'),x=top.querySelector('.x'),ml=top.querySelector('.mlang');
var wm=D.createElement('span');wm.className='mwm';wm.innerHTML='<svg aria-label="MS ABAYA" role="img"><use href="#wmen"/></svg>';
var gl=D.createElement('button');gl.className='mgl';gl.onclick=function(){MS.setLang(L()==='ar'?'en':'ar')};
top.innerHTML='';top.append(x,wm,gl);
function cat(id){return MS.CATS.filter(function(c){return c.id===id})[0]}
function acc(key,label,inner){return '<div class="ma" data-k="'+key+'"><button class="mh"><span>'+label+'</span><i></i></button><div class="mb"><div>'+inner+'</div></div></div>'}
function lk(h,t,c){return '<a class="ml'+(c?' '+c:'')+'" href="'+h+'"><span>'+t+'</span></a>'}
function render(){var l=L();gl.innerHTML=I.globe+'<span>'+(l==='ar'?'English':'العربية')+'</span>';
 var col='<a class="hl" href="category.html?s=sale">'+T('العروض','Offers')+'</a><a href="category.html">'+T('كل العبايات','All abayas')+'</a>'+
  ['daily','formal','occasion','design'].map(function(id){return '<a href="category.html?c='+id+'">'+cat(id)[l]+'</a>'}).join('');
 var un='<a href="category.html?c=under">'+T('الكل','All')+'</a>'+cat('under').subs.map(function(s){return '<a href="category.html?c=under&s='+s.id+'">'+s[l]+'</a>'}).join('');
 D.getElementById('mn').innerHTML='<button class="msr">'+I.search+'<span>'+T('ابحثي في المتجر','Search the store')+'</span></button>'+
  '<div class="mfe"><a href="category.html?s=new"><span><svg><use href="#s1"/></svg></span><b>'+T('وصل حديثاً','New in')+'</b></a><a class="nv" href="category.html?l=vip"><span><svg><use href="#s1"/></svg></span><b>'+T('مجموعة VIP','The VIP collection')+'</b></a></div>'+
  '<div class="mp">'+acc('col',T('العبايات','Abayas'),col)+acc('und',T('تحت العباية','Under the abaya'),un)+lk('tailoring.html',T('التفصيل الخاص','Made to measure'))+'</div>'+
  '<div class="ms">'+[['account.html',T('حسابي','My account')],['account.html#orders',T('تتبع الطلب','Track order')],['sizes.html',T('دليل المقاسات','Size guide')],['about.html',T('من نحن','About us')]].map(function(a){return '<a href="'+a[0]+'">'+a[1]+'</a>'}).join('')+'</div>';
 D.getElementById('mmeta').innerHTML='<div class="mhelp"><b>'+T('نحن هنا لمساعدتكِ','We are here to help')+'</b><p>'+T('يومياً من ١١ صباحاً إلى ١١ مساءً','Open daily from 11am to 11pm')+'<br>'+T('كربلاء حي النقيب','Karbala Al Naqeeb')+'</p>'+
  '<a class="wab" href="https://wa.me/'+MS.WA+'" target="_blank" rel="noopener">'+I.wa+'<span>'+T('راسلينا على واتساب','Message us on WhatsApp')+'</span></a>'+
  '<div class="row"><span class="soc3"><a href="https://instagram.com/mss.abaya" target="_blank" rel="noopener" aria-label="Instagram">'+I.ig+'</a><a href="#" aria-label="Facebook">'+I.fb+'</a></span></div></div>';
 D.querySelector('#mn .msr').onclick=function(){ov.querySelector('.bk').click();setTimeout(MS.openSearch,200)};
 [].forEach.call(D.querySelectorAll('#mn .mh'),function(b){b.onclick=function(){b.parentNode.classList.toggle('op')}})}
MS.onLang.push(render);
/* stagger the items each time it opens */
var wasOpen=false;new MutationObserver(function(){var o=ov.classList.contains('open');if(o===wasOpen)return;wasOpen=o;if(o)requestAnimationFrame(function(){ov.classList.add('shown')});else ov.classList.remove('shown')}).observe(ov,{attributes:true,attributeFilter:['class']});
})();
