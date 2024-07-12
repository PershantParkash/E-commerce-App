import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons, Fontisto, Feather, AntDesign, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Slice/authSlice';
import { addToCart, removeFromCart } from '../Slice/cartSlice';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// const User = {
//     id: "01",
//     name: "Camera",
//     email: "kamaltalreja@gmail.com",
//     phone: "0332-3520504",
//     description: "Description for Camera",
//     wallet: "$399.00",
//     order: 11,
//     profile: require('../assets/images/camera.jpg'),
// };

export default function MyProfile({ navigation }) {
    const navigation2 = useNavigation();
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const User = useSelector((state) => state.auth.user);
    const productStore = useSelector((state) => state.cart.product);
    console.log(User)
    return (
        <View style={styles.container}>
            {isAuthenticated ? (<View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity style={{ padding: 5 }} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={28} color="black" />
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ padding: 5 }} onPress={() => navigation.navigate('Cart')}>
                        <Ionicons name="cart-outline" style={styles.icon} size={32} color="black" />
                    </TouchableOpacity> */}
                      <View>
          <View style={styles.cart}>
          <Ionicons name="cart-outline" style={styles.icon} size={40} color="black" />
      </View>
          {productStore? (<TouchableOpacity style={styles.cart2} onPress={() => navigation.navigate('Cart')} >
        <Text style={styles.quantity2}>{productStore.length}</Text>
        </TouchableOpacity>): ("") }
        </View>
                </View>
                <View style={styles.innercontainer}>
                    <Image
                        style={styles.productImage}
                        source={User.profile}
                        resizeMode="cover"
                    />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.name}>{User.FullName}</Text>
                    </View>
                </View>

                <View style={styles.innercontainer}>
                    <View style={styles.iconContainer}>
                        <Fontisto name="email" size={18} color="black" />
                        <Text style={styles.text}>{User.Email} </Text>
                        {/* <Text style={styles.text}>{User}</Text> */}
                    </View>
                </View>
                <View style={styles.innercontainer}>
                    <View style={styles.iconContainer}>
                        <Feather name="phone" size={18} color="black" />
                        <Text style={styles.text}>{User.phone}</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.innercontainer}>
                    <View style={styles.half}>
                        <Text style={styles.number}>{User.wallet}</Text>
                        <Text style={styles.bold}>Wallet</Text>
                    </View>
                    <View style={styles.half}>
                        <Text style={styles.number}>{User.order}</Text>
                        <Text style={styles.bold}>Orders</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.innercontainer}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="hearto" size={24} color="black" />
                        <Text style={styles.textb}>Your Favourite</Text>
                    </View>
                </View>
                <View style={styles.innercontainer}>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="print" size={24} color="black" />
                        <Text style={styles.textb}>Promotions</Text>
                    </View>
                </View>
                <View style={styles.innercontainer}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="people-outline" size={24} color="black" />
                        <Text style={styles.textb}>Tell Your Friend</Text>
                    </View>
                </View>
                <View style={styles.innercontainer}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="setting" size={24} color="black" />
                        <Text style={styles.textb}>Setting</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.bottom}>
                    < TouchableOpacity style={styles.iconContainer} onPress={() => dispatch(logout())} >
                        <MaterialCommunityIcons name="logout" size={24} color="red" />
                        <Text style={styles.textb}>Logout</Text>
                    </ TouchableOpacity>
                </View>
            </View>) : (
                <View style={styles.container2}>
  <Text>You are not logged in...</Text>
  <TouchableOpacity style={styles.addButton} onPress={() =>  navigation2.navigate('Login')}>
          {/* <AntDesign name="plus" size={24} color="white" /> */}
          <Text style={styles.addButtonText}>Login</Text>
        </TouchableOpacity>
                </View>
            )}



        </View>
    );
}

const styles = StyleSheet.create({
    addButton: {
        flexDirection: 'row',
        backgroundColor: '#007BFF',
        padding: 15,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        // borderTopLeftRadius: 40,
        borderRadius:40
      },
      addButtonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
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
    container2:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    innercontainer: {
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 12,
        paddingBottom: 12,
        width: "100%",
    },
    bottom: {
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        // position: 'absolute',
        // bottom: 0,
        width: "100%",
        // height:'auto',
        flex: 1
    },
    productImage: {
        width: '40%',
        height: 'auto',
        aspectRatio: 1,
        borderRadius: 100,
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
    row: {
        marginTop: 40,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
    },
    textb: {
        marginLeft: 15,
        fontWeight: '500',
    },
    number: {
        fontSize: 24,
        fontWeight: '700',
    },
    bold: {
        fontSize: 14,
        marginTop: 6,
        fontWeight: '500',
    },
    half: {
        width: '50%',
        alignItems: 'center',
        padding: 10,
    },
});
