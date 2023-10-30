import { Component } from 'react';
import './ErrorButton.css';

export default class ErrorButton extends Component {
  state = { hasError: false };

  handleClick = () => {
    try {
      throw new Error("Error! It's an intentional error");
    } catch (error) {
      this.setState({ hasError: true });
    }
  };

  render() {
    if (this.state.hasError) {
      throw new Error("Error! It's an intentional error");
    }
    return (
      <button onClick={this.handleClick} className="error__btn">
        Error
      </button>
    );
  }
}
