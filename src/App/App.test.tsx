import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { renderWithProviders } from "../utils/test-utils";

describe("App tests", () => {
  test("renders WelcomeScreen component", () => {
    renderWithProviders(<App />, {
      preloadedState: {
        game: {
          gameOn: true,
          username: "",
          score: undefined,
        },
      },
    });
    expect(screen.getByTestId("welcomeScreenWrapper")).toBeInTheDocument();
  });
  test("renders Game component", () => {
    renderWithProviders(<App />, {
      preloadedState: {
        game: {
          gameOn: true,
          username: "Test",
          score: undefined,
        },
      },
    });
    expect(screen.getByTestId("gameWrapper")).toBeInTheDocument();
  });
  test("renders ResultScreen component", () => {
    renderWithProviders(<App />, {
      preloadedState: {
        game: {
          gameOn: false,
          username: "Test",
          score: 3,
        },
      },
    });
    expect(screen.getByTestId("resultScreenWrapper")).toBeInTheDocument();
  });
});
