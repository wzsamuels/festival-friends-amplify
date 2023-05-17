import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

// Add this to your test setup file or at the beginning of your test file
if (typeof window.URL.createObjectURL === "undefined") {
  Object.defineProperty(window.URL, "createObjectURL", {
    value: vi.fn(),
  });
}

afterEach(() => {
  cleanup();
});
