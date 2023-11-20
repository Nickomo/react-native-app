import { StyleSheet, FlatList, ListRenderItemInfo, View } from 'react-native';
import { observer } from 'mobx-react';
import store from 'store';
import { Avatar, Text, Button, Divider, Icon, ListItem } from 'react-native-elements';
import { Swipeable } from 'react-native-gesture-handler';
import SideButtons from 'components/common/SideButtons';
import { removeProductsList, selectProductsList } from 'store/actions';
import { router } from 'expo-router';

type ProductsListItemProps = {
  productsList: ProductsList,
  showConfirmationPopup?: () => void
}

const ProductsListItem: React.FC<ProductsListItemProps> = ({ productsList, showConfirmationPopup }) => {
  const editHandler = () => {
    selectProductsList(productsList);
    router.push('/addProductsList?edit=true');
  }

  const removeHandler = () => {
    selectProductsList(productsList);
    showConfirmationPopup?.();
  }

  return (
    <>
      <Swipeable renderRightActions={() => (
        <SideButtons editHandler={editHandler} removeHandler={removeHandler}/>
      )}>
        <ListItem topDivider={true}>
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