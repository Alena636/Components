import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <h2 className="page__title">Page not found</h2>
      <Link
        to="/"
      >
        Back to Main
      </Link>
    </>
  );
}
export default ErrorPage;