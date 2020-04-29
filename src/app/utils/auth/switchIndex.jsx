const switchIndex = (firstCompt, secCompt) => {
  const token = localStorage.getItem("tbAuthtkn");
  const isLogedIn = localStorage.getItem("tbAuthIsL");
  if (token === null) {
    return secCompt;
  }
  return firstCompt;
};

export default switchIndex;
