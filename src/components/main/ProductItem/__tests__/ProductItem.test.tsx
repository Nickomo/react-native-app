import { render } from '@testing-library/react-native';
import ProductItem from '..';

const testProduct = {
  id: 'id123',
  name: 'TEST PRODUCT',
  description: 'product for test',
  image: undefined,
  price: 10,
}

describe('Product Item', () => {
  test('product item render', () => {
    const { getByText } = render(<ProductItem product={testProduct}/>)
    const text = getByText('TEST PRODUCT');
    expect(text).toBeTruthy();
  });
})