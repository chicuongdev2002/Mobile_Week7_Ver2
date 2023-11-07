import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Image} from 'react-native';
import Screen1 from './src/component/API_Screen_01';
import Screen2 from './src/component/API_Screen_02';
import Screen3 from './src/component/API_Screen_03';
<div id="root"></div>
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
           <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{title:'Screen1', headerShown: false
        }}
        
        />
           <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{title:'Screen2', headerShown: false
        }}
        
        />
          <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{title:'Screen3', headerShown: false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


