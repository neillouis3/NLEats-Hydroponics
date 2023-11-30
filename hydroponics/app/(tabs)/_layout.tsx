import { Tabs } from "expo-router";

export default () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen 
                name="dashboard" 
                options={{
                    
                }}
            />
            <Tabs.Screen name="shelf" />
            <Tabs.Screen name="profile" />
            
        </Tabs>

    )
}
