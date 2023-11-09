import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MainPage from '../../pages/Main/Main';
import ErrorBoundary from '../../widgets/ErrorBoundary/ErrorBoundary';
import { Route as RoutePath } from '../../utils/routePath';
import { getCharacter } from '../../api/Api';
import Details from '../Details/Details';
import NotFound from '../../pages/NotFound/NotFound';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={RoutePath.Home}
      element={<MainPage />}
      errorElement={<ErrorBoundary />}
    >
      <Route
        path=":id"
        element={<Details />}
        loader={async ({ params }) => {
          return getCharacter(params);
        }}
      ></Route>
    </Route>
  )
);
