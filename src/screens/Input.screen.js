import React from "react";
import { Image, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import InputForm from "../components/orgnism/InputForm.organism";
import Tailwind from "../libs/tailwind/Tailwind.lib"

const Input = ({ navigation }) => {
    const form = {
        nama: "",
        alamat: "",
        pesan: ""
    }

    return (
        <SafeAreaView>
            <View style={ Tailwind.style(`w-full min-h-full bg-white flex flex-col p-6 items-center`) } >
                <Image
                    source={ require("../assets/images/menu_gofood.png") }
                    style={ Tailwind.style(`w-32 h-32`) }
                />
                <Text style={ Tailwind.style(`font-poppins-semibold text-green-400 text-3xl mt-6`) } >
                    Order Food
                </Text>
                <View style={ Tailwind.style(`flex flex-col mt-10`) } >
                    <InputForm title={ "Nama" } sendValue={ (value) => form.nama = value } />
                    <InputForm title={ "Alamat" } sendValue={ (value) => form.alamat = value } />
                    <InputForm title={ "Pesan" } sendValue={ (value) => form.pesan = value } />
                </View>
                <TouchableHighlight onPress={ () => navigation.navigate("Order", { data: form }) } style={ Tailwind.style(`w-full mt-4`) } >
                    <View style={ Tailwind.style(`w-full flex flex-row justify-center py-4 bg-green-400`) } >
                        <Text style={ Tailwind.style(`font-poppins-semibold text-white text-lg`) } >
                            ORDER
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

export default Input