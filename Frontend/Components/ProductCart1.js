import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { addToCart,removeFromCart } from '../Slice/cartSlice';

export function ProductCart1({ product }) {
  const productStore = useSelector((state) => state.cart.product);
    const productInCart = productStore.find(item => item.id === product.id);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Product', { product })}>

        <Image
          style={styles.productImage}
          source={product.img}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>

        {
     <View>
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
             <AntDesign name="pluscircle" size={24} color="black" onPress={() => dispatch(addToCart({ ...product, quantity: 1 }))} />
         </View>
     )}
 </View>
        }
       

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  incbox: {
    width: '90%',
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
    // backgroundColor: '#6A5ACD',
    borderRadius: 10,
    // marginLeft: 8,
    // marginRight: 8,  

  },
  buttonText: {
    fontSize: 18,

  },
  quantityText: {
    // marginLeft: 8,
    // marginRight:8, 
    fontSize: 18,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: 15,
    width: 210,
    marginLeft: 30
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  detailsContainer: {
    // padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: 'light-grey',
  },
  price: {
    fontSize: 18,
    color: 'grey',
  },
});

export default ProductCart1;