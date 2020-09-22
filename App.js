import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Films } from './pages/Films';
import { Details } from './pages/Details';
import * as ScreenOrientation from 'expo-screen-orientation';


export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  useEffect(() => {
    (async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    })
  })

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Films' 
            component={Films}
            options={{
              title: 'Films',
              headerStyle: {
                backgroundColor: '#3f51b5',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen 
            name='Details' 
            component={Details}
            options={{
              title: 'Details',
              headerStyle: {
                backgroundColor: '#3f51b5',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }
          }
          />
        </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
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
