import { NavLink, useSearchParams } from 'react-router-dom';
import { Character, CharactersProps } from '../../types';
import { getCharacterId } from '../../utils/getCharacterId';
import './Card.css';

const Cards: React.FC<CharactersProps> = ({ characters }) => {
  const [searchParams] = useSearchParams();

  const handleClick = () => {
    localStorage.setItem('searchUrl', searchParams.toString());
  };

  return (
    <ul className="cards__container">
      {characters?.length > 0 ? (
        characters.map((character: Character) => (
          <NavLink
            className="link"
            to={`${getCharacterId(character.url)}`}
            key={getCharacterId(character.url)}
            onClick={handleClick}
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
