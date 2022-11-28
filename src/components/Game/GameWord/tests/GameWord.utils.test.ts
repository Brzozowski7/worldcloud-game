import { generateRandomWidth, guessWordColor } from "../GameWord.utils";
import { maximumWidth, minimumWidth } from "../GameWord.const";
import { pallete } from "../../../../misc/pallete";

describe("generating number in range of values declared in GameWord.const.ts", () => {
  test("testing if generated number is within range", () => {
    expect(generateRandomWidth()).toBeLessThanOrEqual(maximumWidth);
    expect(generateRandomWidth()).toBeGreaterThanOrEqual(minimumWidth);
  });
});

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
