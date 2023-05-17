// Spinner.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from "./Spinner";

describe("Spinner component", () => {
  test("renders spinner with correct classes", () => {
    render(<Spinner />);
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveClass(
      "w-16 h-16 border-t-4 border-primary-default border-solid rounded-full animate-spin"
    );
  });
});
