// Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
import {vi} from "vitest";

describe('Button component', () => {
  test('renders button with children', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Custom Class Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /custom class button/i });
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('applies outline variation', () => {
    render(<Button variation="outline">Outline Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /outline button/i });
    expect(buttonElement).toHaveClass('bg-white text-green-950');
  });

  test('applies filled variation', () => {
    render(<Button>Filled Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /filled button/i });
    expect(buttonElement).toHaveClass('bg-green-950 text-white');
  });

  test('handles onClick event', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Event Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /click event button/i });

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
