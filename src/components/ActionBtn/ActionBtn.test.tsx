import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionBtn from "./ActionBtn";

const mockedFn = jest.fn();

describe("UserTodos tests", () => {
  test("renders button correctly", () => {
    //when
    render(<ActionBtn onClick={mockedFn}>Test</ActionBtn>);
    //then
    expect(screen.getByTestId("actionBtn")).toBeInTheDocument();
  });
  test("calls onClick function", () => {
    //when
    render(<ActionBtn onClick={mockedFn}>Test</ActionBtn>);
    const btnEl = screen.getByTestId("actionBtn");
    fireEvent.click(btnEl);
    //then
    expect(mockedFn).toBeCalled();
  });
  test("proper text is displayed", () => {
    //when
    render(<ActionBtn onClick={mockedFn}>Test</ActionBtn>);
    //then
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
