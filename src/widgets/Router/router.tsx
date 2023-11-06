import MainPage from '../../pages/Main/Main';
import ErrorBoundary from '../../widgets/ErrorBoundary/ErrorBoundary';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Route as RoutePath } from '../../utils/routePath';
import { getCharacter } from '../../api/Api';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={RoutePath.Home}
      element={<MainPage />}
      errorElement={<ErrorBoundary />}
    >
      <Route
        path=":id"
        // element={<Details />}
        loader={async ({ params }) => {
          return getCharacter(params);
        }}
        errorElement={<ErrorBoundary />}
      ></Route>
    </Route>
  )
);
