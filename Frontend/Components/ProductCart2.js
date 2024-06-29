import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Slice/cartSlice';

export function ProductCart2({ product }) {
  const productStore = useSelector((state) => state.cart.product);
  const productInCart = productStore.find(item => item.id === product.id);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        source={ product.img }
        resizeMode="contain"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description.length >= 14 ? product.description.substring(0,14) + "..." : product.description }</Text>
        {productInCart ? (
          <View style={styles.container2}>
            <View style={styles.incbox}>
              <TouchableOpacity onPress={() => dispatch(removeFromCart(product))} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{productInCart.quantity}</Text>
              <TouchableOpacity onPress={() => dispatch(addToCart(product))} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.box}>
            <Text style={styles.price}>{product.price}</Text>
            <AntDesign name="rightcircle" size={20} color="black" onPress={() => navigation.navigate('Product', { product })} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  incbox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 2,
    justifyContent: 'space-between',
  },
  button: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: 15,
    width: 270,
    height: 100,
    marginLeft: 20,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productImage: {
    width: 70, // Adjust the image width as needed
    height: '100%', // Ensure the image stretches vertically
    aspectRatio: 1, // Ensure the image maintains its aspect ratio
    borderRadius: 15,
    marginRight: 18,
  },
  detailsContainer: {
    flex: 1, // Take up remaining space
    justifyContent: 'center', // Center content vertically
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'lightgrey',
  },
  price: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
  },
});

export default ProductCart2;
