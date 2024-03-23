import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileCreationScreen from './screens/ProfileCreationScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import ProfileScreen from './screens/ProfileScreen';
import MissionScreen from './screens/MissionScreen';
import MissionScreenEmpty from './screens/MissionScreenEmpty';
import LeaderBoardScreen from './screens/LeaderBoardScreen';
import LogBoardScreen from './screens/LogBoardScreen';
import MapScreen from './screens/MapScreen';
import QrScanner from './screens/QrScanner';



const Stack = createNativeStackNavigator();

const App = () => {

  const [] = useFonts({
    'PalatinoLinotype': require('./assets/fonts/PalatinoLinotype.ttf'),
    'risque': require('./assets/fonts/risque.ttf'),
    'rochester': require('./assets/fonts/rochester.ttf'),
    'zeyada': require('./assets/fonts/zeyada.ttf'),
  });


  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // This hides the header globally for all screens
        }}
      >

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ProfileCreation" component={ProfileCreationScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Mission" component={MissionScreen} />
        <Stack.Screen name="MissionEmpty" component={MissionScreenEmpty} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoardScreen} />
        <Stack.Screen name="LogBoard" component={LogBoardScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="QrScanner" component={QrScanner} />






      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
