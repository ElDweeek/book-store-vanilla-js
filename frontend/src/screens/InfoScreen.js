import { getInfo } from '../api';
import { hideLoading, parseRequestUrl, showLoading } from '../utils'
import Rating from '../components/Rating';





const InfoScreen = {
  render: async () => {
    showLoading();
    const request = parseRequestUrl();
    const info = await getInfo(request.id)

    hideLoading();
    if (info.arProducts && info.arProducts.name) {
      return `


    <div class="infoScreen">
      <div class="container">
        <ul class="heading">
          <li><a href="/">Homepage</a></li>
          <span>/</span>
          <li>Product Infromation</li>
        </ul>
      </div>
    <div class="details container row">
      <div class="img col-lg-5 col-md-6 mb-4">
        <div class="pt-4 pb-4 ps-4 pe-4">
          <img src="${info.arProducts.image}" alt="info.arProducts.name" />
        </div>
      </div>
      <div class="info col-lg-4 col-md-6 mb-4">
        <ul>
          <li>
            <h1>${info.arProducts.name}</h1>
          </li>
          <li>
            ${Rating.render({ value: info.arProducts.rating, text: `${info.arProducts.numReview} reviews` })}
          </li>
          <li>
            Price: <strong>$${info.arProducts.price}</strong>
          </li>
          <li>
            Description:
            <div>
              ${info.arProducts.description}
            </div>
          </li>
        </ul>
      </div>

      <div class="action col-lg-3 col-md-6 mb-4">
      <div class="pt-4 pb-4 ps-3 pe-4">
          <ul>
            <li>
            Price: <strong>$${info.arProducts.price}</strong>
            </li>
            <li>
              Status :
              ${info.arProducts.countInStock > 0 ? `<span class="success">In Stock</span>` : `<span  class="error">Out Of Stock</span>`}
            </li>
            <li>
              <button id="cart-btn" class="cart-btn ps-4 pe-4 pt-2 pb-2">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  `;
    }



    else if (info.engProducts && info.engProducts.name) {
      return `

      <div class="infoScreen">
        <div class="container">
          <ul class="heading">
            <li><a href="/">Homepage</a></li>
            <span>/</span>
            <li>Product Infromation</li>
          </ul>
        </div>
        <div class="details container row">
          <div class="img col-lg-5 col-md-6 mb-4">
            <div class="pt-4 pb-4 ps-4 pe-4">
              <img src="${info.engProducts.image}" alt="info.engProducts.name" />
            </div>
          </div>
          <div class="info col-lg-4 col-md-6 mb-4 ">
            <ul>
              <li>
                <h1>${info.engProducts.name}</h1>
              </li>
              <li>
                ${Rating.render({ value: info.engProducts.rating, text: `${info.engProducts.numReview} reviews` })}
              </li>
              <li>
                Price: <strong>$${info.engProducts.price}</strong>
              </li>
              <li>
                Description:
                <div>
                  ${info.engProducts.description}
                </div>
              </li>
            </ul>
          </div>
    
          <div class="action col-lg-3 col-md-6 mb-4">
          <div class="pt-4 pb-4 ps-3 pe-4">
              <ul>
                <li>
                Price: <strong>$${info.engProducts.price}</strong>
                </li>
                <li>
                  Status :
                  ${info.engProducts.countInStock > 3 ?
          `<span class="success">In Stock</span>`
          : info.engProducts.countInStock > 0 ?
            `<span class="error">Last ${info.engProducts.countInStock} Pieces</span>`
            : `<span class="error">Out Of Stock</span>`
        }
                </li>
                <li>
                  <button id="cart-btn" class="cart-btn ps-4 pe-4 pt-2 pb-2">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      

      
      `;
    }


    else {
      return `<div>Product Not Found</div>`;
    }

  },


  // Function Section ----------------------------------------------------------------------------------------------


  after_render() {
    const request = parseRequestUrl();
    document.getElementById("cart-btn").addEventListener("click", ()=> {
      document.location.hash = `/cart/${request.id}`
    })

  },



}


export default InfoScreen;