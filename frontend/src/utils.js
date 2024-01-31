import { getCartItems } from "./localStorage";

export const parseRequestUrl = () =>{
  const url = document.location.hash.toLowerCase();
  const request = url.split("/");
  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  };
};

export const rerender = async(component) => {
  document.getElementById('main-section').innerHTML = await component.render();
  await component.after_render();
}


export const showLoading = () => {
  document.getElementById('loading-overlay').classList.add('active');
}
export const hideLoading = () => {
  document.getElementById('loading-overlay').classList.remove('active');
}


export const showMessage = (message, callback) => {
  document.getElementById('message-alert').innerHTML = `
  <div>
    <div id="message-alert-content">${message}</div>
    <button id="message-alert-btn">Try again</button>
  </div>
  `;
  
  document.getElementById('message-alert').classList.add('active')
  document.getElementById('message-alert-btn').addEventListener('click', ()=> {
    document.getElementById('message-alert').classList.remove('active')
    if (callback) {
      callback();
    }
  })
};

export const redirectUser = () => {
  if(getCartItems().length !== 0) {
    document.location.hash = '/shipping'
    console.log('success')
  } else {
    document.location.hash = '/'
    console.log('failed')
  }
}