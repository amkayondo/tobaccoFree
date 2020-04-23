const switchIndex = (state, home, login) => {
  if (state.isLoggedIn === true) {
    return home;
  }
  return login;
};

export default switchIndex;
