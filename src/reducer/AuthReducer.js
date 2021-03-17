export default function AuthReducer(state = false, action) {
  switch (action.type) {
    case "login":
      return (state = {
        username: action.payload.username,
        authorised: action.payload.auth,
      });
    case "logout":
      return (state = action.payload);
    default:
      return false;
  }
}
