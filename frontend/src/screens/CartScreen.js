import { getInfo } from "../api";
import { getCartItems, setCartItems } from "../localStorage";
import { rerender, parseRequestUrl } from "../utils";

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find((x) => x.product === item.product);

  if (existItem) {
    if (forceUpdate) {
      cartItems = cartItems.map((x) =>
      x.product === existItem.product ? item : x
    );
    }
  } else {
    // If the item is not in the cart, add it with a quantity of 1
    cartItems = [...cartItems, item];
  }

  setCartItems(cartItems);

  if (forceUpdate){
    rerender(CartScreen);
  }
};

const removeFromCart = (id) => {
  setCartItems(getCartItems().filter((x) => x.product !== id));
  if(id === parseRequestUrl().id){
    document.location.hash = '/cart';
  } else {
    rerender(CartScreen)
  }
}
const CartScreen = {
  render: async () => {
    const request = parseRequestUrl();
    if (request.id) {

        const info = await getInfo(request.id);

        // Assuming both engProducts and arProducts are arrays
        const engProduct = info.engProducts || {};
        const arProduct = info.arProducts || {};

        // Add both engProducts and arProducts to the cart
      if (info.engProducts) {

        addToCart({
          product: engProduct._id,
          name: engProduct.name,
          image: engProduct.image,
          price: engProduct.price,
          countInStock: engProduct.countInStock,
          qty: 1,
        });
      }
      if (info.arProducts) {

        addToCart({
          product: arProduct._id,
          name: arProduct.name,
          image: arProduct.image,
          price: arProduct.price,
          countInStock: arProduct.countInStock,
          qty: 1,
        });
      }

  }
    const cartItems = getCartItems();
    return `
      <div class="cart-screen">
      <div class="container">
      <ul class="heading">
        <li><a href="/">Homepage</a></li>
        <span>/</span>
        <li>Shopping Cart</li>
      </ul>
      </div>
      <div class="cart container m-auto">
        <div class="cart-list ">
          <ul class="cart-list-container">
            <li>
              <h3>Shopping Cart</h3>
              <div>Price</div>
            </li>
            ${
              cartItems.length === 0?
              '<div>Cart Is Empty. <a href="/#/">Go Shopping</a>' :
              cartItems.map(item => `
            <li>
                <div class="cart-image">
                  <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-name">
                  <div>
                    <a href="/#/info/${item.product}">
                      ${item.name}
                    </a>
                  </div>
                  <div>
                Qty: <select onfocus='size=5' onblur='size=1' onchange='size=1' class="qty-select" id="${item.product}">
                ${[...Array(item.countInStock).keys()].map((x) => 
                  item.qty === x + 1 
                  ? `<option selected value="${x + 1}">${x + 1}</option>` : `<option value="${x + 1}">${x + 1}</option>`)
                }
                </select>
                <button type="button" class="delete-btn" id="${item.product}">Delete</button>
                  </div>
                </div>
                <div class="cart-price">
                  $${item.price}
                </div>
            </li>
              `).join('\n')
            }
          </ul>
        </div>
        <div class="cart-action">
          <p>
            Total (${cartItems.reduce((a,c) => a+c.qty,0)} items)
            :
            <span>$${cartItems.reduce((a,c) => a+c.price * c.qty, 0)}</span>
          </p>
          <button id="checkout-btn" class="check-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
    `;
  },



// Function Section ----------------------------------------------------------------------------------------------

  after_render: () => {
    // qty-select------------------------------
    const qtySelects = document.getElementsByClassName('qty-select');
    Array.from(qtySelects).forEach( qtySelect => {
      qtySelect.addEventListener('change', (e) => {
        const item = getCartItems().find((x)=> x.product === qtySelect.id)
        addToCart({...item, qty: Number(e.target.value)}, true)
      })
    })
    
    // delete-btn----------------------------------
    const deleteBtns = document.getElementsByClassName('delete-btn');
    Array.from(deleteBtns).forEach(deleteBtn =>{
      deleteBtn.addEventListener('click', () => {
        removeFromCart(deleteBtn.id)
      })
    })

    // check-btn------------------------------------------------
    document.getElementById('checkout-btn').addEventListener('click', () => {
      document.location.hash = '/signin'
    })
  },

};

export default CartScreen;

