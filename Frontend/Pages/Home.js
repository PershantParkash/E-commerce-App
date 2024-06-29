import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView } from 'react-native';
import { products } from '../assets/data/product';
import { ProductCart1 } from '../Components/ProductCart1';
import { ProductCart2 } from '../Components/ProductCart2';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
export function Home() {
  const [search, setSearch] = useState("");
  const productStore = useSelector((state) => state.cart.product);

  const changeHandler = (event) => {
    setSearch(event.target.value)
    const searchValue = event.target.value.toLowerCase();
    const productInCart = productStore.filter(item => item.name.toLowerCase().startsWith(searchValue));
    console.log(productInCart);
  }
  return (
    <SafeAreaView style={styles.container}>
       <View >
      <View style={styles.ContainerRow}>
        <TextInput
          style={styles.input}
           placeholder="Type here.."
           value={search}
           onChange={changeHandler}
        />

<Ionicons name="cart-outline" style={styles.icon} size={36} color="black" />


      </View>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Explore</Text>
      </View>
      <View style={styles.CenterContainer}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCart1 product={item} />}
          keyExtractor={(item) => {return item.id}
          }
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
     renderItem={({item}) => <ProductCart2 product={item}/>}
     keyExtractor={(item)=> {return item.id}}
     horizontal
     showsHorizontalScrollIndicator={false}
     />
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icon:{
marginLeft:10,
marginTop:8,
padding:6
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
    // width:"90%",
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    marginTop: 10,
    fontSize: 18,
    width: '100%',
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
    marginTop: 20,
    // alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Home;