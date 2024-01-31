import { register } from "../api";
import { getUserInfo, setUserInfo } from "../localStorage";
import { hideLoading, redirectUser, showLoading, showMessage } from "../utils";

const RegisterScreen = {

  render: () => {
    if (getUserInfo().fName) {
      redirectUser();
    }
    return `

<div class="registerScreen">
  <div class="form-container">
    <div class="form-box">
      <form id="register-form" class="register-form">
        <ul class="form-items">
          <li>
            <h1>Sign Up</h1>
          </li>
          <li>
          <input type="text" name="name" id="fName" placeholder="First Name" required autocomplete="off" />
          <input type="text" name="name" id="lName" placeholder="Last Name" required autocomplete="off"/>
          </li>
          <li>
            <input type="email" name="email" id="email" placeholder="Enter your E-mail" required autocomplete="off"/>
          </li>
          <li>
            <input type="password" name="password" id="password" placeholder="Create Password" required />
          </li>
          <li>
            <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" required />
          </li>
          <li>
            <button type="submit" class="sub-btn">Sign Up</button>
          </li>
          <li>
            <div>
              Already have and account?
              <a href="/#/signin">Login</a>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </div>
</div>


    `
    
  },
  after_render: () => {
    document.getElementById("register-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      showLoading();
      const data = await register({
        fName: document.getElementById('fName').value,
        lName: document.getElementById('lName').value,
        email: document.getElementById('email').value,
        password: document.getElementById("password").value,
      });
      hideLoading();
      if (data.error) {
        showMessage(data.error);
      }else {
        setUserInfo(data);
        redirectUser();
      }
    });
  }
}


export default RegisterScreen;