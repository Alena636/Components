import React from 'react';
import { ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="error__boundary">
          <h2 className="error">Oops, something went wrong...</h2>
          <button
            type="button"
            className="error__boundary-btn"
            onClick={() => {
              this.setState({ hasError: false });
            }}
          >
            Try again
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
