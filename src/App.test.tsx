import { render, screen } from '@testing-library/react';
import React from "react";
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App/>);

    screen.debug();

    // check if App components renders headline
  });
});