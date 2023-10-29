import React, { Component } from 'react';
import './ErrorBoundary.css';

interface ErrorBoundaryProps {
  hasError: boolean;
}

interface ErrorBoundaryState {
  children: React.ReactNode;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryState,
  ErrorBoundaryProps
> {
  constructor(props: ErrorBoundaryState) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className="error">
          Oops... Something went wrong.
          <br />
          Reload the page
        </p>
      );
    }
    return this.props.children;
  }
}
