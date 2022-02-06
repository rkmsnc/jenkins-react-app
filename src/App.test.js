import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

// test("Disabled", () => {
//   render(<App />);
//   const button = screen.getByTestId("button");
//   expect(button).toBeDisabled();
//   const button2 = screen.getByTestId("button2");
//   expect(button2).toBeEnabled();
//   const empty = screen.getByTestId("empty");
//   expect(empty).toBeEmptyDOMElement();
// });
