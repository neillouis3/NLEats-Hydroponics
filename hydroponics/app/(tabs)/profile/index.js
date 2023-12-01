import { ScrollView, StyleSheet } from 'react-native';
import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import color from "../../../constants/color";
import CardTile from '../../../components/cardTile';
import HeaderText from '../../../components/HeaderText';


export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderText 
        style={styles.heading}
        text="Profile"
        textColor={color.darkGreen}
      />
      <CardTile style={styles.tileContainer}>
        <Text style={styles.tileText}>Neil Louise</Text>
      </CardTile>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tileContainer: {
    backgroundColor: "#9AC58B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 125,
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
    marginTop: 0,
    padding: 0,
    marginBottom: 0,
    
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
