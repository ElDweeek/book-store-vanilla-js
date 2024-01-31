import CheckoutSteps from "../components/CheckoutSteps";
import { getPayment, getUserInfo, setPayment } from "../localStorage";

const PaymentScreen = {

  render: () => {
    const {fName} = getUserInfo();
    if (!fName) {
      document.location.hash = '/';
    }
    return `
    <div class="paymentScreen">
    ${CheckoutSteps.render({step1: true, step2: true, step3: true})}
    <div class="form-container">
    <div class="form-box">
      <form id="payment-form" class="payment-form">
        <ul class="form-items">
          <li>
            <h1>Payment</h1>
          </li>
          <li>
            <div>
              <input type="radio" name="payment-method" id="paypal" value="Paypal" checked/>
              <label For="paypal">Paypal</label>
            </div>
          </li>
          <li>
            <div>
              <input type="radio" name="payment-method" id="stripe" value="Stripe" />
              <label For="stripe">Stripe</label>
            </div>
          </li>
          <li>
            <div>
              <input type="radio" name="payment-method" id="shopify" value="Shopify" />
              <label For="shopify">Shopify</label>
            </div>
          </li>
          <li>
            <button type="submit" class="sub-btn">
            Continue
            <i class="fa-solid fa-arrow-right"></i>
            </button>
          </li>
        </ul>  
      </form>
    </div>
  </div>
  </div>


    `
    
  },
  after_render: () => {
    document.getElementById("payment-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
      setPayment({paymentMethod});
      document.location.hash = '/placeorder';
    });
  }
}


export default PaymentScreen;