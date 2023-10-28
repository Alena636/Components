import { Component } from 'react';
import { CardProps } from '../../types';

export default class CardElement extends Component<CardProps> {
  render() {
    const { people } = this.props;
    return (
      <div className="card">
        <h4 className="card__name">{people.name}</h4>
        <p className="card__birth">({people.birthYear})</p>
        <div className="card__description">
          <p className="card__height">Height: {people.height}</p>
          <p className="card__mass">Mass: {people.mass}</p>
          <p className="card__gender">Gender: {people.gender}</p>
        </div>
      </div>
    );
  }
}
