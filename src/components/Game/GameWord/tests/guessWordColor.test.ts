import { pallete } from "../../../../misc/pallete";
import { guessWordColor } from "../GameWord.utils";

describe("returning color on base of given props", () => {
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
    "checking if returned color is correct",
    ({ isCorrect, isWrong, isClicked, expectedColor }) => {
      //when
      const color = guessWordColor(isCorrect, isWrong, isClicked);
      //then
      expect(color).toStrictEqual(expectedColor);
    }
  );
});
