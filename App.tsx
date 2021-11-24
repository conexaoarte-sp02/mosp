import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

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
              style={styles.profile}
              source={require('./assets/images/profile.png')}
            />
          </View>
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
  },
  headerContainer: {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
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
});
