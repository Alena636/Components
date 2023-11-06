import Cards from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import { SearchResultsProps } from '../../types';
import './CardList.css';

const CardList = (props: SearchResultsProps): JSX.Element => {
  const renderContent = () => {
    if (props.loading) {
      return <Loader />;
    } else {
      return (
        <>
          <Cards characters={props.searchResults} />
          <Pagination
            count={props.count}
            itemsLimit={props.itemsLimit}
            currentPage={props.currentPage}
            changePage={props.changePage}
          />
        </>
      );
    }
  };

  return <section className="cards__wrapper">{renderContent()}</section>;
};

export default CardList;
