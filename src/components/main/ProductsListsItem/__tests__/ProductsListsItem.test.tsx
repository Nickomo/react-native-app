import { render } from '@testing-library/react-native';
import ProductsListItem from '..';

const testProductsList = {
  id: 'id123',
  name: 'TEST PRODUCTS LIST',
  description: 'product for test',
}

describe('Product Item', () => {
  test('product item render', () => {
    const { getByText } = render(<ProductsListItem productsList={testProductsList}/>)
    const text = getByText('TEST PRODUCTS LIST');
    expect(text).toBeTruthy();
  });
  test('roductsList snapshot testing', () => {
    const productsList = render(<ProductsListItem productsList={testProductsList}/>).toJSON();
    expect(productsList).toMatchSnapshot();
  });
})