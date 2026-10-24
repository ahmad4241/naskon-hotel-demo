(function(){"use strict";
var D=window.RKMENU||[],T=window.RK,root=document.documentElement,WA="9647848705042",LS=["ar","en","fa","ur"];
function li(){var i=LS.indexOf(root.lang);return i<0?0:i}function t(k){return (T[root.lang]||T.ar)[k]||""}
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function price(p){return '<span dir="ltr">'+p.toLocaleString("en-US")+'</span><small>'+esc(t("mnCur"))+'</small>'}
var PH='<span class="mi-ph"><img src="brand/logo.svg" alt="" loading="lazy"></span>';
var $=function(id){return document.getElementById(id)},list=$("mnL"),chips=$("mnC"),q=$("mnQ"),none=$("mnN");
function render(){var l=li(),s=(q.value||"").trim().toLowerCase(),h="",c="",shown=0;
 D.forEach(function(cat,ci){var its=cat.it.map(function(it,ii){return [it,ii]}).filter(function(p){return !s||p[0].n.join(" ").toLowerCase().indexOf(s)>-1});
  if(!its.length)return;shown+=its.length;
  c+='<button type="button" data-c="'+ci+'">'+esc(cat.n[l])+'</button>';
  h+='<section class="mnu-sec" id="mc'+ci+'" data-c="'+ci+'"><h2>'+esc(cat.n[l])+'<small>'+its.length+' '+esc(t("mnItems"))+'</small></h2><div class="mnu-g">'+its.map(function(p){var it=p[0];
   return '<button type="button" class="mi" data-c="'+ci+'" data-i="'+p[1]+'"><span class="mi-im">'+(it.i?'<img src="menu/'+it.i+'.webp" alt="" loading="lazy" decoding="async" onload="this.classList.add(\'ld\')">':PH)+'</span><span class="mi-tx"><b>'+esc(it.n[l])+'</b><em>'+price(it.p)+'</em></span></button>'}).join("")+'</div></section>'});
 list.innerHTML=h;chips.innerHTML=c;none.style.display=shown?"none":"block";spy();}
var io;function spy(){if(io)io.disconnect();if(!("IntersectionObserver" in window))return;
 io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)act(e.target.dataset.c)})},{rootMargin:"-45% 0px -50% 0px"});
 [].forEach.call(list.querySelectorAll(".mnu-sec"),function(s){io.observe(s)});var f=chips.querySelector("button");if(f)f.classList.add("on")}
function act(ci){[].forEach.call(chips.children,function(b){var on=b.dataset.c===ci;b.classList.toggle("on",on);if(on){var r=b.offsetLeft-chips.clientWidth/2+b.offsetWidth/2;chips.scrollTo({left:r,behavior:"smooth"})}})}
chips.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var s=$("mc"+b.dataset.c);if(s){var y=s.getBoundingClientRect().top+scrollY-(document.querySelector(".mnu-top").offsetHeight+top0()+8);scrollTo({top:y,behavior:"smooth"});act(b.dataset.c)}});
q.addEventListener("input",render);
function top0(){var h=document.getElementById("hd");return h?h.getBoundingClientRect().bottom:0}
function setTop(){var h=document.getElementById("hd");root.style.setProperty("--mtop",(h?Math.max(0,h.getBoundingClientRect().bottom):0)+"px")}
addEventListener("scroll",setTop,{passive:true});addEventListener("resize",setTop);setTop();
var ds=$("mnD");
list.addEventListener("click",function(e){var b=e.target.closest(".mi");if(!b)return;var cat=D[b.dataset.c],it=cat.it[b.dataset.i],l=li();
 ds.querySelector(".mds-im").innerHTML='<button type="button" class="mds-x" data-x aria-label="Close">✕</button>'+(it.i?'<img src="menu/'+it.i+'.webp" alt="">':PH);
 ds.querySelector(".mds-tx").innerHTML='<small>'+esc(cat.n[l])+'</small><h3>'+esc(it.n[l])+'</h3>'+(it.d&&it.d[l]?'<p>'+esc(it.d[l])+'</p>':'')+'<div class="pr">'+price(it.p)+'</div>';
 var a=ds.querySelector(".mds-ac a");a.href="https://wa.me/"+WA+"?text="+encodeURIComponent(t("mnAskMsg")+it.n[l]);a.querySelector("span").textContent=t("mnAsk");
 ds.classList.add("on");document.body.style.overflow="hidden"});
function cl(){ds.classList.remove("on");document.body.style.overflow=""}
ds.addEventListener("click",function(e){if(e.target.closest("[data-x]"))cl()});addEventListener("keydown",function(e){if(e.key==="Escape")cl()});
document.body.classList.add("mnu-page");var GR="https://search.google.com/local/writereview?placeid=ChIJUVNDzo1rWRURJ9hLD7Smes0",rv=document.createElement("a");rv.className="rvbar";rv.href=GR;rv.target="_blank";rv.rel="noopener";
rv.innerHTML='<span class="rvbar-tx"><i class="rvbar-st" aria-hidden="true">★★★★★</i><b data-t="rvT"></b><span data-t="rvS"></span></span><span class="rvbar-b"><span data-t="rvB"></span></span>';document.body.appendChild(rv);setTimeout(function(){rv.classList.add("show")},600);
function txt(){[].forEach.call(rv.querySelectorAll("[data-t]"),function(e){e.textContent=t(e.dataset.t)});q.placeholder=t("mnSearch");var r=$("mnR");if(r)r.href="https://wa.me/"+WA+"?text="+encodeURIComponent(t("mnResMsg"));render()}
new MutationObserver(txt).observe(root,{attributes:true,attributeFilter:["lang"]});txt();
})();
