import { maximumWidth, minimumWidth } from "./GameWord.const";
import { pallete } from "../../../misc/pallete";

export const guessWordColor = (
  isCorrect: boolean,
  isWrong: boolean,
  isClicked: boolean
) => {
  if (isCorrect) {
    return pallete.LightGreen;
  } else if (isWrong) {
    return pallete.DarkRed;
  } else if (isClicked) {
    return pallete.DarkGray;
  } else return pallete.Black;
};

export const generateRandomWidth = () => {
  return Math.floor(Math.random() * maximumWidth) + minimumWidth;
};
