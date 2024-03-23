import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import tw from 'twrnc'

export default function App({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getCameraPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={tw`flex-1 flex-col justify-center rounded-3xl`}>

            <View style={[tw`w-full pt-15 px-3 rounded-b-3xl flex-col items-center`]}>

                <View style={tw`flex-row justify-between items-center py-4 w-full`}>
                    <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} style={tw`items-start`}>
                        <Text style={tw`text-lg text-[#5e9152]`}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`items-center`}>
                        <Text style={tw`text-4xl font-semibold text-black`}>Missions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`items-end`}>
                        <Text style={tw`text-lg text-[#5e9152]`}>Filter</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={tw`flex-1 flex-col px-10 justify-center`}>
                <View style={tw`flex-1 flex-col px-5 py-20 justify-center`}>
                    <CameraView
                        style={tw`flex-1 justify-center`}
                        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                        barcodeScannerSettings={{
                            barcodeTypes: ["qr", "pdf417"],
                        }}
                    />

                </View>

                <TouchableOpacity
                    style={tw`bg-[#0b3b55] py-3 w-full rounded-xl items-center mb-7`}
                    onPress={() => setScanned(false)}
                >
                    <Text style={[tw`text-white text-xl`, { fontFamily: 'risque' }]}>
                        Scan Again!
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}