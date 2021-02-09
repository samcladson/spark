import store from "../store/MyStore";

export const drawerOpen = () => {
  store.dispatch({
    type: "open",
    payload: true,
  });
};

export const drawerClose = () => {
  store.dispatch({
    type: "close",
    payload: false,
  });
};
