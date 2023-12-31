import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./index";
import LoginScreen from "./login";
import RegisterScreen from "./register";


const Stack = createStackNavigator();
export default function MyStack () {
    return (

            <Stack.Navigator 
                screenOptions={{
                    headerShown: false,
                    
                }}
            >
                <Stack.Screen name="index" component={IndexScreen} />
                <Stack.Screen name="selection" component={RegisterScreen} />    
                <Stack.Screen name="login" component={LoginScreen} />   
                <Stack.Screen name="register" component={RegisterScreen} />
                <Stack.Screen name="registerOrg" component={RegisterScreen} />   

            </Stack.Navigator>

            
    )
}

