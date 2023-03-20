import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

=======
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
>>>>>>> 127ffeb90e3f38d804f565175751320715742c4e

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aplicacion de Prueba</Text>
      <Text style={styles.tituloPrincipal}>CAPACITACION DE GIT</Text>
      <Image
        source={{ uri: 'https://es.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png' }}
        style={{ width: 200, height: 150}}
      />
      <Text> - Danny</Text>
      <Text> - Diana</Text>
      <Text> - Juan</Text>
      <Text> - Mayra</Text>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tituloPrincipal: {
    fontSize: 30,
    color: 'darkblue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
