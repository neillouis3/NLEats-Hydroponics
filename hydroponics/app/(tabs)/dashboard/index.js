import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';


import HeaderText from '../../../components/HeaderText';
import color from "../../../constants/color";

export default function DashboardScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderText 
        style={styles.heading} 
        text='Dashboard' 
        textColor={color.darkGreen}
      />
      <Text style={styles.subheading}>Activity</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  heading: {
    fontSize: 75,
    fontWeight: 'bold',
    marginTop: 0,
    padding: 0,
    marginBottom: 0,
    
  },
});
