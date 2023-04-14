import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from 'react-native';
import CategoryList from '../components/categories';
import ProductList from '../components/productList';
import { useDispatch, useSelector } from 'react-redux';
import { getBestSellingPhones } from '../redux/actions';
import Reducer from '../types/reducer';

interface Category {
  id: number;
  name: string;
  imageUrl:string;
}

const categories=[
  {
    id: 1,
  name: "Mobile",
  imageUrl:"https://bit.ly/3MGP7lz"
  },

  {
    id: 2,
  name: "laptops",
  imageUrl:"https://bit.ly/3MGP7lz"
  },
  {
    id: 3,
  name: "laptops",
  imageUrl:"https://bit.ly/3MGP7lz"
  },
  {
    id: 4,
  name: "laptops",
  imageUrl:"https://bit.ly/3MGP7lz"
  },
  {
    id: 5,
  name: "laptops",
  imageUrl:"https://bit.ly/3MGP7lz"
  },
]

interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

interface HomeScreenProps {
  categories: Category[];
  bestSellingProducts: Product[];
  onProductPress: (product: Product) => void;
}

interface  State{
  reducer:Reducer;
}

const HomeScreen= () => {
 
  const dispatch=useDispatch();
  const data=useSelector((state:State)=>state.reducer)
 
 useEffect(()=>{
  dispatch(getBestSellingPhones());
 },[])

 useEffect(()=>{
  console.log(data)
 },[data.isLoading])
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
     
        <CategoryList categories={categories} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Best Selling Products</Text>
        {data.isLoading? (<ActivityIndicator size="large" color="#0000ff" />):( <ProductList products={data.data}  />)}
       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
