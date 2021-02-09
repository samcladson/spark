import store from "../store/MyStore";

export const checkIn = () => {
  store.dispatch({
    type: "CheckIn",
    payload: "CheckIn",
  });
};

export const checkOut = () => {
  store.dispatch({
    type: "CheckOut",
    payload: "CheckOut",
  });
};

export const clearEntry = () => {
  store.dispatch({
    type: "ClearEntry",
    payload: null,
  });
};
