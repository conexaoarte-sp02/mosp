import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { IPlace } from '../../interfaces/IPlace';
import Categories from './Categories';
import Place from './Place';

interface PlacesProps {
    title: string;
}

const Places = (props: PlacesProps) => {

    const [places, setPlaces] = useState<IPlace[]>([]);
    
    useEffect(() => {

        getPlaces();

    }, []);

    const getPlaces = async () => {

        const places = await axios.get('https://besp.westcentralus.cloudapp.azure.com/places');

        setPlaces(places.data);

    }

    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Categories />
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}                
            >
                {places.map((item) => (
                    <Place place={item} />
                ))}
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