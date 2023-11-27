import { Alert, Pressable, StyleSheet, ScrollView, Image } from 'react-native';


import { Text, View } from '../../components/Themed';
import { Stack, useRouter, Link } from 'expo-router';
import LoginBtn from '../../components/LoginBtn';
import RegisterBtn from '../../components/RegisterBtn';


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
      <Link href={'/login'} asChild>
        <LoginBtn text="Login" />
      </Link>
      <Link replace href={'/register'} asChild>
        <RegisterBtn text="Register"/>
      </Link>



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
    resizeMode: 'stretch',
    width: '75%',
    height: '35%',
    margin: 0,
    padding: 0,
  },
  heading: {
    fontSize: 100,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 5,
  },
  subheading: {
    fontSize: 30,
    marginBottom: 20,
  },



});
