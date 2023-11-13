import IconDarthVader from '../../assets/darth_icon.png';
import './NotFound.css';

const NotFound = (): JSX.Element => {
  return (
    <section className="not-found__container">
      <div className="not-found__title">
        <p className="not-found__item">4</p>
        <img
          className="not-found__item-img"
          src={IconDarthVader}
          alt="IconDarthVader"
        />
        <p className="not-found__item">4</p>
      </div>
      <p className="not-found__description">Welcome to the dark side!</p>
      <button className="not-found__back-btn">Go back</button>
    </section>
  );
};

export default NotFound;
