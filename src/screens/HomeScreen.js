import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <Image
        source={require('../../assets/swordAndShield.jpg')}
        style = {styles.image}
      />
      <Text style={styles.text}>Will you prove worthy?</Text>
      <Button title="Yes, I will!" onPress = {() => navigation.navigate("CharacterScreen")}/> 
      <StatusBar style="auto" />

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#a8a4ebff',
    alignItems: 'center',
    paddingTop: 40,
  },
  text: {
    fontSize: 20,
    maxWidth: 300,
    margin: 12,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#000000ff",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignItems: 'center'
  },
});

export default HomeScreen;