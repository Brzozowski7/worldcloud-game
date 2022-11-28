import { checkScore } from "../Game.utils";

describe("checking user's score on base of selected answers", () => {
  test.each([
    //given
    {
      correctAnswers: 3,
      wrongAnswers: 2,
      allGoodAnswers: 3,
      expectedScore: 4,
    },
    {
      correctAnswers: 3,
      wrongAnswers: 6,
      allGoodAnswers: 3,
      expectedScore: 0,
    },
    {
      correctAnswers: 0,
      wrongAnswers: 4,
      allGoodAnswers: 4,
      expectedScore: -8,
    },
    {
      correctAnswers: 3,
      wrongAnswers: 0,
      allGoodAnswers: 3,
      expectedScore: 6,
    },
    {
      correctAnswers: 0,
      wrongAnswers: 0,
      allGoodAnswers: 4,
      expectedScore: -4,
    },
  ])(
    "checking if score is correct",
    ({ correctAnswers, wrongAnswers, allGoodAnswers, expectedScore }) => {
      //then
      expect(
        checkScore(correctAnswers, wrongAnswers, allGoodAnswers)
      ).toStrictEqual(expectedScore);
    }
  );
});
