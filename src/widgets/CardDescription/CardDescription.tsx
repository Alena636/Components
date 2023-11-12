import { useLoaderData } from 'react-router';
import { Character } from '../../types';
import { CardDetail } from './CardDetail';
import './CardDescription.css';

const CardDescription: React.FC = () => {
  const character = useLoaderData() as Character;

  const displayMass =
    character.mass !== 'unknown' ? `${character.mass} kg` : character.mass;

  return (
    <>
      <h3 className="card__name">{character.name}</h3>
      <div className="card__description">
        <CardDetail label="Height" value={`${character.height} cm`} />
        <CardDetail label="Mass" value={displayMass} />
        <CardDetail label="Hair color" value={character.hair_color} />
        <CardDetail label="Skin color" value={character.skin_color} />
        <CardDetail label="Eye color" value={character.eye_color} />
        <CardDetail label="Birth year" value={character.birth_year} />
        <CardDetail label="Gender" value={character.gender} />
      </div>
    </>
  );
};

export default CardDescription;
