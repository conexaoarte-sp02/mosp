import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import FavoriteIcon from '../Icons/FavoriteIcon';
import PlaceIcon from '../Icons/PlaceIcon';

const Place = () => {

    const navigation = useNavigation();

    return (
        <TouchableHighlight
            style={styles.container}
            onPress={() => navigation.navigate("Place" as never, {} as never)}
        >
            <View>
                <ImageBackground
                    source={require('../../assets/images/masp.png')}
                    style={styles.background}
                    imageStyle={styles.backgroundBorder}
                >
                    <View style={styles.favoriteContainer}>
                        <FavoriteIcon />
                    </View>
                </ImageBackground>
                <View style={styles.descriptionContainer}>
                    <View>
                        <Text style={styles.placeName}>Museu de Arte de São Paulo</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <PlaceIcon />
                        <Text style={styles.placeLocation}>São Paulo - SP</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )

}

const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 165,
        borderWidth: 2,
        borderColor: '#A8A4A4',
        borderRadius: 8,
        marginTop: 10,
        marginLeft: 10,
        // paddingLeft: 5,
        // paddingRight: 5,
        paddingHorizontal: 3,        
        paddingTop: 5,
        paddingBottom: 10,
    },
    background: {
        width: 100,
        height: 100,
        alignItems: 'flex-end',
    },
    backgroundBorder: {
        borderRadius: 10,
    },
    favoriteContainer: {
        width: 30,
        height: 30,
        backgroundColor: '#ffffff90',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    descriptionContainer: {
        marginTop: 10,
        marginLeft: 4,
    },
    placeName: {
        fontSize: 10,
        color: '#000',
        fontWeight: '600',
    },
    placeLocation: {
        fontSize: 10,
        color: '#BCBCBC',
    },
    locationContainer: {
        flexDirection: 'row',
        marginTop: 2,
    },
});

export default Place;