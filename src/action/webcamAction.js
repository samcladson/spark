import store from "../store/MyStore";

export const cameraOn = () => {
  store.dispatch({
    type: "cameraOn",
    payload: true,
  });
};

export const cameraOff = () => {
  store.dispatch({
    type: "cameraOff",
    payload: false,
  });
};
