import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import SearchIcon from './Icons/SearchIcon';
import SettingsIcon from './Icons/SettingsIcon';

const Search = () => {

    return (        
        <View style={styles.searchContainer}>
            <SearchIcon />

            <TextInput
                placeholder="Pesquise um local"
                style={styles.input}              
            />

            <SettingsIcon />
        </View>
    )

}

const styles = StyleSheet.create({
    searchContainer: {
        height: 45,
        backgroundColor: '#DEDEDE',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },    
    input: {
        height: 24,
    },
});

export default Search;