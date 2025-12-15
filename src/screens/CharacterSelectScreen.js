import { StyleSheet, Text, View, Button } from 'react-native';
import ImageDetail from"../components/ImageDetail";
import {useState, useReducer} from "react";



const CharacterScreen = function({navigation}){
  const [strength, setStrength] = useState(0);
  const [magic, setMagic] = useState(0);
  const[health, setHealth] = useState(0);
  const[statpoints, setStatpoints] = useState(15);
  

  return(
    <View style={styles.container}>
        <Text> GROW IN POWER!</Text>
        <View style = {styles.buttonContainer}> 
            <Button title="-" onPress={() => {
                if (strength > 0 ) {
                 setStatpoints(statpoints + 1);
                 setStrength(strength - 1);
                }
            }}/>
            <Text style={styles.text}> Strength: {strength} </Text>
            <Button title="+" onPress={() => {
               if (statpoints > 0 ) {
                setStatpoints(statpoints - 1);
                setStrength(strength + 1);
               } 

            }}/>
        </View>
        <View style= {styles.buttonContainer}>
            <Button title="-" onPress={() => {
                if (magic > 0 ) {
                 setStatpoints(statpoints + 1);
                 setMagic(magic - 1);
                }
            }}/>
            <Text style={styles.text}> Magic: {magic} </Text>
            <Button title="+" onPress={() => { 
                if (statpoints > 0 ) {
                    setStatpoints(statpoints - 1);
                    setMagic(magic + 1);
                   }
            }}/>
        </View>
        <View style= {styles.buttonContainer}>
            <Button title="-" onPress={() =>{
                if (health > 0 ) {
                 setStatpoints(statpoints + 1);
                 setHealth(health - 1);
                }
            }}/>
            <Text style={styles.text}> Health: {health} </Text>
            <Button title="+" onPress={() => { 
                if (statpoints > 0 ) {
                    setStatpoints(statpoints - 1);
                    setHealth(health + 1);
                   }
             }}/>
        </View>
        <Text style={styles.text}> Stat Points Remaining: {statpoints} </Text>
        <Button title="Ready for Battle!" onPress={() => navigation.navigate("BattleScreen", {health: health, magic: magic, strength: strength}) }/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#37bac9ff',
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 32,
        padding:12,
        borderWidth: 0,
        borderColor:"000000ff",
    },
    buttonContainer: {
        marginBottom:12,
        flexDirection: "row",

    }
});

export default CharacterScreen


