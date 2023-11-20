import AddProductsListForm from 'components/main/forms/AddProductsListForm';
import { useLocalSearchParams } from 'expo-router';

export default function AddProductsList() {
  const { edit } = useLocalSearchParams()
  return (
    <AddProductsListForm edit={Boolean(edit)}/>
  );
}