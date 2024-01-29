const Footer = {
  render: () => {
    return `
    <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footLogo col-lg-3 col-12 ">
          <img class="w-lg-100" src="./imgs/FootLogo.png" alt="">
          <p>We really belive that good book Store is not just about selling books, but reaching out into the world and
            making a difference.</p>
        </div>

        <div class="links  col-6 col-lg-3">
          <h3 class="ms-4 mt-3 mb-4">Important Links</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Shipping and Delivery</a></li>
          </ul>
        </div>

        <div class="links  col-6 col-lg-3">
          <h3 class="ms-4 mt-3 mb-4">Short Links</h3>
          <ul>

            <li><a href="#">How To Buy</a></li>
            <li><a href="#">Track My Orders</a></li>
            <li><a href="#">Common Questions</a></li>
            <li><a href="#">Contact Us</a></li>

          </ul>
        </div>

        <div class="get-in-touch col-lg-3 col-12">
          <h3 class="mt-3 mb-4">Get In Touch</h3>
          <div class="contact">
            <a href="#"><i class="fa-solid fa-envelope-open-text"></i> email@yahoo.com</a>
          </div>
          <div class="contact">
            <a href="#"><i class="fa-brands fa-whatsapp"></i> +0100-000-0000</a>
          </div>
          <div class="contact">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="last-word">
      <div class="container d-flex justify-content-between align-items-center">
        <p>All Rights Reserved &copy; 2024</p>
        <p>Created BY <span>"Mahmoud ElDweek"</span></p>
      </div>
    </div>
  </div>
    `
  },
  after_render: () => {}
}

export default Footer;