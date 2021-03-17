import { createStore, combineReducers } from "redux";
import Drawer from "../reducer/drawerReducer";
import Entry from "../reducer/entryTypeReducer";
import Webcam from "../reducer/webcamReducer";
import Staff from "../reducer/staffReducer";
import Progress from "../reducer/progressReducer";
import Status from "../reducer/statusReducer";
import StaffList from "../reducer/staffListReducer";
import Auth from "../reducer/AuthReducer";

const store = createStore(
  combineReducers({
    Drawer,
    Entry,
    Webcam,
    Staff,
    Progress,
    Status,
    StaffList,
    Auth,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
