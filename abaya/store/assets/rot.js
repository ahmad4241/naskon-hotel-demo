/* hero preview ?hero=6 — photographic turntable: frame sequence on canvas, driven by GSAP ScrollTrigger */
(function(){
var D=document,B=D.body,sec=D.querySelector('.hero'),gsap=window.gsap;gsap.registerPlugin(window.ScrollTrigger);
B.dataset.over='0';D.getElementById('hd').classList.remove('clear');
sec.classList.add('rt');
var stk=D.createElement('div');stk.className='stk';var hx=sec.querySelector('.hx');
sec.querySelector('picture').remove();sec.innerHTML='';sec.appendChild(stk);sec.parentNode.insertBefore(hx,sec.nextSibling);hx.classList.add('rthx');
var cv=D.createElement('canvas');stk.appendChild(cv);var cx=cv.getContext('2d');
var N=56,im=[],loaded=0,st={f:0,auto:0,scroll:0};
for(var i=0;i<N;i++){var e=new Image();e.decoding='async';e.onload=function(){loaded++;if(loaded===1)draw()};e.src='img/rot/'+i+'.webp';im.push(e)}
function size(){var r=Math.min(devicePixelRatio||1,2);cv.width=stk.clientWidth*r;cv.height=stk.clientHeight*r;draw()}
function draw(){var k=Math.round(st.f)%N;k=(k+N)%N;var e=im[k];if(!e||!e.complete||!e.naturalWidth){for(var j=0;j<N;j++){if(im[j].complete&&im[j].naturalWidth){e=im[j];break}}if(!e)return}
 var W=cv.width,H=cv.height,iw=e.naturalWidth,ih=e.naturalHeight,s=W/H<iw/ih*1.25?Math.max(W/iw,H/ih):H/ih,w=iw*s,h=ih*s;
 var g=cx.createLinearGradient(0,0,W,0);g.addColorStop(0,'#d7ccbb');g.addColorStop(.5,'#d9cdb9');g.addColorStop(1,'#cbbda7');cx.fillStyle=g;cx.fillRect(0,0,W,H);
 cx.drawImage(e,(W-w)/2,(H-h)/2,w,h);
 if(w<W){var f=Math.min(120*(W/stk.clientWidth),(W-w)/2);var l=cx.createLinearGradient((W-w)/2,0,(W-w)/2+f,0);l.addColorStop(0,'#d7ccbb');l.addColorStop(1,'rgba(215,204,187,0)');cx.fillStyle=l;cx.fillRect((W-w)/2,0,f,H);
  var rr=cx.createLinearGradient((W+w)/2,0,(W+w)/2-f,0);rr.addColorStop(0,'#cbbda7');rr.addColorStop(1,'rgba(203,189,167,0)');cx.fillStyle=rr;cx.fillRect((W+w)/2-f,0,f,H)}}
addEventListener('resize',size);size();
window.ScrollTrigger.create({trigger:sec,start:'top top',end:'bottom bottom',scrub:.9,onUpdate:function(s){st.scroll=s.progress*N}});
gsap.ticker.add(function(t,dt){st.auto+=dt/1000*7; /* ~7 frames a second when idle: slow showroom turn */
 var target=st.auto+st.scroll;st.f+= (target-st.f)*.18;draw()});
})();
