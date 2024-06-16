import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { ProductCart1 } from '../Components/ProductCart1';

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
      />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Explore</Text>
      </View>

      <ProductCart1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
   // justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 20,
    fontSize: 18,
    width: '90%',
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
