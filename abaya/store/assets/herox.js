/* hero preview ?hero=1 — the S window: felt with an S cut out, the abaya seen through it; scrolling opens the window */
(function(){
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
