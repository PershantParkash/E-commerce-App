import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Product } from '../assets/data/product'; 

export function ProductCart1({ navigation }) {
  // Access the first product in the Product array
  const product = Product[0];

  return (
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        source={product.img}  
        resizeMode="cover"
      />
      
      {/* Product Name */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{product.name}</Text>
        <Text style={styles.heading}>{product.description}</Text>
        <Text style={styles.heading}>{product.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  productImage: {
    width: '100%', 
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailsContainer: {
    padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2f95dc',
  },
});

export default ProductCard;