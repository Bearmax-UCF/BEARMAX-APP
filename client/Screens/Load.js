import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';


export default function Loading( {navigation} ) {
  return (
    <View style={styles.container}>
        <Image 
            style={styles.logo}
            source={require('./../assets/face.png')} 
        />

        <Text style={styles.assist}>Place Holder for Bearmax STT</Text>

        <View style={styles.container2}>
          <Pressable style={styles.button} >
            <Text style={styles.text}>Calibrate</Text>
          </Pressable>

          <Pressable style={styles.button1} >
            <Text style={styles.text}>Emotion Recognition</Text>
          </Pressable>
        </View>

        <View style={styles.container2}>
          <Pressable style={styles.button1} >
            <Text style={styles.text}>Help</Text>
          </Pressable>
          <Pressable style={styles.button} >
            <Text style={styles.text}>Engage</Text>
          </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#856A5d',
    alignItems: 'center'
  },
  container2: {
    flexDirection: 'row',
    marginTop: 20,
  },
  logo: {
    width: 250, 
    height: 250,
    marginTop: 50,
  },
  button: {
    backgroundColor: '#56b19c',
    paddingVertical: 40,
    width: 180,
    height: 100,
    borderRadius: 4,
    elevation: 3,
    marginRight: 8,
    
  },
  button1: {
    backgroundColor: '#35604e',
    paddingVertical: 40,
    height: 100,
    width: 180,
    borderRadius: 4,
    elevation: 3,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center'
  },
  assist: {
    backgroundColor: '#60463b',
    width: 365,
    height: 50,
    textAlign: 'center',
    paddingVertical: 15,
    marginTop: 50,

    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
