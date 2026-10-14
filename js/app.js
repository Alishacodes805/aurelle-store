const CATS={men:{n:"Men",e:"👔",d:["Fabric","Fit","Care"]},women:{n:"Women",e:"👗",d:["Fabric","Fit","Care"]},watches:{n:"Watches",e:"⌚",d:["Movement","Strap","Water resistance"]},fragrance:{n:"Fragrance",e:"🧴",d:["Top notes","Longevity","Concentration"]},jewelry:{n:"Jewelry",e:"💍",d:["Material","Stone","Warranty"]}};
const C={black:"#1b1b1f",white:"#f4f4f1",navy:"#1f3a5f",olive:"#6b7a4a",maroon:"#7a1f2b",sky:"#8ec5e8",grey:"#8a8f98",beige:"#d8c3a0",rose:"#e8a5b4",emerald:"#1f7a5a",gold:"#d4af37",silver:"#c4c8cf",rosegold:"#d9a38f",brown:"#6b4429",blue:"#2c5fa8",mint:"#a9dcc6",lime:"#8dbb3f",lilac:"#b9a6e0"};
const SZ={men:["S","M","L","XL"],women:["S","M","L","XL"],fragrance:["50ml","100ml"]};
let id=0;const PR=[];
function P(cat,name,price,cols,d,desc){PR.push({id:++id,cat,name,price,cols,d,desc})}
P("men","Classic Oxford Shirt",3490,["white","sky","navy"],["100% cotton oxford","Regular fit","Machine wash cold"],"A crisp everyday shirt that works for office and weekends.");
P("men","Slim Fit Polo",2490,["navy","black","olive","maroon"],["Textured cotton knit","Slim fit","Machine wash cold"],"A textured knit polo with a clean zip placket.");
P("men","Wrap Collar Summer Set",4490,["lime","olive","beige"],["Crinkle viscose blend","Relaxed fit","Machine wash cold"],"A light wrap-style top with matching trousers for hot days.");
P("men","Graphic Crew Tee",1690,["black","white","grey"],["Combed cotton, 180 GSM","Regular fit","Wash inside out"],"Oversized black cotton tee with a statue graphic print on the back.");
P("men","Chino Trousers",4290,["beige","navy","olive"],["Cotton twill with 2% elastane","Tapered fit","Machine wash cold"],"Comfortable stretch chinos that hold their shape.");
P("women","Printed Co-ord Set",4990,["maroon","navy","emerald"],["Soft cotton blend","Straight fit","Machine wash cold"],"A printed kurta with matching straight trousers.");
P("women","Striped Cotton Dupatta",2490,["sky","rose","beige","grey"],["Light cotton blend","Free size","Hand wash cold"],"A soft striped dupatta that pairs well with plain suits.");
P("women","Casual Cotton Shirt",2190,["white","sky","rose"],["Soft cotton","Relaxed fit","Machine wash cold"],"Easy, breathable shirt to wear with jeans or trousers.");
P("women","Gingham Puff Sleeve Dress",5490,["sky","mint","rose"],["Cotton gingham","Fitted bodice, flared skirt","Machine wash cold"],"A sweet gingham dress with puff sleeves and a lace neckline.");
P("women","Printed Wide Leg Trousers",2490,["black","grey","beige"],["Soft woven blend","Wide leg, tie waist","Machine wash cold"],"Easy wide-leg trousers with an elastic, tie-up waist.");
P("watches","Black Mesh Watch",8500,["black","silver","rosegold"],["Quartz","Stainless steel mesh strap","30 m (3 ATM)"],"A slim black-dial watch with rose-gold hands and a small seconds dial.");
P("watches","Minimal Leather Watch",7900,["brown","black","navy"],["Quartz","Genuine leather strap","30 m (3 ATM)"],"A minimal marble-dial watch with a thin brown leather strap.");
P("watches","Ladies Gold Bracelet Watch",8900,["gold","rosegold","silver"],["Quartz","Gold-tone steel bracelet","30 m (3 ATM)"],"A slim ladies watch with a clean white dial.");
P("watches","Smart Fitness Watch",5500,["white","black","mint"],["Digital touch display","Silicone strap","Splash and sweat resistant"],"A square-display watch that shows the time, date and your steps.");
P("fragrance","Oud Royale",6900,["brown","black"],["Oud, saffron, amber","10+ hours","Eau de Parfum"],"A deep, warm oud for evenings and special occasions.");
P("fragrance","Peach Blush",4500,["rosegold","rose"],["Peach, jasmine, soft musk","6-8 hours","Eau de Parfum"],"A soft peach and amber scent in a slim bottle with a blush-pink cap.");
P("fragrance","Rose Musk",5200,["rose","lilac"],["Damask rose, musk, vanilla","8-10 hours","Eau de Parfum"],"Soft floral with a creamy musk base.");
P("fragrance","Amber Noir",7400,["black","silver"],["Black pepper, amber, leather","10-12 hours","Parfum"],"Rich and strong, for anyone who wants to be noticed.");
P("jewelry","Pearl Drop Earrings",3900,["white","gold"],["Sterling silver, gold plated","Freshwater pearl","6-month plating warranty"],"Classic pearl drops that suit both desi and western outfits.");
P("jewelry","Antique Silver Choker Set",9800,["silver","gold"],["Oxidised silver-tone alloy","Pearls, kundan and coloured stones","3-month polish warranty"],"A statement choker with matching jhumka earrings.");
P("jewelry","Chunky Gold Chain Bracelet",4800,["gold","silver"],["Gold-tone brass","None","6-month polish warranty"],"A bold matte-gold curb chain with an adjustable clasp.");
P("jewelry","Gold Stone Band Ring",6500,["gold","rosegold"],["Gold-plated sterling silver","Lab-created stones","1-year warranty"],"A slim gold band set with a row of sparkling stones.");
const FREE=3000;
PR.forEach((p,i)=>{if(i%3!=1){p.off=[10,15,20,25][i%4];p.old=Math.round(p.price/(1-p.off/100)/100)*100}p.rt=(4.2+((i*7)%8)/10).toFixed(1);p.rc=18+(i*37)%90});
const $=s=>document.querySelector(s),app=$("#app"),fmt=n=>"Rs "+n.toLocaleString("en-PK");
let cart=[];try{cart=JSON.parse(localStorage.getItem("cart")||"[]")}catch(e){}
let W=[];try{W=JSON.parse(localStorage.getItem("wish")||"[]")}catch(e){}
const save=()=>{try{localStorage.setItem("cart",JSON.stringify(cart))}catch(e){}$("#cb").textContent="Cart ("+cart.reduce((a,i)=>a+i.q,0)+")";if($("#dr")&&$("#dr").classList.contains("open"))renderDr()};
const toast=m=>{const t=$("#toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)};
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const IMG={
 "hero": "images/hero.jpg",
 "cat-jewelry": "images/cat-jewelry.jpg",
 "cat-fragrance": "images/cat-fragrance.jpg",
 "cat-watches": "images/cat-watches.jpg",
 "cat-women": "images/cat-women.jpg",
 "cat-men": "images/cat-men.jpg",
 "chino-trousers": "images/chino-trousers.jpg",
 "graphic-crew-tee": "images/graphic-crew-tee.jpg",
 "wrap-collar-summer-set": "images/wrap-collar-summer-set.jpg",
 "slim-fit-polo": "images/slim-fit-polo.jpg",
 "classic-oxford-shirt": "images/classic-oxford-shirt.jpg",
 "printed-wide-leg-trousers": "images/printed-wide-leg-trousers.jpg",
 "gingham-puff-sleeve-dress": "images/gingham-puff-sleeve-dress.jpg",
 "casual-cotton-shirt": "images/casual-cotton-shirt.jpg",
 "striped-cotton-dupatta": "images/striped-cotton-dupatta.jpg",
 "printed-co-ord-set": "images/printed-co-ord-set.jpg",
 "minimal-leather-watch": "images/minimal-leather-watch.jpg",
 "ladies-gold-bracelet-watch": "images/ladies-gold-bracelet-watch.jpg",
 "smart-fitness-watch": "images/smart-fitness-watch.jpg",
 "rose-musk": "images/rose-musk.jpg",
 "peach-blush": "images/peach-blush.jpg",
 "oud-royale": "images/oud-royale.jpg",
 "amber-noir": "images/amber-noir.jpg",
 "gold-stone-band-ring": "images/gold-stone-band-ring.jpg",
 "chunky-gold-chain-bracelet": "images/chunky-gold-chain-bracelet.jpg",
 "antique-silver-choker-set": "images/antique-silver-choker-set.jpg",
 "pearl-drop-earrings": "images/pearl-drop-earrings.jpg",
 "black-mesh-watch": "images/black-mesh-watch.jpg"
};
const CG={hero:"linear-gradient(135deg,#2b1d1a,#e0705a)",men:"linear-gradient(135deg,#2b1d1a,#6b5a50)",women:"linear-gradient(135deg,#e0705a,#f6c7b8)",watches:"linear-gradient(135deg,#2a2a30,#8a8f98)",fragrance:"linear-gradient(135deg,#c4503f,#f2b9a5)",jewelry:"linear-gradient(135deg,#6b4f3a,#e8c9a8)"};
const POS={"cat-watches":"50% 52%"};
const bgi=k=>IMG[k]?`background-image:url(${IMG[k]});background-position:${POS[k]||"center"}`:`background:${CG[k.replace('cat-','')]||CG.hero}`;
const tile=(p,c)=>{const s=slug(p.name);return IMG[s]?`<div class="img"><img src="${IMG[s]}" alt="${p.name}"></div>`:`<div class="img" style="background:linear-gradient(145deg,${C[c]},${C[c]}cc)">${CATS[p.cat].e}</div>`};
const card=p=>`<a class="card" href="#/p/${p.id}">${tile(p,p.cols[0]).replace(/<\/div>$/,`<span class="dots">${p.cols.map(c=>`<i style="background:${C[c]}"></i>`).join("")}</span><span class="qv" data-qv="${p.id}" role="button">Quick view</span>${p.off?`<span class="bdg">-${p.off}%</span>`:""}<span class="hrt${W.includes(p.id)?" on":""}" data-w="${p.id}" role="button" aria-label="Save to wishlist">${W.includes(p.id)?"♥":"♡"}</span></div>`)}<div class="t"><h3>${p.name}</h3><div class="mut">${p.cols.length} colours</div><div class="price">${priceHtml(p)}</div></div></a>`;
let sel={c:0,s:0,q:1,v:0};
function route(){const h=CUR.slice(2).split("/"),r=h[0];closeModal();closeCart();toggleNav(false);if(r!="s"&&$("#q"))$("#q").value="";if(r!="s")scrollTo(0,0);
$("#nav").innerHTML=Object.keys(CATS).map(k=>`<a href="#/c/${k}" class="${h[1]==k?"on":""}">${CATS[k].n}</a>`).join("")+`<a href="#/about" class="${r=="about"?"on":""}">About</a><a href="#/contact" class="${r=="contact"?"on":""}">Contact</a>`;
if(r=="c"&&CATS[h[1]])cat(h[1]);else if(r=="p")prod(+h[1]);else if(r=="cart")cartPage();else if(r=="about")about();else if(r=="contact")contact();else if(r=="s")search(decodeURIComponent(h[1]||""));else if(r=="wish")wishPage();else if(r=="order")orderPage();else if(r=="faq")faq();else if(r=="policy")policy();else if(r==""||r=="home")home();else notFound();fx()}
function home(){document.title="Aurelle";return home2()}
function oldHome(){
app.innerHTML=`<section class="hero"><div><h1>Dress well. Smell great. Wear it with pride.</h1><p>Clothing for men and women, watches, fragrance and jewelry. Delivered all over Pakistan with cash on delivery.</p><a class="btn" href="#/c/men">Shop now</a></div><div class="mosaic">${["navy","rose","gold","emerald"].map((c,i)=>`<div style="background:${C[c]}">${["👔","👗","⌚","💍"][i]}</div>`).join("")}</div></section>
<h2>Shop by category</h2><div class="cats">${Object.keys(CATS).map(k=>`<a class="cat" href="#/c/${k}"><span>${CATS[k].e}</span><b>${CATS[k].n}</b><div class="mut">${PR.filter(p=>p.cat==k).length} products</div></a>`).join("")}</div>
<h2>Featured products</h2><div class="grid">${[1,6,11,15,18,3,8,16].map(i=>card(PR[i-1])).join("")}</div>`}
function cat(k){listing(CATS[k].n,`<a href="#/">Home</a> / ${CATS[k].n}`,PR.filter(p=>p.cat==k))}
function listing(title,crumb,items){document.title=title+" | Aurelle";
const cols=[...new Set(items.flatMap(p=>p.cols))];
app.innerHTML=`<div class="crumb">${crumb}</div><h1>${title}</h1><div class="tb"><span class="mut" id="cnt"></span><div class="tbr"><select id="fc" aria-label="Filter by colour"><option value="">All colours</option>${cols.map(c=>`<option>${c}</option>`).join("")}</select><select id="so" aria-label="Sort"><option value="">Featured</option><option value="a">Price: low to high</option><option value="d">Price: high to low</option><option value="s">Biggest discount</option></select></div></div><div class="grid" id="lg"></div>`;
const run=()=>{let l=items.filter(p=>!$("#fc").value||p.cols.includes($("#fc").value));const o=$("#so").value;if(o=="a")l=[...l].sort((x,y)=>x.price-y.price);if(o=="d")l=[...l].sort((x,y)=>y.price-x.price);if(o=="s")l=[...l].sort((x,y)=>(y.off||0)-(x.off||0));$("#cnt").textContent=l.length+" products";$("#lg").innerHTML=l.length?l.map(card).join(""):`<p class="mut">No products found. Try another word or colour.</p>`};
$("#fc").onchange=run;$("#so").onchange=run;run()}
function search(q){const w=q.toLowerCase().split(/\s+/).filter(Boolean);const l=PR.filter(p=>{const t=(p.name+" "+p.cat+" "+p.cols.join(" ")+" "+p.desc+" "+p.d.join(" ")).toLowerCase();return w.every(x=>t.includes(x))});listing(q?'Results for "'+q.replace(/[<>&"]/g,"")+'"':"All products",`<a href="#/">Home</a> / Search`,l)}
function prod(i){const p=PR.find(x=>x.id==i);if(!p)return notFound();sel={c:0,s:0,q:1,v:0};document.title=p.name+" | Aurelle";draw(p)}
function draw(p){const k=CATS[p.cat],sz=SZ[p.cat];
app.innerHTML=`<div class="crumb"><a href="#/">Home</a> / <a href="#/c/${p.cat}">${k.n}</a> / ${p.name}</div>
<div class="pd">${gal(p)}<div><h1>${p.name}</h1><div>${stars(p)}</div><div class="price">${priceHtml(p)}</div><p class="mut">${p.desc}</p>
<div class="lbl">Colour: <span style="font-weight:400" class="mut">${p.cols[sel.c]}</span></div><div class="sw">${p.cols.map((c,j)=>`<button aria-label="${c}" title="${c}" class="${j==sel.c?"on":""}" style="background:${C[c]}" data-c="${j}"></button>`).join("")}</div>
${sz?`<div class="lbl">Size${p.cat!="fragrance"?`<button class="lnk" data-sg="${p.cat}">Size guide</button>`:""}</div><div class="sz">${sz.map((s,j)=>`<button class="${j==sel.s?"on":""}" data-s="${j}">${s}</button>`).join("")}</div>`:""}
<div class="lbl">Details</div><table>${k.d.map((l,j)=>`<tr><td>${l}</td><td>${p.d[j]}</td></tr>`).join("")}</table>
<div class="row"><div class="qty"><button data-q="-1" aria-label="Less">−</button><b>${sel.q}</b><button data-q="1" aria-label="More">+</button></div><button class="btn" id="add">Add to cart</button><button class="wbtn${W.includes(p.id)?" on":""}" data-w="${p.id}">${W.includes(p.id)?"♥ Saved":"♡ Save"}</button></div></div></div>
${revs(p)}<h2>You may also like</h2><div class="grid">${PR.filter(x=>x.cat==p.cat&&x.id!=p.id).slice(0,4).map(card).join("")}</div>`;
app.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>{sel.c=+b.dataset.c;draw(p)});
app.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{sel.s=+b.dataset.s;draw(p)});
app.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{sel.q=Math.max(1,sel.q+ +b.dataset.q);draw(p)});
app.querySelectorAll("[data-v]").forEach(b=>{b.onclick=()=>{sel.v=+b.dataset.v;draw(p)};b.style.backgroundImage="url("+IMG[slug(p.name)]+")"});app.querySelectorAll("[data-sg]").forEach(b=>b.onclick=()=>openModal(sizeGuide(b.dataset.sg)));zoom();$("#add").onclick=()=>{const col=p.cols[sel.c],size=sz?sz[sel.s]:"",key=p.id+col+size,f=cart.find(x=>x.key==key);f?f.q+=sel.q:cart.push({key,id:p.id,col,size,q:sel.q});save();bump();openCart()}}
function cartPage(){document.title="Cart | Aurelle";
if(!cart.length){app.innerHTML=`<h1>Your cart is empty</h1><p class="mut" style="margin:10px 0 20px">Pick something you like and it will show up here.</p><a class="btn" href="#/">Start shopping</a>`;return}
const T=totals(),c=COUPONS[cp];
app.innerHTML=`<h1>Your cart</h1><div style="margin-top:18px">${cart.map((i,j)=>{const p=PR.find(x=>x.id==i.id);return`<div class="ci">${tile(p,i.col)}<div><b>${p.name}</b><div class="mut">${i.col}${i.size?" · "+i.size:""} · Qty ${i.q}</div><div class="price">${fmt(p.price*i.q)}</div></div><button class="btn" data-r="${j}" style="padding:8px 14px">Remove</button></div>`}).join("")}</div>
<div class="cpn"><input id="cp" placeholder="Coupon code" aria-label="Coupon code" value="${cp}"><button class="btn" id="ca">Apply</button></div><div class="mut" style="margin-bottom:6px">${c?"Coupon "+cp+" applied: "+c.l+".":"Try WELCOME10 for 10% off or FREESHIP for free delivery."}</div>
<div style="margin:14px 0 6px"><div class="trow"><span>Subtotal</span><span>${fmt(T.sub)}</span></div>${T.disc?`<div class="trow"><span>Discount</span><span>-${fmt(T.disc)}</span></div>`:""}<div class="trow"><span>Delivery</span><span>${T.ship?fmt(T.ship):"Free"}</span></div>${T.ship?`<div class="mut" style="margin-bottom:10px">Add ${fmt(FREE-(T.sub-T.disc))} more for free delivery.</div>`:""}<div class="trow big"><span>Total</span><span>${fmt(T.total)}</span></div></div>
<h2 style="font-size:22px;margin:10px 0">Delivery details</h2><div style="max-width:460px"><input id="n" placeholder="Full name"><input id="ph" placeholder="Phone number"><input id="ad" placeholder="Full address and city"><button class="btn" id="po">Place order (cash on delivery)</button></div>`;
app.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{cart.splice(+b.dataset.r,1);save();cartPage()});
$("#ca").onclick=()=>{const v=$("#cp").value.trim().toUpperCase(),keep=[$("#n").value,$("#ph").value,$("#ad").value];if(v&&!COUPONS[v])return toast("Invalid coupon code");cp=v;try{localStorage.setItem("cp",cp)}catch(e){}cartPage();[$("#n").value,$("#ph").value,$("#ad").value]=keep;toast(v?"Coupon applied":"Coupon removed")};
$("#po").onclick=()=>{const nm=$("#n").value.trim(),ph=$("#ph").value.trim(),ad=$("#ad").value.trim();if(!nm||!ph||!ad)return toast("Please fill in all delivery details");const T=totals();
ORD={no:"AUR-"+(10000+Math.floor(Math.random()*89999)),date:new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),name:nm,phone:ph,address:ad,items:cart.map(i=>({id:i.id,col:i.col,size:i.size,q:i.q})),...T};
try{localStorage.setItem("order",JSON.stringify(ORD))}catch(e){}
cart=[];cp="";try{localStorage.removeItem("cp")}catch(e){}save();go("#/order")}}
function notFound(){document.title="Page not found | Aurelle";app.innerHTML=`<div class="ok" style="margin:60px 0"><h1 style="font-size:72px">404</h1><h2 style="margin:6px 0 10px">Page not found</h2><p class="mut" style="margin-bottom:22px">The page you are looking for does not exist or has moved.</p><a class="btn" href="#/">Back to home</a></div>`}
function about(){document.title="About | Aurelle";app.innerHTML=`<div class="crumb"><a href="#/">Home</a> / About</div><h1>About Aurelle</h1><p class="mut" style="max-width:62ch;margin:14px 0 8px">Aurelle brings clothing, watches, fragrance and jewelry together in one easy place. We pick every product for its quality, show it clearly and deliver it to your door anywhere in Pakistan.</p><h2>What we stand for</h2><div class="feat"><div><b>Chosen with care</b>Every product is checked before it is listed.</div><div><b>Clear details</b>Colour, size, fabric and price are on every product page.</div><div><b>Pay on delivery</b>No advance payment. Pay when your order arrives.</div><div><b>Easy exchange</b>Not the right fit? Exchange it within 7 days.</div></div><div style="margin-top:36px"><a class="btn" href="#/c/women">Start shopping</a></div>`}
function contact(){document.title="Contact | Aurelle";app.innerHTML=`<div class="crumb"><a href="#/">Home</a> / Contact</div><h1>Contact us</h1><p class="mut" style="margin:10px 0 22px;max-width:56ch">Questions about sizes, colours or your order? Send us a message and we will reply within a day.</p><div style="max-width:460px" id="cf"><input id="cn" placeholder="Your name"><input id="ce" type="email" placeholder="Your email"><input id="cm" placeholder="Your question"><button class="btn" id="cs">Send message</button><p class="mut" style="margin-top:18px">Support hours: Monday to Saturday, 10am to 8pm.</p></div>`;
$("#cs").onclick=()=>{const n=$("#cn").value.trim(),e=$("#ce").value.trim(),m=$("#cm").value.trim();if(!n||!e.includes("@")||!m)return toast("Please fill in your name, email and question");$("#cf").innerHTML=`<div class="osum"><h3>Thank you, ${esc(n)}</h3><p class="mut">We have received your message and will reply to ${esc(e)} within a day.</p></div>`}}
function toggleNav(o){const n=$("#nav"),b=$("#bg"),open=o===undefined?!n.classList.contains("open"):o;n.classList.toggle("open",open);$("#nv").classList.toggle("open",open);b.classList.toggle("open",open);b.setAttribute("aria-expanded",open);b.setAttribute("aria-label",open?"Close menu":"Open menu");document.querySelector("header").classList.toggle("mo",open);document.body.style.overflow=open?"hidden":""}
let CUR=location.hash||"#/";
function go(h){CUR=h;try{history.pushState(null,"",h)}catch(e){}route()}
function goR(h){CUR=h;try{history.replaceState(null,"",h)}catch(e){}route()}
const COUPONS={WELCOME10:{t:"pct",v:10,l:"10% off your order"},FREESHIP:{t:"ship",l:"free delivery"}};
let cp="";try{cp=localStorage.getItem("cp")||""}catch(e){}
let ORD=null;try{ORD=JSON.parse(localStorage.getItem("order")||"null")}catch(e){}
const esc=t=>String(t).replace(/[<>&"]/g,"");
function totals(){const sub=cart.reduce((a,i)=>a+PR.find(p=>p.id==i.id).price*i.q,0),c=COUPONS[cp],disc=c&&c.t=="pct"?Math.round(sub*c.v/100):0,ship=(c&&c.t=="ship")||sub-disc>=FREE?0:250;return{sub,disc,ship,total:sub-disc+ship}}
function openModal(h){$("#mbox").innerHTML='<button class="mx" data-mx aria-label="Close">✕</button>'+h;$("#mdv").classList.add("open")}
function closeModal(){$("#mdv").classList.remove("open")}
function sizeGuide(c){const w=c=="women",rows=w?[["S","32-34","26-28","35-37"],["M","34-36","28-30","37-39"],["L","36-38","30-32","39-41"],["XL","38-40","32-34","41-43"]]:[["S","36-38","30-32","37-39"],["M","38-40","32-34","39-41"],["L","40-42","34-36","41-43"],["XL","42-44","36-38","43-45"]];
return `<h2 style="margin:0 0 6px">Size guide: ${w?"Women":"Men"}</h2><p class="mut" style="margin-bottom:14px">All measurements are in inches.</p><table><tr><td><b>Size</b></td><td><b>${w?"Bust":"Chest"}</b></td><td><b>Waist</b></td><td><b>Hips</b></td></tr>${rows.map(r=>`<tr>${r.map(x=>`<td style="width:auto">${x}</td>`).join("")}</tr>`).join("")}</table><h3 style="margin:18px 0 6px;font-family:'Instrument Sans'">How to measure</h3><p class="mut">Use a soft tape and measure over light clothing. Keep the tape snug but not tight. If you are between two sizes, choose the larger one.</p>`}
let QV={};
function quickView(id){QV={id,c:0,s:0};qvDraw()}
function qvDraw(){const p=PR.find(x=>x.id==QV.id),sz=SZ[p.cat];openModal(`<div class="qvg"><div>${tile(p,p.cols[QV.c])}</div><div><h2 style="margin:0 0 6px;font-size:28px">${p.name}</h2><div>${stars(p)}</div><div class="price" style="font-size:22px;margin:8px 0">${priceHtml(p)}</div><p class="mut">${p.desc}</p><div class="lbl">Colour: <span class="mut" style="font-weight:400">${p.cols[QV.c]}</span></div><div class="sw">${p.cols.map((c,j)=>`<button aria-label="${c}" class="${j==QV.c?"on":""}" style="background:${C[c]}" data-qc="${j}"></button>`).join("")}</div>${sz?`<div class="lbl">Size</div><div class="sz">${sz.map((x,j)=>`<button class="${j==QV.s?"on":""}" data-qs="${j}">${x}</button>`).join("")}</div>`:""}<div class="row"><button class="btn" data-qa>Add to cart</button><a class="wbtn" href="#/p/${p.id}" data-mx>View full details</a></div></div></div>`)}
function orderPage(){if(!ORD)return home();document.title="Order placed | Aurelle";const o=ORD;
app.innerHTML=`<div class="ok"><div class="tick">✓</div><h1>Order placed</h1><p class="mut">Thank you, ${esc(o.name)}. We have received your order.</p></div>
<div class="osum"><h3>Order details</h3><div class="trow"><span>Order number</span><b>${o.no}</b></div><div class="trow"><span>Date</span><span>${o.date}</span></div><div class="trow"><span>Payment</span><span>Cash on delivery</span></div><div class="trow"><span>Estimated delivery</span><span>3 to 5 working days</span></div></div>
<div class="osum"><h3>Items</h3>${o.items.map(i=>{const p=PR.find(x=>x.id==i.id);return`<div class="ci">${tile(p,i.col)}<div><b>${p.name}</b><div class="mut">${i.col}${i.size?" · "+i.size:""} · Qty ${i.q}</div></div><b>${fmt(p.price*i.q)}</b></div>`}).join("")}<div class="trow"><span>Subtotal</span><span>${fmt(o.sub)}</span></div>${o.disc?`<div class="trow"><span>Discount</span><span>-${fmt(o.disc)}</span></div>`:""}<div class="trow"><span>Delivery</span><span>${o.ship?fmt(o.ship):"Free"}</span></div><div class="trow big"><span>Total to pay on delivery</span><span>${fmt(o.total)}</span></div></div>
<div class="osum"><h3>Delivery address</h3><p>${esc(o.name)}<br>${esc(o.phone)}<br>${esc(o.address)}</p></div>
<div class="row nobtn" style="justify-content:center"><a class="btn" href="#/">Continue shopping</a><button class="wbtn" onclick="window.print()">Print summary</button></div>`}
function faq(){document.title="FAQ | Aurelle";const Q=[["How long does delivery take?","Orders are delivered in 3 to 5 working days across Pakistan."],["How much is delivery?","Delivery is Rs 250. It is free on orders over Rs 3,000."],["Can I pay on delivery?","Yes. Cash on delivery is available on every order. You pay when the parcel reaches you."],["Can I exchange a product?","Yes. Unused items with tags can be exchanged within 7 days of delivery."],["How do I choose my size?","Open the Size guide on any clothing product page and compare it with your measurements."],["Are the products as shown in the photos?","Yes. Colours can look slightly different on different screens, but we match them as closely as we can."],["How can I use a coupon code?","Enter the code in your cart and press Apply. Try WELCOME10 for 10% off."],["How can I contact you?","Use the Contact page. We reply within a day, Monday to Saturday."]];
app.innerHTML=`<div class="crumb"><a href="#/">Home</a> / FAQ</div><h1>Frequently asked questions</h1><div class="faq" style="max-width:760px;margin-top:20px">${Q.map(q=>`<details><summary>${q[0]}</summary><p class="mut">${q[1]}</p></details>`).join("")}</div>`}
function policy(){document.title="Shipping and returns | Aurelle";const S=[["Shipping","We deliver all over Pakistan in 3 to 5 working days. Delivery costs Rs 250 and is free on orders over Rs 3,000, or with the FREESHIP code. You will get a call before your parcel is sent."],["Payment","We accept cash on delivery. Please keep the exact amount ready when the rider arrives."],["Returns and exchanges","You can exchange an unused item with its tags within 7 days of delivery. Open the parcel in front of the rider if you want to check the item. If the item is damaged or wrong, we replace it at no cost."],["Items we cannot exchange","For hygiene reasons, opened fragrances and earrings cannot be exchanged unless they arrive damaged."],["Order changes and cancellation","To change or cancel an order, contact us before it is dispatched. Once dispatched, an order cannot be cancelled."]];
app.innerHTML=`<div class="crumb"><a href="#/">Home</a> / Shipping and returns</div><h1>Shipping and returns</h1><div class="pol" style="max-width:760px">${S.map(x=>`<h2 style="font-size:24px">${x[0]}</h2><p class="mut">${x[1]}</p>`).join("")}</div>`}
const RV=[["Ayesha K.",5,"Quality is better than I expected and the colour matches the photos."],["Hamza R.",4,"Fits well and delivery was quick. The packaging was neat."],["Sana M.",5,"Worth the price. I will order again."]];
const stars=p=>`<span class="st" role="img" aria-label="${p.rt} out of 5"><span style="width:${p.rt/5*100}%">★★★★★</span>★★★★★</span> <span class="mut">${p.rt} (${p.rc} reviews)</span>`;
const priceHtml=p=>fmt(p.price)+(p.old?` <s class="mut" style="font-size:16px">${fmt(p.old)}</s> <span class="bdg sm">-${p.off}%</span>`:"");
const revs=p=>`<h2>Customer reviews</h2><p>${stars(p)}</p><div class="rvs">${[0,1,2].map(j=>RV[(p.id+j)%3]).map(r=>`<div class="rvc"><div class="av">${r[0][0]}</div><div><b>${r[0]}</b> <span class="mut">${"★".repeat(r[1])+"☆".repeat(5-r[1])}</span><p>${r[2]}</p></div></div>`).join("")}</div>`;
function gal(p){const im=IMG[slug(p.name)];if(!im)return tile(p,p.cols[sel.c]);const V=[[1,"50% 50%"],[1.6,"50% 12%"],[1.6,"50% 88%"]][sel.v];return `<div><div class="img"><img src="${im}" alt="${p.name}" style="--z:${V[0]};--o:${V[1]}"></div><div class="thumbs">${[0,1,2].map(j=>`<button data-v="${j}" class="${j==sel.v?"on":""}" aria-label="View ${j+1}" style="background-size:${j?"230%":"cover"};background-position:${["center","50% 8%","50% 92%"][j]}"></button>`).join("")}</div></div>`}
function toggleW(id){const i=W.indexOf(id);i<0?W.push(id):W.splice(i,1);try{localStorage.setItem("wish",JSON.stringify(W))}catch(e){}
$("#wc").textContent=W.length;const on=W.includes(id);document.querySelectorAll('[data-w="'+id+'"]').forEach(el=>{el.classList.toggle("on",on);el.textContent=el.classList.contains("wbtn")?(on?"♥ Saved":"♡ Save"):(on?"♥":"♡")});toast(on?"Saved to wishlist":"Removed from wishlist");if(CUR=="#/wish")wishPage()}
function wishPage(){document.title="Wishlist | Aurelle";const l=PR.filter(p=>W.includes(p.id));app.innerHTML=`<div class="crumb"><a href="#/">Home</a> / Wishlist</div><h1>Your wishlist</h1>`+(l.length?`<div class="grid" style="margin-top:20px">${l.map(card).join("")}</div>`:`<p class="mut" style="margin:10px 0 20px">Tap the heart on any product to save it here.</p><a class="btn" href="#/">Start shopping</a>`)}
function renderDr(){const sub=cart.reduce((a,i)=>a+PR.find(p=>p.id==i.id).price*i.q,0);
$("#dr").innerHTML=`<div class="dh"><span>Your cart</span><button data-dc aria-label="Close cart">✕</button></div>`+(cart.length?`<div class="di">${cart.map((i,j)=>{const p=PR.find(x=>x.id==i.id);return`<div class="dit">${tile(p,i.col)}<div><b>${p.name}</b><div class="mut">${i.col}${i.size?", "+i.size:""}</div><div class="dq"><button data-dq="${j}:-1" aria-label="Less">−</button><b>${i.q}</b><button data-dq="${j}:1" aria-label="More">+</button></div><span class="price">${fmt(p.price*i.q)}</span></div></div>`}).join("")}</div><div class="df"><div class="mut">${sub>=FREE?"You get free delivery":"Add "+fmt(FREE-sub)+" more for free delivery"}</div><div class="pb"><i style="width:${Math.min(100,sub/FREE*100)}%"></i></div><div class="trow big"><span>Subtotal</span><span>${fmt(sub)}</span></div><a class="btn" href="#/cart" data-dc>View cart and checkout</a></div>`:`<p class="mut" style="padding:24px">Your cart is empty. Add something you like.</p>`)}
function openCart(){renderDr();$("#dr").classList.add("open");$("#ov").classList.add("open")}
function closeCart(){$("#dr").classList.remove("open");$("#ov").classList.remove("open")}
function bump(){const b=$("#cb");b.classList.remove("bump");void b.offsetWidth;b.classList.add("bump")}
function zoom(){const w=document.querySelector(".pd .img"),im=w&&w.querySelector("img");if(!im)return;w.onmouseleave=()=>{im.style.transformOrigin=""};w.onmousemove=e=>{const r=w.getBoundingClientRect();im.style.transformOrigin=((e.clientX-r.left)/r.width*100)+"% "+((e.clientY-r.top)/r.height*100)+"%"}}
function fx(){if(!CUR.startsWith("#/s/")){app.classList.remove("pg");void app.offsetWidth;app.classList.add("pg")}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add("in");io.unobserve(t);setTimeout(()=>{t.classList.remove("rv","in");t.style.transitionDelay=""},1000)}}),{threshold:.1});
app.querySelectorAll(".card,.tilec,.feat div,h2").forEach((el,i)=>{el.classList.add("rv");el.style.transitionDelay=(i%4)*80+"ms";io.observe(el)})}
addEventListener("scroll",()=>document.querySelector("header").classList.toggle("sm",scrollY>40),{passive:true});
function home2(){app.innerHTML=`<section class="hero2"><div class="bg" style="${bgi("hero")}"></div><div class="tx"><h1>Style that speaks before you do.</h1><p>Clothing, watches, fragrance and jewelry, chosen with care and delivered across Pakistan.</p><div class="bs"><a class="btn" href="#/c/men">Shop men</a><a class="btn gh" href="#/c/women">Shop women</a></div></div></section>
<div class="mq"><div>${Array(4).fill(["Cash on delivery","Delivery all over Pakistan","7-day easy exchange","100% authentic products"].map(t=>`<span>${t}</span>`).join("")).join("")}</div></div>
<h2>Shop by category</h2><div class="ct">${Object.keys(CATS).map(k=>`<a class="tilec" href="#/c/${k}"><div class="bg" style="${bgi("cat-"+k)}"></div><b>${CATS[k].n}<i>Explore ${PR.filter(p=>p.cat==k).length} products</i></b></a>`).join("")}</div>
<h2>New arrivals</h2><div class="grid">${[1,6,11,15,18,3,8,16].map(i=>card(PR[i-1])).join("")}</div>
<h2>Why shop with us</h2><div class="feat"><div><b>Cash on delivery</b>Pay when your order reaches your door.</div><div><b>Easy exchange</b>Wrong size or colour? Exchange within 7 days.</div><div><b>Authentic quality</b>Every item is checked before it is packed.</div><div><b>Fast support</b>Our team replies to every message within a day.</div></div>
<section class="nl"><h2>Get 10% off your first order</h2><p style="margin-bottom:18px;opacity:.8">Join our list for new arrivals and offers.</p><input id="em" placeholder="Your email"><button class="btn" onclick="toast($('#em').value.includes('@')?'Thank you for subscribing':'Please enter a valid email')">Subscribe</button></section>`}
addEventListener("hashchange",()=>{if((location.hash||"#/")!=CUR){CUR=location.hash||"#/";route()}});addEventListener("popstate",()=>{CUR=location.hash||"#/";route()});save();route();
$("#wc").textContent=W.length;
$("#q").oninput=e=>{const v=e.target.value.trim();goR(v?"#/s/"+encodeURIComponent(v):"#/")};
$("#ov").onclick=closeCart;$("#bg").onclick=()=>toggleNav();$("#nv").onclick=()=>toggleNav(false);$("#nav").onclick=e=>{if(e.target.closest("a"))toggleNav(false)};if(window.matchMedia)matchMedia("(min-width:1025px)").addEventListener("change",e=>{if(e.matches)toggleNav(false)});addEventListener("keydown",e=>{if(e.key=="Escape"){closeCart();closeModal();toggleNav(false)}});
$("#dr").onclick=e=>{const q=e.target.closest("[data-dq]");if(q){const[j,d]=q.dataset.dq.split(":").map(Number);cart[j].q+=d;if(cart[j].q<1)cart.splice(j,1);save();return}if(e.target.closest("[data-dc]"))closeCart()};
document.addEventListener("click",e=>{const h=e.target.closest("[data-w]");if(h){e.preventDefault();toggleW(+h.dataset.w);return}const qv=e.target.closest("[data-qv]");if(qv){e.preventDefault();quickView(+qv.dataset.qv);return}const a=e.target.closest('a[href^="#/"]');if(a&&e.button==0&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey){e.preventDefault();go(a.getAttribute("href"))}});
$("#mdv").onclick=e=>{if(e.target.id=="mdv"||e.target.closest("[data-mx]"))closeModal();const c=e.target.closest("[data-qc]"),z=e.target.closest("[data-qs]");if(c){QV.c=+c.dataset.qc;qvDraw()}if(z){QV.s=+z.dataset.qs;qvDraw()}if(e.target.closest("[data-qa]")){const p=PR.find(x=>x.id==QV.id),sz=SZ[p.cat],col=p.cols[QV.c],size=sz?sz[QV.s]:"",key=p.id+col+size,f=cart.find(x=>x.key==key);f?f.q++:cart.push({key,id:p.id,col,size,q:1});save();closeModal();bump();openCart()}};
