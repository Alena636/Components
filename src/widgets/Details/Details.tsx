import { useNavigate } from 'react-router';
import CardDescription from '../CardDescription/CardDescription';
import { useState } from 'react';
import { Route } from '../../utils/routePath';
import { useSearchParams } from 'react-router-dom';
import './Details.css';

const Details = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const closeHandler = () => {
    setIsVisible(false);
    navigate(Route.Home);
    setSearchParams(localStorage.getItem('value') || '');
  };

  return (
    <>
      {isVisible && (
        <>
          <div className="details__left" onClick={closeHandler} />
          <section className="details__container">
            <div className="description">
              <button className="description__close" onClick={closeHandler}>
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
