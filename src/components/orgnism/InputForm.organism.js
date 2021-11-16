import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Tailwind from "../../libs/tailwind/Tailwind.lib";

const InputForm = ({ title, sendValue }) => {
    const [borderColor, setBorderColor] = useState("border-gray-300")

    return (
        <View style={ Tailwind.style(`w-full flex flex-row items-center mb-4`) } >
            <Text style={ Tailwind.style(`font-poppins-medium text-lg text-gray-500`) } >
                { title }
            </Text>
            <TextInput
                style={ Tailwind.style(`flex-grow p-0 ml-8 border-b-2 ${borderColor}`) }
                scrollEnabled={ false }
                onPressIn={ () => setBorderColor("border-green-400") }
                onEndEditing={ () => setBorderColor("border-gray-300") }
                onChangeText={ (value) => sendValue(value) }
            />
        </View>
    )
}

export default InputForm