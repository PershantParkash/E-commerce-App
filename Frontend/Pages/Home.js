import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView,TouchableOpacity } from 'react-native';
import { ProductCart1 } from '../Components/ProductCart1';
import { ProductCart2 } from '../Components/ProductCart2';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import SearchItem from '../Components/SearchItem';
import { useNavigation } from '@react-navigation/native';
function Home() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const productStore = useSelector((state) => state.cart.product);
  const products = useSelector((state) => state.products.products);
  const [productInCart, setProductInCart] = useState([]);

  const changeHandler = (text) => {
    setSearch(text);
    const searchValue = text.toLowerCase();
    const filteredProducts = products.filter(item => item.name && item.name.toLowerCase().startsWith(searchValue));
    setProductInCart(filteredProducts);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.ContainerRow}>
          <TextInput
            style={styles.input}
            placeholder="Type here.."
            value={search}
            onChangeText={changeHandler}
          />
         <View style={styles.container2}>
      <View style={styles.cart}>
        <Ionicons name="cart-outline" style={styles.icon} size={36} color="black" />
      </View>
      {productStore? (<TouchableOpacity style={styles.cart2} onPress={() => navigation.navigate('Cart')} >
        <Text style={styles.quantity2}>{productStore.length}</Text>
        </TouchableOpacity>): ("") }
      
    </View>
        </View>
      </View>

      {productInCart.length > 0 ? (
        <FlatList
          data={productInCart}
          renderItem={({ item }) => <SearchItem product={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Explore</Text>
          </View>
          <View style={styles.CenterContainer}>
            <FlatList
              data={products}
              renderItem={({ item }) => <ProductCart1 product={item} />}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Best Selling</Text>
          </View>

          <View style={styles.CenterContainer}>
            <FlatList
              data={products}
              renderItem={({ item }) => <ProductCart2 product={item} />}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({container2: {
  alignItems: 'center',
  justifyContent: 'center',
},
cart: {
  flexDirection: 'row',
  borderRadius: 10,
  marginLeft:4
},cart2: {
  height:22,
  width:22,
  backgroundColor:'red',
  marginTop:-40,
  alignItems: 'center',
  justifyContent: 'center',
  // color:'white'
  borderRadius: 20,
  marginRight:-20
},
icon: {
  marginRight: 8,
},
quantity2: {
  fontSize: 14,
  fontWeight: 'bold',
  color: 'white',
},
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  CenterContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  box: {
    marginTop: 15,
    marginLeft: 10,
  },
  ContainerRow: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    marginTop: 10,
    fontSize: 18,
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  headingContainer: {
    marginTop: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Home;
