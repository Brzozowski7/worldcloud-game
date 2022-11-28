import { pallete } from "../../../../misc/pallete";
import { guessWordColor } from "../GameWord.utils";

describe("checking user's score on base of selected answers", () => {
  test.each([
    //given
    {
      isCorrect: true,
      isWrong: false,
      isClicked: true,
      expectedColor: pallete.LightGreen,
    },
    {
      isCorrect: false,
      isWrong: false,
      isClicked: true,
      expectedColor: pallete.DarkGray,
    },
    {
      isCorrect: false,
      isWrong: true,
      isClicked: true,
      expectedColor: pallete.DarkRed,
    },
    {
      isCorrect: false,
      isWrong: false,
      isClicked: false,
      expectedColor: pallete.Black,
    },
  ])(
    "checking if score is correct",
    ({ isCorrect, isWrong, isClicked, expectedColor }) => {
      //when
      const color = guessWordColor(isCorrect, isWrong, isClicked);
      //then
      expect(color).toStrictEqual(expectedColor);
    }
  );
});
