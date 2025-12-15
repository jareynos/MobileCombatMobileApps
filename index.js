import { registerRootComponent } from 'expo';

import HomeScreen from './src/screens/HomeScreen';
import CharacterScreen from './src/screens/CharacterSelectScreen';
import App from './App';
import BattleScreen from './src/screens/BattleScreen';

 
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
