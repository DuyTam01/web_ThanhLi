import React from 'react'
import "../../css/contact.css"

export default function Contact() {
  return (
    <div className='contact'>
      <div class="row">

        <div class="col-sm-5  ">
          <h5 class=" text-uppercase headings-font-weight"> CONTACT US</h5>
          <ul >
            <li> <i class="fa-solid fa-stopwatch"> <span>:  9:00 AM - 6:00 PM</span></i></li>
            <li> <i class="fa-solid fa-location-dot"><span>:  Ho Chi minh City, Viet Nam</span> </i> </li>
            <li> <i class="fa-solid fa-phone"><span>: 0xxxxxxxxx</span></i></li>
            <li> <i class="fa-solid fa-envelope"><span>: example@gmail.com</span></i></li>

          </ul>
        </div>
        <div class="col-sm-4 ">
          <h5 class=" text-uppercase"> About Us</h5>
          <ul className='fa-solid'>

            <li> <a href='#'><span>Hướng dẫn thanh toán</span></a></li>
            <li> <a href='#'><span>Hướng dẫn mua hàng</span></a></li>
            <li> <a href='#'><span>Chính sách đổi trả</span></a></li>
            <li> <a href='#'><span>Chính sách bảo mật</span></a></li>
            <li> <a href='#'><span>Chính sách vận chuyển</span></a></li>
            <li> <a href='#'><span>Chính sách kiểm hàng</span></a></li>
          </ul>
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

    </div>
  )
}
