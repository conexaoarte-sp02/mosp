import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native';
import TitleHome from './components/Home/TitleHome';
import Search from './components/Search';
import Places from './components/Places/Places';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* TITLE HOME */}
        <View style={styles.title}>
          <TitleHome
            title="Descubra"
            subtitle="lugares incríveis"            
          />
        </View>

        {/* SEARCH */}
        <View style={styles.search}>
          <Search />
        </View>

        {/* PLACES */}
        <View style={styles.places}>
          <Places
            title="Locais populares"
          />
        </View>

        {/* FAVORITES */}
        <View style={styles.favorites}>
          <Places
            title="Meus locais favoritos"
          />
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
  title: {
    width: '100%',
    flex: 1,
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
    // borderWidth: 4,
    // borderColor: '#5FE70C',
    flex: 4,
  },
  favorites: {
    width: '100%',
    // borderWidth: 4,
    // borderColor: '#CF97EA',
    flex: 4,
  },
  menu: {
    width: '100%',
    borderWidth: 4,
    // borderColor: '#E28A8F',
    flex: 1,
  },
});
