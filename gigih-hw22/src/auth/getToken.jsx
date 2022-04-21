export const getToken = () => {
  const hash = window.location.hash;
  let token = localStorage.getItem("token");

  if (!token && hash) {
    token = hash
      .substring(1)
      .split("&")
      .find((elem) => elem.startsWith("access_token"))
      .split("=")[1];
    window.location.hash = "";
    localStorage.setItem("token", token);
  }
  return token;
};
