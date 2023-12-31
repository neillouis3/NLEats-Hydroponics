import { 
  Alert,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
  TextInput, 
  SafeAreaView,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import {
  Stack, 
  useRouter
} from 'expo-router';

import React, { useState } from 'react';
import HeaderText from '../../components/HeaderText';
import HyperLink from '../../components/HyperLink';
import color from "../../constants/color";
import RegisterBtn from '../../components/RegisterBtn';
import { Formik } from 'formik';

import DateTimePicker from '@react-native-community/datetimepicker';

const LoginScreen = ( {navigation} ) => {
  const router = useRouter;
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  }

  const showDatePicker = () => {
    setShow(true);
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{headerTitle: ""}} />
      <HeaderText 
        style={styles.heading} 
        text="Sign up" 
        textColor={color.darkGreen}
      />

      <HeaderText 
        style={styles.subHeading}
        text="Create your account"
        textColor={color.lightGreen}
      />   
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={date}
          is24Hour={true}
          display="default"
          onChange={onChange}
          
        />
      )}
      
      <Formik
        style={styles.outerFormContainer}
        initialValues={{ fullName: '', email: '' , dateOfBirth: '', password: '', confirmPassword: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => 
          <View style={styles.formContainer}>
            <TextInput
              label="Full Name"
              style={styles.usernameInput}
              placeholder="Full Name"
              keyboardType="email-address"
              autoCapitalize="none"

              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
            
            /> 
            <TextInput
              label="Email"
              style={styles.usernameInput}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"

              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            
            />
            <CustomTextInput
              label="Birthday"
              style={styles.usernameInput}
              placeholder="Date of Birth"


              onChangeText={handleChange('dateOfBirth')}
              onBlur={handleBlur('dateOfBirth')}
              value={dob ? dob.toDateString() : ""}
              isDate={true}
              editable={false}
              showDatePicker={showDatePicker}
            
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
            <TextInput
              label="Password"
              style={styles.passwordInput}
              placeholder="Confirm Password"
              keyboardType="default"
              autoCapitalize="none"

              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry={true}
            
            />  

             
            <RegisterBtn text="Sign up" onPress={handleSubmit}/>
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

      <View style={{
        flexDirection: 'row',
        width: '100%',
        marginTop: 'auto',
        justifyContent: 'center',
      }}>
        <Text style={{
          textAlign: 'center',
          color: color.darkGreen,
          marginTop: 'auto',
          }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={{
            textAlign: 'center',
            color: color.lightGreen,
            fontWeight: 'bold',
            }}>Sign in</Text>
        </TouchableOpacity>
      </View>
      
      

    </View>
  );
}

export default LoginScreen;

const CustomTextInput = ({ label, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      {!isDate && 
        <TextInput style={styles.usernameInput} {...props} />
      }
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput style={styles.usernameInput} {...props} />
        </TouchableOpacity>
      )}

    </View>
  );

};


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
