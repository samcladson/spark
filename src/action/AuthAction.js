import store from "../store/MyStore";

export const login = (username, status) => {
  sessionStorage.setItem("user", username);
  store.dispatch({
    type: "login",
    payload: {
      username: username,
      auth: status,
    },
  });
};
export const logout = () => {
  sessionStorage.clear();
  store.dispatch({
    type: "logout",
    payload: false,
  });
};
