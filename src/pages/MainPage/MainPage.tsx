import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
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
        <section className="personal_data">
          <img className="personal_data__image" src="" alt="form_img" />
          <ul>
            <li className="personal_data__list-item">Name:</li>
            <li className="personal_data__list-item">Age:</li>
            <li className="personal_data__list-item">Email:</li>
            <li className="personal_data__list-item">Password:</li>
            <li className="personal_data__list-item">Gender:</li>
            <li className="personal_data__list-item">Country:</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default MainPage;
