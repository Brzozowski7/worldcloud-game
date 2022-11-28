import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../../utils/test-utils";
import GameWord from "./GameWord";
import { pallete } from "../../../misc/pallete";

const mockedSetState = jest.fn;
const mockedWord = "test";
const mockedChosenWords = ["red", "blue", "green"];

describe("GameWord component tests", () => {
  test("renders word in initial color", () => {
    //when
    renderWithProviders(
      <GameWord
        word={mockedWord}
        setChosenWords={mockedSetState}
        chosenWords={mockedChosenWords}
        isClicked={false}
        isCorrect={false}
        isWrong={false}
      />
    );

    const element = screen.getByText(mockedWord);
    const styles = getComputedStyle(element);
    //then
    expect(styles.color).toBe(pallete.Black);
    expect(screen.getByText(mockedWord)).toBeInTheDocument();
  });
  test("changes color on isClicked props change", () => {
    //when
    renderWithProviders(
      <GameWord
        word={mockedWord}
        setChosenWords={mockedSetState}
        chosenWords={mockedChosenWords}
        isClicked={true}
        isCorrect={false}
        isWrong={false}
      />
    );
    //then
    const element = screen.getByText(mockedWord);
    const styles = getComputedStyle(element);
    expect(styles.color).toBe(pallete.DarkGray);
    expect(screen.getByText(mockedWord)).toBeInTheDocument();
  });
  test("displays good when answer is correct and changes color to green", () => {
    //when
    renderWithProviders(
      <GameWord
        word={mockedWord}
        setChosenWords={mockedSetState}
        chosenWords={mockedChosenWords}
        isClicked={true}
        isCorrect={true}
        isWrong={false}
      />
    );

    const element = screen.getByText(mockedWord);
    const styles = getComputedStyle(element);
    //then
    expect(styles.color).toBe(pallete.LightGreen);
    expect(screen.getByText(mockedWord)).toBeInTheDocument();
    expect(screen.getByText("Good")).toBeInTheDocument();
  });
  test("displays bad when answer is wrong and changes color to red", () => {
    //when
    renderWithProviders(
      <GameWord
        word={mockedWord}
        setChosenWords={mockedSetState}
        chosenWords={mockedChosenWords}
        isClicked={true}
        isCorrect={false}
        isWrong={true}
      />
    );

    const element = screen.getByText(mockedWord);
    const styles = getComputedStyle(element);
    //then
    expect(styles.color).toBe(pallete.DarkRed);
    expect(screen.getByText(mockedWord)).toBeInTheDocument();
    expect(screen.getByText("Bad")).toBeInTheDocument();
  });
});
