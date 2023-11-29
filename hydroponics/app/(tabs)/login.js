import { Alert, Pressable, StyleSheet, ScrollView, Image, TextInput } from 'react-native';


import { Text, View } from '../../components/Themed';
import { Stack, useRouter, Link } from 'expo-router';
import IndexButton from '../../components/LoginBtn';
import GradientText from '../../components/GradientText';
import HeaderText from '../../components/HeaderText';
import HyperLink from '../../components/HyperLink';
import color from "../../constants/color";
import LoginBtn from '../../components/LoginBtn';


const LoginScreen = () => {
  const router = useRouter;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{headerTitle: ""}} />
      <HeaderText style={styles.heading} text="Login" textColor={color.darkGreen}/>
      <Text style={styles.subheading}>Access your hydroponics</Text>   
      <TextInput
        style={styles.input}
        placeholder="Username"
        keyboardType="numeric"
      /> 
      <TextInput
        style={styles.input}

        placeholder="Password"
        keyboardType="numeric"
      />
      <HyperLink text="Forgot password?" />   

      <Link href={'/dashboard'} asChild>
        <LoginBtn text="Login" />
      </Link>

      
      <Text>Don't have account? Sign up</Text>

    </ScrollView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '75%',
  },

  image:{
    resizeMode: 'stretch',
    width: '75%',
    height: '35%',
    margin: 0,
    padding: 0,
  },
  heading: {
    fontSize: 75,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 5,
  },
  subheading: {
    fontSize: 15,
    marginBottom: 20,
  },



});
