import { getOrder } from "../api";
import { parseRequestUrl } from "../utils";



const OrderScreen = {
  render: async () => {
    const request = parseRequestUrl();
    const {
      _id,
      shipping,
      payment,
      orderItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      isDelivered,
      deliveredAt,
      isPaid,
      paidAt,
    } = await getOrder(request.id)

    return `
  <div class="placeOrder-screen">
  <h3 class="ms-5">Order : ${_id}</h3>
    <div class="container">
      <div class="order">
        <div class="order-info">

          <div class="section">
            <h2>Shipping</h2>
            <div>
              ${shipping.address}, ${shipping.city},
              ${shipping.postalCode}, ${shipping.country}
            </div>
            ${isDelivered? 
              `<div class="text-success">Delivered at ${deliveredAt}</div>`
            : `<div class="text-danger">Not Delivered</div>`
          }
          </div>
          <div class="section">
            <h2>Payment</h2>
            <div>
              Payment Method : ${payment?.paymentMethod ?? ''}
            </div>
            ${isPaid? 
              `<div class="text-success">Paid at ${paidAt}</div>`
            : `<div class="text-danger">Not Paid</div>`
          }
          </div>
          <div class="section">
            <ul class="cart-list-container">
              <li>
                <h2>Shopping Cart</h2>
                <div>Price</div>
              </li>
              <hr />

              ${
                orderItems.map(item => `
                  <li class="details-holder">
                  <div class="img-specs-holder">
                    <div class="cart-image">
                      <img src="${item.image}" alt="${item.name}" />
                    </div>
                    <div class="cart-name">
                      <div>
                        <a href="/#/product/${item.product}">${item.name}</a>
                      </div>
                      <div>
                        Qty: ${item.qty}
                      </div>
                    </div>
                  </div>
                  <div class="cart-price">
                    $${item.price}
                  </div>
                  </li>
                  <hr />
                `).join('\n')
              }
            </ul>
          </div>

        </div>

        <div class="order-action">
          <ul>
            <li>
              <h2>Order Summary</h2>
            </li>
            <li>
              <div>Items</div><div>$${itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div><div>$${shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div><div>$${taxPrice}</div>
            </li>
            <li class="order-total">
              <div>Order Total</div><div>$${totalPrice}</div>
            </li>
          </ul>
        </div>
        
      </div>

    </div>
  </div>
    `
  },




  after_render: () => {

  }

}

export default OrderScreen;