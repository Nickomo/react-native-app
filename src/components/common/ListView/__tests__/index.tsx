import { render } from '@testing-library/react-native';
import ListView from '..';
import i18n from 'translations';

describe('List View', () => {
  test('Check if empty list message displays correctly', () => {
    const { getByText } = render(<ListView data={[]} type='products'/>)
    const text = getByText(i18n.t('emptyListTitle'));
    expect(text).toBeTruthy();
  });
})