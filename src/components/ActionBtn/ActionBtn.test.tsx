import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionBtn from "./ActionBtn";

const mockedFn = jest.fn();

describe("UserTodos tests", () => {
  test("renders button correctly", () => {
    render(<ActionBtn onClick={mockedFn}>Test</ActionBtn>);
    expect(screen.getByTestId("actionBtn")).toBeInTheDocument();
  });
  test("calls onClick function", () => {
    render(<ActionBtn onClick={mockedFn}>Test</ActionBtn>);
    const btnEl = screen.getByTestId("actionBtn");
    fireEvent.click(btnEl);
    expect(mockedFn).toBeCalled();
  });
  test("proper text is displayed", () => {
    render(<ActionBtn onClick={mockedFn}>Test</ActionBtn>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
