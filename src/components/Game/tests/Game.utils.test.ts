import { checkScore, checkAnswers, capitalizeFirstLetter } from "../Game.utils";

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

describe("checking users answers function", () => {
  test.each([
    //given
    {
      usersAnswers: ["red", "blue", "car"],
      correctAnswers: ["red", "blue", "green"],
      expectedGoodAnswers: ["red", "blue"],
      expectedBadAnswers: ["car"],
    },
    {
      usersAnswers: ["car", "train", "plane", "bike"],
      correctAnswers: ["car", "train", "plane", "bike"],
      expectedGoodAnswers: ["car", "train", "plane", "bike"],
      expectedBadAnswers: [],
    },
    {
      usersAnswers: ["tomato", "apple", "banana", "plum", "pineapple"],
      correctAnswers: ["red", "blue", "green"],
      expectedGoodAnswers: [],
      expectedBadAnswers: ["tomato", "apple", "banana", "plum", "pineapple"],
    },
    {
      usersAnswers: [],
      correctAnswers: ["red", "blue", "green"],
      expectedGoodAnswers: [],
      expectedBadAnswers: [],
    },
  ])(
    "checking if correct arrays are returned",
    ({
      usersAnswers,
      correctAnswers,
      expectedGoodAnswers,
      expectedBadAnswers,
    }) => {
      //when
      const { userCorrectAnswers, userWrongAnswers } = checkAnswers(
        usersAnswers,
        correctAnswers
      );
      //then
      expect(userCorrectAnswers).toStrictEqual(expectedGoodAnswers);
      expect(userWrongAnswers).toStrictEqual(expectedBadAnswers);
    }
  );
});

describe("capitalizing first letter function", () => {
  test.each([
    //given
    {
      input: "result",
      expected: "Result",
    },
    {
      input: "select Vegetables",
      expected: "Select Vegetables",
    },
    {
      input: "select cars",
      expected: "Select cars",
    },
    {
      input: "Select cars",
      expected: "Select cars",
    },
    {
      input: "RESULT",
      expected: "RESULT",
    },
  ])(
    "checking if first letter of string is capitalized",
    ({ input, expected }) => {
      //then
      expect(capitalizeFirstLetter(input)).toStrictEqual(expected);
    }
  );
});
