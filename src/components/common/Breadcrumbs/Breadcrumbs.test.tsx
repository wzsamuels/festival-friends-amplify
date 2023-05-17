// Breadcrumbs.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs component", () => {
  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "Category", url: "/category" },
    { label: "Product", url: "/category/product" },
  ];

  test("renders breadcrumb items correctly", () => {
    render(<Breadcrumbs items={breadcrumbItems} />);

    breadcrumbItems.forEach((item) => {
      const breadcrumbItem = screen.getByText(item.label);
      expect(breadcrumbItem).toBeInTheDocument();
      expect(breadcrumbItem).toHaveAttribute("href", item.url);
    });
  });

  test("styles the last item as active", () => {
    render(<Breadcrumbs items={breadcrumbItems} />);
    const lastItem = breadcrumbItems[breadcrumbItems.length - 1];
    const activeBreadcrumbItem = screen.getByText(lastItem.label);
    expect(activeBreadcrumbItem).toHaveClass("text-gray-900 font-bold");
  });

  test("renders separator between breadcrumb items", () => {
    render(<Breadcrumbs items={breadcrumbItems} />);
    const separators = screen.getAllByTestId("separator");
    expect(separators.length).toBe(breadcrumbItems.length - 1);
  });
});
