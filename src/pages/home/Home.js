import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "../../css/home.css"
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import img1 from "../../images/home.jpg"

export default function Home() {
  // function animate_string() {
  //   const element = document.getElementById('target');
  //   const textNode = element.firstChild;
  //   let text = textNode.data;
  //   setInterval(() => {
  //     text = text[text.length - 1] + text.substring(0, text.length - 1);
  //     textNode.data = text;
  //   }, 100);
  // }

  return (
    <div>
      <Header />
      
      <section id="home">
        <div class="row ">
        
          <div class="col-12">
            <h1 className='mb-5  text-center'>Săn Đồ Rẻ, Chả Lo Về Giá</h1>
            <p className=' text-white'>Khám phá hàng loạt sản phẩm tuyệt vời với giá cực kỳ ưu đãi.</p>
            <p className='mb-5 text-white'>Tận hưởng mua sắm không lo về giá với những ưu đãi đặc biệt chỉ có tại chúng tôi.</p>
            <Link to="/web_ThanhLi/product">
              <button id="btn_muangay" >Mua ngay </button>
            </Link>
          </div>
          <div id="target2">
            Sản phẩm chất lượng
          </div>
          <div id='target'>

          
          <div id="target1">
            Giá cả phải chăng
          </div>
          <div id="target3">
            Thanh toán gọn lẹ
          </div>
        
          <div id="target4">
            Giao hàng nhanh chóng
          </div>
          </div>

        </div>
      </section>
      {/* <section id="gia-ca">
        <div class="row ">
          <div class="home_">
            Giá cả phải chăng
          </div>

        </div>
      </section>
      <section id="san-pham">
        <div class="row ">
          <div class="home_">
            Sản phẩm chất lượng
          </div>

        </div>
      </section>
      <section id="thanh-toan">
        <div class="row ">
          <div class="home_">
            Thanh toán gọn lẹ
          </div>

        </div>
      </section>
      <section id="giao-hang">
        <div class="row ">
          <div class="home_">
            Giao hàng nhanh chóng
          </div>

        </div>
      </section> */}

      {/* <Container id="gia-ca">
        <div>
          giá cả phải chăng
        </div>
      </Container>
      <Container id="san-pham">
        <div>   sản phẩm chất lượng</div>
      </Container>
      <Container id="thanh-toan">
        <div>
          thnah toan nhanh chóng
        </div>
      </Container>
      <Container id="giao-hang">
        <div>
          giao hàng nhanh chóng
        </div>
      </Container>
*/}

      <Footer />
      <a href="#" id="back-to-top" class="backtop" title="Lên đầu trang"><i class="fa fa-angle-up"></i></a>
    </div>
  )
}
