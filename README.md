<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Labeeb Cloth's</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="logo">Labeeb Cloth's</div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#collection">Collection</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero-section">
    <div class="hero-content">
      <h1>Welcome to Labeeb Cloth's</h1>
      <p>Exclusive & Premium Collections</p>
      <a href="#collection" class="btn">Shop Now</a>
    </div>
  </section>

  <!-- Collection Section -->
  <section id="collection" class="collection-section">
    <h2>Our Latest Collection</h2>
    <div class="collection-grid">
      <div class="card">
        <img src="images/cloth1.jpg" alt="Classic White Shirt">
        <h3>Classic White Shirt</h3>
        <p>$29.99</p>
      </div>
      <div class="card">
        <img src="images/cloth2.jpg" alt="Elegant Black Dress">
        <h3>Elegant Black Dress</h3>
        <p>$49.99</p>
      </div>
      <div class="card">
        <img src="images/cloth3.jpg" alt="Summer Casual">
        <h3>Summer Casual</h3>
        <p>$39.99</p>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about-section">
    <h2>About Us</h2>
    <p>Labeeb Cloth's offers premium clothing collections tailored to perfection. We believe in quality and customer satisfaction above all.</p>
  </section>

  <!-- Footer Section -->
  <footer id="contact" class="footer">
    <p>&copy; 2024 Labeeb Cloth's. All rights reserved.</p>
    <ul class="social-links">
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Instagram</a></li>
      <li><a href="#">Twitter</a></li>
    </ul>
  </footer>

  <!-- JavaScript -->
  <script src="js/script.js"></script>
</body>
</html>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  font-family: 'Arial', sans-serif;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #333;
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.logo {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #f39c12;
}

/* Hero Section */
.hero-section {
  height: 100vh;
  background: url('../images/hero-bg.jpg') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.hero-content {
  color: white;
  z-index: 2;
  animation: fadeIn 1.5s ease-in-out;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.btn {
  padding: 10px 20px;
  background-color: #f39c12;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #e67e22;
}

/* Collection Section */
.collection-section {
  padding: 60px 0;
  text-align: center;
}

.collection-section h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.collection-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 0 auto;
  width: 80%;
}

.card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px);
}

.card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

/* About Section */
.about-section {
  padding: 60px 30px;
  background-color: #f9f9f9;
  text-align: center;
}

.about-section h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.about-section p {
  font-size: 1.2rem;
  color: #333;
}

/* Footer Section */
.footer {
  background-color: #333;
  color: white;
  padding: 40px;
  text-align: center;
}

.social-links {
  list-style: none;
  margin-top: 20px;
}

.social-links li {
  display: inline;
  margin: 0 10px;
}

.social-links a {
  color: #f39c12;
  text-decoration: none;
  font-size: 18px;
}

.social-links a:hover {
  color: white;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .collecti
