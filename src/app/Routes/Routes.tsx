import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import UncontrolledForm from '../../pages/UncontrolledForm/UncontrolledForm';
import HookForm from '../../pages/ReactHookForm/ReactHookForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/uncontrolled_form" element={<UncontrolledForm />} />
      <Route path="/react_hook_form" element={<HookForm />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </>
  )
);

export default router;
