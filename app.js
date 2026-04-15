let cart = [];

const productSection = document.getElementById("products");

products.forEach(p => {
  productSection.innerHTML += `
    <div class="card">
      <h3>${p.name}</h3>
      <p>KES ${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `;
});

function addToCart(id) {
  let item = products.find(p => p.id === id);
  cart.push(item);
  renderCart();
}

function renderCart() {
  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    list.innerHTML += `<li>${item.name} - KES ${item.price}</li>`;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: KES " + total;
}

function checkout() {
  alert("M-Pesa integration coming next 🚀");
}
