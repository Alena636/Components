import Cards from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import { SearchResultsProps } from '../../types';
import './CardList.css';

const CardList: React.FC<SearchResultsProps> = ({
  loading,
  searchResults,
  count,
  itemsLimit,
  currentPage,
  changePage,
}) => {
  const renderContent = () => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <>
          <Cards characters={searchResults} />
          <Pagination
            count={count}
            itemsLimit={itemsLimit}
            currentPage={currentPage}
            changePage={changePage}
          />
        </>
      );
    }
  };

  return <section className="cards__wrapper">{renderContent()}</section>;
};

export default CardList;
