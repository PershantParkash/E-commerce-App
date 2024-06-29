import React from 'react';
import { StyleSheet,FlatList, Text, View, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import CartItem from '../Components/cartItem'; // Ensure the correct import path
 import { useSelector } from 'react-redux';
 
export function Cart() { 
    const product = useSelector((state) => state.cart.product);
   const totalPrice = product.reduce((total, item) => {
    if (item && item.quantity && item.price) {
        let itemTotal = item.quantity * item.price;
        return total + itemTotal;
    }
    return total;
}, 0);

const shippingRate = 20;
const subTotal = totalPrice + shippingRate;

console.log(subTotal.toFixed(2)); 
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Box1}>
                <FlatList data={product} renderItem={({item})=> 
                    <CartItem product={item}/> 
                }
                  keyExtractor={(item) => {return item.id}}
                />
               {/* <CartItem product={product}/>  */}
            </View>
            <View style={styles.Box2}>
                <View style={styles.row}>
                    <Text style={styles.bold}>Selected Items: </Text>
                    <Text>${totalPrice.toFixed(2)}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.bold}>Shipping Rates: </Text>
                    <Text>${shippingRate.toFixed(2)}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                    <Text style={styles.Totalbold}>Subtotal: </Text>
                    <Text style={styles.Totalbold}>${subTotal.toFixed(2)}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
                    <Text style={styles.buttonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Box1: {
        flex: 1,
        // paddingVertical: 20,
    },
    Box2: {
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 40,
        paddingTop: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    divider: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 20,
    },
    Totalbold: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
    },
});

export default Cart;
