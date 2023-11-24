import { Alert, Pressable, StyleSheet, ScrollView, Image } from 'react-native';


import { Text, View } from '../../components/Themed';
import { Stack, useRouter } from 'expo-router';
import IndexButton from '../../components/IndexButton';


import GradientText from '../../components/GradientText';
import HeaderText from '../../components/HeaderText';


const IndexScreen = () => {
  const router = useRouter;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/indexLogo.png')} />
      <Stack.Screen options={{headerTitle: ""}} />
      <HeaderText style={styles.heading} text="NLEats"/>
      <GradientText style={styles.subheading} text="Hydroponics"/>     
      <IndexButton
        onPress={() => router.push('/hydroponics/app/(tabs)/login')}
        text="Login"
      />
      <IndexButton
        onPress={() => router.push('/hydroponics/app/(tabs)/register')}
        text="Register"
      />

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
  image:{
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  heading: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 30,
    marginBottom: 20,
  },



});
