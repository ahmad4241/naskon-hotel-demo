(function(){"use strict";
var WA="9647848705042",T=window.RK,root=document.documentElement;
function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
var nl=(navigator.language||"").slice(0,2),L=get("royalLang")||(nl==="fa"?"fa":nl==="ur"?"ur":nl==="en"?"en":"ar");if(!T[L])L="ar";
function wa(t){return "https://wa.me/"+WA+"?text="+encodeURIComponent(t)}
function render(){var t=T[L];root.lang=L;root.dir=L==="en"?"ltr":"rtl";
 [].forEach.call(document.querySelectorAll("[data-t]"),function(el){var v=t[el.dataset.t];if(v!=null)el.textContent=v});
 [].forEach.call(document.querySelectorAll("[data-wa]"),function(a){var m=t[a.dataset.wa]||"";if(a.dataset.wx)m+=t[a.dataset.wx]||"";a.href=wa(m);a.target="_blank";a.rel="noopener"});
 [].forEach.call(document.querySelectorAll("#lm button"),function(b){b.classList.toggle("on",b.dataset.l===L)});
 var pk=document.body.dataset.title;document.title=(pk&&t[pk]?t[pk]+" | ":"")+t.name;}
render();
var lb=document.getElementById("lb"),lm=document.getElementById("lm");
function lmT(o){lm.classList.toggle("on",o);lb.setAttribute("aria-expanded",o)}
lb&&lb.addEventListener("click",function(e){e.stopPropagation();lmT(!lm.classList.contains("on"))});
document.addEventListener("click",function(){lm&&lmT(false)});
lm&&lm.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;L=b.dataset.l;set("royalLang",L);lmT(false);render()});
var dr=document.getElementById("drawer");
[].forEach.call(document.querySelectorAll("[data-drawer]"),function(b){b.addEventListener("click",function(){dr.classList.toggle("on");document.body.style.overflow=dr.classList.contains("on")?"hidden":""})});
var hd=document.getElementById("hd");function sc(){hd.classList.toggle("s",scrollY>40)}addEventListener("scroll",sc,{passive:true});sc();
var io="IntersectionObserver" in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12}):null;
[].forEach.call(document.querySelectorAll(".rv,.rklogo"),function(el){io?io.observe(el):el.classList.add("in")});
[].forEach.call(document.querySelectorAll("form[data-wform]"),function(f){f.addEventListener("submit",function(e){e.preventDefault();var t=T[L],lines=[t[f.dataset.wform]||""];
 [].forEach.call(f.querySelectorAll("[name]"),function(i){var lab=i.closest("label");var k=lab&&lab.querySelector("[data-t]");var v=i.tagName==="SELECT"?i.options[i.selectedIndex].text:i.value;if(v)lines.push((k?k.textContent+": ":"")+v)});
 window.open(wa(lines.join("\n")),"_blank","noopener")})});
[].forEach.call(document.querySelectorAll('input[type="date"]'),function(i){var d=new Date();i.min=d.toISOString().slice(0,10);if(!i.value)i.value=i.min});
var gt=document.querySelector(".gtabs");if(gt)gt.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;[].forEach.call(gt.children,function(x){x.classList.toggle("on",x===b)});var c=b.dataset.c;[].forEach.call(document.querySelectorAll(".gal figure"),function(f){f.hidden=!(c==="all"||f.dataset.c===c)})});
var box=document.getElementById("lbx");if(box){var bi=box.querySelector("img");[].forEach.call(document.querySelectorAll(".gal figure,[data-zoom]"),function(f){f.addEventListener("click",function(){var im=f.querySelector("img")||f;bi.src=im.currentSrc||im.src;box.classList.add("on")})});box.addEventListener("click",function(){box.classList.remove("on")});addEventListener("keydown",function(e){if(e.key==="Escape")box.classList.remove("on")})}
})();