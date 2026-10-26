/* سيدة العباية — «التفصيل الخاص» previews: ?mm=1 atelier steps · ?mm=2 mini builder · ?mm=3 timeline */
(function(){
var m=location.search.match(/mm=([123])/),V=m?+m[1]:2;
var D=document,L=MS.L,T=MS.T,old=D.querySelector('section.mm'),AT=(location.search.match(/at=([123])/)||[])[1]||'3';
var sec=D.createElement('section');sec.className='mx mx'+V+(AT?' at'+AT:'');old.parentNode.replaceChild(sec,old);
var PH=!/photos=1/.test(location.search);
var ph=function(cls){return PH?'<span class="cph '+(cls||'t2')+'"><svg><use href="#s1"/></svg></span>':'<img src="img/detail2.webp" alt="" loading="lazy">'};
var IC={
 d:'<svg viewBox="0 0 48 48"><path d="M17 8h14l-3 5 9 31H11l9-31z"/><path d="M20 13h8"/></svg>',
 f:'<svg viewBox="0 0 48 48"><path d="M8 14c6-4 12 4 18 0s12-4 14 0v22c-2-4-8-4-14 0s-12-4-18 0z"/><path d="M8 14v22"/></svg>',
 c:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="15"/><circle cx="18" cy="19" r="2.4"/><circle cx="28" cy="16" r="2.4"/><circle cx="32" cy="25" r="2.4"/><path d="M24 39c-3 0-4-3-2-5s1-5-2-5"/></svg>',
 s:'<svg viewBox="0 0 48 48"><path d="M6 30l24-24 12 12-24 24z"/><path d="M14 22l3 3M19 17l3 3M24 12l3 3M11 27l3 3"/></svg>'};
var ST=[['d','التصميم','Design','من تصاميم الدار أو فكرتكِ الخاصة','From our designs or your own idea'],['f','القماش','Fabric','خامات حصرية لدى الدار','Fabrics exclusive to the house'],['c','اللون','Colour','كل الألوان متوفرة','Every colour available'],['s','المقاس','Size','على قياساتكِ تماماً','Cut to your exact measurements']];
var head=function(){return '<div class="k">'+T('التفصيل الخاص','MADE TO MEASURE')+'</div><h2 class="h">'+T('عباءتكِ، كما تتخيّلينها','Your abaya, as you imagine it')+'</h2>'};
var cta=function(){return '<a class="btn" href="tailoring.html">'+T('ابدئي طلب التفصيل','Start your order')+'</a>'};
var dur=function(){return '<span class="dur">'+T('جاهزة خلال أسبوع إلى أسبوعين','Ready in 1–2 weeks')+'</span>'};

function v1(){var l=L()==='ar';
 sec.innerHTML='<div class="m1"><div class="m1h">'+head()+'<p>'+T('أربع خطوات بسيطة، وتصلكِ عباءة مفصّلة لكِ وحدكِ.','Four simple steps to an abaya made for you alone.')+'</p></div>'+
  '<div class="m1s">'+ST.map(function(s){return '<div class="st1"><span class="ic">'+IC[s[0]]+'</span><b>'+(l?s[1]:s[2])+'</b><span>'+(l?s[3]:s[4])+'</span></div>'}).join('')+'</div>'+
  '<div class="m1f">'+cta()+dur()+'</div></div>'}

var pick={d:0,f:0,c:0,z:0,file:'',ms:{}};
var HK={d1:[438,187.5],d2:[441,193],d3:[397,198.5]};
function place(id){if(AT!=='3')return '';var k=HK[id],H=62,W=H*k[0]/880;return ';left:'+(50-k[1]/k[0]*W).toFixed(2)+'%;top:'+(22.0-6/880*H).toFixed(2)+'%;width:'+W.toFixed(2)+'%;height:'+H+'%'}
var DSN=[['البريق','Bareeq','d1'],['الورد الأسود','Black Rose','d2'],['الربيع','Spring','d3']],
 FB=[['كريب','Crepe','مطفي وانسيابي','Matte and fluid','fc'],['شيفون','Chiffon','خفيف وشفاف قليلاً','Light, softly sheer','fh'],['ليننو','Linen','ملمس طبيعي محبوك','Natural woven texture','fl'],['حرير','Silk','لمعة ناعمة','Soft sheen','fs']],
 CL=[['#141414','أسود','Black'],['#4C050D','عنابي','Wine'],['#3e2a20','بنّي','Brown'],['#b9a48c','بيج','Beige'],['#1c2a44','كحلي','Navy'],['#6b6f72','رمادي','Grey']];
var MSR=[['l','الطول','Length'],['s','الكتف','Shoulder'],['b','الصدر','Bust'],['a','طول الكم','Sleeve']];
var TH=[['','كما في التصميم','As designed'],['#c9a457','ذهبي','Gold'],['#d2d2d6','فضي','Silver'],['#262626','أسود','Black'],['tone','بلون العباية','Tone on tone']];
pick.t=0;var last=null;
(function(){var h=location.hash.match(/atelier=(\d)\.(\d)\.(\d)\.(\d)\.(\d)/);if(!h)return;var v=h.slice(1).map(Number);
 if(v[0]<3&&v[1]<FB.length&&v[2]<CL.length&&v[3]<TH.length&&(v[4]<MS.SIZES.length||v[4]===9)){pick.d=v[0];pick.f=v[1];pick.c=v[2];pick.t=v[3];pick.z=v[4];pick.s=5;
  setTimeout(function(){scrollTo(0,sec.getBoundingClientRect().top+scrollY-70)},sessionStorage.getItem('msIntro')?300:2600)}})();
function lift(hx,k){var n=parseInt(hx.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;r=Math.round(r+(255-r)*k);g=Math.round(g+(255-g)*k);b=Math.round(b+(255-b)*k);return 'rgb('+r+','+g+','+b+')'}
function thc(){var t=TH[pick.t];return t[0]==='tone'?lift(CL[pick.c][0],.28):t[0]}
function link(){return location.origin+location.pathname+'#atelier='+[pick.d,pick.f,pick.c,pick.t,pick.z].join('.')}
var STP=[['d','التصميم','Design','اختاري التصميم','Choose your design'],['f','القماش','Fabric','اختاري القماش','Choose the fabric'],['c','اللون','Colour','اختاري اللون','Choose the colour'],['t','التطريز','Embroidery','اختاري لون خيط التطريز','Choose the embroidery thread'],['z','المقاس','Size','اختاري المقاس','Choose your size'],['r','طلبكِ','Your order','راجعي عباءتكِ','Review your abaya']];
pick.s=2;var lastS=2;
function v2(){var l=L()==='ar',i=l?0:1,d=DSN[pick.d],f=FB[pick.f],c=CL[pick.c],th=TH[pick.t],S=pick.s;
 var szTxt=pick.z===9?T('حسب قياساتي','My measurements'):MS.SIZES[pick.z];
 var msg=T('مرحباً، أريد تفصيل عباءة:','Hello, I would like a made-to-measure abaya:')+'\n'+T('التصميم: ','Design: ')+d[i]+'\n'+T('القماش: ','Fabric: ')+f[i]+'\n'+T('اللون: ','Colour: ')+c[l?1:2]+'\n'+T('التطريز: ','Embroidery: ')+th[l?1:2]+'\n'+T('المقاس: ','Size: ')+szTxt+
  (pick.z===9?'\n'+MSR.map(function(x){return x[l?1:2]+': '+(pick.ms[x[0]]||'-')+' cm'}).join('\n'):'')+(pick.note?'\n'+T('ملاحظات: ','Notes: ')+pick.note:'')+'\n'+link();
 var dye=last&&last.d===pick.d&&last.c!==pick.c?'<i class="c0" style="--c0:'+CL[last.c][0]+'"></i>':'',
  thr=last&&last.d===pick.d&&last.t!==pick.t?' thf':'';
 var emb=pick.t===0?'<i class="e"></i>':(d[2]==='d2'?'<i class="e ln" style="--e:url(img/mm/d2-ln2.webp)"></i>':'')+'<i class="ec" style="--tc:'+thc()+'"></i><i class="ex"></i>';
 last={d:pick.d,c:pick.c,t:pick.t};
 var val=[d[i],f[i],c[l?1:2],th[l?1:2],szTxt,''][S];
 var P={
  d:function(){return '<div class="dz">'+DSN.map(function(x,n){return '<button class="dsg'+(pick.d===n?' on':'')+'" data-k="d" data-n="'+n+'"><span class="dpv"><img src="img/mm/'+x[2]+'-em2.webp" alt=""><span class="dsh" style="--m:url(img/mm/'+x[2]+'-s2.webp)"></span></span><b>'+x[i]+'</b></button>'}).join('')+'</div>'+
   '<p class="idea">'+T('عندكِ فكرة مختلفة؟ ','Have a different idea? ')+'<a target="_blank" rel="noopener" href="https://wa.me/'+MS.WA+'?text='+encodeURIComponent(T('مرحباً، لديّ فكرة لعباءة وأودّ معرفة إمكانية تنفيذها.','Hello, I have an idea for an abaya and would like to know if it can be made.'))+'">'+T('أرسلي صورتها عبر واتساب','Send us a photo on WhatsApp')+'</a>'+T('، ويخبركِ الأتيليه بما يمكن تنفيذه.',', and the atelier will tell you what can be made.')+'</p>'},
  f:function(){return '<div class="fz">'+FB.map(function(x,n){return '<button class="fab'+(pick.f===n?' on':'')+'" data-k="f" data-n="'+n+'"><span class="ftx '+x[4]+'"></span><b>'+x[i]+'</b><span>'+x[i+2]+'</span></button>'}).join('')+'</div>'},
  c:function(){return '<div class="dots2">'+CL.map(function(x,n){return '<button class="dw'+(pick.c===n?' on':'')+'" data-k="c" data-n="'+n+'"><i style="--c:'+x[0]+'"></i><span>'+x[l?1:2]+'</span></button>'}).join('')+'</div>'},
  t:function(){return '<div class="dots2 th5">'+TH.map(function(x,n){var bg=n===0?'conic-gradient(#c9a457 0 25%,#d2d2d6 0 50%,#262626 0 75%,#8a6d4a 0)':x[0]==='tone'?lift(c[0],.28):x[0];return '<button class="dw'+(pick.t===n?' on':'')+'" data-k="t" data-n="'+n+'"><i style="--c:'+bg+'"></i><span>'+x[l?1:2]+'</span></button>'}).join('')+'</div>'},
  z:function(){return '<div class="cs2">'+MS.SIZES.map(function(z,n){return '<button class="ch sz'+(pick.z===n?' on':'')+'" data-k="z" data-n="'+n+'">'+z+'</button>'}).join('')+'<button class="ch'+(pick.z===9?' on':'')+'" data-k="z" data-n="9">'+T('قياساتي الخاصة','My measurements')+'</button></div>'+
   (pick.z===9?'<div class="mz">'+MSR.map(function(x){return '<label><span>'+x[l?1:2]+'</span><input type="number" inputmode="decimal" data-ms="'+x[0]+'" value="'+(pick.ms[x[0]]||'')+'" placeholder="'+T('سم','cm')+'"></label>'}).join('')+'</div>':'')+
   '<label class="mnt"><span>'+T('ملاحظاتكِ (اختياري)','Your notes (optional)')+'</span><textarea id="mnote" rows="2" placeholder="'+T('مثلاً: أكمام أوسع قليلاً','e.g. slightly wider sleeves')+'">'+(pick.note||'')+'</textarea></label>'},
  r:function(){return '<div class="sum"><ul>'+[[T('التصميم','Design'),d[i],0],[T('القماش','Fabric'),f[i],1],[T('اللون','Colour'),c[l?1:2],2],[T('التطريز','Embroidery'),th[l?1:2],3],[T('المقاس','Size'),szTxt,4]].map(function(r){return '<li><span>'+r[0]+'</span><b>'+r[1]+'</b><button class="ed" data-s="'+r[2]+'">'+T('تعديل','Edit')+'</button></li>'}).join('')+'</ul>'+
   '<p class="mpn">'+T('يحدّد الأتيليه السعر بعد مراجعة طلبكِ، ويتواصل معكِ خلال يوم عمل.','The atelier confirms the price after reviewing your request, within one working day.')+'</p>'+
   '<a class="btn" href="tailoring.html">'+T('أرسلي الطلب','Send your request')+'</a>'+
   '<a class="wa2" target="_blank" rel="noopener" href="https://wa.me/'+MS.WA+'?text='+encodeURIComponent(msg)+'">'+MS.I.wa+'<span>'+T('أو أرسليه عبر واتساب','Or send it on WhatsApp')+'</span></a>'+
   '<div class="shr"><span>'+T('ما رأي صديقاتكِ؟ شاركي تصميمكِ','What do your friends think? Share your design')+'</span><div><button id="shImg"><svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 14l2-2 2 2 2-3 2 3"/><circle cx="10" cy="8" r="1.3"/></svg><b>'+T('صورة للستوري','Story image')+'</b></button>'+
   '<button id="shLnk"><svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg><b>'+T('رابط التصميم','Design link')+'</b></button></div></div>'+dur()+'</div>'}};
 var nxt=S<5?'<button class="btn nx2" data-go="'+(S+1)+'">'+(S<4?T('التالي: ','Next: ')+STP[S+1][l?1:2]:T('راجعي طلبكِ','Review your order'))+'</button>':'';
 sec.innerHTML='<div class="m2"><div class="m2h">'+head()+'<p>'+T('صمّمي عباءتكِ خطوة بخطوة، وشاهديها تتغيّر أمامكِ.','Design your abaya step by step, and watch it change before you.')+'</p></div>'+
  '<div class="mbx"><div class="stage"><div class="scn"><div class="abp '+f[4]+thr+'" style="--m:url(img/mm/'+d[2]+'-s2.webp);--e:url(img/mm/'+d[2]+'-em2.webp);--x:url(img/mm/'+d[2]+'-tx2.webp);--h:url(img/mm/'+d[2]+'-hl.webp);--g:url(img/mm/'+d[2]+'-hg.webp);--c:'+c[0]+place(d[2])+'"><i class="c"></i>'+dye+'<i class="s"></i><i class="hl"></i><i class="t"></i>'+emb+'<i class="hg"></i></div></div>'+
   '<span class="tagf">'+d[i]+' · '+f[i]+' · '+c[l?1:2]+'</span></div>'+
  '<div class="pnl"><nav class="stp">'+STP.map(function(x,n){return '<button data-go="'+n+'" class="'+(n===S?'on':'')+(n<S?' dn':'')+'">'+x[l?1:2]+'</button>'}).join('')+'</nav>'+
   '<div class="pane'+(S!==lastS?' in':'')+'" style="--dx:'+(S>=lastS?1:-1)*(l?-1:1)+'"><div class="mph"><b>'+STP[S][l?3:4]+'</b>'+(val?'<em>'+val+'</em>':'')+'</div>'+P[STP[S][0]]()+'</div>'+
   '<div class="mnx"><div class="pg2"><i style="width:'+((S+1)/6*100)+'%">'+(AT!=='3'?'<span class="tn">'+Array.apply(null,Array(30)).map(function(_,n){return '<em style="--n:'+n+'">'+(n*10||'')+'</em>'}).join('')+'</span><b class="tip"></b>':'')+'</i></div><div class="nb">'+(S>0?'<button class="bk" data-go="'+(S-1)+'" aria-label="'+T('السابق','Back')+'">'+(l?'→':'←')+'</button>':'')+nxt+'</div></div></div></div></div>';
 lastS=S;lensInit();
 var nv=sec.querySelector('.stp'),on=nv.querySelector('.on');nv.scrollLeft+=on.getBoundingClientRect().left-nv.getBoundingClientRect().left-(nv.clientWidth-on.offsetWidth)/2;
 [].forEach.call(sec.querySelectorAll('[data-k]'),function(b){b.onclick=function(){pick[b.dataset.k]=+b.dataset.n;keep(v2)}});
 [].forEach.call(sec.querySelectorAll('[data-go],[data-s]'),function(b){b.onclick=function(){pick.s=+(b.dataset.go||b.dataset.s);keep(v2);
  var r=sec.querySelector('.mbx').getBoundingClientRect(),hh=innerWidth<900?90:100;if(Math.abs(r.top-hh)>40&&(r.top<hh||r.bottom>innerHeight))scrollTo({top:scrollY+r.top-hh,behavior:'smooth'})}});
 [].forEach.call(sec.querySelectorAll('[data-ms]'),function(x){x.oninput=function(){pick.ms[x.dataset.ms]=x.value}});
 var mn=D.getElementById('mnote');if(mn)mn.oninput=function(e){pick.note=e.target.value};
 var si=D.getElementById('shImg');if(si)si.onclick=story;
 var sl=D.getElementById('shLnk');if(sl)sl.onclick=function(){var u=link(),t=T('ما رأيكِ بعباءتي؟','What do you think of my abaya?');
  if(navigator.share&&matchMedia('(pointer:coarse)').matches){navigator.share({title:'MS ABAYA',text:t,url:u}).catch(function(){});return}
  var done=function(){var b=sl.querySelector('b'),o=b.textContent;b.textContent=T('تم نسخ الرابط','Link copied');sl.classList.add('ok');setTimeout(function(){b.textContent=o;sl.classList.remove('ok')},2200)};
  if(navigator.clipboard)navigator.clipboard.writeText(u).then(done,function(){prompt('',u)});else prompt('',u)}}
var lz={on:false,x:null,y:null};
function lensInit(){var st=sec.querySelector('.stage'),sc=st&&st.querySelector('.scn');if(!sc)return;var touch=!matchMedia('(hover:hover) and (pointer:fine)').matches,Z=2.6;
 var b=D.createElement('button');b.type='button';b.className='lzb'+(lz.on?' on':'');b.setAttribute('aria-label',T('عدسة التكبير','Magnifier'));
 b.innerHTML='<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L20 20M10.5 7.8v5.4M7.8 10.5h5.4"/></svg><span>'+(lz.on?T('إغلاق العدسة','Close lens'):T('تكبير','Zoom'))+'</span>';
 var Lw=D.createElement('div');Lw.className='lns';var inr=D.createElement('div');inr.className='lz';inr.innerHTML=sc.outerHTML;Lw.appendChild(inr);
 if(!touch){var h=D.createElement('span');h.className='lzh';h.textContent=T('مرّري المؤشر فوق العباية لرؤية القماش عن قرب','Hover over the abaya to see the fabric up close');st.appendChild(h)}else st.appendChild(b);
 st.appendChild(Lw);
 function at(x,y,abs){var r=st.getBoundingClientRect(),R=Lw.offsetWidth/2,px=abs?x:x-r.left,py=abs?y:y-r.top;px=Math.max(0,Math.min(r.width,px));py=Math.max(0,Math.min(r.height,py));
  inr.style.width=r.width+'px';inr.style.height=r.height+'px';var ly=touch?Math.max(-R+10,py-R-80):py-R;
  Lw.style.transform='translate('+(px-R)+'px,'+ly+'px)';inr.style.transform='translate('+(R-px*Z)+'px,'+(R-py*Z+(py-R-ly)*0)+'px) scale('+Z+')';
  if(touch){inr.style.transform='translate('+(R-px*Z)+'px,'+(R-py*Z)+'px) scale('+Z+')'}lz.x=px;lz.y=py}
 if(!touch){st.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;Lw.classList.add('show');st.classList.add('lzon');at(e.clientX,e.clientY)});
  st.addEventListener('pointerleave',function(){Lw.classList.remove('show');st.classList.remove('lzon')});return}
 function mode(){st.style.touchAction=lz.on?'none':'';Lw.classList.toggle('show',lz.on);if(lz.on){if(lz.x===null){lz.x=st.clientWidth/2;lz.y=st.clientHeight*.45}at(lz.x,lz.y,1)}}
 b.onclick=function(e){e.stopPropagation();lz.on=!lz.on;b.classList.toggle('on',lz.on);b.querySelector('span').textContent=lz.on?T('إغلاق العدسة','Close lens'):T('تكبير','Zoom');mode()};
 st.addEventListener('pointerdown',function(e){if(!lz.on||e.target.closest('.lzb'))return;at(e.clientX,e.clientY)});
 st.addEventListener('pointermove',function(e){if(!lz.on||e.pointerType==='mouse')return;e.preventDefault();at(e.clientX,e.clientY)});
 requestAnimationFrame(mode)}
function img(src){return new Promise(function(ok,no){var m=new Image();m.onload=function(){ok(m)};m.onerror=no;m.src=src})}
function story(){var b=D.getElementById('shImg');b.classList.add('busy');
 var l=L()==='ar',d=DSN[pick.d],own=false,W=1080,H=1920,cv=D.createElement('canvas');cv.width=W;cv.height=H;var x=cv.getContext('2d');
 var sym=D.getElementById('wmen'),wsv='<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+sym.getAttribute('viewBox')+'" style="color:#4C050D">'+sym.innerHTML+'</svg>';
 var need=[img('img/mm/'+d[2]+'-s2.webp'),img('img/mm/'+d[2]+'-hl.webp'),img('img/mm/'+d[2]+'-hg.webp'),img('img/mm/'+d[2]+'-em2.webp'),img('img/mm/'+d[2]+'-tx2.webp'),img(d[2]==='d2'?'img/mm/d2-ln2.webp':'img/mm/'+d[2]+'-tx2.webp'),img('data:image/svg+xml;charset=utf-8,'+encodeURIComponent(wsv)),own&&pick.img?img(pick.img):Promise.resolve(null),
  D.fonts?Promise.all(['500 60px "Reem Kufi"','64px "Gilda Display"','400 34px "IBM Plex Sans Arabic"','400 34px Jost'].map(function(f){return D.fonts.load(f).catch(function(){})})):Promise.resolve()];
 Promise.all(need).then(function(r){var sh=r[0],hl=r[1],hg=r[2];r=r.slice(2);var em=r[1],tx=r[2],ln=r[3],wm=r[4],oi=r[5];
  var g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#F7F1E8');g.addColorStop(1,'#EADFCF');x.fillStyle=g;x.fillRect(0,0,W,H);
  x.strokeStyle='rgba(169,135,80,.55)';x.lineWidth=2;x.strokeRect(40,40,W-80,H-80);
  var ww=420,wh=ww*wm.height/wm.width||63;x.drawImage(wm,(W-ww)/2,120,ww,wh);
  var AR=l?'"Reem Kufi"':'"Gilda Display"',BD=l?'"IBM Plex Sans Arabic"':'Jost';x.textAlign='center';x.direction=l?'rtl':'ltr';
  x.fillStyle='#A98750';x.font='400 34px '+BD;x.fillText(T('صمّمتُ عباءتي بنفسي','I designed my own abaya'),W/2,120+wh+80);
  var ah=1080,top=120+wh+140;
  if(own&&oi){var s=Math.min(760/oi.width,ah/oi.height);x.save();x.shadowColor='rgba(0,0,0,.25)';x.shadowBlur=60;x.shadowOffsetY=30;x.drawImage(oi,(W-oi.width*s)/2,top+(ah-oi.height*s)/2,oi.width*s,oi.height*s);x.restore()}
  else{var iw=sh.width,ih=sh.height,o=D.createElement('canvas');o.width=iw;o.height=ih;var y=o.getContext('2d');
   y.fillStyle=CL[pick.c][0];y.fillRect(0,0,iw,ih);y.globalCompositeOperation='destination-in';y.drawImage(sh,0,0);y.globalCompositeOperation='multiply';y.drawImage(sh,0,0);y.globalCompositeOperation='screen';y.globalAlpha=.22;y.drawImage(hl,0,0);y.globalAlpha=1;y.globalCompositeOperation='source-over';
   if(pick.t===0)y.drawImage(em,0,0);else{if(d[2]==='d2')y.drawImage(ln,0,0);var o2=D.createElement('canvas');o2.width=iw;o2.height=ih;var z=o2.getContext('2d');z.fillStyle=thc();z.fillRect(0,0,iw,ih);z.globalCompositeOperation='destination-in';z.drawImage(tx,0,0);z.globalCompositeOperation='multiply';z.drawImage(tx,0,0);z.globalCompositeOperation='destination-in';z.drawImage(tx,0,0);y.drawImage(o2,0,0)}
   y.drawImage(hg,0,0);var s2=ah/ih;x.save();x.shadowColor='rgba(60,30,20,.28)';x.shadowBlur=70;x.shadowOffsetY=40;x.drawImage(o,(W-iw*s2)/2,top,iw*s2,ah);x.restore()}
  var ty=top+ah+110;x.fillStyle='#4C050D';x.font='500 64px '+AR;x.fillText(own?T('فكرتي الخاصة','My own idea'):d[l?0:1],W/2,ty);
  x.fillStyle='#6f6660';x.font='400 34px '+BD;x.fillText([FB[pick.f][l?0:1],CL[pick.c][l?1:2]].concat(own||pick.t===0?[]:[T('تطريز ','')+TH[pick.t][l?1:2]+T('',' embroidery')]).join('  ·  '),W/2,ty+70);
  x.fillStyle='#A98750';x.font='400 30px '+BD;x.fillText(T('التفصيل الخاص من سيدة العباية','Made to measure by MS ABAYA'),W/2,H-150);x.fillStyle='#4C050D';x.font='400 32px Jost';x.direction='ltr';x.fillText('@mss.abaya',W/2,H-100);
  cv.toBlob(function(bl){b.classList.remove('busy');var fn='ms-abaya-design.png',fl=new File([bl],fn,{type:'image/png'});
   if(navigator.canShare&&navigator.canShare({files:[fl]})){navigator.share({files:[fl],title:'MS ABAYA'}).catch(function(){});return}
   var a=D.createElement('a');a.href=URL.createObjectURL(bl);a.download=fn;D.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},1500)},'image/png')
 }).catch(function(){b.classList.remove('busy')})}
if(V===2&&'IntersectionObserver' in window)new IntersectionObserver(function(e){D.body.classList.toggle('inmm',e[0].isIntersecting)}).observe(sec);
function keep(fn){var y=scrollY;fn();scrollTo(0,y)}

function v3(){var l=L();
 sec.innerHTML='<div class="m3"><div class="m3p">'+ph('t3')+'<div class="m3c">'+head()+'</div></div><div class="m3t"><p class="m3i">'+T('من الفكرة إلى عباءة على قياسكِ، خطوة بخطوة.','From an idea to an abaya cut to you, step by step.')+'</p><div class="tl" id="tl"><i class="tlf" id="tlf"></i>'+
  ST.map(function(s){return '<div class="ts"><span class="ic">'+IC[s[0]]+'</span><div><b>'+(l==='ar'?s[1]:s[2])+'</b><span>'+(l==='ar'?s[3]:s[4])+'</span></div></div>'}).join('')+
  '<div class="ts end"><span class="ic"><svg viewBox="0 0 48 48"><path d="M10 25l9 9 19-20"/></svg></span><div><b>'+T('تصلكِ جاهزة','Delivered to you')+'</b><span>'+T('خلال أسبوع إلى أسبوعين','Within 1–2 weeks')+'</span></div></div></div>'+cta()+'</div></div>';
 var tl=D.getElementById('tl'),f=D.getElementById('tlf'),items=tl.querySelectorAll('.ts');
 function sc(){var r=tl.getBoundingClientRect(),h=innerHeight*.62,p=Math.max(0,Math.min(1,(h-r.top)/r.height));f.style.height=(p*100)+'%';
  [].forEach.call(items,function(it){it.classList.toggle('on',it.getBoundingClientRect().top<h)})}
 addEventListener('scroll',sc,{passive:true});sc()}

function render(){({1:v1,2:v2,3:v3})[V]()}
MS.onLang.push(render);render();
})();
