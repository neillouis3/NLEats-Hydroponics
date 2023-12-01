import { Dimensions, Alert, Pressable, StyleSheet, ScrollView, Image } from 'react-native';


import { Text, View } from '../../components/Themed';
import { Stack, useRouter, Link } from 'expo-router';
import LoginBtn from '../../components/LoginBtn';
import RegisterBtn from '../../components/RegisterBtn';

import GradientText from '../../components/GradientText';
import HeaderText from '../../components/HeaderText';
import color from "../../constants/color";
import Svg, { Path } from 'react-native-svg';



const IndexScreen = () => {
  const router = useRouter;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/indexLogo.png')} />
      <Stack.Screen options={{headerTitle: ""}} />
      <HeaderText style={styles.heading} text="NLEats" textColor={color.darkGreen}/>
      <GradientText style={styles.subheading} text="Hydroponics"/>     
      <Link replace href={'/login'} asChild>
        <LoginBtn text="Sign in" />
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
    padding: "5%",


  },


  image:{
    resizeMode: 'stretch',
    width: '75%',
    height: '35%',
    margin: 0,
    padding: 0,
  },
  heading: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 0,
    padding: 0,
    marginBottom: 0,
    
  },
  subheading: {
    fontSize: 40,
    marginTop: 0,
    padding: 0,
    marginBottom: 200,
  },



});
