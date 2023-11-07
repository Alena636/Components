import { useEffect, useState } from 'react';
import { PaginationProps } from '../../types';
import { PaginationButton } from './PaginationButton';
import './Pagination.css';

type DotsButtonProps = {
  ind: string;
};

const DotsButton = (props: DotsButtonProps): JSX.Element => (
  <button className="pagination__btn" key={props.ind}>
    ...
  </button>
);

const Pagination = (props: PaginationProps): JSX.Element => {
  const [allPages, setAllPages] = useState<number[] | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  useEffect(() => {
    let maxPages: number | undefined;

    if (props.count) {
      maxPages = Math.ceil(props.count / props.itemsLimit);
    }

    if (maxPages) {
      setTotalPages(maxPages);
      setAllPages(Array.from({ length: maxPages }, (_, index) => index + 1));
    }
  }, [props.count, props.itemsLimit]);

  const renderPageButtons = () => {
    if (!allPages) return null;

    return allPages.map((page, index) => {
      if (props.currentPage === page) {
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
        (props.currentPage < page + 2 && props.currentPage > page - 2)
      ) {
        return (
          <PaginationButton
            key={`page-${page}`}
            label={page}
            isActive={false}
            onClick={() => props.changePage(page)}
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
        isActive={props.currentPage === 1}
        onClick={() => props.changePage(props.currentPage - 1)}
      />
      {renderPageButtons()}
      <PaginationButton
        label="&#62;"
        isActive={props.currentPage === totalPages}
        onClick={() => props.changePage(props.currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
