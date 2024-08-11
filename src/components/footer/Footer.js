import React, { useContext } from 'react'
import "../../css/footer.css"
import { Col, Container, Row } from 'reactstrap'

export default function Footer() {
  return (
    <div className='footer'>

      <div class="row">

        <div class="col-sm-3  ">
          <h5 class=" text-uppercase "> CONTACT US</h5>
          <ul >
            <li> <i class="fa-solid fa-stopwatch"></i> <span>:  9:00 AM - 6:00 PM</span></li>
            <li> <i class="fa-solid fa-location-dot"></i> <span>:  Ho Chi minh City, Viet Nam</span> </li>
            <li> <i class="fa-solid fa-phone"></i> <span>: 0xxxxxxxxx</span> </li>
            <li> <i class="fa-solid fa-envelope"></i><span>: example@gmail.com</span></li>
      
          </ul>
        </div>
        <div class="col-sm-6 ">
          <h5 class=" text-uppercase"> About Us</h5>
          <div class="row">
          <div class="col-sm-6 ">
            <ul>
            <li> <a href='#'><span>Chính sách bảo mật</span></a></li>
            <li> <a href='#'><span>Chính sách vận chuyển</span></a></li>
            <li> <a href='#'><span>Chính sách kiểm hàng</span></a></li>
            <li> <a href='#'><span>Chính sách đổi trả</span></a></li>
            </ul>
          </div>

          <div class="col-sm-6">
            <ul>
            <li> <a href='#'><span>Hướng dẫn mua hàng</span></a></li>
            <li> <a href='#'><span>Hướng dẫn thanh toán</span></a></li>
              
            </ul>
            </div>
          </div>
        
        </div>

        <div class="col-sm-3">
          <h5 class="text-uppercase"> follow US</h5>
            <span class="social-icon ">
              <a target="_blank" href="https://www.facebook.com/" class="social-wrapper facebook">
                  <i class="fa-brands fa-facebook"></i>
              </a>
              </span>
            <span class="social-icon">
              <a target="_blank" href="https://www.youtube.com/" class="social-wrapper youtube">
                  <i class="fa-brands fa-youtube"></i>
              </a>
              </span>
              <span class="social-icon">
              <a target="_blank" href="https://www.tiktok.com/" class="social-wrapper tiktok">
                <span class="social-icon">
                  <i class="fa-brands fa-tiktok"></i>
                </span>
              </a>
              </span>
              <span class="social-icon">
              <a target="_blank" href="https://www.instagram.com/" class="social-wrapper instagram">
                <span class="social-icon">
                  <i class="fa-brands fa-instagram"></i>
                </span>
              </a>
              </span>
        </div>
      </div>
      <div class="footer-border"></div>

      <div class="row">
        <div class="col-sm-12 text-center">
          <p>Copyright © 2024. Design by <a href="#">DuyTam</a>.</p>
        </div>
      </div>

    </div>

  )
}


