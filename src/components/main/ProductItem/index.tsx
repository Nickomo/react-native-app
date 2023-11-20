import { StyleSheet, FlatList, ListRenderItemInfo, View } from 'react-native';
import { observer } from 'mobx-react';
import store from 'store';
import { Avatar, ListItem, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import SideButtons from 'components/common/SideButtons';
import { router } from 'expo-router';
import { removeProduct, selectProduct } from 'store/actions';
import { useRef, useState } from 'react';

type ProductItemProps = {
  product: Product,
  showConfirmationPopup?: () => void
}

const ProductItem: React.FC<ProductItemProps> = ({ product, showConfirmationPopup }) => {
  const editHandler = () => {
    selectProduct(product)
    router.push('/addProduct?edit=true')
  }

  const removeHandler = () => {
    selectProduct(product);
    showConfirmationPopup?.();
  }

  return (
    <>
      <Swipeable renderRightActions={() => (
        <SideButtons editHandler={editHandler} removeHandler={removeHandler}/>
      )}>
        <ListItem topDivider={true}>
          {product.image
            ? <Avatar source={{uri: product.image}}></Avatar>
            : <Ionicons size={72} name='ios-image'></Ionicons>
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
      </Swipeable>
    </>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 20
  },
  description: {
    color: 'gray',
  },
  price: {
    color: 'gray'
  },
});