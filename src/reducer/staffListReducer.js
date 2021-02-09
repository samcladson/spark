export default function staffListReducer(state = null, action) {
  switch (action.type) {
    case "setStaffList":
      return (state = action.payload);
    case "clearStaffList":
      return (state = action.payload);
    default:
      return state;
  }
}
