import store from "../store/MyStore";

export const addStaff = (name, img) => {
  store.dispatch({
    type: "Add Staff",
    payload: {
      Name: name,
      img: img,
    },
  });
};

export const addUnknown = (name, img) => {
  store.dispatch({
    type: "Add Unknown",
    payload: {
      Name: name,
      img: img,
    },
  });
};

export const clearStaff = (value) => {
  store.dispatch({
    type: "Clear Staff",
    payload: value,
  });
};
