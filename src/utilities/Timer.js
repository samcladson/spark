import { retake } from "./VideoConfig";
import { SaveEntry } from "../utilities/SaveEntry";

var loop = null;
var delay = null;

export const countdown = (setCount, staff, entry) => {
  let count = 5;
  loop = setInterval(() => {
    count -= 1;
    setCount(count);
  }, 1000);

  delay = setTimeout(() => {
    retake("normal");
    clearInterval(loop);
    SaveEntry(staff, entry);
  }, 5500);
};

export const stopCountDown = () => {
  clearInterval(loop);
  clearTimeout(delay);
};
