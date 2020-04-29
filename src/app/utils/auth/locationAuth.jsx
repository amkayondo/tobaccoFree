import React from 'react';

const locationAuth = (isLoggedIn, authPage, homePage) => (
  <div>
    { isLoggedIn === true ? homePage : authPage }
    { isLoggedIn === false ? authPage : homePage }
  </div>
);

export default locationAuth;
