export default function status(state = -1, action) {
  switch (action.type) {
    case "status":
      return (state = action.payload);
    default:
      return state;
  }
}
