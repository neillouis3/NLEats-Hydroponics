import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';


import HeaderText from '../../../components/HeaderText';
import color from "../../../constants/color";

export default function ShelfScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <HeaderText 
      style={styles.heading} 
      text='Shelf' 
      textColor={color.darkGreen}
    />
    <Text style={styles.subheading}>Browse your hydroponics</Text>
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
});
