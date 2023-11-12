import { CardDetailProps } from '../../types';

export const CardDetail: React.FC<CardDetailProps> = ({ label, value }) => (
  <div>
    <strong>{label}:</strong> {value}
  </div>
);
