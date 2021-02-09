import store from "../store/MyStore";

export const progress = (value) => {
  store.dispatch({
    type: "progress",
    payload: value,
  });
};
