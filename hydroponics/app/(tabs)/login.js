import { Alert, Pressable, StyleSheet, ScrollView, Image, TextInput } from 'react-native';


import { Text, View } from '../../components/Themed';
import { Stack, useRouter } from 'expo-router';
import IndexButton from '../../components/LoginBtn';
import GradientText from '../../components/GradientText';
import HeaderText from '../../components/HeaderText';



const LoginScreen = () => {
  const router = useRouter;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/indexLogo.png')} />
      <Stack.Screen options={{headerTitle: ""}} />
      <HeaderText style={styles.heading} text="NLEats"/>
      <GradientText style={styles.subheading} text="Hydroponics"/>   
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Username"
        keyboardType="numeric"
      /> 
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />   
      <IndexButton
        onPress={() => router.push('/hydroponics/app/(tabs)/login')}
        text="Login"
      />
      <Text>Forgot username or password</Text>


    </ScrollView>
  );
}

export default LoginScreen;