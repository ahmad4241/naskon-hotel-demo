/* بيانات تجريبية للمعاينة — تُستبدل بمنتجات الدار الحقيقية من لوحة التحكم */
window.MS = window.MS || {};
MS.CATS = [
  {id:'daily',    ar:'عبايات يومية',     en:'Everyday',        img:'img/r3.webp'},
  {id:'formal',   ar:'عبايات رسمية',     en:'Formal',          img:'img/r1.webp'},
  {id:'occasion', ar:'عبايات مناسبات',   en:'Occasion',        img:'img/r4.webp'},
  {id:'design',   ar:'تصاميم سيدة العباية', en:'MS ABAYA Signatures',img:'img/r2.webp'},
  {id:'under',    ar:'تحت العباية',      en:'Under the abaya', img:'img/cat-shayla.webp', cover:true,
   subs:[{id:'dresses',ar:'فساتين',en:'Dresses'},{id:'suits',ar:'سوت',en:'Suits'}]}
];
MS.LEVELS = {daily:{ar:'يومي',en:'Everyday'}, lux:{ar:'فاخر',en:'Luxury'}, vip:{ar:'VIP',en:'VIP'}};
MS.SIZES = [52,54,56,58,60];
MS.PRODUCTS = [
  {id:'bareeq', img:'img/r1.webp', cat:'formal', lvl:'vip', price:185000, old:0, stock:3, isNew:1,
   ar:'عباءة البريق', en:'Bareeq',
   dar:'كريب أسود بتطريز ترتر وكريستال على الأطراف والأكمام', den:'Black crepe with sequin and crystal trim on edges and cuffs',
   colors:[{h:'#141414',ar:'أسود',en:'Black'}]},
  {id:'black-rose', img:'img/r2.webp', cat:'design', lvl:'lux', price:145000, old:165000, stock:5, isNew:1,
   ar:'عباءة الورد الأسود', en:'Black Rose',
   dar:'كريب بيج بزهور سوداء مطرزة بارزة', den:'Beige crepe with raised black floral embroidery',
   colors:[{h:'#b9a48c',ar:'بيج',en:'Beige'},{h:'#141414',ar:'أسود',en:'Black'}]},
  {id:'autumn', img:'img/r3.webp', cat:'daily', lvl:'daily', price:75000, old:0, stock:12, isNew:0,
   ar:'عباءة الخريف', en:'Autumn',
   dar:'بنّي داكن بأوراق مخملية مطرزة بالخرز', den:'Deep brown with beaded velvet leaf appliqués',
   colors:[{h:'#3e2a20',ar:'بنّي',en:'Brown'}]},
  {id:'pearl', img:'img/r4.webp', cat:'occasion', lvl:'vip', price:210000, old:0, stock:2, isNew:1,
   ar:'عباءة اللؤلؤ', en:'Pearl',
   dar:'شيفون عاجي بتطريز أبيض ناعم', den:'Ivory chiffon with delicate white embroidery',
   colors:[{h:'#efe9df',ar:'عاجي',en:'Ivory'}]},
  {id:'spring', img:'img/r5.webp', cat:'daily', lvl:'lux', price:95000, old:115000, stock:8, isNew:0,
   ar:'عباءة الربيع', en:'Spring',
   dar:'رمادي فاتح بتطريز زهور ملوّنة', den:'Soft grey with colourful floral embroidery',
   colors:[{h:'#a9b2b7',ar:'رمادي',en:'Grey'}]}
];
MS.WA = '9647744807778';
