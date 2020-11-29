import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders every unique type from data only once", () => {
  it("should render 'cat' only once", () => {
    render(<App />);
    const typeElement = screen.getAllByText("cat");
    expect(typeElement.length).toBe(1);
  });

  it("should render 'dog' only once", () => {
    render(<App />);
    const typeElement = screen.getAllByText("dog");
    expect(typeElement.length).toBe(1);
  });

  it("should render 'mouse' only once", () => {
    render(<App />);
    const typeElement = screen.getAllByText("mouse");
    expect(typeElement.length).toBe(1);
  });
});
