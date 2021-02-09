export default function webcamReducer(state = false, action) {
  switch (action.type) {
    case "cameraOn":
      return (state = action.payload);
    case "cameraOff":
      return (state = action.payload);
    default:
      return state;
  }
}
