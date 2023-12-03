import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./index";
import LoginScreen from "./login";
import RegisterScreen from "./register";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
export default function MyStack () {
    return (

            <Stack.Navigator 
                screenOptions={{
                    headerShown: false,
                    
                }}
            >
                <Stack.Screen name="index" component={IndexScreen} />    
                <Stack.Screen name="login" component={LoginScreen} />   
                <Stack.Screen name="register" component={RegisterScreen} />   
            </Stack.Navigator>

            
    )
}

