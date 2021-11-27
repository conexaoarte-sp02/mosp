import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './components/Menu';
import PlaceScreen from './screens/PlaceScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={() => <Menu />}
          screenOptions={{
            headerShown: false,            
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Place" component={PlaceScreen} />
        </Tab.Navigator>
      </NavigationContainer>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
  },  
});
