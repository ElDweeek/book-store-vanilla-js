import { getUserInfo } from "../localStorage";

const Nav = {
  after_render: () => {  
    // Nav Section -----------------------------------------------------------------------------------

    const activePage = window.location.hash;

    
    const navLinks = document.querySelectorAll('.navbar-nav a');
    
    navLinks.forEach(link => {
      if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
      }
    });
    
    
    
    

    const searchArea = document.querySelector(".searchArea");

    const searchNav = document.querySelector(".search-icon-div");
    
    document.addEventListener("click", function (e) {
      if (e.target == searchNav || e.target == searchArea)
        searchNav.classList.add("active")
      else searchNav.classList.remove("active")
    });
    
    
    const profileSelect = document.getElementById("dropdown");
    
    if(profileSelect) {
    document.addEventListener("click", (e)=> {
      if (e.target === profileSelect ){
        profileSelect.classList.add("active");
        } else {
          profileSelect.classList.remove("active");
        }
      })
    }
  },

  render: () => {
    const {fName} = getUserInfo();
    return `
    <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <div class="nav-logo">
        <a class="navbar-brand" href="/#/">
          <img src="./imgs/NavLogo.png" alt="">
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li><input class="search d-block d-lg-none" type="text" id ="mob-search" placeholder="Search...."></li>
          <li class="nav-item">
            <a class="nav-link p-2 p-lg-3" aria-current="page" href="/#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-2 p-lg-3 " aria-current="page" href="/#/authors">Authors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-2 p-lg-3 " aria-current="page" href="/#/books">Books</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-2 p-lg-3 " aria-current="page" href="/#/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-2 p-lg-3 " aria-current="page" href="/#/contact">Contact</a>
          </li>
        </ul>
        <div class="search-icon-div ps-3 pe-3 d-none d-lg-block">
          <span class="fa-brands fa-searchengin search-icon"></span>
          <input class="searchArea" type="text" id ="desk-search" placeholder="Author / Book" autofocus>
        </div>
        
        ${fName ?
          `
          <div class="dropdown" id="dropdown">
            ${fName}
            <div class="profile-menu">
              <div class="settings option">
                
                <a href="/#/profile">
                <i class="fa-solid fa-user-gear"></i>
                Profile Settings</a>
              </div>
              <div class="logout option">
                <a href="/#/">
                <img src="../../imgs/logout.png" alt="">
                Log out</a>
              </div>
            </div>
          </div>
          ` 
          : `<a class="btn main-btn ps-4 pe-4" href="#/signin">Login</a>`}
      </div>
  <div class="shop-cart"><a href="/#/cart"><i class="fa-solid fa-cart-shopping"></i></a></div>
    </div>
  </nav>
    `
  },



}
export default Nav;