import { useEffect, useState } from 'react';
import { PaginationProps } from '../../types';
import { PaginationButton } from './PaginationButton';
import './Pagination.css';

type DotsButtonProps = {
  ind: string;
};

const DotsButton: React.FC<DotsButtonProps> = ({ ind }) => (
  <button className="pagination__btn" key={ind}>
    ...
  </button>
);

const Pagination: React.FC<PaginationProps> = ({
  count,
  itemsLimit,
  currentPage,
  changePage,
}) => {
  const [allPages, setAllPages] = useState<number[] | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  useEffect(() => {
    let maxPages: number | undefined;

    if (count) {
      maxPages = Math.ceil(count / itemsLimit);
    }

    if (maxPages) {
      setTotalPages(maxPages);
      setAllPages(Array.from({ length: maxPages }, (_, index) => index + 1));
    }
  }, [count, itemsLimit]);

  const renderPageButtons = () => {
    if (!allPages) return null;

    return allPages.map((page, index) => {
      if (currentPage === page) {
        return (
          <PaginationButton
            key={`page-${page}`}
            label={page}
            isActive={true}
            onClick={() => {}}
          />
        );
      } else if (
        page === 1 ||
        page === totalPages ||
        (currentPage < page + 2 && currentPage > page - 2)
      ) {
        return (
          <PaginationButton
            key={`page-${page}`}
            label={page}
            isActive={false}
            onClick={() => changePage(page)}
          />
        );
      } else if (page - 1 === 1 || page + 1 === totalPages) {
        return <DotsButton ind={`page-${page}`} key={index} />;
      } else {
        return null;
      }
    });
  };

  return (
    <div className="pagination__container">
      <PaginationButton
        label="&#60;"
        isActive={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      />
      {renderPageButtons()}
      <PaginationButton
        label="&#62;"
        isActive={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
