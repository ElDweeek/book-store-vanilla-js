import { signin } from "../api";
import { getUserInfo, setUserInfo } from "../localStorage";
import { hideLoading, showLoading, showMessage } from "../utils";

const SignInScreen = {
  render: () => {
    if(getUserInfo().name) {
      document.location.hash = '/';
    }
    return `


  <div class="form-container">
    <div class="form-box">
      <form id="signin-form" class="signin-form">
        <ul class="form-items">
          <li>
            <h1>Login</h1>
          </li>
          <li>
            <input type="email" name="email" id="email" placeholder="E-mail" autocomplete="off" />
          </li>
          <li>
            <input type="password" name="password" id="password" placeholder="Password" />
          </li>
          <li>
            <button type="submit" class="sub-btn">Sign In</button>
          </li>
          <li>
            <div>
              Don't have an account?
              <a href="/#/register">Sign Up</a>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </div>



    `
    
  },
  after_render: () => {
    document.getElementById("signin-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      showLoading();
      const data = await signin({
        email: document.getElementById('email').value,
        password: document.getElementById("password").value,
      });
      hideLoading();
      if (data.error) {
        showMessage(data.error);
      }else {
        setUserInfo(data);
        document.location.hash = "/"
      }
    });
  }
}


export default SignInScreen;