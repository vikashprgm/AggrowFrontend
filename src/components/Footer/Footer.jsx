import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer class="footer">
      <div class="container-footer">
        <div class="footer-row">
          <div class="footer-col">
            <h4>Govt. Services </h4>
            <ul>
              <li><a href="#">Schemes </a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">policies </a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Others </h4>
            <ul>
              <li><a href="#">Jan Dhan yojna </a></li>
              <li><a href="#">Kisan Hit </a></li>
              <li><a href="#">Kisan </a></li>
              <li><a href="#">Kisan</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
