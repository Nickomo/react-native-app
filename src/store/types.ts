// type StoreActions = {
//   addProduct: (newProduct: Product) => void,
//   addProductsList: (newProductsList: Product) => void,
//   selectProduct: (selectedProduct: Product) => void,
//   selectProductsList: (selectedProductsList: ProductsList) => void,
// }

type Store = {
  products: Product[],
  productsLists: ProductsList[]
  selectedProduct: Product | null,
  selectedProductsList: ProductsList | null,
}

type Product = {
  id: string,
  name: string,
  description: string,
  image?: string,
  price: number,
}

type ProductsList = {
  id: string,
  name: string,
  description: string,
  products?: Product[]
}
