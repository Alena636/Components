import { CardDetailProps } from '../../types';

export const CardDetail = (props: CardDetailProps): JSX.Element => (
  <div>
    <strong>{props.label}:</strong> {props.value}
  </div>
);
