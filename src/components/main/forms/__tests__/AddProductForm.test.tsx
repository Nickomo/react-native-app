import AddProductForm from '../AddProductForm';
import { act, fireEvent, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native';

describe('Product Item', () => {
  test('Create product validation testing', async () => {
    const { getByText, getByLabelText } = render(<AddProductForm />)

    fireEvent.changeText(getByLabelText('product-price'), {
      target: { value: "-10" }
    });
    await act(() => {
      fireEvent.press(getByLabelText("save-button"));
    });

    expect(getByText('Price must be a positive number')).toBeTruthy();
  });
})