/* hero preview ?hero=1 — the S window: felt with an S cut out, the abaya seen through it; scrolling opens the window */
(function(){
if(/hero=4/.test(location.search)){(function(){
 var D=document,sec=D.querySelector('.hero');sec.classList.add('tt');
 var stk=D.createElement('div');stk.className='stk';while(sec.firstChild)stk.appendChild(sec.firstChild);sec.appendChild(stk);
 var pic=stk.querySelector('picture');pic.remove();
 var w=D.createElement('div');w.className='ttw';var N=9,im=[];
 for(var i=0;i<N;i++){var e=D.createElement('img');e.src='img/turn/'+i+'.webp';e.alt='';w.appendChild(e);im.push(e)}
 stk.insertBefore(w,stk.firstChild);
 var hint=D.createElement('div');hint.className='tth';hint.innerHTML='<span>'+MS.T('انزلي لتدور العباية','Scroll to turn the abaya')+'</span><i></i>';stk.appendChild(hint);
 MS.onLang.push(function(){hint.querySelector('span').textContent=MS.T('انزلي لتدور العباية','Scroll to turn the abaya')});
 var t0=performance.now(),last=-1;
 function cl(x){return x<0?0:x>1?1:x}
 function f(now){var r=sec.getBoundingClientRect(),p=cl(-r.top/(r.height-innerHeight));
  var pos=((now-t0)/1000*0.55+p*N*1.5)%N,a=Math.floor(pos),b=(a+1)%N,t=pos-a;t=t*t*(3-2*t);
  for(var i=0;i<N;i++)im[i].style.opacity=i===a?1:i===b?t:0;
  hint.style.opacity=(1-cl(p/.15)).toFixed(3);
  sec.style.setProperty('--tp',p.toFixed(3));
  requestAnimationFrame(f)}
 requestAnimationFrame(f)})();return}
if(/hero=3/.test(location.search)){(function(){
 var D=document,L=MS.L,T=MS.T,sec=D.querySelector('.hero');sec.classList.add('cs');
 var S=[{img:'img/scene.webp',ims:'img/scene-s.webp',pos:'58% 28%',k:['المجموعة الجديدة','THE NEW COLLECTION'],h:['أناقةٌ تليق بحضوركِ','Elegance worthy of your presence'],a:['اكتشفي المجموعة','Discover the collection'],u:'category.html?s=new'},
        {img:'img/detail.webp',ims:'img/detail.webp',pos:'50% 40%',k:['المجموعة الخاصة','THE PRIVATE COLLECTION'],h:['VIP','VIP'],a:['اكتشفي مجموعة VIP','Explore VIP'],u:'category.html?l=vip',vip:1},
        {img:'img/detail2.webp',ims:'img/detail2.webp',pos:'50% 45%',k:['التفصيل الخاص','MADE TO MEASURE'],h:['عباءتكِ، كما تتخيّلينها','Your abaya, as you imagine it'],a:['ابدئي طلب التفصيل','Start your order'],u:'tailoring.html'}];
 var hx=sec.querySelector('.hx'),hs=hx.querySelector('.hs');sec.querySelector('picture').remove();
 var st=D.createElement('div');st.className='cst';sec.insertBefore(st,hx);
 st.innerHTML=S.map(function(s,i){return '<div class="csl" data-i="'+i+'"><picture><source media="(max-width:520px)" srcset="'+s.ims+'"><img src="'+s.img+'" alt="" style="object-position:'+s.pos+'"></picture></div>'}).join('');
 var tx=D.createElement('div');tx.className='cstx';hx.innerHTML='';hx.appendChild(tx);hx.appendChild(hs);
 var bars=D.createElement('div');bars.className='csb';bars.innerHTML=S.map(function(){return '<button><i></i></button>'}).join('');hx.appendChild(bars);
 var cur=-1,tm,DUR=6000;
 function txt(i){var s=S[i],l=L()==='ar'?0:1;tx.className='cstx'+(s.vip?' vip':'');tx.innerHTML='<div class="k">'+s.k[l]+'</div><h1 class="h">'+s.h[l]+'</h1><a class="lnk" href="'+s.u+'"><span>'+s.a[l]+'</span><i>←</i></a>';void tx.offsetWidth;tx.classList.add('in')}
 function go(i){i=(i+S.length)%S.length;var sl=st.children,bs=bars.children;
  [].forEach.call(sl,function(e,k){e.classList.toggle('on',k===i);e.classList.toggle('was',k===cur)});
  [].forEach.call(bs,function(b,k){b.className=k<i?'done':k===i?'on':''});cur=i;txt(i);clearTimeout(tm);tm=setTimeout(function(){go(cur+1)},DUR)}
 [].forEach.call(bars.children,function(b,k){b.onclick=function(){go(k)}});
 var sx=null;sec.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
 sec.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>50)go(cur+((dx<0)===(D.dir==='rtl')?-1:1))},{passive:true});
 MS.onLang.push(function(){if(cur>-1)txt(cur)});go(0)})();return}
if(/hero=2/.test(location.search)){var sec2=document.querySelector('.hero');sec2.classList.add('sp');document.body.dataset.over='0';
 var hd2=document.getElementById('hd');hd2.classList.remove('clear');
 var tg=document.createElement('div');tg.className='spn';tg.textContent='MS ABAYA';sec2.querySelector('picture').appendChild(tg);return}
if(!/hero=1/.test(location.search))return;
var D=document,B=D.body,sec=D.querySelector('.hero');if(!sec)return;
var sym=D.getElementById('s1'),vb=sym.getAttribute('viewBox').split(' ').map(Number),cx=vb[0]+vb[2]/2,cy=vb[1]+vb[3]/2;
sec.classList.add('sw');
var stk=D.createElement('div');stk.className='stk';
while(sec.firstChild)stk.appendChild(sec.firstChild);sec.appendChild(stk);
var ov=D.createElementNS('http://www.w3.org/2000/svg','svg');ov.setAttribute('class','swo');stk.appendChild(ov);
var cue=D.createElement('div');cue.className='swc';cue.innerHTML='<i></i>';stk.appendChild(cue);
var W,H,hole,k0;
function build(){W=stk.clientWidth;H=stk.clientHeight;k0=Math.min(H*.42,W*.7*vb[3]/vb[2],360)/vb[3];
 ov.setAttribute('viewBox','0 0 '+W+' '+H);
 ov.innerHTML='<defs><pattern id="swp" patternUnits="userSpaceOnUse" width="380" height="380"><image href="img/felt.webp" width="380" height="380"/></pattern>'+
  '<radialGradient id="swv" cx="50%" cy="45%" r="75%"><stop offset="40%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#0a0002" stop-opacity=".55"/></radialGradient>'+
  '<mask id="swm" maskUnits="userSpaceOnUse" x="0" y="0" width="'+W+'" height="'+H+'"><rect width="'+W+'" height="'+H+'" fill="#fff"/><g id="swh" style="color:#000">'+sym.innerHTML+'</g></mask></defs>'+
  '<g mask="url(#swm)"><rect width="'+W+'" height="'+H+'" fill="#3e0610"/><rect width="'+W+'" height="'+H+'" fill="url(#swp)"/><rect width="'+W+'" height="'+H+'" fill="url(#swv)"/></g>'+
  '<g id="swr" fill="none" stroke="#d9b064" stroke-width="1.1" vector-effect="non-scaling-stroke">'+sym.innerHTML.replace(/fill="currentColor"/g,'')+'</g>';
 hole=D.getElementById('swh');tick()}
function cl(x){return x<0?0:x>1?1:x}
function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
function tick(){var r=sec.getBoundingClientRect(),p=cl(-r.top/(r.height-H)),a=ease(cl(p/.55)),k=k0*(1+a*a*70);
 var tf='translate('+W/2+' '+H*.47+') scale('+k+') translate('+(-cx)+' '+(-cy)+')';
 hole.setAttribute('transform',tf);D.getElementById('swr').setAttribute('transform',tf);
 D.getElementById('swr').style.opacity=(1-cl(p/.12)).toFixed(3);
 ov.style.opacity=(1-cl((p-.36)/.16)).toFixed(3);
 cue.style.opacity=(1-cl(p/.08)).toFixed(3);
 var t=cl((p-.52)/.25);sec.style.setProperty('--t',t.toFixed(3));
 stk.querySelector('img').style.transform='scale('+(1.18-.18*a).toFixed(4)+')'}
var q;addEventListener('scroll',function(){if(!q){q=1;requestAnimationFrame(function(){q=0;tick()})}},{passive:true});
addEventListener('resize',build);build();
})();
