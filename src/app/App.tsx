import { RouterProvider } from 'react-router-dom';
import { router } from '../widgets/Router/router';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
