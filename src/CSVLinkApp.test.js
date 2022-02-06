import { render, screen, fireEvent } from "@testing-library/react";
import CSVLinkApp from "./CSVLinkApp";

test("renders learn react link", () => {
  render(<CSVLinkApp />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
test("click button link", () => {
  render(<CSVLinkApp />);
  const btn = screen.getByTestId("dd");
  fireEvent.click(btn);
  expect(btn).toBeEnabled();
});
