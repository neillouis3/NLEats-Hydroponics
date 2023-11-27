import { Alert, Pressable, StyleSheet, ScrollView, Image, TextInput } from 'react-native';


import { Text, View } from '../../components/Themed';
import { Stack, useRouter, Link } from 'expo-router';

import RegisterBtn from '../../components/RegisterBtn';

import GradientText from '../../components/GradientText';
import HeaderText from '../../components/HeaderText';


const RegisterScreen = () => {
  const router = useRouter;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{headerTitle: ""}} />
      <HeaderText style={styles.heading} text="Register"/>
      <Text style={styles.subheading}>Enter your details to register</Text>    
      <TextInput
        style={styles.input}

        placeholder="Username"
        keyboardType="numeric"
      /> 
      <TextInput
        style={styles.input}

        placeholder="Email"
        keyboardType="numeric"
      />       
      <TextInput
        style={styles.input}

        placeholder="Password"
        keyboardType="numeric"
      />
      <Link replace href={'/index'} asChild>
        <RegisterBtn text="Register"/>
      </Link>

    </ScrollView>
  );
}

export default RegisterScreen;

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