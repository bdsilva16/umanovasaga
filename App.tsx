import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const handlePress = () => {
    setContador(contador + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>VOCÊ CLICOU</Text>
      <Text style={styles.text}>{contador}</Text>

      <TouchableHighlight
        style={styles.button}
        onPress={handlePress}
      >
        <Text >Clique aqui!!!</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    bottom: 50,
    borderColor: 'red',
    borderWidth: 2,
  },

  text: {
    fontSize: 50,
    marginBottom:100,
    
  }


});
