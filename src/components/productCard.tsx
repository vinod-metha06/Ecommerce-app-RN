import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { IMAGEURL } from '../urls/urls';


interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
 
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, price }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{}}>
      <Image source={{ uri: IMAGEURL+imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
    marginLeft:8
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
    resizeMode:'contain'
    
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default ProductCard;
