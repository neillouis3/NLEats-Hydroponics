import { ScrollView, StyleSheet, Pressable } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';


import HeaderText from '../../../components/HeaderText';
import color from "../../../constants/color";
import CardTile from '../../../components/cardTile';

export default function ShelfScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderText 
        style={styles.heading}
        text="Shelf"
        textColor={color.darkGreen}
      />

      <CardTile style={styles.tileContainer}>
        <Text style={styles.tileHeading}>Your hydroponics is ready to set up</Text>
        <Text style={styles.tileSubHeading}>Connect your hydroponics to get started</Text>
        <Pressable style={styles.btnContainer}>
          <Text 
            style= {{
              color: color.darkGreen,
              fontWeight: 'bold',
            }}
          >
            Add
          </Text>
        </Pressable> 
      </CardTile>

      <HeaderText 
        style={styles.subHeading}
        text="Browse your hydroponics"
        textColor={color.lightGreen}
      />

  </ScrollView>
  );
  
}

const styles = StyleSheet.create({

  btnContainer: {
    marginTop: 25,
    backgroundColor: color.white,
    width: 50,
    height: 25,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  tileContainer: {
    backgroundColor: "#9AC58B",
    padding: "5%",
    borderRadius: 10,
    height: 125,
  },

  tileHeading: {
    fontWeight: 'bold',
    marginTop: 0,
    padding: 0,
    marginBottom: 0,
    color: color.darkGreen,
  },

  tileSubHeading: {
    marginTop: 0,
    padding: 0,
    marginBottom: 0,
    color: color.darkGreen,
  },

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
    marginBottom: 20,
    
  },
  subHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    padding: 0,

    
  },

  tileText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 0,
    padding: 0,
    marginBottom: 0,
    color: color.white,
  },
});
