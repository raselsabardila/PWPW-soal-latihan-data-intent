import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Splash from "../screens/Splash.screen"
import Home from "../screens/Home.screen"
import Input from "../screens/Input.screen"
import Order from "../screens/Order.screen"
import Tailwind from "../libs/tailwind/Tailwind.lib"
import { StatusBar } from "react-native"

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <StatusBar hidden={ true } />
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={
                    {
                        title: "GO-JEK",
                        headerTitleStyle: Tailwind.style(`text-white`),
                        headerStyle: Tailwind.style("bg-green-400"),
                    }
                }
            >
                <Stack.Screen name="Splash" component={ Splash } options={ { headerShown: false } } />
                <Stack.Screen name="Home" component={ Home } />
                <Stack.Screen name="Input" component={ Input } />
                <Stack.Screen name="Order" component={ Order } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router