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
        text="Dashboard"
        textColor={color.darkGreen}
      />
      <HeaderText 
        style={styles.subHeading}
        text="Activity"
        textColor={color.lightGreen}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:"white",
    padding: '5%',
  },

  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 0,
    padding: 0,
    marginBottom: 40,
    
  },
  subHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 0,
    padding: 0,
    marginBottom: 0,
    
  },
});
