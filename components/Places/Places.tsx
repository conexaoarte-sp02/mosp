import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Categories from './Categories';
import Place from './Place';

interface PlacesProps {
    title: string;
}

const Places = (props: PlacesProps) => {

    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Categories />
            <View style={styles.container}>
                <Place />
                <Place />
                <Place />
                <Place />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: '#000',
        fontWeight: '600',
    },
    container: {
        flexDirection: 'row',
    },
});

export default Places;