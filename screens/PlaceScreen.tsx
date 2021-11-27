import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PlaceScreen = () => {

    return (
        <View style={styles.container}>
            <Text>Tela de um lugar específico!</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
});

export default PlaceScreen;