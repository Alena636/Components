import React, { Component } from 'react';
import '../SearchForm/searchForm.css';

export default class SearchForm extends Component {
  render() {
    return (
      <form className="search__form">
        <input className="search__input" type="text" />
        <button className="search__btn" type="submit">
          Search
        </button>
      </form>
    );
  }
}
