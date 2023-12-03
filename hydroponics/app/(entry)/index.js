import { Dimensions, Alert, Pressable, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';


import { Text, View } from '../../components/Themed';
import { Stack, useRouter, Link } from 'expo-router';
import LoginBtn from '../../components/LoginBtn';
import RegisterBtn from '../../components/RegisterBtn';

import GradientText from '../../components/GradientText';
import HeaderText from '../../components/HeaderText';
import color from "../../constants/color";
import Svg, { Path } from 'react-native-svg';



const IndexScreen = ( {navigation} ) => {
  const router = useRouter;
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={require('../../assets/images/indexLogo.png')} 
      />

      <HeaderText 
        style={styles.heading} 
        text="NLEats" 
        textColor={color.darkGreen}
      />

      <GradientText 
        style={styles.subheading} 
        text="Hydroponics"
      />   
      
      
      {/* Routing buttons, to add more buttons check (entry)/_layout.tsx */}
      <TouchableOpacity 
        style={styles.signInContainer}
        onPress={() => navigation.navigate('login')}
      >  
        <Text style={styles.signIn}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.registerContainer} 
        onPress={() => navigation.navigate('register')}
      >
        <Text style={styles.register}>Register</Text>
      </TouchableOpacity>

      {/* This is the wave background */}
      <View
        style={styles.waveBox}
      >
        <Svg
          height="500"
          width={screenWidth}
          viewBox="0 0 1440 320"
          style={{position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: -1}}
        >
          <Path 
            d="M0,160L80,133.3C160,107,320,53,480,74.7C640,96,800,192,960,218.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            fill={color.lightGreen} 
          />
        </Svg>
      </View>
    </View>
  );
}
const screenWidth = Dimensions.get('window').width;

export default IndexScreen;

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: color.darkGreen,
    borderRadius: 90,
    paddingVertical: 0,
    paddingHorizontal: 75,
    marginBottom: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerContainer: {
    backgroundColor: color.lightGreen,
    borderWidth: 1,
    borderRadius: 90,
    paddingVertical: 0,
    paddingHorizontal: 75,
    marginBottom: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: color.darkGreen,
  },
  
  signIn: {
    fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
    
        margin: 0,
        textAlign: 'center',
  },

  register: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',

    margin: 0,
    textAlign: 'center',
  },

  waveBox: {
    backgroundColor: color.lightGreen,
    height: 220,
    width: screenWidth, 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    zIndex: -1 
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',


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
