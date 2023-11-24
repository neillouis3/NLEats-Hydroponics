import { Alert, Pressable, StyleSheet, ScrollView } from 'react-native';


import { Text, View } from '../../components/Themed';
import { Stack, useRouter } from 'expo-router';

import loginButton from '../../components/loginButton';
import registerButton from '../../components/registerButton';


const IndexScreen = () => {
  const router = useRouter;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>NLEats</Text>
      <Text style={styles.title}>Hydroponics</Text>

    </ScrollView>
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
    color: "blue",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  
});
