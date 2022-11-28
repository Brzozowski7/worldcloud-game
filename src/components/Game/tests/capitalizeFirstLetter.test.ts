import { capitalizeFirstLetter } from "../Game.utils";

describe("capitalizing first letter function", () => {
  test.each([
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
      expect(capitalizeFirstLetter(input)).toStrictEqual(expected);
    }
  );
});
