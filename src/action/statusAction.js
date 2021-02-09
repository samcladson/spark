import store from "../store/MyStore";

export const status = (value) => {
  store.dispatch({
    type: "status",
    payload: value,
  });
};
