export const getCartItems = () =>{
  const cartItems = localStorage.getItem('cartItems')?
  JSON.parse(localStorage.getItem('cartItems')):
  [];
  return cartItems;
};

export const setCartItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }


  export const setUserInfo = ({
    _id = '',
    fName = '',
    lName = '',
    email = '',
    passowrd = '',
    token = '',
    isAdmin = false,
  }) => {
    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        _id, fName, lName, email, passowrd, token, isAdmin
      })
    )
  }

  export const getUserInfo = () => {
    return localStorage.getItem('userInfo')?
    JSON.parse(localStorage.getItem('userInfo'))
    : {fName: '', lName: '', email: '', passowrd: ''}
  }