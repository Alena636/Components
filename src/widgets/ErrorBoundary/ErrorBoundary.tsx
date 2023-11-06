import './ErrorBoundary.css';

export default function ErrorBoundary(): JSX.Element {
  return (
    <>
      <h2 className="error">
        Something went wrong.
        <br />
        Reload the page
      </h2>
    </>
  );
}
