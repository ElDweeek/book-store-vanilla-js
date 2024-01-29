import { register } from "../api";
import { getUserInfo, setUserInfo } from "../localStorage";
import { hideLoading, showLoading, showMessage } from "../utils";

const ProfileScreen = {
  render: () => {
    return `


    <div class="profile-screen">
      <div class="container">
        <ul class="heading">
          <li><a href="/">Homepage</a></li>
            <span>/</span>
          <li>My Account</li>
        </ul>
        <h1>My Account</h1>
        <div class="section row">
          <aside class="section-links col-md-4">
            <ul>
              <li class="active" id="myDetails-link">
                <i class="fa-regular fa-address-card"></i>
                My details
              </li>
              <li id="myAddress-link">
                <i class="fa-solid fa-location-dot"></i>
                My adress book
              </li>
              <li id="myOrders-link">
                <i class="fa-solid fa-basket-shopping"></i>
                My orders
              </li>
              <li id="accountSettings-link">
                <i class="fa-solid fa-gear"></i>
                Acount settings
              </li>
            </ul>
          </aside>

          
          <div class="section-details col-md-8">

            <div class="view-list">
              <div class="content-box active" id="my-details">
                <form id="presonal-form" class="presonal-form">
                  <h1>My Details</h1>
                  <h3>Personal Infromation</h3>
                  <hr />
                  <div class="flex-container">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officia id esse? Ratione aliquam quas eveniet.</p>
                    <ul class="form-items">
                      <li>
                        <input type="text" name="name" id="fName" placeholder="First Name" autocomplete="off" />
                        <input type="text" name="name" id="lName" placeholder="Last Name" autocomplete="off"/>
                      </li>
                      <li>
                        <input type="date" name="date" id="date"/>
                      </li>
                      <li>
                      <input type="tel" id="phone" name="phone" placeholder="8888-888-8888" autocomplete="off"  maxlength="13" title="Ten digits required" />
                      </li>
                      <li>
                      <button type="submit" class="sub-btn">Save</button>
                      </li>
                    </ul>
                  </div>
                </form>

                <form id="email-form" class="email-form">
                  <h3>E-mail adress</h3>
                  <hr />
                  <div class="flex-container">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officia id esse? Ratione aliquam quas eveniet.</p>
                    <ul class="form-items">
                      <li>
                        <input type="email" name="email" id="email" placeholder="email@example.com" autocomplete="off"/>
                      </li>
                      <li>
                        <button type="submit" class="sub-btn">Save</button>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>


              <div class="content-box" id="my-address-book">
                <p>ssssssssssjjjjjjjjj</p>
              </div>
              <div class="content-box" id="my-orders">
                <p>eeeerrrrrrrr</p>
              </div>
              <div class="content-box" id="account-settings">
                <form id="settings-form" class="account-settings">
                  <ul class="form-items">
                    <li>
                      <input type="password" name="old-password" id="old-password" placeholder="Enter your old Password" />
                    </li>
                    <li>
                      <input type="password" name="new-password" id="new-password" placeholder="Create New Password" />
                    </li>
                    <li>
                      <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm New Password" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            

          </div>
        </div>
      

      </div>
    </div>


    `;
  },
  after_render: () => {

    const myDetailslink = document.getElementById('myDetails-link');
    const myDetailscontent = document.getElementById('my-details');
    const myAddresslink = document.getElementById('myAddress-link');
    const myAddresscontent = document.getElementById('my-address-book');
    const myOderslink = document.getElementById('myOrders-link');
    const myOrderscontent = document.getElementById('my-orders');
    const accountSettingslink = document.getElementById('accountSettings-link');
    const accountSettingscontent = document.getElementById('account-settings');

    const removeAllActive = ()=> {
      myDetailslink.classList.remove('active'),
      myDetailscontent.classList.remove('active'),
      myAddresslink.classList.remove('active'),
      myAddresscontent.classList.remove('active'),
      myOderslink.classList.remove('active'),
      myOrderscontent.classList.remove('active'),
      accountSettingslink.classList.remove('active'),
      accountSettingscontent.classList.remove('active')
    }

    document.addEventListener('click', (e)=>{
    if(e.target == myDetailslink) {
      removeAllActive()
      myDetailslink.classList.add('active'),
      myDetailscontent.classList.add('active')


    } else if (e.target == myAddresslink) {
      removeAllActive()

      myAddresslink.classList.add('active'),
      myAddresscontent.classList.add('active')
    }
    else if (e.target == myOderslink) {
      removeAllActive()

      myOderslink.classList.add('active'),
      myOrderscontent.classList.add('active')
    }
    else if (e.target == accountSettingslink) {
      removeAllActive()

      accountSettingslink.classList.add('active'),
      accountSettingscontent.classList.add('active')
    }
  })



  function phoneSpaces(e) {
    // Remove any existing spaces
    e.value = e.value.replace(/\s/g, '');

    // Add spaces in the desired format
    if (e.value.length >= 4) {
        e.value = e.value.replace(/(\d{4})(\d{0,3})/, "$1 $2");
    }
    if (e.value.length >= 7) {
        e.value = e.value.replace(/(\d{4}) (\d{3})(\d{0,4})/, "$1 $2 $3");
    }
}




// Add event listener to call phoneSpaces on input change
document.getElementById('phone').addEventListener('input', function() {
    phoneSpaces(this);
});


    document
      .getElementById("presonal-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        const data = await register({
          fName: document.getElementById("fName").value,
          lName: document.getElementById("lName").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          setUserInfo(data);
          document.location.hash = "/";
        }
      });
  },
};

export default ProfileScreen;
