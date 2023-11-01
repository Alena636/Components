import { CardProps } from '../../types';
import './Card.css';

export default function CardElement(props: CardProps): JSX.Element {
  const { people } = props;
  return (
    <div className="card">
      <h4 className="card__name">{people.name}</h4>
      <div className="card__description">
        <p className="card__height">
          <span className="bold">Height: </span>
          {people.height}
        </p>
        <p className="card__mass">
          <span className="bold">Mass: </span>
          {people.mass}
        </p>
        <p className="card__gender">
          <span className="bold">Gender: </span>
          {people.gender}
        </p>
      </div>
    </div>
  );
}
