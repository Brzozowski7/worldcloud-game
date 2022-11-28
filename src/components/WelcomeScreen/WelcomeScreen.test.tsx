import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/test-utils";
import WelcomeScreen from "./WelcomeScreen";

describe("GameWord component tests", () => {
  test("renders heading correctly", () => {
    renderWithProviders(<WelcomeScreen />);
    expect(screen.getByText("Worldcloud game")).toBeInTheDocument();
  });
  test("renders play btn correctly", () => {
    renderWithProviders(<WelcomeScreen />);
    expect(screen.getByTestId("actionBtn")).toBeInTheDocument();
    expect(screen.getByTestId("actionBtn")).toHaveTextContent("play");
  });
  test("renders usernameInput correctly", () => {
    renderWithProviders(<WelcomeScreen />);
    expect(screen.getByTestId("usernameInput")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your nickname here...")
    ).toBeInTheDocument();
  });
});
