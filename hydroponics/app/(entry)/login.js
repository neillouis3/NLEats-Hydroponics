import { 
  Alert,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
  TextInput 
} from 'react-native';


import { Text, View } from '../../components/Themed';
import { Stack, useRouter, Link } from 'expo-router';
import HeaderText from '../../components/HeaderText';
import HyperLink from '../../components/HyperLink';
import color from "../../constants/color";
import LoginBtn from '../../components/LoginBtn';
import { Formik } from 'formik';


const LoginScreen = () => {
  const router = useRouter;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{headerTitle: ""}} />
      <HeaderText style={styles.heading} text="Sign in" textColor={color.darkGreen}/>
      <Text style={styles.subheading}>Please sign in to continue</Text>   
      
      
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => 
          <View>
            <TextInput
              label="Username"
              style={styles.input}
              placeholder="Username"
              keyboardType="email-address"
              autoCapitalize="none"

              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            
            /> 
            <TextInput
              label="Password"
              style={styles.input}
              placeholder="Password"
              keyboardType="default"
              autoCapitalize="none"

              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            
            /> 

            <HyperLink text="Forgot password?" /> 
            <LoginBtn text="Sign in" onPress={handleSubmit}/>
          </View>
        }

      </Formik>
      
      
      
      
      
        

      


      <Text>Or</Text>

      <LoginBtn text="Login by Gmail" />


      
      <Text>Don't have account? Sign up</Text>

    </ScrollView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:"white",
    padding: '5%',

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
