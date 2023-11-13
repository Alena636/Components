import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router';
import { Route } from '../../utils/routePath';
import { useSearchParams } from 'react-router-dom';
import '@testing-library/jest-dom';

import Details from './Details';

// Mock useNavigate and useSearchParams
jest.mock('react-router', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useSearchParams: jest.fn(() => [new URLSearchParams(), jest.fn()]),
}));

test('renders Details component and handles close event', () => {
  const { getByTestId, getByText } = render(<Details />);

  // Check that Details component is initially visible
  const detailsContainer = getByTestId('details-container');
  expect(detailsContainer).toBeInTheDocument();

  // Check that the close button is rendered
  const closeButton = getByText(/x/i);
  expect(closeButton).toBeInTheDocument();

  // Simulate a click on the close button
  fireEvent.click(closeButton);

  // Check that the Details component is no longer in the document
  expect(detailsContainer).not.toBeInTheDocument();

  // Check that useNavigate has been called with the correct argument
  expect(useNavigate).toHaveBeenCalledWith(Route.Home);

  // Check that useSearchParams has been called with the correct argument
  expect(useSearchParams).toHaveBeenCalledWith(
    localStorage.getItem('value') || ''
  );
});
