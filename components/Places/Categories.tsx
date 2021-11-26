import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Categories = () => {

    return (
        <View style={styles.categoriesContainer}>
            <Text style={styles.categoryActive}>Todos</Text>
            <Text style={styles.categoryItem}>Museus</Text>
            <Text style={styles.categoryItem}>Galerias</Text>
            <View>
                <Text style={styles.categoryItem}>Pontos Turísticos</Text>
            </View>
            <Text style={styles.categoryItem}>Esportes</Text>
            <Text style={styles.categoryItem}>Restaurantes</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    categoryItem: {
        marginLeft: 20,
        color: '#7B7A7A',
    },
    categoryActive: {
        color: '#000',
        borderBottomWidth: 3,
        borderBottomColor: '#F53636',
    },
});

export default Categories;