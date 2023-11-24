import { Alert, Pressable, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Text, View } from '../../components/Themed';
import { Stack, useRouter } from 'expo-router';
import LoginButton from '../../components/LoginButton';
import RegisterButton from '../../components/RegisterButton';
import MaskedView from '@react-native-masked-view/masked-view';
import GradientText from '../../components/GradientText';

const IndexScreen = () => {
  const router = useRouter;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{headerTitle: ""}} />
      <Text style={styles.title}>NLEats</Text>
      <GradientText text="Hydroponics"/>     
      <LoginButton
      />
      <RegisterButton
      />

    </ScrollView>
  );
}

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(37, 90, 19, 1)',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

});
