import { checkAnswers } from "../Game.utils";

describe("checking users answers function", () => {
  test.each([
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
      const { userCorrectAnswers, userWrongAnswers } = checkAnswers(
        usersAnswers,
        correctAnswers
      );
      expect(userCorrectAnswers).toStrictEqual(expectedGoodAnswers);
      expect(userWrongAnswers).toStrictEqual(expectedBadAnswers);
    }
  );
});
