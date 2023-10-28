import React, { Component } from 'react';
import '../SearchForm/searchForm.css';

type SearchFormProps = {
  children?: JSX.Element;
  onSubmit: (value: string) => void;
};

type SearchFormState = {
  inputValue: string;
};
export default class SearchForm extends Component<
  SearchFormProps,
  SearchFormState
> {
  constructor(props: SearchFormProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
    localStorage.setItem('value', inputValue);
  };

  handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  componentDidMount(): void {
    window.addEventListener('beforeunload', this.saveToLocalStorage);
    const valueLocalStorage = localStorage.getItem('value');
    if (valueLocalStorage !== null) {
      this.setState({ inputValue: valueLocalStorage });
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener('beforeunload', this.saveToLocalStorage);
  }

  saveToLocalStorage = () => {
    localStorage.setItem('value', this.state.inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form className="search__form" onSubmit={this.handleClick}>
        <input
          className="search__input"
          type="text"
          value={inputValue}
          onChange={this.handleChangeInput}
        />
        <button className="search__btn" type="submit">
          Search
        </button>
      </form>
    );
  }
}
