// import { render } from '@testing-library/react';
// import { CardDetail } from './CardDetail';
// import { CardDetailProps } from '../../types';
// import '@testing-library/jest-dom';

// describe('CardDetail Component', () => {
//   const mockProps: CardDetailProps = {
//     label: 'Test Label',
//     value: 'Test Value',
//   };

//   it('renders with correct props', () => {
//     const { getByText } = render(<CardDetail {...mockProps} />);
//     expect(getByText(`${mockProps.label}:`)).toBeInTheDocument();
//     expect(getByText(mockProps.value)).toBeInTheDocument();
//   });

//   it('renders label and value properly', () => {
//     const { getByText } = render(<CardDetail {...mockProps} />);
//     expect(getByText(`${mockProps.label}:`)).toBeInTheDocument();
//     expect(getByText(mockProps.value)).toBeInTheDocument();
//   });

//   it('renders the correct structure', () => {
//     const { container } = render(<CardDetail {...mockProps} />);
//     expect(container.querySelector('div')).toBeInTheDocument();
//     expect(container.querySelector('strong')).toBeInTheDocument();
//     expect(container.textContent).toContain(mockProps.value);
//   });
// });
