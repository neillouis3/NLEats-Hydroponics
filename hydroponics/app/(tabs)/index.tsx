import { Alert, Pressable, StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Stack, useRouter } from 'expo-router';

const IndexScreen = () => {
  const router = useRouter;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NLEats</Text>
      <Text style={styles.title}>Hydroponics</Text>
      <Pressable style={} onPress={}>
        <Text>Login</Text>
      </Pressable> 
    </View>
  );
}



export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  
});
