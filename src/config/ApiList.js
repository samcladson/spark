import axios from "axios";
import apis from "./ApiConfig";

export const staffList = async () => {
  try {
    axios
      .get(apis.url + "getNames")
      .then((res) => {
        if (res.status === 200) {
          return res.data.staffName;
        }
      })
      .catch((err) => {
        return err;
      });
  } catch (err) {
    return err;
  }
};
