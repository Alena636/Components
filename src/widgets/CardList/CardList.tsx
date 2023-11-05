// import { useEffect, useState } from 'react';
// import { Card } from '../../types';
// import CardElement from '../Card/Card';
// // import Pagination from '../Pagination/Pagination';
// import './CardList.css';

// type CardListResult = {
//   children?: JSX.Element;
//   data?: string;
// };

// export default function CardList(props: CardListResult): JSX.Element {
//   const [items, setItems] = useState<Card[]>([]);
//   const [errors, setErrors] = useState<Error | null>(null);
//   const [isLoaded, setIsLoaded] = useState(false);


//   useEffect(() => {
//     const getData = async (): Promise<void> => {
//       setIsLoaded(false);
//       setErrors(null);

//       const valueKey = localStorage.getItem('value');
//       const url = valueKey
//         ? `https://swapi.dev/api/people/?search=${valueKey}`
//         : `https://pokeapi.co/api/v2/pokemon/`;

//       try {
//         const response = await fetch(url);

//         if (!response.ok) {
//           throw new Error('HTTP Error!');
//         }

//         const result = await response.json();
//         setItems(result.results);
//         setIsLoaded(true);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setErrors(errors);
//         setIsLoaded(true);
//       }
//     };

//     getData();
//   }, [props.data, errors]);

//   if (errors) {
//     return <p>Error</p>;
//   }
//   if (!isLoaded) {
//     return <p className="cards__loader">Loading...</p>;
//   }
//   if (items.length === 0) {
//     return <p className="cards__not-found">Nothing found</p>;
//   }

//   return (
//     <section className="cards__wrapper">
//       {items.map((item, index) => (
//         <CardElement key={index} name={'name'} height={90} weight={30} sprites={asdf} />
//       ))}
//       {/* {items.length !== 0 && (
//         <Pagination onChange={onSelectChange} value={selectedLimit} />
//       )} */}
//     </section>
//   );
// }
