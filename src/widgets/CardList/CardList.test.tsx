import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import '@testing-library/jest-dom';

const mockedProps = {
  loading: false,
  searchResults: [],
  count: 10,
  itemsLimit: 5,
  currentPage: 1,
  changePage: jest.fn(),
};

describe('CardList Component', () => {
  it('renders Loader when loading prop is true', () => {
    const loadingProps = { ...mockedProps, loading: true };
    render(<CardList {...loadingProps} />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('renders Cards and Pagination when loading prop is false', () => {
    render(<CardList {...mockedProps} />);
    const cardsElement = screen.getByTestId('cards');
    const paginationElement = screen.getByTestId('pagination');

    expect(cardsElement).toBeInTheDocument();
    expect(paginationElement).toBeInTheDocument();
  });

  it('calls changePage function when a page is clicked', () => {
    render(<CardList {...mockedProps} />);
    const pageButton = screen.getByText('2');

    expect(mockedProps.changePage).toHaveBeenCalledWith(2);
  });
});
