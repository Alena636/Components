import { useState, useEffect } from 'react';
import CardList from '../../widgets/CardList/CardList';
import { searchCharacters } from '../../api/Api';
import { Character } from '../../types/index';
import SearchForm from '../../widgets/SearchForm/SearchForm';
import {
  Outlet,
  useNavigate,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import { ItemsLimit, SearchPeopleResponse } from '../../types/index';
import { Route } from '../../utils/routePath';
import Loader from '../../widgets/Loader/Loader';
import './Main.css';

const FIRST_PAGE = 1;

function MainPage(): JSX.Element {
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [searchString, setSearchString] = useState<string>('');
  const [userInputString, setUserInputString] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);
  const [count, setCount] = useState<number | null>(null);
  const [itemsLimit, setItemsLimit] = useState<number>(
    ItemsLimit.TenItemsPerPage
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const getSearchResults = async (
    searchTerm: string,
    pageQuery: number = FIRST_PAGE,
    changedLimit?: ItemsLimit
  ) => {
    setLoading(true);

    try {
      let resp: SearchPeopleResponse | null;
      if (
        changedLimit ||
        changedLimit === ItemsLimit.FiveItemsPerPage ||
        (!changedLimit && itemsLimit === ItemsLimit.FiveItemsPerPage)
      ) {
        if (changedLimit) {
          resp = await searchCharacters(searchTerm, FIRST_PAGE);
          if (resp) {
            setSearchResults(resp.results.slice(0, changedLimit));
          }
        } else {
          resp = await searchCharacters(searchTerm, Math.ceil(pageQuery / 2));

          if (resp) {
            pageQuery % 2
              ? setSearchResults(
                  resp.results.slice(0, changedLimit ?? itemsLimit)
                )
              : setSearchResults(
                  resp.results.slice(changedLimit ?? itemsLimit)
                );
          }
        }
      } else {
        resp = await searchCharacters(searchTerm, pageQuery);
        if (resp) {
          setSearchResults(resp.results);
        }
      }
      if (resp) {
        setCount(resp.count);
      }

      if (changedLimit) {
        setItemsLimit(changedLimit);
        setCurrentPage(FIRST_PAGE);
      } else {
        setCurrentPage(pageQuery ?? FIRST_PAGE);
      }

      setSearchParams(
        `page=${pageQuery ?? FIRST_PAGE}&limit=${changedLimit ?? itemsLimit}`
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    const userSearchTerm = userInputString.trim();

    if (searchString === userSearchTerm) return;

    setSearchString(userSearchTerm);
    console.log(searchString);
    localStorage.setItem('value', userSearchTerm);

    getSearchResults(userSearchTerm);
  };

  const loadInitialData = async () => {
    const storedSearchString = localStorage.getItem('value') || '';

    if (storedSearchString) {
      setSearchString(storedSearchString);
      setUserInputString(storedSearchString);
    }

    getSearchResults(storedSearchString ? storedSearchString : searchString);
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    navigate(Route.Home);
    setItemsLimit(+event.target.value);
    getSearchResults(searchString, FIRST_PAGE, +event.target.value);
  };

  const changePage = (page: number): void => {
    if (currentPage !== page) getSearchResults(searchString, page);
  };

  return (
    <div className="main__container">
      <h1 className="main__title">Star Wars: People</h1>
      <SearchForm
        userInputString={userInputString}
        setUserInputString={setUserInputString}
        handleSearch={handleSearch}
        setItemsLimit={setItemsLimit}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />
      {navigation.state === 'loading' ? (
        <div className="loader__container">
          <Loader />
        </div>
      ) : (
        <>
          <CardList
            searchResults={searchResults}
            currentPage={currentPage}
            count={count}
            itemsLimit={itemsLimit}
            loading={loading}
            changePage={changePage}
          />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default MainPage;
