import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../app/Redux/Store/Store';
import Card from '../../widgets/Card/Card';
import './MainPage.css';

const MainPage: React.FC = () => {
  const { formTiles, newFormAdded } = useSelector(
    (state: RootState) => state.form
  );
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list-item">
              <Link to="/uncontrolled_form">Uncontrolled Form</Link>
            </li>
            <li className="header__nav-list-item">
              <Link to="/react_hook_form">React Hook Form</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="cards">
          {formTiles.length ? (
            formTiles.map((card, ind) => (
              <Card
                key={ind}
                card={card}
                newFormAdded={newFormAdded && ind === 0 ? newFormAdded : false}
              />
            ))
          ) : (
            <h3 className="title">No data. Please submit the form</h3>
          )}
        </section>
      </main>
    </>
  );
};

export default MainPage;
