import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Slice/cartSlice';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
export function ProductPage() {
  const route = useRoute();
  const { product } = route.params;
  const productStore = useSelector((state) => state.cart.product);
  const productInCart = productStore.find(item => item.id === product.id);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>
        <Image
          style={styles.productImage}
          source={product.img}
          resizeMode="cover"
        />
        <View style={styles.row}>
          <TouchableOpacity style={{ padding: 5 }} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={28} color="black" />
          </TouchableOpacity>

          <View>
          <View style={styles.cart}>
          <Ionicons name="cart-outline" style={styles.icon} size={40} color="black" />
      </View>
          {productStore? (<TouchableOpacity style={styles.cart2} onPress={() => navigation.navigate('Cart')} >
        <Text style={styles.quantity2}>{productStore.length}</Text>
        </TouchableOpacity>): ("") }
        </View>

        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.heading}>Description:</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </View>
      {productInCart ? (
        <View style={styles.container2}>
          <View style={styles.incbox}>
            <TouchableOpacity onPress={() => dispatch(removeFromCart(product))} style={styles.incButton}>
              <Text style={styles.incButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{productInCart.quantity}</Text>
            <TouchableOpacity onPress={() => dispatch(addToCart(product))} style={styles.incButton}>
              <Text style={styles.incButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity style={styles.addButton} onPress={() => dispatch(addToCart({ ...product, quantity: 1 }))}>
          <AntDesign name="plus" size={24} color="white" />
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cart: {
    flexDirection: 'row',
    // alignItems: 'center',
    // padding: 10,
    // backgroundColor: '#f5f5f5',
    borderRadius: 10,
    // marginLeft:4
  },
  row: {
    position: 'absolute',
    top: 20,
    left: 15,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,

  },cart2: {
    height:22,
    width:22,
    backgroundColor:'red',
    position: 'absolute',
    top: -2,
    right: -2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  // icon: {
  //   marginRight: 8,
  // },
  quantity2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  incbox: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
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
  quantityText: {
    fontSize: 24,

  },
  incButtonText: {
    fontSize: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,

  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#007BFF',
    padding: 15,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 40,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 370,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  heading: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 14,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default ProductPage;
