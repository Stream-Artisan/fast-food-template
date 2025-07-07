// Dummy cart for demonstration
let cart = [];

const getCart = (req, res) => {
  res.json(cart);
};

const addToCart = (req, res) => {
  const { itemId, quantity } = req.body;
  const existing = cart.find(i => i.itemId === itemId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ itemId, quantity });
  }
  res.json({ message: "Item added to cart", cart });
};

const removeFromCart = (req, res) => {
  const { itemId } = req.body;
  cart = cart.filter(i => i.itemId !== itemId);
  res.json({ message: "Item removed from cart", cart });
};

const updateCartItem = (req, res) => {
  const { itemId, quantity } = req.body;
  const item = cart.find(i => i.itemId === itemId);
  if (item) item.quantity = quantity;
  res.json({ message: "Cart updated", cart });
};

module.exports = { getCart, addToCart, removeFromCart, updateCartItem };
