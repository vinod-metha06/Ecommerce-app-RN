import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ProductCard from './productCard';


interface Product {
  product_id: string;
  img_name: string;
  product_title: string;
  product_price: number;
}

interface ProductListProps {
  products: Product[];
 // onProductPress: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products}) => {
  const navigation=useNavigation();
  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard
      imageUrl={item.img_name}
      name={item.product_title}
      price={item.product_price}
      // onPress={() => {
      //   navigation.navigate('DetailsScreen');
      // }}
    />
  );

  return (
    <FlatList
      data={products}
      horizontal={true}
      renderItem={renderProduct}
      keyExtractor={(item) => item.product_id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default ProductList;
