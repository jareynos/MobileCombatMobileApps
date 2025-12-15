import {Text, StyleSheet, View} from "react-native";
import {useState} from 'react';

const ImageDetail = function(props){
    console.log(props);
    return(
        <View style={styles.container} >
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
    }
});

export default ImageDetail;