import { Alert, Pressable, StyleSheet, ScrollView, Image } from 'react-native';


import { Text, View } from '../../components/Themed';
import { Stack, useRouter } from 'expo-router';
import IndexButton from '../../components/IndexButton';


import GradientText from '../../components/GradientText';
import HeaderText from '../../components/HeaderText';


const RegisterScreen = () => {
  const router = useRouter;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/indexLogo.png')} />
      <Stack.Screen options={{headerTitle: ""}} />
      <HeaderText style={styles.heading} text="NLEats"/>
      <GradientText style={styles.subheading} text="Hydroponics"/>     

      <IndexButton
        onPress={() => router.push('/hydroponics/app/(tabs)/register')}
        text="Register"
      />

    </ScrollView>
  );
}

export default RegisterScreen;