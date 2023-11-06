import { useEffect, useState } from 'react';
import './Pagination.css';

type PaginationProps = {
  count: number | null;
  itemsLimit: number;
  currentPage: number;
  changePage: (page: number) => void;
};

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
      setAllPages(
        (new Array(maxPages) as number[]).fill(0).map((_, index) => index + 1)
      );
    }
  }, [props.count, props.itemsLimit]);

  return (
    <div className="pagination__container">
      {props.currentPage > 1 ? (
        <button
          className="pagination__btn"
          onClick={() => {
            props.changePage(props.currentPage - 1);
          }}
        >
          &#60;
        </button>
      ) : (
        <button className="pagination__btn pagination-btn_disabled">
          &#60;
        </button>
      )}
      {allPages &&
        allPages.map((page) => {
          return props.currentPage === page ? (
            <button
              className="pagination__btn pagination-btn-active"
              disabled={true}
              key={`page-${page}`}
            >
              {page}
            </button>
          ) : page === 1 ||
            page === totalPages ||
            (props.currentPage < page + 2 && props.currentPage > page - 2) ||
            (page === props.currentPage + 2 && page - 2 === 1) ||
            (page === props.currentPage - 2 && page + 2 === totalPages) ? (
            <button
              className="pagination__btn"
              key={`page-${page}`}
              onClick={() => {
                props.changePage(page);
              }}
            >
              {page}
            </button>
          ) : page - 1 === 1 || page + 1 === totalPages ? (
            <button className="pagination__btn" key={`page-${page}`}>
              ...
            </button>
          ) : null;
        })}
      {totalPages && props.currentPage < totalPages ? (
        <button
          className="pagination__btn"
          onClick={() => {
            props.changePage(props.currentPage + 1);
          }}
        >
          &#62;
        </button>
      ) : (
        <button className="pagination__btn pagination-btn_disabled">
          &#62;
        </button>
      )}
    </div>
  );
};

export default Pagination;
