const express = require("express");
const router = express.Router();
const app = express();

// Dummy user store for demonstration (replace with DB in production)
const users = [];

const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ name, email, password }); // Password should be hashed in production
  res.status(201).json({ message: "User registered successfully" });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (u) => u.email === email && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({
    message: "Login successful",
    user: { name: user.name, email: user.email },
  });
};

app.get("/", (req, res) => {
  res.send("Welcome to the fast food API");
});
router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;
// This file is part of the Fast Food project, which provides a RESTful API for user authentication and management.
// It defines routes for user registration and login, linking them to the corresponding controller functions.
