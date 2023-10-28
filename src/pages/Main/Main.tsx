import { Component } from 'react';
import SearchForm from '../../widgets/SearchForm/SearchForm';

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
        <SearchForm onSubmit={this.updateSearchValue} />
      </div>
    );
  }
}
