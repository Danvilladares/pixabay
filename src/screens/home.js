import * as React from 'react';
import {
  View,
  StyleSheet,

} from 'react-native';
import Search from '../components/searchbar.js';

function HomeScreen({  navigation,route }) {

    return (
      <View style={styles.styleBg}>
        <View style={styles.style1}>
          <View style={styles.inputview}>
            <Search/>              
          </View>
        </View>
      </View>
    );
 }


export default HomeScreen;

const buttonStyles = StyleSheet.create({
  
  text: {
    fontFamily: 'Poppins-Regular', fontSize: 14,
    lineHeight: 15, color: '#FFFFFF',
  },
});

const styles = StyleSheet.create({
  styleBg: {
    backgroundColor: 'grey', flex: 1,
  }, 

  style1: {
    justifyContent: 'center', alignItems: 'center',
  },
  
  inputview: {
   position: 'relative', top:10,
   paddingTop: 10, height: 56,
   width: '80%',
  },

  container: {
    top: 20, borderRadius: 7, height: 56,
    width: '100%', padding: 20, backgroundColor: 'white',
    shadowColor: '#E7F1FF', shadowOpacity: 0.8,shadowRadius: 2,
    shadowOffset: {height: 1, width: 1,},
  },
  
  


  
});