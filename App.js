import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen.js';
import CharacterScreen from "./src/screens/CharacterSelectScreen";
import BattleScreen from "./src/screens/BattleScreen.js";

let stack=createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <NavigationContainer> 
        <stack.Navigator 
        
        > 
          <stack.Screen name="HomeScreen" component = {HomeScreen}/>
          <stack.Screen name="CharacterScreen" component = {CharacterScreen}/>
          <stack.Screen name="BattleScreen" component = {BattleScreen}/>
        </stack.Navigator>
      </NavigationContainer>
    </>
  )
}

