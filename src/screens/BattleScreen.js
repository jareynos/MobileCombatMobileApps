import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View , Image, FlatList, Pressable, Button} from "react-native";
import {useState, useRef, useReducer} from "react";


const BattleScreen = function({route,navigation}) {
    const [battleHealth, setBattleHealth] = useState(route.params.health);
    const [battleStrength, setBattleStrength] = useState(route.params.strength);
    const battleMagic = route.params?.magic ?? 0;

   
    const [enemyStrength, setEnemyStrength] = useState(3);
    const [enemyMagic, setEnemyMagic] = useState(6);
    const [enemyHealth, setEnemyHealth] = useState(20);

    const [screen, setScreen] = useState ("battle");

    const [messages, setMessages] = useState ([]);
    const addMessage = (newMessage) => {
        setMessages((prev) => [...prev, {id: Date.now().toString(), text: newMessage}]);
    }
    const flatListRef = useRef();


    const initialMagic = {
        battleMagic: battleMagic
      };
      function magicReducer(state, action) {
        switch (action.type) {
            case 'castSpell':
                if (state.battleMagic > 0) {
                    return { battleMagic: state.battleMagic - 1};
                }
                return state;
            default:
                return state;
            }
      }
      
    const [magicState, dispatchMagic] = useReducer(magicReducer, initialMagic);


    const handleAttack = () => {
        let newEnemyHealth = enemyHealth - battleStrength;
        if (newEnemyHealth <= 0) {
            setEnemyHealth(0);
            setScreen("victory");
        }
        else {
            setEnemyHealth(newEnemyHealth);
        }
    }

    const handleEnemyAttack = () => {
        let newPlayerHealth = battleHealth - enemyStrength;
        if (newPlayerHealth <= 0) {
            setBattleHealth(0);
            setScreen("defeat");
        }
        else {
            setBattleHealth(battleHealth - enemyStrength);
            
        }
    }
    const handleMagicAttack = () => {
        let newEnemyHealth = enemyHealth - 7;
        if (newEnemyHealth <= 0) {
            setEnemyHealth(0);
            setScreen("victory");
        }
        else {
            setEnemyHealth(newEnemyHealth);
        }
    }


    return(

        <View style={styles.container}>
            {screen === "battle" && (
                <View>
                    <View style= {styles.statContainer}>
                        <View style={styles.Stats}>
                            <Text>Player Stats:</Text>
                            <Text>Strength: {battleStrength} </Text>
                            <Text>Magic: {magicState.battleMagic} </Text>
                            <Text>Health: {battleHealth} </Text>
                        </View>
                        <View style={styles.Stats}>
                            <Text>Enemy Stats:</Text>
                            <Text> Strength: {enemyStrength} </Text>    
                            <Text> Magic {enemyMagic} </Text>
                            <Text> Health {enemyHealth} </Text>
                        </View>
                    </View>
                    <Image style={styles.wizardContainer} source={require('../../assets/alienWizard.png')}/>
                    <Text style={[{fontSize: 20, color:'red'}]}> A Cunning Alien Wizard approaches.. </Text>
                    <View style={styles.flatListContainer}>
                        <FlatList
                            ref={flatListRef}
                            data={messages}
                            keyExtractor={(item)=> item.id}
                            renderItem ={({item})=> (<Text style={{fontSize:16}}> {item.text} </Text>)} 
                        />  
                    </View>
                    <Text> What choice is most advantageous to you? </Text>
                    <View style={styles.actionContainer}>  
                        <View style={styles.buttonContainer}>
                            <Pressable onPress={() => {[
                                handleAttack(), 
                                handleEnemyAttack(),
                                addMessage(`You dealt ${battleStrength} damage to the enemy! Well Done.\nYou took ${enemyStrength} damage from the enemy! Watch Yourself...`),
                                ]} }> 
                                <Image source={require('../../assets/attackIcon.png')} style={{width:50, height:50}}/>
                            </Pressable>

                        </View>
                        <View style={styles.buttonContainer}>
                            <Pressable onPress={() => {[
                                dispatchMagic({type: 'castSpell'}),
                                handleMagicAttack(),
                                handleEnemyAttack(),
                                addMessage(`You cast a fireball at the enemy, dealing 7 damage! Impressive!\nYou took ${enemyStrength} damage from the enemy! Stay Alert...`),
                            ]}}> 
                                <Image source={require('../../assets/fireIcon.png')} style={{width:50, height:50}}/>
                            </Pressable>

                        </View>
                        <View style={styles.buttonContainer}>
                            <Pressable onPress={() => {
                                if (magicState.battleMagic > 0){
                                    dispatchMagic({type: 'castSpell'});
                                    addMessage(`You cast a healing spell, restoring 5 health! Keep it up!`);
                                    setBattleHealth(battleHealth + 5);
                                }
                            }}> 
                                <Image source={require('../../assets/healIcon.png')} style={{width:50, height:50}}/>
                            </Pressable>
                        </View>
                    </View>
                </View>
                )}
                {screen === "victory" && (
                    <View>
                        <Text style={[{fontSize: 30, color:'green'}]}> You won! You have proven Worthy! </Text>
                        <Button title="Again!" onPress={() => navigation.popToTop()}/>
                    </View>
                ) }  
                {screen === "defeat" && (
                    <View>
                        <Text style={[{fontSize: 30, color:'red'}]}> You lose! You did not prove Worthy. </Text>
                        <Button title="Skill Issue! Try again" onPress={() => navigation.popToTop()}/>
                    </View>
                ) }
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        backgroundColor: '#a8a4ebff',
        alignItems: 'center',
    },
    statContainer:{
        flexDirection: "row",
        justifyContent: "center",
        borderColor: "black"
    },
    Stats:{
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
    },
    wizardContainer:{
        paddingTop: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "300",
        height: "300",
        resizeMode: 'contain',
    },
    flatListContainer:{
        borderColor: "black",
        borderWidth: 1, 
        width: "100%",
        height: 150,
    },
    actionContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    buttonContainer:{
        margin: 12
    },
    




})
export default BattleScreen;