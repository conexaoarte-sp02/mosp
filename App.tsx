import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.title}>Descubra</Text>
            <Text style={styles.title}>lugares incríveis</Text>
          </View>
          <View>
            <Image
              source={require('./assets/images/profile.png')}
              style={styles.profile}
            />
          </View>
        </View>

        {/* SEARCH */}
        <View style={styles.search}>
          <View style={styles.searchContainer}>
            <Image
              source={require('./assets/images/search.svg')}
              style={styles.icon}
            />

            <TextInput
              placeholder="Pesquise um local"
              style={styles.input}              
            />

            <Image
              source={require('./assets/images/settings.svg')}
              style={styles.icon}
            />
          </View>
        </View>

        {/* PLACES */}
        <View style={styles.places}>
          <Text style={styles.text}>Aqui virá o componente de lugares</Text>
        </View>

        {/* FAVORITES */}
        <View style={styles.favorites}>
          <Text style={styles.text}>Aqui virá o componente de lugares favoritos</Text>
        </View>

        {/* MENU */}
        <View style={styles.menu}>
          <Text style={styles.text}>Aqui virá o componente de menu</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
  },
  container: {
    paddingBottom: 50,
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // borderWidth: 4,
    // borderColor: 'blue',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    // borderWidth: 4,
    // borderColor: '#EE1111',
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  profile: {
    width: 38,
    height: 38,
  },
  search: {
    width: '100%',
    // borderWidth: 4,
    // borderColor: '#EECB11',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  places: {
    width: '100%',
    borderWidth: 4,
    borderColor: '#5FE70C',
    flex: 4,
  },
  favorites: {
    width: '100%',
    borderWidth: 4,
    // borderColor: '#CF97EA',
    flex: 4,
  },
  menu: {
    width: '100%',
    borderWidth: 4,
    // borderColor: '#E28A8F',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    height: 24,
  },
  searchContainer: {
    height: 45,
    backgroundColor: '#DEDEDE',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
