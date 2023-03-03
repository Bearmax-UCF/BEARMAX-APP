import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';


export default function Main( {navigation} ) {
  return (
    <View style={styles.container}>
        <Image 
            style={{width: 150, height: 150,}}
            source={require('./../assets/face.png')} 
        />
        <Button 
          title="ahh"
          onPress={() => navigation.navigate("Main")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#856A5d',
    justifyContent: 'center', 
    alignItems: 'center'
  },
});
