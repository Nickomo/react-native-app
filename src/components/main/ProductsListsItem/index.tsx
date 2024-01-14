import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Swipeable } from 'react-native-gesture-handler';
import SideButtons from 'components/common/SideButtons';
import { selectProductsList } from 'store/actions';
import { router } from 'expo-router';
import { useRef } from 'react';

type ProductsListItemProps = {
  productsList: ProductsList,
  showConfirmationPopup?: () => void
}

const ProductsListItem: React.FC<ProductsListItemProps> = ({ productsList, showConfirmationPopup }) => {
  const swipable = useRef<any>();
  const editHandler = () => {
    selectProductsList(productsList);
    router.push('/addProductsList?edit=true');
    swipable.current.close();
  }

  const removeHandler = () => {
    selectProductsList(productsList);
    showConfirmationPopup?.();
    swipable.current.close();
  }

  const handleItemClick = () => {
    selectProductsList(productsList)
    router.push('/productsChips')
  }

  return (
    <>
      <Swipeable ref={swipable} renderRightActions={() => (
        <SideButtons editHandler={editHandler} removeHandler={removeHandler}/>
      )}>
        <ListItem topDivider={true} onPress={handleItemClick}>
          <ListItem.Content style={{display: 'flex'}}>
            <ListItem.Title numberOfLines={1} style={styles.title}>{productsList.name}</ListItem.Title>
            <ListItem.Subtitle numberOfLines={2} style={styles.description}>
              {productsList.description}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </Swipeable>
    </>
  )
}

export default ProductsListItem;

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
  description: {
    color: 'gray',
  },
});