import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Game from "./Game";
import { renderWithProviders } from "../../utils/test-utils";

const mockedWords = {
  words: {
    question: "Select vegetables",
    all_words: ["pineapple", "tomato", "potato", "carrot"],
    good_words: ["tomato", "potato", "carrot"],
  },
  loading: false,
  error: false,
};

jest.mock("./useGetWords", () => ({
  __esModule: true,
  default: () => mockedWords,
}));

describe("Game component tests", () => {
  test("renders question", () => {
    renderWithProviders(<Game />);
    expect(screen.getByText(mockedWords.words.question)).toBeInTheDocument();
  });

  test("renders all words", () => {
    renderWithProviders(<Game />);
    mockedWords.words.all_words.map((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test("renders checkBtn", () => {
    renderWithProviders(<Game />);
    expect(screen.getByText("check answers")).toBeInTheDocument();
  });

  test("renders finishBtn", () => {
    renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          gameOn: false,
          username: "testUser",
          score: 0,
        },
      },
    });
    expect(screen.getByText("finish game")).toBeInTheDocument();
  });
});
