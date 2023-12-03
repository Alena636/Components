import { useDispatch } from 'react-redux';
import { setNewFormAdded } from '../../app/Redux/FormSlice';
import { FormData } from '../../types/index';
import '../Card/Card.css';

interface CardProps {
  card: FormData;
  newFormAdded: boolean;
}

function Card(props: CardProps) {
  const { card, newFormAdded } = props;

  const dispatch = useDispatch();

  if (newFormAdded) {
    setTimeout(() => dispatch(setNewFormAdded(false)), 2000);
  }

  return (
    <div className={newFormAdded ? 'new_card' : 'card'}>
      <img src={card.image} className="form__img" alt="formImg" />
      <ul>
        <li className="form__list-item">Name: {card.name}</li>
        <li className="form__list-item">Age: {card.age}</li>
        <li className="form__list-item">Email: {card.email}</li>
        <li className="form__list-item">Password: {card.password}</li>
        <li className="form__list-item">Gender: {card.gender}</li>
        <li className="form__list-item">Country: {card.country}</li>
      </ul>
    </div>
  );
}

export default Card;
