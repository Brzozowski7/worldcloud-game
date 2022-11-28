import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/test-utils";
import ResultScreen from "./ResultScreen";

const mockedScore = 5;
const mockedUsername = "TestUser";

describe("GameWord component tests", () => {
  test("renders points correctly", () => {
    renderWithProviders(<ResultScreen />, {
      preloadedState: {
        game: {
          gameOn: false,
          username: mockedUsername,
          score: mockedScore,
        },
      },
    });
    expect(screen.getByText(`${mockedScore} points`)).toBeInTheDocument();
  });
  test("renders nickname correctly", () => {
    renderWithProviders(<ResultScreen />, {
      preloadedState: {
        game: {
          gameOn: false,
          username: mockedUsername,
          score: mockedScore,
        },
      },
    });
    expect(
      screen.getByText(`Congratulations, ${mockedUsername}! Your score:`)
    ).toBeInTheDocument();
  });
});
