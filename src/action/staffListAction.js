import store from "../store/MyStore";

export const setStaffList = (data) => {
  store.dispatch({
    type: "setStaffList",
    payload: data,
  });
};

export const clearStaffList = (data) => {
  store.dispatch({
    type: "clearStaffList",
    payload: data,
  });
};
