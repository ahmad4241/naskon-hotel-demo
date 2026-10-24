(function(){var T=window.RK,S={"tryW": ["جرّب معه", "Goes well with", "با این امتحان کنید", "اس کے ساتھ آزمائیں"], "brw": ["تصفّح القسم", "Browse", "مشاهده", "دیکھیں"], "sw": ["اسحب يميناً أو يساراً للتنقل بين الأقسام", "Swipe left or right to move between sections", "برای جابه‌جایی بین بخش‌ها به چپ یا راست بکشید", "سیکشنز کے درمیان جانے کے لیے دائیں یا بائیں سوائپ کریں"]},L=["ar","en","fa","ur"];for(var k in S)L.forEach(function(l,i){if(T[l])T[l][k]=S[k][i]})})();
(function(){"use strict";
var D=window.RKMENU||[],T=window.RK,root=document.documentElement,LS=["ar","en","fa","ur"],PAIR={"0": [15, 14, 18], "1": [15, 18, 16], "2": [11, 16, 18], "3": [16, 18, 13], "4": [18, 16, 15], "5": [17, 13, 18], "6": [18, 16, 17], "7": [0, 8, 2], "8": [10, 11, 12], "9": [0, 7, 14], "10": [11, 8, 12], "11": [10, 8, 12], "12": [10, 3, 11], "13": [10, 3, 2], "14": [0, 6, 1], "15": [0, 1, 6], "16": [6, 0, 1], "17": [6, 0, 4], "18": [6, 0, 1]},SL=[[-1, 0], [0, 0], [18, 0], [10, 31]];
function li(){var i=LS.indexOf(root.lang);return i<0?0:i}function t(k){return (T[root.lang]||T.ar)[k]||""}
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function img(it){return it.i?"menu/"+it.i+".webp":"brand/logo.svg"}
function goCat(ci){var b=document.querySelector('#mnC button[data-c="'+ci+'"]');if(b)b.click()}
/* ---- hero slider ---- */
var hs=document.getElementById("mhs");
function slides(){var l=li();return SL.map(function(s,i){var c=s[0],ttl,sub,src;
 if(c<0){ttl=t("mnH");sub=t("mnS");src="ph/rooftop-hd.webp"}else{var cat=D[c];ttl=cat.n[l];sub=cat.it.length+" "+t("mnItems");src=img(cat.it[s[1]])}
 return '<div class="mhs-sl'+(i===cur?' on':'')+'"><img src="'+src+'" alt="" '+(i?'loading="lazy"':'fetchpriority="high"')+'><div class="mhs-tx"><small>★ ★ ★ ★ ★</small>'+(i?'<h2>':'<h1>')+esc(ttl)+(i?'</h2>':'</h1>')+'<p>'+esc(sub)+'</p>'+(c<0?'':'<button type="button" data-go="'+c+'">'+esc(t("brw"))+'</button>')+'</div></div>'}).join("")}
var cur=0,tm;
function paint(){hs.querySelector(".mhs-tr").innerHTML=slides();hs.querySelector(".mhs-dt").innerHTML=SL.map(function(_,i){return '<button type="button" data-d="'+i+'" aria-label="'+(i+1)+'"></button>'}).join("");show(cur)}
function show(n){cur=(n+SL.length)%SL.length;hs.querySelector(".mhs-tr").style.transform="translateX("+(-100*cur)+"%)";
 [].forEach.call(hs.querySelectorAll(".mhs-sl"),function(s,i){s.classList.toggle("on",i===cur)});[].forEach.call(hs.querySelectorAll(".mhs-dt button"),function(b,i){b.classList.toggle("on",i===cur)});clearTimeout(tm);tm=setTimeout(function(){show(cur+1)},4500)}
hs.addEventListener("click",function(e){var d=e.target.closest("[data-d]");if(d){show(+d.dataset.d);return}var g=e.target.closest("[data-go]");if(g)goCat(g.dataset.go)});
function swipe(el,fn){var x0,y0;el.addEventListener("touchstart",function(e){x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
 el.addEventListener("touchend",function(e){if(x0==null)return;var dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=null;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.8)fn(dx)},{passive:true})}
swipe(hs,function(dx){var fwd=root.dir==="rtl"?dx>0:dx<0;show(cur+(fwd?1:-1))});
/* ---- swipe between categories ---- */
var list=document.getElementById("mnL");
swipe(list,function(dx){var on=document.querySelector("#mnC button.on");if(!on)return;var all=[].slice.call(document.querySelectorAll("#mnC button")),i=all.indexOf(on);var fwd=root.dir==="rtl"?dx>0:dx<0;var n=all[i+(fwd?1:-1)];if(!n)return;n.click();
 var s=document.getElementById("mc"+n.dataset.c);if(s){s.classList.remove("slide-l","slide-r");void s.offsetWidth;s.classList.add(fwd?"slide-l":"slide-r")}});
/* ---- pairings in item sheet ---- */
var ds=document.getElementById("mnD");
function pairs(ci,ii){var out=[];(PAIR[ci]||[]).forEach(function(c,k){var its=D[c].it.filter(function(x){return x.i});if(!its.length)return;var it=its[(ii*3+k*5)%its.length];out.push([c,D[c].it.indexOf(it)])});return out}
function addPairs(ci,ii){var l=li(),old=ds.querySelector(".mds-pr");if(old)old.remove();var P=pairs(ci,ii);if(!P.length)return;
 var h='<div class="mds-pr"><h4>'+esc(t("tryW"))+'</h4><div class="mds-pg">'+P.map(function(p){var it=D[p[0]].it[p[1]];return '<button type="button" data-pc="'+p[0]+'" data-pi="'+p[1]+'"><img src="'+img(it)+'" alt="" loading="lazy"><b>'+esc(it.n[l])+'</b><em dir="ltr">'+it.p.toLocaleString("en-US")+'</em></button>'}).join("")+'</div></div>';
 ds.querySelector(".mds-tx").insertAdjacentHTML("afterend",h)}
list.addEventListener("click",function(e){var b=e.target.closest(".mi");if(b)addPairs(+b.dataset.c,+b.dataset.i)});
ds.addEventListener("click",function(e){var b=e.target.closest("[data-pc]");if(!b)return;var c=b.dataset.pc,i=b.dataset.pi;
 var q=document.getElementById("mnQ");if(q&&q.value){q.value="";q.dispatchEvent(new Event("input"))}
 var m=list.querySelector('.mi[data-c="'+c+'"][data-i="'+i+'"]');if(m){m.click();ds.querySelector(".mds-pn").scrollTop=0}});
function txt(){paint();var sw=document.getElementById("mnSw");if(sw)sw.querySelector("span").textContent=t("sw")}
new MutationObserver(txt).observe(root,{attributes:true,attributeFilter:["lang","dir"]});txt();
})();
