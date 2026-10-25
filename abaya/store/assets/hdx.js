/* سيدة العباية — header: one design, two layouts (phone / laptop) */
(function(){
var D=document,H=D.documentElement,B=D.body,L=MS.L,T=MS.T,I=MS.I;
var hd=D.getElementById('hd'),ann=D.getElementById('ann');
var bMenu=D.getElementById('bMenu'),bBag=D.getElementById('bBag'),bLang=D.getElementById('bLang'),acc=hd.querySelector('a.ic'),mk=hd.querySelector('.mk');
bLang.innerHTML=I.globe+'<span class="lt"></span>';bLang.classList.add('lg');
D.body.insertAdjacentHTML('afterbegin',"<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol id=\"wmen\" viewBox=\"776.7 700.8 319.5 47.6\"><g fill=\"currentColor\"><path d=\"M 777.93 702.47 L 793.45 702.56 L 802.54 733.19 L 802.67 733.19 L 812.16 702.66 L 827.29 702.75 L 827.28 704.39 L 820.86 704.35 L 820.64 744.32 L 827.06 744.36 L 827.05 746.00 L 806.69 745.89 L 806.71 744.25 L 813.32 744.28 L 813.54 703.57 L 813.41 703.57 L 800.31 745.85 L 798.82 745.85 L 786.19 703.42 L 786.06 703.42 L 785.83 744.13 L 792.44 744.17 L 792.44 745.81 L 777.69 745.73 L 777.70 744.08 L 784.19 744.12 L 784.41 704.15 L 777.92 704.12 Z M 777.93 702.47 \"/><path d=\"M 860.45 702.44 L 860.58 713.67 L 859.07 713.66 C 856.96 706.92 853.18 703.53 847.74 703.50 C 844.73 703.48 842.38 704.30 840.71 705.96 C 839.03 707.62 838.19 709.34 838.18 711.13 C 838.17 712.78 838.85 714.19 840.24 715.36 C 841.62 716.53 844.14 717.44 847.82 718.10 C 851.49 718.75 854.29 719.54 856.21 720.47 C 858.13 721.39 859.75 722.92 861.05 725.06 C 862.37 727.19 863.01 729.64 863.00 732.39 C 862.98 736.63 861.57 740.15 858.80 742.95 C 856.02 745.75 852.58 747.14 848.50 747.12 C 845.16 747.10 841.85 745.85 838.55 743.35 L 835.50 746.05 L 834.37 746.04 L 834.44 733.94 L 835.83 733.95 C 837.08 737.77 838.83 740.64 841.10 742.57 C 843.37 744.49 845.86 745.46 848.57 745.48 C 851.26 745.49 853.73 744.62 855.99 742.85 C 858.25 741.09 859.38 738.86 859.40 736.15 C 859.41 733.87 858.64 731.94 857.09 730.38 C 855.54 728.81 853.02 727.72 849.53 727.11 C 846.03 726.50 843.36 725.80 841.49 725.00 C 839.62 724.21 838.03 722.83 836.71 720.88 C 835.38 718.92 834.73 716.76 834.74 714.40 C 834.76 711.13 835.94 708.22 838.27 705.66 C 840.61 703.10 843.77 701.83 847.75 701.85 C 851.08 701.87 854.18 702.94 857.05 705.07 C 857.85 704.32 858.55 703.44 859.13 702.44 Z M 860.45 702.44 \"/><path d=\"M 897.10 731.26 L 909.66 731.33 L 903.65 713.97 L 903.52 713.97 Z M 910.23 732.98 L 896.48 732.90 L 892.00 744.71 L 900.00 744.76 L 899.99 746.41 L 884.31 746.32 L 884.32 744.67 L 890.29 744.71 L 906.30 702.18 L 907.30 702.18 L 922.19 744.88 L 928.00 744.91 L 927.99 746.56 L 907.38 746.44 L 907.39 744.80 L 914.39 744.84 Z M 910.23 732.98 \"/><path d=\"M 953.61 705.08 L 947 705.05 L 946.89 723.21 L 952.83 723.24 C 956.85 723.26 959.42 722.5 960.55 720.93 C 961.68 719.37 962.25 716.89 962.27 713.52 C 962.28 710.87 961.93 708.94 961.21 707.74 C 960.48 706.53 959.55 705.79 958.43 705.51 C 957.30 705.24 955.69 705.10 953.61 705.08 M 952.76 724.89 L 946.89 724.85 L 946.77 745.01 L 952.84 745.05 C 955.10 745.06 956.90 744.90 958.25 744.56 C 959.59 744.23 960.74 743.31 961.69 741.82 C 962.65 740.33 963.14 737.99 963.16 734.78 C 963.17 731.36 962.47 728.86 961.05 727.29 C 959.63 725.71 956.86 724.91 952.76 724.89 M 939.10 744.98 L 939.32 705.00 L 932.64 704.97 L 932.65 703.32 L 955.00 703.44 C 957.46 703.46 959.52 703.59 961.19 703.85 C 962.87 704.11 964.48 704.76 966.02 705.80 C 967.57 706.84 968.67 708.12 969.34 709.64 C 970.01 711.16 970.34 712.60 970.33 713.95 C 970.30 719.09 966.34 722.43 958.44 723.98 L 958.44 724.14 C 967.33 725.64 971.76 729.36 971.73 735.32 C 971.73 736.78 971.32 738.32 970.51 739.94 C 969.71 741.56 968.43 742.95 966.68 744.13 C 964.94 745.30 963.15 746.03 961.33 746.31 C 959.51 746.58 957.23 746.72 954.48 746.71 L 932.41 746.58 L 932.42 744.94 Z M 939.10 744.98 \"/><path d=\"M 986.30 731.75 L 998.85 731.82 L 992.85 714.46 L 992.72 714.46 Z M 999.42 733.46 L 985.68 733.39 L 981.19 745.21 L 989.19 745.25 L 989.19 746.89 L 973.51 746.81 L 973.52 745.16 L 979.48 745.19 L 995.5 702.67 L 996.5 702.67 L 1011.39 745.37 L 1017.19 745.41 L 1017.19 747.05 L 996.57 746.94 L 996.58 745.29 L 1003.58 745.33 Z M 999.42 733.46 \"/><path d=\"M 1010.87 703.75 L 1032.49 703.87 L 1032.48 705.52 L 1025.35 705.48 L 1037.92 724.64 L 1050.51 705.62 L 1042.67 705.57 L 1042.68 703.93 L 1058.01 704.01 L 1058.00 705.66 L 1052.39 705.63 L 1038.72 726.23 L 1038.62 745.52 L 1045.81 745.56 L 1045.80 747.21 L 1023.60 747.08 L 1023.62 745.44 L 1030.94 745.48 L 1031.04 727.32 L 1016.64 705.43 L 1010.87 705.40 Z M 1010.87 703.75 \"/><path d=\"M 1064.30 732.18 L 1076.85 732.25 L 1070.85 714.89 L 1070.72 714.89 Z M 1077.42 733.89 L 1063.68 733.82 L 1059.20 745.64 L 1067.20 745.68 L 1067.19 747.32 L 1051.51 747.24 L 1051.52 745.59 L 1057.49 745.62 L 1073.5 703.10 L 1074.5 703.10 L 1089.39 745.80 L 1095.20 745.83 L 1095.19 747.48 L 1074.58 747.37 L 1074.58 745.72 L 1081.58 745.76 Z M 1077.42 733.89 \"/></g></symbol></svg>");
mk.innerHTML='<svg class="wm2" aria-label="MS ABAYA" role="img"><use href="#wmen"/></svg>';
var r1=D.createElement('div');r1.className='r1';
var s=D.createElement('div');s.className='s';s.append(bMenu,bLang);/* language shows in the header on laptop only; on phones it lives in the menu */
var e=D.createElement('div');e.className='e';e.append(acc,bBag);
r1.append(s,mk,e);
var nav=D.createElement('nav');nav.className='dn';
var mega=D.createElement('div');mega.className='mega';
hd.innerHTML='';hd.append(r1,nav,mega);hd.classList.add('hv');

function render(){var l=L();
 D.querySelector('#bLang .lt').textContent=l==='ar'?'English':'العربية';
 nav.innerHTML=[
  ['home2.html',T('الرئيسية','Home')],
  ['category.html',T('المتجر','Shop'),'mega'],
  ['category.html?l=vip','VIP'],
  ['tailoring.html',T('التفصيل الخاص','Made to measure')],
  ['about.html',T('من نحن','About us')],
  ['contact.html',T('تواصلي معنا','Contact')]
 ].map(function(x){return '<a href="'+x[0]+'"'+(x[2]==='mega'?' data-mega class="hasm"':'')+'><span>'+x[1]+'</span>'+(x[2]==='mega'?'<i></i>':'')+'</a>'}).join('');
 var cats=MS.CATS.filter(function(c){return c.id!=='under'}).map(function(c){return '<a href="category.html?c='+c.id+'">'+c[l]+'</a>'}).join('');
 var un=MS.CATS.filter(function(c){return c.id==='under'})[0];
 mega.innerHTML='<div class="mg">'+
  '<div class="mc"><em>'+T('العبايات','Abayas')+'</em><a href="category.html">'+T('كل العبايات','All abayas')+'</a>'+cats+'</div>'+
  '<div class="mc"><em>'+un[l]+'</em><a href="category.html?c=under">'+T('الكل','All')+'</a>'+un.subs.map(function(x){return '<a href="category.html?c=under&s='+x.id+'">'+x[l]+'</a>'}).join('')+'</div>'+
  '<div class="mtw"><div class="mt2"><a class="mt" href="category.html?s=new"><span class="ph2"><svg><use href="#s1"/></svg></span><b>'+T('وصل حديثاً','New in')+'</b></a><a class="mt nv2" href="category.html?l=vip"><span class="ph2"><svg><use href="#s1"/></svg></span><b>'+T('مجموعة VIP','The VIP collection')+'</b></a></div><a class="mof" href="category.html?s=sale">'+T('العروض','Offers')+' <i>←</i></a></div>'+
 '</div>';
}
MS.onLang.push(render);

/* shop panel (laptop only) */
var mt,lap=matchMedia('(min-width:1024px)');
function mOpen(){if(!lap.matches)return;clearTimeout(mt);hd.classList.add('mo')}
function mClose(){mt=setTimeout(function(){hd.classList.remove('mo')},180)}
hd.addEventListener('mouseover',function(ev){if(ev.target.closest('[data-mega]')||ev.target.closest('.mega'))mOpen();else if(ev.target.closest('.dn a'))hd.classList.remove('mo')});
hd.addEventListener('mouseleave',mClose);
mega.addEventListener('mouseleave',mClose);
lap.addEventListener('change',function(){hd.classList.remove('mo')});

/* scroll: the header stays with you; it turns solid as soon as you start scrolling */
function want(){var y=window.pageYOffset||D.documentElement.scrollTop,sw=D.querySelector('.hero.sw'),lim=sw?sw.offsetHeight-innerHeight*1.02:12;return B.dataset.over==='1'&&y<lim&&!hd.classList.contains('mo')}
function sc(){var y=window.pageYOffset||D.documentElement.scrollTop;B.classList.toggle('scd',y>8);var w=want();if(hd.classList.contains('clear')!==w)hd.classList.toggle('clear',w)}
/* the shared shell has its own rule for this; keep ours authoritative whatever order events arrive in */
new MutationObserver(function(){var w=want();if(hd.classList.contains('clear')!==w)hd.classList.toggle('clear',w)}).observe(hd,{attributes:true,attributeFilter:['class']});
addEventListener('touchmove',sc,{passive:true});addEventListener('resize',sc);
addEventListener('scroll',sc,{passive:true});sc();
})();
