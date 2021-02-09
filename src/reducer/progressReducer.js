export default function progressReducer(state = 0, action) {
  switch (action.type) {
    case "progress":
      return (state = action.payload);
    default:
      return state;
  }
}
