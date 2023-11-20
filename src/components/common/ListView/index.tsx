import { View, FlatList, ListRenderItemInfo } from "react-native";
import EmptyList from "./EmptyList";
import ConfirmationPopup from "components/common/ConfirmationPopup";
import { useState } from "react";
import ProductItem from "components/main/ProductItem";
import ProductsListItem from "components/main/ProductsListsItem";
import { removeProduct, removeProductsList, removeSelectedProduct, removeSelectedProductsList } from "store/actions";


type ListViewProps = {
  type: 'products' | 'productsList',
  data: Product[] | ProductsList[],
}

// ({ item: product } : ListRenderItemInfo<ProductsList>)

const ListView: React.FC<ListViewProps> = ({ data, type }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const showConfirmationPopup = () => setIsOverlayVisible(true);

  const onConfirm = () => {
    if(type === 'products') {
      removeSelectedProduct()
    } else {
      removeSelectedProductsList();
    }
  }

  if(!data.length) {
    return <EmptyList />
  }

  return (
    <View>
      {type === 'products'
        ? <FlatList
            data={data as Product[]}
            renderItem={({ item: product } : ListRenderItemInfo<Product>) => <ProductItem showConfirmationPopup={showConfirmationPopup} product={product}/>}
            keyExtractor={(product) => product.id}
          />
        : <FlatList
            data={data as ProductsList[]}
            renderItem={({ item: productsList } : ListRenderItemInfo<ProductsList>) => <ProductsListItem showConfirmationPopup={showConfirmationPopup} productsList={productsList}/>}
            keyExtractor={(productsList) => productsList.id}
          />
      }
      <ConfirmationPopup isVisible={isOverlayVisible} onConfirm={onConfirm} closeOverlay={() => setIsOverlayVisible(false)}></ConfirmationPopup>
    </View>
  )
};

export default ListView;