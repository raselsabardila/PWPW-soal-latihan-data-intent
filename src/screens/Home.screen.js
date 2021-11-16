import React from "react";
import { Text, SafeAreaView, View, Image, TouchableHighlight } from "react-native";
import Tailwind from "../libs/tailwind/Tailwind.lib"

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={ Tailwind.style(`min-h-full w-full bg-white flex flex-col items-center justify-center`) } >
                <Image
                    source={ require("../assets/images/gojek.png") }
                />
                <View style={ Tailwind.style(`flex flex-row items-center mt-10`) } >
                    <Image
                        source={ require("../assets/images/menu_gomart.png") }
                        style={ Tailwind.style(`w-32 h-32 mr-4`) }
                    />
                    <Image
                        source={ require("../assets/images/menu_goride.png") }
                        style={ Tailwind.style(`w-32 h-32`) }
                    />
                </View>
                <View style={ Tailwind.style(`flex flex-row items-center mt-4`) } >
                    <TouchableHighlight underlayColor={ "#10101000" } onPress={ () => navigation.navigate("Input") } >
                        <Image
                            source={ require("../assets/images/menu_gofood.png") }
                            style={ Tailwind.style(`w-32 h-32 mr-4`) }
                        />
                    </TouchableHighlight>
                    <Image
                        source={ require("../assets/images/menu_gosend.png") }
                        style={ Tailwind.style(`w-32 h-32`) }
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home