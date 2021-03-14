import React from "react";
import { render, screen } from "@testing-library/react";
import AllSalons from "./index";

test("renders learn react link", () => {
  render(<AllSalons />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
