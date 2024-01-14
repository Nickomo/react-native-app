import { StyleSheet } from 'react-native';
import { Avatar, ListItem, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import SideButtons from 'components/common/SideButtons';
import { router } from 'expo-router';
import { removeProductID, selectProduct, selectProductID } from 'store/actions';
import { useRef, useState } from 'react';

type ProductItemProps = {
  product: Product,
  showConfirmationPopup?: () => void,
  selectable?: boolean
}

const ProductItem: React.FC<ProductItemProps> = ({ product, showConfirmationPopup, selectable }) => {
  const [isSelected, setIsSelected] = useState(false);
  const swipable = useRef<any>();

  const editHandler = () => {
    selectProduct(product)
    router.push('/addProduct?edit=true')
    swipable.current.close();
  }

  const removeHandler = () => {
    selectProduct(product);
    showConfirmationPopup?.();
    swipable.current.close();
  }

  const handleItemClick = () => {
    if(!selectable) {
      return;
    }
    setIsSelected((prevState) => {
      // setIsSelected(!prevState)
      prevState ? removeProductID(product.id) : selectProductID(product.id)
      return !prevState;
    })
  }

  return (
    <>
      <Swipeable ref={swipable} renderRightActions={() => (
        <SideButtons editHandler={editHandler} removeHandler={removeHandler}/>
      )}>
        <ListItem containerStyle={isSelected && styles.selected} topDivider={true} onPress={handleItemClick}>
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
  selected: {
    backgroundColor: '#e3e6e8',
  },
  description: {
    color: 'gray',
  },
  price: {
    color: 'gray'
  },
});