/* سيدة العباية — 3D dress form wearing an abaya, turned by scroll (Three.js + GSAP ScrollTrigger) */
import * as THREE from './vendor/three.module.min.js';
const D=document,sec=D.querySelector('.hero'),gsap=window.gsap,ST=window.ScrollTrigger;
gsap.registerPlugin(ST);
sec.classList.add('tt','t3d');
const stk=D.createElement('div');stk.className='stk';while(sec.firstChild)stk.appendChild(sec.firstChild);sec.appendChild(stk);
stk.querySelector('picture').remove();
const cv=D.createElement('canvas');cv.className='c3d';stk.insertBefore(cv,stk.firstChild);
const hint=D.createElement('div');hint.className='tth';hint.innerHTML='<span></span><i></i>';stk.appendChild(hint);
const ht=()=>hint.querySelector('span').textContent=MS.T('انزلي لتدور العباية','Scroll to turn the abaya');ht();MS.onLang.push(ht);

/* ---------- renderer / scene ---------- */
const R=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true,powerPreference:'high-performance'});
R.setPixelRatio(Math.min(devicePixelRatio,2));R.outputColorSpace=THREE.SRGBColorSpace;R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=.95;
const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(26,1,.1,50);
/* soft studio environment for the metal beads */
const pm=new THREE.PMREMGenerator(R),es=new THREE.Scene();
const box=new THREE.Mesh(new THREE.BoxGeometry(10,10,10),new THREE.MeshBasicMaterial({color:0x1a0508,side:THREE.BackSide}));es.add(box);
[[0,3,4,6,2,0xfff1e0,7],[-4,2,-2,3,4,0xff9a9a,2.2],[4,1,-2,3,4,0xffd6b0,2.5],[0,-3,2,8,1,0x2a0a10,1]].forEach(([x,y,z,w,h,c,i])=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i),side:THREE.DoubleSide}));m.position.set(x,y,z);m.lookAt(0,0,0);es.add(m)});
S.environment=pm.fromScene(es,.04).texture;S.environmentIntensity=.55;

const key=new THREE.SpotLight(0xfff4ea,30,0,.5,.6,1.6);key.position.set(-2.2,3.6,3.4);key.target.position.set(0,.9,0);S.add(key,key.target);
const rimL=new THREE.SpotLight(0xff6f7a,46,0,.6,.7,1.6);rimL.position.set(-2.6,2.2,-2.6);rimL.target.position.set(0,1,0);S.add(rimL,rimL.target);
const rimR=new THREE.SpotLight(0xffb48a,30,0,.6,.7,1.6);rimR.position.set(2.8,2.4,-2.2);rimR.target.position.set(0,1,0);S.add(rimR,rimR.target);
S.add(new THREE.HemisphereLight(0x553038,0x12020a,.35));

const G=new THREE.Group();S.add(G);

/* ---------- materials ---------- */
const crepe=new THREE.MeshPhysicalMaterial({color:0x08080a,roughness:.86,metalness:0,sheen:.55,sheenColor:new THREE.Color(0x3c2a30),sheenRoughness:.7,side:THREE.DoubleSide});
const inner=new THREE.MeshPhysicalMaterial({color:0x070607,roughness:.7,sheen:.6,sheenColor:new THREE.Color(0x3a2a2e),side:THREE.DoubleSide});
const linen=new THREE.MeshStandardMaterial({color:0xd8c6ad,roughness:.85});
const brass=new THREE.MeshStandardMaterial({color:0xc29a5a,metalness:1,roughness:.28});
const silver=new THREE.MeshStandardMaterial({color:0xe9e6ea,metalness:1,roughness:.18});
const pearl=new THREE.MeshPhysicalMaterial({color:0xf6efe6,roughness:.25,clearcoat:1,clearcoatRoughness:.1,sheen:1,sheenColor:new THREE.Color(0xffe6f0)});

/* ---------- helpers ---------- */
const lerp=(a,b,t)=>a+(b-a)*t, sstep=(a,b,x)=>{const t=Math.min(1,Math.max(0,(x-a)/(b-a)));return t*t*(3-2*t)};
function profileR(prof,y){for(let i=0;i<prof.length-1;i++){const[a,ya]=prof[i],[b,yb]=prof[i+1];if(y<=ya&&y>=yb){return lerp(a,b,(ya-y)/(ya-yb))}}return prof[prof.length-1][0]}

/* ---------- abaya body: open-front robe with folds ---------- */
const BODY=[[.072,1.59],[.13,1.578],[.178,1.55],[.212,1.5],[.228,1.44],[.215,1.33],[.205,1.18],[.215,1.02],[.245,.82],[.29,.58],[.335,.36],[.37,.17]];
const yTop=BODY[0][1],yBot=BODY[BODY.length-1][1];
function robe(scale,gapTop,gapBot,foldAmp,mat,seg){
 const NU=seg||220,NV=120,pos=[],uv=[],idx=[];
 for(let j=0;j<=NV;j++){const v=j/NV,y=lerp(yTop,yBot,v),r0=profileR(BODY,y)*scale,gap=lerp(gapTop,gapBot,Math.pow(v,.8));
  const amp=foldAmp*sstep(.25,1,v);
  for(let i=0;i<=NU;i++){const u=i/NU,phi=gap+u*(Math.PI*2-2*gap);
   const fold=Math.sin(phi*13+v*1.7)*.55+Math.sin(phi*7.3-v*2.4)*.3+Math.sin(phi*21+1.3)*.15;
   const back=.5+.5*Math.cos(phi-Math.PI); // a little fuller at the back
   const r=r0*(1+amp*fold)*(1+.06*back*sstep(.3,1,v));
   pos.push(r*Math.sin(phi),y,r*Math.cos(phi));uv.push(u,v)}}
 for(let j=0;j<NV;j++)for(let i=0;i<NU;i++){const a=j*(NU+1)+i,b=a+NU+1;idx.push(a,b,a+1,b,b+1,a+1)}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();
 return new THREE.Mesh(g,mat)}
const outer=robe(1,.10,.30,.085,crepe);G.add(outer);
const dress=robe(.94,0,0,.04,inner,160);G.add(dress);

/* ---------- sleeves: wide, falling, open cuffs ---------- */
function sleeve(side){
 const len=.74,pts=[];for(let k=0;k<=24;k++){const t=k/24;pts.push(new THREE.Vector2(lerp(.07,.15,Math.pow(t,1.6))*(1+.04*Math.sin(t*9)),-t*len))}
 const g=new THREE.LatheGeometry(pts,72);const p=g.attributes.position;
 for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),t=-y/len,a=Math.atan2(x,z);const f=1+.07*t*Math.sin(a*6+t*3);p.setXYZ(i,x*f,y,z*f)}
 g.computeVertexNormals();const m=new THREE.Mesh(g,crepe);
 const sh=new THREE.Vector3(side*.2,1.47,0),end=new THREE.Vector3(side*.29,.76,.05);
 m.position.copy(sh);const dir=end.clone().sub(sh).normalize();m.quaternion.setFromUnitVectors(new THREE.Vector3(0,-1,0),dir);G.add(m);
 return {m,len}}
const sleeves=[sleeve(1),sleeve(-1)];

/* ---------- mannequin: linen neck, brass cap, pole and base ---------- */
const neck=new THREE.Mesh(new THREE.CylinderGeometry(.05,.06,.12,40),linen);neck.position.y=1.64;G.add(neck);
const cap=new THREE.Mesh(new THREE.CylinderGeometry(.064,.064,.022,40),brass);cap.position.y=1.71;G.add(cap);
const knob=new THREE.Mesh(new THREE.SphereGeometry(.026,32,16),brass);knob.position.y=1.74;G.add(knob);
const pole=new THREE.Mesh(new THREE.CylinderGeometry(.013,.013,.2,20),brass);pole.position.y=.1;G.add(pole);
const base=new THREE.Mesh(new THREE.CylinderGeometry(.24,.26,.03,64),brass);base.position.y=.015;G.add(base);

/* ---------- embroidery: silver beads + pearls along the opening and the cuffs ---------- */
const bead=new THREE.SphereGeometry(1,10,8),pts=[],pps=[];
const op=outer.geometry.attributes.position,NU=220,NV=120;
for(const edge of [0,NU])for(let j=2;j<=NV;j+=1){const i=j*(NU+1)+edge,v=new THREE.Vector3(op.getX(i),op.getY(i),op.getZ(i));
 const n=new THREE.Vector3(v.x,0,v.z).normalize();const side=edge?1:-1;
 for(let r=0;r<2;r++){const off=new THREE.Vector3(n.z*side,0,-n.x*side).multiplyScalar(.012+r*.014);const p=v.clone().add(off).add(n.clone().multiplyScalar(.004));
  if((j+r)%2===0)pts.push(p);else if(j%5===0)pps.push(p)}}
for(const s of sleeves){const ring=44;for(let r=0;r<2;r++)for(let k=0;k<ring;k++){const a=k/ring*Math.PI*2,rad=.153+.003,y=-s.len*(.94-r*.05);
 const p=new THREE.Vector3(Math.sin(a)*rad,y,Math.cos(a)*rad).applyQuaternion(s.m.quaternion).add(s.m.position);(k+r)%3?pts.push(p):pps.push(p)}}
function inst(list,mat,size){const im=new THREE.InstancedMesh(bead,mat,list.length),M=new THREE.Matrix4();list.forEach((p,i)=>{const s=size*(.75+Math.random()*.5);M.makeScale(s,s,s).setPosition(p);im.setMatrixAt(i,M)});G.add(im)}
inst(pts,silver,.0042);inst(pps,pearl,.0052);

/* ---------- floor shadow ---------- */
const sc=D.createElement('canvas');sc.width=sc.height=256;const sx=sc.getContext('2d'),gr=sx.createRadialGradient(128,128,0,128,128,128);gr.addColorStop(0,'rgba(0,0,0,.55)');gr.addColorStop(1,'rgba(0,0,0,0)');sx.fillStyle=gr;sx.fillRect(0,0,256,256);
const shadow=new THREE.Mesh(new THREE.PlaneGeometry(1.4,1.4),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(sc),transparent:true,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=.001;S.add(shadow);

/* ---------- framing ---------- */
const look=new THREE.Vector3(0,.93,0);
function size(){const w=stk.clientWidth,h=stk.clientHeight;R.setSize(w,h,false);C.aspect=w/h;
 const phone=w<760,vfov=C.fov*Math.PI/180,hfov=2*Math.atan(Math.tan(vfov/2)*C.aspect);
 const H0=phone?3.05:2.25,W0=phone?1.05:1.2;            /* world box to keep in view */
 const dist=Math.max((H0/2)/Math.tan(vfov/2),(W0/2)/Math.tan(hfov/2));
 look.y=phone?.5:.92;C.position.set(0,look.y+.05,dist);C.lookAt(look);C.updateProjectionMatrix()}
addEventListener('resize',size);size();
window.__pause=()=>gsap.ticker.sleep();

/* ---------- motion: GSAP owns time and scroll ---------- */
const st={rot:0,auto:0,intro:0};
gsap.fromTo(st,{intro:0},{intro:1,duration:2.2,ease:'power3.out'});
ST.create({trigger:sec,start:'top top',end:'bottom bottom',scrub:1.2,onUpdate:s=>{gsap.to(st,{rot:s.progress*Math.PI*2,duration:.6,ease:'power2.out',overwrite:true});hint.style.opacity=String(1-Math.min(1,s.progress/.12));sec.style.setProperty('--tp',s.progress.toFixed(3))}});
gsap.from('.t3d .hx>*',{y:24,opacity:0,stagger:.12,duration:1.1,delay:.5,ease:'power3.out'});
gsap.ticker.add((t,dt)=>{st.auto+=dt*.00022;
 G.rotation.y=st.auto+st.rot-.6*(1-st.intro);
 G.position.y=-.06*(1-st.intro);
 key.position.x=-2.2+Math.sin(t*.4)*.4; /* light breathes so the beads glint */
 R.render(S,C)});
