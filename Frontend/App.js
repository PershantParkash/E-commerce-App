// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/Home'; // Assuming default export
import ProductPage from './Pages/ProductPage'; // Assuming default export
import Cart from './Pages/Cart'; // Assuming default export
import { Provider } from 'react-redux';
import { store } from './store/store';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Define the Stack Navigator
function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home"  screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Outer Home" component={Home} />
      <Stack.Screen name="Product" component={ProductPage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}> 
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen
          name="Home"
          component={HomeStackNavigator}
        />
        <Drawer.Screen name="Cart" component={Cart} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
