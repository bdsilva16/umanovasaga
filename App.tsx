import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as Font from "expo-font"


export default function App() {
  const [contador, setContador] = useState(0);

  const handlePress = () => {
    setContador(contador + 1);
  };

  const reiniciarContagem = () => {
    setContador(0);
  };

  const [fonteCarregada, setFonteCarregada] = useState(false)


  async function loadFonts(){
    await Font.loadAsync({
      Display_Regular: require('./assets/DM_Serif_Display/DMSerifDisplay-Regular.ttf'),
      Display_Italic: require('./assets/DM_Serif_Display/DMSerifDisplay-Italic.ttf'),
      Marker_Regular: require('./assets/Permanent_Marker/PermanentMarker-Regular.ttf'),
      Start2P_Regular: require('./assets/Press_Start_2P (1)/PressStart2P-Regular.ttf')
    });
  }

  useEffect(() =>{
    loadFonts()
   .then(() => {
    setFonteCarregada(true);
   })
   .catch((error) => {
    console.log('Ocorreu um erro',error);
   })
  },[])

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>VOCÊ CLICOU</Text>
      <Text style={{ fontSize: 200, marginBottom: 250 }}>{contador}</Text>

      <View style={styles.containerbutton}>
        {fonteCarregada}
        <TouchableHighlight style={styles.button} onPress={handlePress}>
          <Text>Clique aqui!!!</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.resetButton} onPress={reiniciarContagem}>
          <Text>Reiniciar</Text>
        </TouchableHighlight>
      </View>

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
    borderColor: 'red',
    borderWidth: 2,
    

  },

  resetButton: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 100,
    borderColor: 'blue',
    borderWidth: 2,
    margin:10

  },

  text: {
    fontSize: 50,
    marginBottom: 20,
  },

  containerbutton: {
    flexDirection: 'row',
    position: "absolute",
    width: "100%",
    height: 200,
    bottom: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
