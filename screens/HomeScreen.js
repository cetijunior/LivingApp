import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';
import { useFonts } from 'expo-font';



const HomeScreen = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        'PalatinoLinotype': require('../assets/fonts/PalatinoLinotype.ttf'),
        'risque': require('../assets/fonts/risque.ttf'),
        'rochester': require('../assets/fonts/rochester.ttf'),
        'zeyada': require('../assets/fonts/zeyada.ttf'),
    });


    return (
        <View style={tw`flex-1 px-5`}>
            <View style={tw`flex-1 flex-col justify-center items-center `}>

                <View style={tw`flex flex-col items-center justify-center w-full py-18`}>
                    <Text style={[tw`text-7xl text-[#366648] text-center mb-2`, { fontFamily: 'rochester', lineHeight: 100 }]}>
                        Living App
                    </Text>
                    <Text style={[tw`text-2xl text-[#366648] text-center`, { fontFamily: 'zeyada' }]}>
                        Wherever you go, there you are!
                    </Text>
                </View>

                <View style={tw`flex flex-row items-center justify-center py-10 w-full`}>
                    <View style={tw`w-55% px-2`}>
                        <TouchableOpacity
                            style={tw`bg-[#0b3b55] py-3 rounded-xl items-center mb-7`}
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={[tw`text-white text-xl`, { fontFamily: 'risque' }]}>
                                Log In!

                                {/*Login Functionality*/}

                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={tw`bg-green-700 py-3 rounded-xl items-center`}
                            onPress={() => navigation.navigate('SignUp')}>
                            <Text style={[tw`text-white text-xl`, { fontFamily: 'risque' }]}>
                                Create Account

                                {/*Login Functionality*/}


                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    );
};

export default HomeScreen;
