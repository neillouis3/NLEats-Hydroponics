import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import color from "../../constants/color";

export default () => {
    return (
        <Tabs 
            initialRouteName="shelf"
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#F6F6F9",
                    position: 'absolute',
                    height: 100,
                    left: '5%',
                    right: '5%',

                    borderRadius: 85,
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
                    ),
                    tabBarActiveTintColor: "#255A13",
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
                    ),
                    tabBarActiveTintColor: "#255A13",
                }}
            
            />
            <Tabs.Screen 
                name="profile" 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({size, focused }) => (
                        <Ionicons 
                            name={focused ? "person" : "person-outline"} 
                            size={size} 
                            color={focused ? "#255A13" : "black"} 
                        />
                    ),
                    tabBarActiveTintColor: "#255A13",


                }}
    
            />
            
        </Tabs>

    )
}
