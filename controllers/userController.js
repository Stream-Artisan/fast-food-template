// Dummy user and order data for demonstration
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+01 1234567890", address: "123 Main St" }
];
const orders = [
  { id: 1234, userId: 1, total: 35, status: "Delivered" },
  { id: 1233, userId: 1, total: 20, status: "Processing" }
];

const getUserProfile = (req, res) => {
  // In real app, get user from req.user or session
  const user = users[0];
  res.json(user);
};

const updateUserProfile = (req, res) => {
  // In real app, update user in DB
  const user = users[0];
  Object.assign(user, req.body);
  res.json({ message: "Profile updated", user });
};

const getUserOrders = (req, res) => {
  // In real app, filter by logged-in user
  res.json(orders.filter(o => o.userId === 1));
};

module.exports = { getUserProfile, updateUserProfile, getUserOrders };
