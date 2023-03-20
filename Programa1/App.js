import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>CAPACITACIÓN DE GIT</Text>
      <Image
        source={{ uri: 'https://es.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png' }}
        style={{ width: 200, height: 200 }}
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
