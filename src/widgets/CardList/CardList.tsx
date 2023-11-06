import Cards, { Character } from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import './CardList.css';

type SearchResultsProps = {
  searchResults: Character[];
  loading: boolean;
  currentPage: number;
  count: number | null;
  itemsLimit: number;
  changePage: (page: number) => void;
};

const CardList = (props: SearchResultsProps): JSX.Element => {
  return (
    <section className="cards__wrapper">
      {!props.loading ? (
        <>
          <Cards characters={props.searchResults} />
          <Pagination
            count={props.count}
            itemsLimit={props.itemsLimit}
            currentPage={props.currentPage}
            changePage={props.changePage}
          />
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default CardList;
