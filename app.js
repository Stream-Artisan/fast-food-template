const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart');

app.use(express.json());
// Routes
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'html'); 
app.get('/', (req, res) => {
  res.render('index.html', { title: 'Welcome to the API' });
});
app.get('/about', (req, res) => {
  res.render('about.html', { title: 'About Us' });
}); 
app.get('/contact', (req, res) => {
  res.render('contact.html', { title: 'Contact Us' });
});
app.get('/account', (req, res) => {
  res.render('account.html', { title: 'User Account' });
});
app.get('/cart', (req, res) => {
  res.render('cart.html', { title: 'Shopping Cart' });
});
app.get('/checkout', (req, res) => {
  res.render('checkout.html', { title: 'Checkout' });
});



app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

module.exports = app;
