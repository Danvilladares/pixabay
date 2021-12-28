import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/home.js';
import Search from './src/components/searchbar.js';
// import DetailView from './src/screens/detailview.js';
// import ImageResults from './src/components/imageResults.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Search" component={Search} />
        {/* <Stack.Screen name="DetailView" component={DetailView} />
        <Stack.Screen name="ImageResults" component={ImageResults} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
