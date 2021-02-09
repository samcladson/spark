export default function entryType(state = null, action) {
  switch (action.type) {
    case "CheckIn":
      return (state = action.payload);
    case "CheckOut":
      return (state = action.payload);
    case "ClearEntry":
      return (state = action.payload);
    default:
      return state;
  }
}
