import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import UncontrolledForm from '../../pages/UncontrolledForm/UncontrolledForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/uncontrolled_form" element={<UncontrolledForm />} />
      {/* <Route path="/react_hook_form" element={<ReactHookForm />} />
      <Route path="*" element={<ErrorPage />} /> */}
    </>
  )
);

export default router;
