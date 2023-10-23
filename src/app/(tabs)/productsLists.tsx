import { StyleSheet, View, Text } from 'react-native';
import store from 'store';

export default function ProductsLists() {
  return (
    <View style={styles.container}>
      {store.productsLists.map((productsList) => (
        <Text key={productsList.id} style={styles.title}>{productsList.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
