import { CardProps } from '../../types';
import './Card.css';

export default function CardElement(props: CardProps): JSX.Element {
  const { name, height, weight, sprites } = props;
  return (
    <div className="card">
      <h4 className="card__name">{name}</h4>
      <div className="card__description">
        <p className="card__height">
          <span className="bold">Height: </span>
          {height}
        </p>
        <p className="card__mass">
          <span className="bold">Mass: </span>
          {weight}
        </p>
        <p className="card__gender">
          <span className="bold">Gender: </span>
          {sprites.front_default}
        </p>
      </div>
    </div>
  );
}
