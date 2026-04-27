/* ── Citire / scriere ── */
function getCart() {
    try { return JSON.parse(localStorage.getItem('sunset_cart') || '[]'); }
    catch(e) { return []; }
}
function saveCart(cart) {
    localStorage.setItem('sunset_cart', JSON.stringify(cart));
}

/* ── Adaugă produs ── */
function addToCart(product) { // evenimente
    /* product = { src, name, price, color, qty } */
    const cart = getCart();
    const existing = cart.find(i => i.name === product.name && i.color === product.color);
    if (existing) {
        existing.qty = (existing.qty || 1) + (product.qty || 1);
    } else {
        cart.push({ ...product, qty: product.qty || 1 });
    }
    saveCart(cart);
    updateCartBadge();
    showCartToast(product.name);
}

/* ── Șterge produs ── */
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    updateCartBadge();
}

/* ── Modifică cantitate ── */
function updateCartQty(index, qty) {
    const cart = getCart();
    if (qty < 1) { removeFromCart(index); return; }
    cart[index].qty = qty;
    saveCart(cart);
    updateCartBadge();
}

/* ── Total ── */
function getCartTotal() {
    return getCart().reduce((sum, item) => {
        const price = parseFloat((item.price || '$0').replace(/[^0-9.]/g, ''));
        return sum + price * (item.qty || 1);
    }, 0);
}

/* ── Badge număr articole pe iconița coș ── */
function updateCartBadge() {
    const total = getCart().reduce((s, i) => s + (i.qty || 1), 0);
    const ids = ['cartBadge','cartBadge2','cartBadgeShop','cartBadgeProd',
                 'cartBadgeCart','cartBadgeAcc','cartBadgeAbout','cartBadgeInfo'];
    ids.forEach(id => {
        const el = document.getElementById(id); // acesare elementelor si Lucrul cu DOM
        if (!el) return;
        // afișare număr total articole, cu limită la 99+
        if (total > 0) { el.textContent = total > 99 ? '99+' : total; el.style.display = 'flex'; } //Manipularea DOM
        else { el.style.display = 'none'; } //modificare vizibilite badge-ului
    });
}

/* ── Toast notificare ── */
function showCartToast(name) {
    let toast = document.getElementById('cartToast'); //Lucrul cu DOM
    if (!toast) {
        toast = document.createElement('div'); // creare element toast dacă nu există
        toast.id = 'cartToast';
        toast.className = 'cart-toast';
        document.body.appendChild(toast);
    }
    const short = name.length > 28 ? name.slice(0, 28) + '…' : name;
    toast.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span><strong>${short}</strong> added to bag</span>`;
    toast.classList.add('show'); //stilizare prin clase css
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}