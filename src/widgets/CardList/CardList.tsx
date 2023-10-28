import { Component } from 'react';
import { Card } from '../../types';
import CardElement from '../Card/Card';

type CardListProps = {
  items: Card[];
  error: null | Error;
  isLoaded: boolean;
};

type CardListResult = {
  children?: JSX.Element;
  data?: string;
};

export default class CardList extends Component<CardListResult, CardListProps> {
  constructor(props: CardListResult | Readonly<CardListResult>) {
    super(props);
    this.state = {
      items: [],
      error: null,
      isLoaded: false,
    };
  }

  getData = () => {
    const valueKey = localStorage.getItem('value');
    const url = valueKey
      ? `https://swapi.dev/api/people/?search=${valueKey}`
      : `https://swapi.dev/api/people/`;

    this.setState({ isLoaded: false });

    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('HTTP Error!');
        }
        return resp.json();
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  componentDidMount(): void {
    this.getData();
  }

  componentDidUpdate(prevProps: Readonly<CardListResult>): void {
    if (this.props.data !== prevProps.data) {
      this.getData();
    }
  }

  render() {
    const { items, error, isLoaded } = this.state;
    if (error) {
      return <p>Error</p>;
    }
    if (!isLoaded) {
      return <p>Load ...</p>;
    }
    if (items.length === 0) {
      return <p>Nothing found</p>;
    }

    return (
      <div className="cards__wrapper">
        {items.map((item, index) => (
          <CardElement ind={item.id} people={item} key={index} />
        ))}
      </div>
    );
  }
}
