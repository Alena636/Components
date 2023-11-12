type PaginationButtonProps = {
  label: string | number;
  isActive: boolean;
  onClick: () => void;
};

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  isActive,
  onClick,
  label,
}) => (
  <button
    className={`pagination__btn ${isActive ? 'pagination-btn-active' : ''}`}
    onClick={onClick}
    disabled={isActive}
  >
    {label}
  </button>
);
