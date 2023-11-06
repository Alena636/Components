import { NavLink, useSearchParams } from 'react-router-dom';
import { Character } from '../../types';
import './Card.css';

type CharactersProps = {
  characters: Character[];
};

const getCharacterId = (url: string) => {
  const arr = url.split('/');
  return arr[arr.length - 2];
};

const Cards = (props: CharactersProps): JSX.Element => {
  const [searchParams] = useSearchParams();

  return (
    <ul className="cards__container">
      {props.characters?.length > 0 ? (
        props.characters.map((character: Character) => (
          <NavLink
            className="link"
            to={`${getCharacterId(character.url)}`}
            key={getCharacterId(character.url)}
            onClick={() => {
              localStorage.setItem('value', searchParams.toString());
            }}
          >
            <div className="cards">
              <div key={character.name} className="card">
                <h3 className="character__name">{character.name}</h3>
              </div>
            </div>
          </NavLink>
        ))
      ) : (
        <h3>No results</h3>
      )}
    </ul>
  );
};

export default Cards;
