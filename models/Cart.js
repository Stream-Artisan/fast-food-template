class Cart {
  constructor(userId) {
    this.userId = userId;
    this.items = []; // { itemId, quantity }
  }
}

module.exports = Cart;
