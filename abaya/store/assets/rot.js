/* hero preview ?hero=6 — photographic turntable, tuned for phones:
   frames are decoded up-front into ImageBitmaps, the canvas only repaints when the frame actually changes,
   side fills are painted once into a cached backdrop, and the loop sleeps when the hero is off-screen. */
(function(){
var D=document,B=D.body,sec=D.querySelector('.hero'),gsap=window.gsap;gsap.registerPlugin(window.ScrollTrigger);
B.dataset.over='0';D.getElementById('hd').classList.remove('clear');
sec.classList.add('rt');
var stk=D.createElement('div');stk.className='stk';var hx=sec.querySelector('.hx');
sec.querySelector('picture').remove();sec.innerHTML='';sec.appendChild(stk);sec.parentNode.insertBefore(hx,sec.nextSibling);hx.classList.add('rthx');
var cv=D.createElement('canvas');stk.appendChild(cv);var cx=cv.getContext('2d',{alpha:false});
var N=56,bm=new Array(N),ready=0,st={f:0,auto:0,scroll:0},shown=-1,geo=null,bg=null,vis=true;
var first=new Image();first.src='img/rot/0.webp';first.onload=function(){if(!bm[0]){bm[0]=first;paint(0,true)}};
function load(i){return fetch('img/rot/'+i+'.webp').then(function(r){return r.blob()}).then(function(b){return createImageBitmap(b)}).then(function(x){bm[i]=x;ready++})}
/* load in order of the turn so the first part spins as soon as possible */
(function q(i){if(i>=N)return;load(i).catch(function(){}).then(function(){q(i+1)})})(0);
function size(){var r=Math.min(devicePixelRatio||1,1.5),W=Math.round(stk.clientWidth*r),H=Math.round(stk.clientHeight*r);cv.width=W;cv.height=H;
 var iw=768,ih=1376,s=W/H<iw/ih*1.25?Math.max(W/iw,H/ih):H/ih;geo={x:(W-iw*s)/2,y:(H-ih*s)/2,w:iw*s,h:ih*s};
 bg=null;if(geo.w<W){bg=D.createElement('canvas');bg.width=W;bg.height=H;var b=bg.getContext('2d'),g=b.createLinearGradient(0,0,W,0);g.addColorStop(0,'#d7ccbb');g.addColorStop(1,'#cbbda7');b.fillStyle=g;b.fillRect(0,0,W,H)}
 paint(shown<0?0:shown,true)}
function paint(k,force){var e=bm[k];if(!e){for(var d=1;d<N;d++){if(bm[(k-d+N)%N]){e=bm[(k-d+N)%N];k=(k-d+N)%N;break}}}if(!e||!geo)return;if(k===shown&&!force)return;shown=k;
 if(bg)cx.drawImage(bg,0,0);cx.drawImage(e,geo.x,geo.y,geo.w,geo.h);
 if(bg){var f=Math.min(110,geo.x);var l=cx.createLinearGradient(geo.x,0,geo.x+f,0);l.addColorStop(0,'#d7ccbb');l.addColorStop(1,'rgba(215,204,187,0)');cx.fillStyle=l;cx.fillRect(geo.x,0,f,cv.height);
  var r=cx.createLinearGradient(geo.x+geo.w,0,geo.x+geo.w-f,0);r.addColorStop(0,'#cbbda7');r.addColorStop(1,'rgba(203,189,167,0)');cx.fillStyle=r;cx.fillRect(geo.x+geo.w-f,0,f,cv.height)}}
var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(size,120)});size();
new IntersectionObserver(function(es){vis=es[0].isIntersecting}).observe(sec);
window.ScrollTrigger.create({trigger:sec,start:'top top',end:'bottom bottom',scrub:.6,onUpdate:function(s){st.scroll=s.progress*N}});
gsap.ticker.fps(60);
gsap.ticker.add(function(t,dt){if(!vis)return;st.auto+=Math.min(dt,50)/1000*6;
 var target=st.auto+st.scroll;st.f+=(target-st.f)*.2;paint((Math.floor(st.f)%N+N)%N)});
})();
