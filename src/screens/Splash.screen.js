import React, { useEffect } from "react";
import { Image, SafeAreaView, View, ActivityIndicator } from "react-native";
import Tailwind from "../libs/tailwind/Tailwind.lib"

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home")
        }, 2000);
    }, [])

    return (
        <SafeAreaView>
            <View style={ Tailwind.style(`w-full min-h-full bg-white flex flex-col justify-center`) } >
                <View style={ Tailwind.style(`flex flex-col w-full items-center`) } >
                    <Image
                        source={ require("../assets/images/gojek.png") }
                    />
                    <ActivityIndicator
                        color={ "#2FDD92" }
                        size={ 40 }
                        style={ Tailwind.style(`mt-6`) }
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Splash