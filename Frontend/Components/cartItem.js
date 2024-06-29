import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';;
import { addToCart,removeFromCart } from '../Slice/cartSlice';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    
    return (
        <View style={styles.innercontainer}>

            <Image
                style={styles.productImage}
                source={product.img}
                resizeMode="contain"
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <View style={styles.box}>
                    <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>

                    {/* <AntDesign name="rightcircle" size={20} color="black" /> */}
                    <View style={styles.container2}>
                        <View style={styles.incbox}>
                            <TouchableOpacity onPress={() =>  dispatch(removeFromCart({ ...product })) }  style={styles.button}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{product.quantity}</Text>
                            <TouchableOpacity onPress={() =>  dispatch(addToCart({ ...product })) }  style={styles.button}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   
    innercontainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        padding: 15,
        height: 100,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 8,
        marginBottom:8
    },
    box: {
         flexDirection: 'row',
         justifyContent: 'space-between',
        alignItems: 'center',
    },
    productImage: {
        width: 70,
        height: '100%',
        aspectRatio: 1,
        borderRadius: 15,
        marginRight: 18,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: 'grey',
        marginTop: 5,
    },
    container2: {
        justifyContent: 'center',
    alignItems: 'center',
        
      },
      incbox: {
        width: 85,
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
      buttonText: {fontSize: 18,
       
      },
      quantityText: {
        // marginLeft: 8,
        // marginRight:8, 
         fontSize: 18,
      },
    });

export default CartItem;
