import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Table extends React.Component{
  render(){
    return (
      <View style={styles.grid}>
      <Text style={styles.text}>      no.</Text>
      <Text style={styles.text}>     name            </Text>
      <Text style={styles.text1}>        status           </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'black',
    fontSize: 15,
    fontWeight: "bold",
    color: "white", 
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text1: {
    backgroundColor: 'black',
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    color: "white",     
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },    
  grid: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   }
})