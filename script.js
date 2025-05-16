class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product) {
      this.items.push(product);
      this.displayCart();
    }
  
    removeItem(index) {
      this.items.splice(index, 1);
      this.displayCart();
    }
  
    getTotal() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    }
  
    displayCart() {
      const cartList = document.getElementById("cartItems");
      cartList.innerHTML = "";
      this.items.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => this.removeItem(index);
        li.appendChild(removeBtn);
        cartList.appendChild(li);
      });
      document.getElementById("totalAmount").textContent = "Total: ₹" + this.getTotal();
    }
  }
  
  const cart = new ShoppingCart();
  
  function addItem(name, price) {
    const product = new Product(name, price);
    cart.addItem(product);
  }
  