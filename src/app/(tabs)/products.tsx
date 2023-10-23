import { StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import { observer } from 'mobx-react';
import store from 'store';
import { Avatar, Divider, Icon, ListItem, ListItemProps, Text } from 'react-native-elements';
import { FlatListProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Products = observer(() => {
  const renderListItem = ({ item: product } : ListRenderItemInfo<Product>) => {
    return (
      <>
        <ListItem topDivider={true}>
          {product.image
            ? <Avatar source={{uri: product.image}}></Avatar>
            : <Ionicons size={72} style={styles.icon} name='ios-image'></Ionicons>
          }
          <ListItem.Content style={{display: 'flex'}}>
            <ListItem.Title numberOfLines={1} style={styles.title}>{product.name}</ListItem.Title>
            <ListItem.Subtitle style={styles.price}>
              {product.price}$
            </ListItem.Subtitle>
            <ListItem.Subtitle numberOfLines={2} style={styles.description}>
              {product.description}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <Divider />
      </>
    )
  }
  return (
    <FlatList data={store.products} renderItem={renderListItem}></FlatList>
  );
})

export default Products;

const styles = StyleSheet.create({
  title: {
    fontSize: 20
  },
  description: {
    // width: 100,
    // flex: 1,
    color: 'gray',
  },
  price: {
    color: 'gray'
  },
  icon: {
    // height: 100,
    // width: 100,
  },

  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
