import { Redirect } from 'expo-router';
import '../translations';

export default function Page() {
  return <Redirect href={"/products"} />;
}