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
import LoginBtn from '../../components/LoginBtn';
import { Formik } from 'formik';


const LoginScreen = () => {
  const router = useRouter;
  return (
    <View style={styles.container}>
      <Stack.Screen options={{headerTitle: ""}} />
      <HeaderText 
        style={styles.heading} 
        text="Sign in" 
        textColor={color.darkGreen}
      />

      <HeaderText 
        style={styles.subHeading}
        text="Please sign in to continue"
        textColor={color.lightGreen}
      />   
      
      
      <Formik
        style={styles.outerFormContainer}
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => 
          <View style={styles.formContainer}>
            <TextInput
              label="Username"
              style={styles.usernameInput}
              placeholder="Username"
              keyboardType="email-address"
              autoCapitalize="none"

              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            
            /> 
            <TextInput
              label="Password"
              style={styles.passwordInput}
              placeholder="Password"
              keyboardType="default"
              autoCapitalize="none"

              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            
            /> 

            <HyperLink text="Forgot password?" textColor={color.lightGreen} /> 
            <LoginBtn text="Sign in" onPress={handleSubmit}/>
          </View>
        }

      </Formik>

      <Text style={{
        height: 1,
        backgroundColor: color.darkGreen,
        width: '100%',
        marginTop: 40,
        marginBottom: 40,
        }}></Text>

      <LoginBtn 
        text="Sign in with Google" 
        google={true}
      />

      
      <Text style={{
        textAlign: 'center',
        color: color.darkGreen,
        marginTop: 'auto',
        }}>Don't have account? Sign up</Text>

    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  outerFormContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  
  container: {
    flex: 1,

    backgroundColor:"white",
    padding: '5%',

  },

  usernameInput: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    fontSize: 20,
    borderColor: color.darkGreen,
  },

  passwordInput: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    fontSize: 20,
    borderColor: color.darkGreen,
    marginBottom: 50,
  },

  image:{
    resizeMode: 'stretch',
    width: '75%',
    height: '35%',
    margin: 0,
    padding: 0,
  },
  
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 0,
    padding: 0,
    marginBottom: 0,
    
  },
  subHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 0,
    padding: 0,
    marginBottom: 50,
    
  },



});
