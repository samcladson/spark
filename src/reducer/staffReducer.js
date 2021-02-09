export default function staffReducer(state = null, action) {
  switch (action.type) {
    case "Add Staff":
      return (state = {
        Name: action.payload.Name,
        img: action.payload.img,
      });
    case "Add Unknown":
      return (state = {
        Name: action.payload.Name,
        img: action.payload.img,
      });
    case "Clear Staff":
      return (state = action.payload);
    default:
      return state;
  }
}
