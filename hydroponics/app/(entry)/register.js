import { 
  Alert,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
  TextInput, 
  SafeAreaView
} from 'react-native';


import { Text, View } from '../../components/Themed';
import { Stack, useRouter, Link } from 'expo-router';
import HeaderText from '../../components/HeaderText';
import HyperLink from '../../components/HyperLink';
import color from "../../constants/color";
import RegisterBtn from '../../components/RegisterBtn';
import { Formik } from 'formik';

const RegisterScreen = () => {
  const router = useRouter;
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{headerTitle: ""}} />
      <HeaderText style={styles.heading} text="Register" textColor={color.darkGreen}/>
      <Text style={styles.subheading}>Start your hydroponics journey</Text>    
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
        <RegisterBtn style={styles.btn}text="Register"/>
      </Link>

    </ScrollView>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:"white",
    padding: '5%',
  },
  btn: {
    backgroundColor: 'green',
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