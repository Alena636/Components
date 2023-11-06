type PaginationButtonProps = {
  label: string | number;
  isActive: boolean;
  onClick: () => void;
};

export const PaginationButton = (props: PaginationButtonProps): JSX.Element => (
  <button
    className={`pagination__btn ${
      props.isActive ? 'pagination-btn-active' : ''
    }`}
    onClick={props.onClick}
    disabled={props.isActive}
  >
    {props.label}
  </button>
);
