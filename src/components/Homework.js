import {Text, View, StyleSheet, Button} from 'react-native';
import {useState} from 'react'

export default function Homework(props){
    console.log(props);
    console.log(props.statType);
    return(
        <View style= {styles.container}>
            <Text>{props.statType}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00ff00' ,
    }
})

