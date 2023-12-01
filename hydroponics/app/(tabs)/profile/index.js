import { ScrollView, StyleSheet } from 'react-native';
import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import color from "../../../constants/color";


export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
