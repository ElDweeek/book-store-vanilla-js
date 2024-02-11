import { getCartItems } from "../localStorage"



const convertCartToOrder = () => {
  const orderItems = getCartItems();
  if (orderItems.length === 0) {
    document.location.hash = '/cart';
  }
  
}


const PlaceOrderScreen = {
  render: () => {
    

  },




  after_render: () => {

  }
}