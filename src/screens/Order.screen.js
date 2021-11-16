import React from "react";
import { Image, SafeAreaView, Text, View, TouchableHighlight } from "react-native";
import Tailwind from "../libs/tailwind/Tailwind.lib";

const Order = ({ navigation, route }) => {
    return (
        <SafeAreaView>
            <View style={ Tailwind.style(`bg-white min-h-full w-full flex flex-col items-center justify-center p-6`) } >
                <Image
                    source={ require("../assets/images/deliv.png") }
                    style={ { width: 100, height: 100 } }
                />
                <View style={ Tailwind.style(`flex flex-col my-8`) } >
                    <Text style={ Tailwind.style(`font-poppins-medium text-sm text-gray-900`) } >
                        { route.params.data.nama }
                    </Text>
                    <Text style={ Tailwind.style(`font-poppins-medium text-sm text-gray-900`) } >
                        { route.params.data.alamat }
                    </Text>
                    <Text style={ Tailwind.style(`font-poppins-medium text-sm text-gray-900`) } >
                        { route.params.data.pesan }
                    </Text>
                </View>
                <TouchableHighlight onPress={ () => navigation.goBack() } style={ Tailwind.style(`w-full`) } >
                    <View style={ Tailwind.style(`w-full flex flex-row justify-center py-4 bg-green-400`) } >
                        <Text style={ Tailwind.style(`font-poppins-semibold text-white text-lg`) } >
                            CANCEL
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

export default Order