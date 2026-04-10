/* ============================================================
   main.js — SUNSET | Summer Collection
   Schimbă doar „src" și „alt". Fiecare razdel = exact 8 imagini.
   ============================================================ */


/* ── 1. HERO ── */
const HERO_IMAGES = {
    largeLeft:  { src: '../Assets/images/foto1.jpg', alt: 'Woman in boho outfit' },
    smallLeft:  { src: '../Assets/images/foto2.jpg', alt: 'Man on beach' },
    largeRight: { src: '../Assets/images/foto3.jpg', alt: 'Woman in blue shirt' },
    smallRight: { src: '../Assets/images/foto4.jpg', alt: 'Man on boat' }
};


/* ── 2. ACCESSORIES — exact 8 imagini ── */
const IMAGES = {
    accessories: [
        { src: '../Assets/images/foto5.jpg',  alt: 'Accessories 1' },   /* ← schimbă */
        { src: '../Assets/images/foto6.jpg',  alt: 'Accessories 2' },   /* ← schimbă */
        { src: '../Assets/images/foto7.jpg',  alt: 'Accessories 3' },   /* ← schimbă */
        { src: '../Assets/images/foto8.jpg',  alt: 'Accessories 4' },   /* ← schimbă */

    ],

    /* ── 3. BEACH — exact 8 imagini ── */
    beach: [
        { src: '../Assets/images/foto9.jpg',   alt: 'Beach 1' },   /* ← schimbă */
        { src: '../Assets/images/foto10.jpg',  alt: 'Beach 2' },   /* ← schimbă */
        { src: '../Assets/images/foto11.jpg',  alt: 'Beach 3' },   /* ← schimbă */
        { src: '../Assets/images/foto12.jpg',  alt: 'Beach 4' },   /* ← schimbă */

    ]
};


/* ── 4. PRODUSE — câte 8 per categorie ──
   cat   = "all" | "accessories" | "dresses" | "jeans" | "shoes"
   badge = "NEW" | "ONLINE EXCLUSIVE" | ""                         */
const PRODUCTS = [

    /* CLOTHING / ALL — 8 produse */
    { src: '../Assets/images/foto13.jpg',  alt: 'Sawyer Striped Barrel Overalls',  name: 'Sawyer Striped Barrel Overalls',  price: '$98.00',  badge: 'ONLINE EXCLUSIVE', color: '#E8D5C0', cat: 'all' },   /* ← schimbă */
    { src: '../Assets/images/foto14.jpg',  alt: 'Elvryn One Shoulder Romper',      name: 'Elvryn One Shoulder Romper',      price: '$74.00',  badge: 'ONLINE EXCLUSIVE', color: '#1A1A1A', cat: 'all' },   /* ← schimbă */
    { src: '../Assets/images/foto15.jpg',  alt: 'Alyssa Boatneck Tee',             name: 'Alyssa Boatneck Tee',             price: '$44.00',  badge: 'ONLINE EXCLUSIVE', color: '#F5F5F0', cat: 'all' },   /* ← schimbă */
    { src: '../Assets/images/foto16.jpg',  alt: 'Dakota Strapless Denim Romper',   name: 'Dakota Strapless Denim Romper',   price: '$88.00',  badge: 'NEW',              color: '#6B8BAE', cat: 'all' },   /* ← schimbă */
    { src: '../Assets/images/foto13b.jpg', alt: 'Remy Linen Shorts',               name: 'Remy Linen Shorts',               price: '$52.00',  badge: 'NEW',              color: '#D4B896', cat: 'all' },   /* ← schimbă */
    { src: '../Assets/images/foto14b.jpg', alt: 'Cora Wrap Blouse',                name: 'Cora Wrap Blouse',                price: '$62.00',  badge: '',                 color: '#C9B8D4', cat: 'all' },   /* ← schimbă */
    { src: '../Assets/images/foto15b.jpg', alt: 'Isla Cropped Blazer',             name: 'Isla Cropped Blazer',             price: '$118.00', badge: 'ONLINE EXCLUSIVE', color: '#3D3D3D', cat: 'all' },   /* ← schimbă */
    { src: '../Assets/images/foto16b.jpg', alt: 'Noa Smocked Midi Skirt',          name: 'Noa Smocked Midi Skirt',          price: '$79.00',  badge: 'NEW',              color: '#E8C4A0', cat: 'all' },   /* ← schimbă */

    /* ACCESSORIES — 8 produse */
    { src: '../Assets/images/foto18.jpg',  alt: 'Woven Straw Beach Bag',   name: 'Woven Straw Beach Bag',   price: '$56.00', badge: 'ONLINE EXCLUSIVE', color: '#C4A882', cat: 'accessories' },   /* ← schimbă */
    { src: '../Assets/images/acc1.jpg',    alt: 'Shell Drop Earrings',     name: 'Shell Drop Earrings',     price: '$24.00', badge: 'NEW',              color: '#F0D080', cat: 'accessories' },   /* ← schimbă */
    { src: '../Assets/images/acc2.jpg',    alt: 'Raffia Sun Hat',          name: 'Raffia Sun Hat',          price: '$38.00', badge: '',                 color: '#C8A96E', cat: 'accessories' },   /* ← schimbă */
    { src: '../Assets/images/acc3.jpg',    alt: 'Beaded Anklet Set',       name: 'Beaded Anklet Set',       price: '$18.00', badge: 'NEW',              color: '#A8C4D4', cat: 'accessories' },   /* ← schimbă */
    { src: '../Assets/images/acc4.jpg',    alt: 'Linen Scarf',             name: 'Linen Scarf',             price: '$32.00', badge: '',                 color: '#D4C4B0', cat: 'accessories' },   /* ← schimbă */
    { src: '../Assets/images/acc5.jpg',    alt: 'Gold Chain Belt',         name: 'Gold Chain Belt',         price: '$44.00', badge: 'ONLINE EXCLUSIVE', color: '#C09E44', cat: 'accessories' },   /* ← schimbă */
    { src: '../Assets/images/acc6.jpg',    alt: 'Tortoise Sunglasses',     name: 'Tortoise Sunglasses',     price: '$48.00', badge: 'NEW',              color: '#8B5E3C', cat: 'accessories' },   /* ← schimbă */
    { src: '../Assets/images/acc7.jpg',    alt: 'Canvas Tote Bag',         name: 'Canvas Tote Bag',         price: '$36.00', badge: '',                 color: '#E8E0D0', cat: 'accessories' },   /* ← schimbă */

    /* DRESSES — 8 produse */
    { src: '../Assets/images/foto17.jpg',  alt: 'Mila Linen Midi Dress',   name: 'Mila Linen Midi Dress',   price: '$112.00', badge: 'NEW',              color: '#E8D4C0', cat: 'dresses' },   /* ← schimbă */
    { src: '../Assets/images/dress1.jpg',  alt: 'Aria Floral Wrap Dress',  name: 'Aria Floral Wrap Dress',  price: '$96.00',  badge: 'NEW',              color: '#E8A0A0', cat: 'dresses' },   /* ← schimbă */
    { src: '../Assets/images/dress2.jpg',  alt: 'Sage Smocked Sundress',   name: 'Sage Smocked Sundress',   price: '$84.00',  badge: '',                 color: '#9DB89D', cat: 'dresses' },   /* ← schimbă */
    { src: '../Assets/images/dress3.jpg',  alt: 'Luna Halter Maxi',        name: 'Luna Halter Maxi',        price: '$128.00', badge: 'ONLINE EXCLUSIVE', color: '#F0E8D0', cat: 'dresses' },   /* ← schimbă */
    { src: '../Assets/images/dress4.jpg',  alt: 'Zara Mini Crochet Dress', name: 'Zara Mini Crochet Dress', price: '$78.00',  badge: 'NEW',              color: '#F0E0B0', cat: 'dresses' },   /* ← schimbă */
    { src: '../Assets/images/dress5.jpg',  alt: 'Demi Off-Shoulder Dress', name: 'Demi Off-Shoulder Dress', price: '$92.00',  badge: '',                 color: '#D4B0C8', cat: 'dresses' },   /* ← schimbă */
    { src: '../Assets/images/dress6.jpg',  alt: 'Cleo Ruched Slip Dress',  name: 'Cleo Ruched Slip Dress',  price: '$88.00',  badge: 'ONLINE EXCLUSIVE', color: '#C8A0A0', cat: 'dresses' },   /* ← schimbă */
    { src: '../Assets/images/dress7.jpg',  alt: 'Nova Tiered Boho Dress',  name: 'Nova Tiered Boho Dress',  price: '$104.00', badge: 'NEW',              color: '#A0B8C8', cat: 'dresses' },   /* ← schimbă */

    /* JEANS — 8 produse */
    { src: '../Assets/images/foto19.jpg',  alt: 'Cara High-Rise Wide Leg', name: 'Cara High-Rise Wide Leg', price: '$94.00', badge: '',                 color: '#5B7FA6', cat: 'jeans' },   /* ← schimbă */
    { src: '../Assets/images/jeans1.jpg',  alt: 'Nico Straight Leg Jeans', name: 'Nico Straight Leg Jeans', price: '$86.00', badge: 'NEW',              color: '#4A6B8A', cat: 'jeans' },   /* ← schimbă */
    { src: '../Assets/images/jeans2.jpg',  alt: 'Roxy Barrel Denim',       name: 'Roxy Barrel Denim',       price: '$98.00', badge: 'ONLINE EXCLUSIVE', color: '#6B8BAE', cat: 'jeans' },   /* ← schimbă */
    { src: '../Assets/images/jeans3.jpg',  alt: 'Faye Cropped Flare Jeans',name: 'Faye Cropped Flare Jeans',price: '$92.00', badge: '',                 color: '#3A5A7A', cat: 'jeans' },   /* ← schimbă */
    { src: '../Assets/images/jeans4.jpg',  alt: 'Reese Mom Jeans',         name: 'Reese Mom Jeans',         price: '$78.00', badge: 'NEW',              color: '#7090B0', cat: 'jeans' },   /* ← schimbă */
    { src: '../Assets/images/jeans5.jpg',  alt: 'Lola Low-Rise Bootcut',   name: 'Lola Low-Rise Bootcut',   price: '$82.00', badge: '',                 color: '#4A6B8A', cat: 'jeans' },   /* ← schimbă */
    { src: '../Assets/images/jeans6.jpg',  alt: 'Ivy Distressed Skinny',   name: 'Ivy Distressed Skinny',   price: '$74.00', badge: 'ONLINE EXCLUSIVE', color: '#2F4F6F', cat: 'jeans' },   /* ← schimbă */
    { src: '../Assets/images/jeans7.jpg',  alt: 'Kai Relaxed Denim',       name: 'Kai Relaxed Denim',       price: '$88.00', badge: 'NEW',              color: '#5A7A9A', cat: 'jeans' },   /* ← schimbă */

    /* SHOES — 8 produse */
    { src: '../Assets/images/foto20.jpg',  alt: 'Sienna Leather Sandals',  name: 'Sienna Leather Sandals',  price: '$68.00', badge: 'NEW',              color: '#C4956A', cat: 'shoes' },   /* ← schimbă */
    { src: '../Assets/images/shoes1.jpg',  alt: 'Demi Espadrille Wedges',  name: 'Demi Espadrille Wedges',  price: '$82.00', badge: 'ONLINE EXCLUSIVE', color: '#D4A870', cat: 'shoes' },   /* ← schimbă */
    { src: '../Assets/images/shoes2.jpg',  alt: 'Ava Strappy Heels',       name: 'Ava Strappy Heels',       price: '$96.00', badge: 'NEW',              color: '#1A1A1A', cat: 'shoes' },   /* ← schimbă */
    { src: '../Assets/images/shoes3.jpg',  alt: 'Zoe Woven Flats',         name: 'Zoe Woven Flats',         price: '$58.00', badge: '',                 color: '#C8B090', cat: 'shoes' },   /* ← schimbă */
    { src: '../Assets/images/shoes4.jpg',  alt: 'Mara Platform Sandals',   name: 'Mara Platform Sandals',   price: '$74.00', badge: 'NEW',              color: '#A0784A', cat: 'shoes' },   /* ← schimbă */
    { src: '../Assets/images/shoes5.jpg',  alt: 'Nala Slide Mules',        name: 'Nala Slide Mules',        price: '$62.00', badge: '',                 color: '#E8D0B0', cat: 'shoes' },   /* ← schimbă */
    { src: '../Assets/images/shoes6.jpg',  alt: 'River Ankle Strap Sandals',name:'River Ankle Strap Sandals',price:'$72.00', badge: 'ONLINE EXCLUSIVE', cat: 'shoes' },   /* ← schimbă */
    { src: '../Assets/images/shoes7.jpg',  alt: 'Talia Raffia Mules',      name: 'Talia Raffia Mules',      price: '$66.00', badge: 'NEW',              color: '#C8A96E', cat: 'shoes' }    /* ← schimbă */
];


/* ============================================================
   FUNCȚII INTERNE — nu modifica mai jos
   ============================================================ */

function initHeroImages() {
    const setImg = (id, data) => {
        const el = document.getElementById(id);
        if (el) { el.src = data.src; el.alt = data.alt; }
    };
    setImg('hero-large-left',  HERO_IMAGES.largeLeft);
    setImg('hero-small-left',  HERO_IMAGES.smallLeft);
    setImg('hero-large-right', HERO_IMAGES.largeRight);
    setImg('hero-small-right', HERO_IMAGES.smallRight);
}

function buildImageGrid(gridId, items) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    /* Afișează exact primele 8 */
    grid.innerHTML = items.slice(0, 8).map(item =>
        `<img src="${item.src}" alt="${item.alt}" onclick="openLightbox(this)">`
    ).join('');
}

/* Construiește grida cu strict 8 carduri vizibile per categorie */
function buildProductsGrid() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    /* Păstrează câte 8 din fiecare cat */
    const counts = {};
    const filtered = PRODUCTS.filter(p => {
        counts[p.cat] = (counts[p.cat] || 0) + 1;
        return counts[p.cat] <= 8;
    });
    grid.innerHTML = filtered.map(p => {
        const color = p.color || '#C09E44';
        const url = `product.html?src=${encodeURIComponent(p.src)}&name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(p.price)}&color=${encodeURIComponent(color)}`;
        return `
        <div class="product-card" data-cat="${p.cat}" onclick="window.location='${url}'">
            <div class="product-img-wrap">
                <img src="${p.src}" alt="${p.alt}">
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            </div>
            <p class="product-name">${p.name}</p>
            <p class="product-price">${p.price}</p>
        </div>`;
    }).join('');
    /* Arată doar primele 8 din categoria activă */
    applyFilter('all');
}

/* Afișează exact 8 carduri din categoria selectată */
function applyFilter(cat) {
    let shown = 0;
    document.querySelectorAll('.product-card').forEach(card => {
        const matches = (cat === 'all')
            ? card.dataset.cat === 'all'
            : card.dataset.cat === cat;
        if (matches && shown < 8) {
            card.style.display = '';
            shown++;
        } else {
            card.style.display = 'none';
        }
    });
}

function filterProducts(el, cat) {
    document.querySelectorAll('.sidebar-filters li').forEach(li => li.classList.remove('active'));
    el.classList.add('active');
    applyFilter(cat);
}

/* ---- SHOP OVERLAY ---- */
function openShop() {
    document.getElementById('shopOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('shopOverlay').scrollTop = 0;
}

function closeShop() {
    document.getElementById('shopOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

/* ---- LIGHTBOX ---- */
let allImages = [];
let currentIndex = 0;

function buildImageList() {
    allImages = Array.from(document.querySelectorAll(
        '.img-large, .img-small, .four-col-grid img, .product-img-wrap img'
    ));
}

function openLightbox(imgEl) {
    buildImageList();
    currentIndex = allImages.indexOf(imgEl);
    if (currentIndex === -1) currentIndex = 0;
    showLightboxImage(currentIndex);
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showLightboxImage(index) {
    const img = allImages[index];
    document.getElementById('lightboxImg').src = img.src;
    document.getElementById('lightboxImg').alt = img.alt;
}

function lightboxNav(dir) {
    currentIndex = (currentIndex + dir + allImages.length) % allImages.length;
    showLightboxImage(currentIndex);
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = document.getElementById('shopOverlay').classList.contains('open') ? 'hidden' : '';
}

function closeLightboxOnBg(e) {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
}

/* ---- KEYBOARD ---- */
document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (e.key === 'Escape') {
        if (lb.classList.contains('active')) { closeLightbox(); return; }
        closeShop();
    }
    if (lb.classList.contains('active')) {
        if (e.key === 'ArrowLeft')  lightboxNav(-1);
        if (e.key === 'ArrowRight') lightboxNav(1);
    }
});

/* ---- PORNIRE ---- */
document.addEventListener('DOMContentLoaded', () => {
    initHeroImages();
    buildImageGrid('grid-accessories', IMAGES.accessories);
    buildImageGrid('grid-beach',       IMAGES.beach);
    buildProductsGrid();
});