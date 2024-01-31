import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import AboutScreen from "./screens/AboutScreen.js";
import AuthorsScreen from "./screens/AuthorsScreen.js";
import BooksScreen from "./screens/BooksScreen.js";
import CartScreen from "./screens/CartScreen.js";
import ContactScreen from "./screens/ContactScreen.js";
import Error404Screen from "./screens/Error404.js";
import HomeScreen from "./screens/HomeScreen.js";
import InfoScreen from "./screens/InfoScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import SignInScreen from "./screens/SingInScreen.js";
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";


const routes = {
  '/': HomeScreen,
  '/info/:id': InfoScreen,
  '/cart/:id' : CartScreen,
  '/cart' : CartScreen,
  '/signin': SignInScreen,
  '/register': RegisterScreen,
  '/authors': AuthorsScreen,
  '/books': BooksScreen,
  '/about': AboutScreen,
  '/contact': ContactScreen,
  '/profile': ProfileScreen,
  '/shipping': ShippingScreen,
  '/payment': PaymentScreen,
};



const router = async () => {
  showLoading();
  const request = parseRequestUrl();
  const parseUrl = 
  (request.resource ? `/${request.resource}` : '/') +
  (request.id ? '/:id' : '') + 
  (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const header = document.getElementById('header-section');
  header.innerHTML = Nav.render();
  if (Nav.after_render()) Nav.after_render()

  const footer = document.getElementById('footer-section')
  footer.innerHTML = Footer.render();
  if (Footer.after_render()) Footer.after_render()



  const main = document.getElementById('main-section');
  main.innerHTML = await screen.render();
  if (screen.after_render()) await screen.after_render();

  hideLoading();
};

window.addEventListener('load', router);

window.addEventListener('hashchange',router);