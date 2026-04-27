console.log('Salut lume');

let HERO_IMAGES = {};
let IMAGES      = { accessories: [], beach: [] };
let PRODUCTS    = [];

fetch('../js/products.json')
    .then(r => r.json())
    .then(data => {
        HERO_IMAGES = data.hero;
        IMAGES      = data.images;
        PRODUCTS    = data.products;
        init();
    })
    .catch(err => console.error('Eroare la citirea products.json:', err));

function init() {
    initHeroImages();
    buildImageGrid('grid-accessories', IMAGES.accessories);
    buildImageGrid('grid-beach',       IMAGES.beach);
    buildProductsGrid();
    const params = new URLSearchParams(location.search);
    if (params.get('shop') === '1') openShop();
    const cat = params.get('cat');
    if (cat) { openShop(); setTimeout(() => filterCategory(cat), 80); }
}

function initHeroImages() {
    const setImg = (id, data) => { const el = document.getElementById(id); if (el) { el.src = data.src; el.alt = data.alt; } };
    setImg('hero-large-left',  HERO_IMAGES.largeLeft);
    setImg('hero-small-left',  HERO_IMAGES.smallLeft);
    setImg('hero-large-right', HERO_IMAGES.largeRight);
    setImg('hero-small-right', HERO_IMAGES.smallRight);
}

function buildImageGrid(gridId, items) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = items.slice(0, 8).map(item => `<img src="${item.src}" alt="${item.alt}" onclick="openLightbox(this)">`).join('');
}

function buildProductsGrid() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    const counts = {};
    const filtered = PRODUCTS.filter(p => { counts[p.cat] = (counts[p.cat] || 0) + 1; return counts[p.cat] <= 8; });
    grid.innerHTML = filtered.map(p => {
        const color = p.color || '#C09E44';
        const url = `product.html?src=${encodeURIComponent(p.src)}&name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(p.price)}&color=${encodeURIComponent(color)}`;
        return `<div class="product-card" data-cat="${p.cat}" onclick="window.location='${url}'"><div class="product-img-wrap"><img src="${p.src}" alt="${p.alt}">${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}</div><p class="product-name">${p.name}</p><p class="product-price">${p.price}</p></div>`;
    }).join('');
    applyFilter('all');
}

function applyFilter(cat) {
    let shown = 0;
    document.querySelectorAll('.product-card').forEach(card => {
        const matches = cat === 'all' ? card.dataset.cat === 'all' : card.dataset.cat === cat;
        if (matches && shown < 8) { card.style.display = ''; shown++; } else { card.style.display = 'none'; }
    });
}

function filterProducts(el, cat) {
    document.querySelectorAll('.sidebar-filters li').forEach(li => li.classList.remove('active'));
    el.classList.add('active');
    applyFilter(cat);
}

function openShop() { document.getElementById('shopOverlay').classList.add('open'); document.body.style.overflow = 'hidden'; document.getElementById('shopOverlay').scrollTop = 0; }
function closeShop() { document.getElementById('shopOverlay').classList.remove('open'); document.body.style.overflow = ''; }

let allImages = [], currentIndex = 0;
function buildImageList() { allImages = Array.from(document.querySelectorAll('.img-large, .img-small, .four-col-grid img, .product-img-wrap img')); }
function openLightbox(imgEl) { buildImageList(); currentIndex = allImages.indexOf(imgEl); if (currentIndex === -1) currentIndex = 0; showLightboxImage(currentIndex); document.getElementById('lightbox').classList.add('active'); document.body.style.overflow = 'hidden'; }
function showLightboxImage(index) { const img = allImages[index]; document.getElementById('lightboxImg').src = img.src; document.getElementById('lightboxImg').alt = img.alt; }
function lightboxNav(dir) { currentIndex = (currentIndex + dir + allImages.length) % allImages.length; showLightboxImage(currentIndex); }
function closeLightbox() { document.getElementById('lightbox').classList.remove('active'); document.body.style.overflow = document.getElementById('shopOverlay').classList.contains('open') ? 'hidden' : ''; }
function closeLightboxOnBg(e) { if (e.target === document.getElementById('lightbox')) closeLightbox(); }

document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (e.key === 'Escape') { if (lb.classList.contains('active')) { closeLightbox(); return; } closeShop(); }
    if (lb.classList.contains('active')) { if (e.key === 'ArrowLeft') lightboxNav(-1); if (e.key === 'ArrowRight') lightboxNav(1); }
});

function handleSearch(query) {
    const dropdown = document.getElementById('searchDropdown');
    const results  = document.getElementById('searchResults');
    const hint     = document.getElementById('searchHint');
    const q = query.trim().toLowerCase();
    dropdown.classList.add('open');
    if (q.length === 0) { hint.style.display = 'block'; results.innerHTML = ''; return; }
    hint.style.display = 'none';
    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || (p.badge || '').toLowerCase().includes(q));
    if (matches.length === 0) { results.innerHTML = `<div class="search-no-results">No results for "<strong>${escHtml(query)}</strong>"<span>Try a different keyword</span></div>`; return; }
    const catLabel = { all: 'Clothing', accessories: 'Accessories', dresses: 'Dresses', jeans: 'Jeans', shoes: 'Shoes' };
    results.innerHTML = `<div class="search-count">${matches.length} result${matches.length !== 1 ? 's' : ''} found</div>` +
        matches.slice(0, 8).map(p => {
            const url = `product.html?src=${encodeURIComponent(p.src)}&name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(p.price)}&color=${encodeURIComponent(p.color || '#C09E44')}`;
            const highlight = t => t.replace(new RegExp(`(${escRegex(q)})`, 'gi'), '<mark style="background:#FFF3C4;border-radius:2px;padding:0 1px;">$1</mark>');
            return `<a class="search-result-item" href="${url}"><img class="search-result-img" src="${p.src}" alt="${escHtml(p.name)}" onerror="this.style.background='#EDE8DF'"><div class="search-result-info"><div class="search-result-name">${highlight(p.name)}</div><div class="search-result-cat">${catLabel[p.cat] || p.cat}</div><div class="search-result-price">${p.price}</div></div>${p.badge ? `<span class="search-result-badge">${p.badge}</span>` : ''}</a>`;
        }).join('');
}

function closeSearch() { const d = document.getElementById('searchDropdown'); const i = document.getElementById('searchInput'); if (d) d.classList.remove('open'); if (i) i.value = ''; }
function escHtml(str) { return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function escRegex(str) { return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

function filterCategory(cat) {
    const catMap = { accessories: 'accessories', dresses: 'dresses', beach: 'all', all: 'all' };
    const target = catMap[cat] || 'all';
    document.querySelectorAll('.sidebar-filters li').forEach(btn => { if ((btn.getAttribute('onclick') || '').includes("'" + target + "'")) btn.click(); });
}