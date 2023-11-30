import { Tabs } from "expo-router";

export default () => {
    return (
        <Tabs 
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "transparent",
                    position: 'absolute',
                    height: 100,
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    borderRadius: 15,
                    borderColor: 'black',
                    borderStyle: 'solid',
                }
            }}

        >
            <Tabs.Screen 
                name="dashboard" 
                
            />
            <Tabs.Screen name="shelf" />
            <Tabs.Screen name="profile" />
            
        </Tabs>

    )
}
