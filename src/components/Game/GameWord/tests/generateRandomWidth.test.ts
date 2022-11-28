import { generateRandomWidth } from "../GameWord.utils";
import { maximumWidth, minimumWidth } from "../GameWord.const";

describe("generating number in range of values declared in GameWord.const.ts", () => {
  test("testing if generated number is within range", () => {
    expect(generateRandomWidth()).toBeLessThan(maximumWidth);
    expect(generateRandomWidth()).toBeGreaterThan(minimumWidth - 1);
  });
});