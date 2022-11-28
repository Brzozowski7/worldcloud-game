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
    //when
    renderWithProviders(<Game />);
    //then
    expect(screen.getByText(mockedWords.words.question)).toBeInTheDocument();
  });

  test("renders all words", () => {
    //when
    renderWithProviders(<Game />);
    //then
    mockedWords.words.all_words.map((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test("renders checkBtn", () => {
    //when
    renderWithProviders(<Game />);
    //then
    expect(screen.getByText("check answers")).toBeInTheDocument();
  });

  test("renders finishBtn", () => {
    //when
    renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          gameOn: false,
          username: "testUser",
          score: 0,
        },
      },
    });
    //then
    expect(screen.getByText("finish game")).toBeInTheDocument();
  });
});
