import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import color from "../../constants/color";

export default () => {
    return (
        <Tabs 
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#F6F6F9",
                    position: 'absolute',
                    height: 100,
                    left: '5%',
                    right: '5%',

                    borderRadius: 15,
                    borderColor: 'black',
                    borderStyle: 'solid',
                }
            }}

        >
            <Tabs.Screen 
                name="dashboard" 
                options={{
                    tabBarLabel: 'Dashboard',

                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons 
                            name={focused ? "home" : "home-outline"} 
                            size={size} 
                            color={focused ? "#255A13" : "black"} 
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="shelf" 
                options={{
                    tabBarLabel: 'Shelf',
                    
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons 
                            name={focused ? "leaf" : "leaf-outline"} 
                            size={size} 
                            color={focused ? "#255A13" : "black"} 
                        />
                    )
                }}
            
            />
            <Tabs.Screen 
                name="profile" 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons 
                            name={focused ? "person" : "person-outline"} 
                            size={size} 
                            color={focused ? "#255A13" : "black"} 
                        />
                    ),

                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        color: focused ? "#255A13" : "black",
                    }

                }}
            
            />
            
        </Tabs>

    )
}
