import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { renderWithProviders } from "../utils/test-utils";

describe("App tests", () => {
  test("renders WelcomeScreen component", () => {
    //given
    const gameState = { gameOn: true, username: "", score: undefined };
    //when
    renderWithProviders(<App />, {
      preloadedState: {
        game: gameState,
      },
    });
    //then
    expect(screen.getByTestId("welcomeScreenWrapper")).toBeInTheDocument();
  });
  test("renders Game component", () => {
    //given
    const gameState = { gameOn: true, username: "Test", score: undefined };
    //when
    renderWithProviders(<App />, {
      preloadedState: {
        game: gameState,
      },
    });
    //then
    expect(screen.getByTestId("gameWrapper")).toBeInTheDocument();
  });
  test("renders ResultScreen component", () => {
    //given
    const gameState = {
      gameOn: false,
      username: "Test",
      score: 3,
    };
    //when
    renderWithProviders(<App />, {
      preloadedState: {
        game: gameState,
      },
    });
    //then
    expect(screen.getByTestId("resultScreenWrapper")).toBeInTheDocument();
  });
});
