import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardDescription from '../CardDescription/CardDescription';
import { Route } from '../../utils/routePath';
import './Details.css';

const Details = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const closeDetails = () => {
    setIsVisible(false);
    navigateToHome();
    updateSearchParams();
  };

  const navigateToHome = () => {
    navigate(Route.Home);
  };

  const updateSearchParams = () => {
    setSearchParams(localStorage.getItem('value') || '');
  };

  return (
    <>
      {isVisible && (
        <>
          <div className="details__overlay" onClick={closeDetails} />
          <section className="details__container">
            <div className="description">
              <button className="description__close" onClick={closeDetails}>
                x
              </button>
              <CardDescription />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Details;
