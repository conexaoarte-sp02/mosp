import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}                
            >
                <Place />
                <Place />
                <Place />
                <Place />
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: '#000',
        fontWeight: '600',
    },
});

export default Places;