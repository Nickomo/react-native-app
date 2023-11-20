import AddProductForm from 'components/main/forms/AddProductForm';
import { useLocalSearchParams } from 'expo-router';

export default function AddProduct() {
  const { edit } = useLocalSearchParams();
  return (
    <AddProductForm edit={Boolean(edit)}/>
  );
}