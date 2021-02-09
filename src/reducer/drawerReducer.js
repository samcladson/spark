export default function drawerReducer(state = false, action) {
  switch (action.type) {
    case "open":
      return (state = action.payload);
    case "close":
      return (state = action.payload);
    default:
      return state;
  }
}
