import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';
import '@testing-library/jest-dom';

const mockedProps = {
  count: 20,
  itemsLimit: 5,
  currentPage: 2,
  changePage: jest.fn(),
};

describe('Pagination Component', () => {
  it('renders correct number of page buttons and dots', () => {
    render(<Pagination {...mockedProps} />);
    const pageButtons = screen.getAllByRole('button', { name: /[0-9]/ });
    const dotsButtons = screen.getAllByRole('button', { name: '...' });

    expect(pageButtons).toHaveLength(4);
    expect(dotsButtons).toHaveLength(1);
  });

  it('calls changePage function when a page button is clicked', () => {
    render(<Pagination {...mockedProps} />);
    const pageButton = screen.getByText('3');
    fireEvent.click(pageButton);

    expect(mockedProps.changePage).toHaveBeenCalledWith(3);
  });

  it('calls changePage function when previous button is clicked', () => {
    render(<Pagination {...mockedProps} />);
    const previousButton = screen.getByLabelText('<');
    fireEvent.click(previousButton);

    expect(mockedProps.changePage).toHaveBeenCalledWith(1);
  });

  it('calls changePage function when next button is clicked', () => {
    render(<Pagination {...mockedProps} />);
    const nextButton = screen.getByLabelText('>');
    fireEvent.click(nextButton);

    expect(mockedProps.changePage).toHaveBeenCalledWith(3);
  });
});
