import { Component } from 'react';
import SearchForm from '../../widgets/SearchForm/SearchForm';
import CardList from '../../widgets/CardList/CardList';
import './Main.css';

type MainProps = {
  children?: JSX.Element;
};

type MainState = {
  searchValue: string;
};
export default class MainPage extends Component<MainProps, MainState> {
  constructor(props: MainProps | Readonly<MainProps>) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  updateSearchValue = (value: string) => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <div className="main__container">
        <h1 className="main__title">Star Wars: People</h1>
        <SearchForm onSubmit={this.updateSearchValue} />
        <CardList data={this.state.searchValue} />
      </div>
    );
  }
}
