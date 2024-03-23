import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';
import { useFonts } from 'expo-font';


const SignUpScreen = ({ navigation }) => {

    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const emailInputStyle = tw.style(`border-2 w-full px-3 py-4 rounded-xl mb-4`, {
        'border-[#15631b83]': !isEmailFocused,
        'border-[#3dc548]': isEmailFocused,
    });

    const passwordInputStyle = tw.style(`border-2 w-full px-3 py-4 rounded-xl mb-4`, {
        'border-[#15631b83]': !isPasswordFocused,
        'border-[#3dc548]': isPasswordFocused,
    });

    const [] = useFonts({
        'PalatinoLinotype': require('../assets/fonts/PalatinoLinotype.ttf'),
        'risque': require('../assets/fonts/risque.ttf'),
        'rochester': require('../assets/fonts/rochester.ttf'),
        'zeyada': require('../assets/fonts/zeyada.ttf'),
    });


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw`flex-1`}
        >
            <ScrollView contentContainerStyle={tw`flex-1 justify-center pt-10 px-5`}>
                {/* Section 1 - Top */}
                <View>
                    <Text style={[tw`text-7xl text-[#366648] text-center pt-10`, { fontFamily: 'rochester', lineHeight: 100 }]}>
                        Welcome,
                    </Text>
                    <Text style={[tw`text-3xl text-[#366648]  text-center mb-8`, { fontFamily: 'rochester', }]}>
                        Glad to see you again!
                    </Text>
                </View>

                {/* Section 2 - Middle */}
                <View style={tw` py-20 `}>
                    <View style={tw`items-center`}>
                        <TextInput
                            style={emailInputStyle}
                            placeholder="exmale@email.com"
                            value={null}

                            onFocus={() => setIsEmailFocused(true)}
                            onBlur={() => setIsEmailFocused(false)}
                        />
                        <TextInput
                            style={passwordInputStyle}
                            placeholder="password"
                            secureTextEntry={true}
                            value={null}

                            onFocus={() => setIsPasswordFocused(true)}
                            onBlur={() => setIsPasswordFocused(false)}
                        />

                    </View>

                    <View style={tw` items-end `}>
                        <TouchableOpacity>
                            <Text style={[tw` text-red-400`, { fontFamily: 'risque', }]}>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={tw` items-center `}>
                        <TouchableOpacity
                            style={tw`flex w-50% bg-[#07770b] py-3 rounded-xl items-center mt-5`}
                            onPress={() => navigation.navigate('MainMenu')}>
                            <Text style={[tw`text-white text-xl`, { fontFamily: 'risque' }]}>
                                Login!
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Section 3 - Bottom */}
                <View>
                    <View style={tw`flex-row items-center w-full mb-4`}>
                        <View style={tw`flex-1 h-0.5 bg-gray-300`}></View>
                        <Text style={[tw`px-4`, { fontFamily: 'risque' }]}>
                            Or Sign In With
                        </Text>
                        <View style={tw`flex-1 h-0.5 bg-gray-300`}></View>
                    </View>

                    <View style={tw`flex flex-row justify-around items-center w-full mb-10`}>
                        <TouchableOpacity
                            style={tw`items-center`}
                            onPress={() => console.log('Sign in with Facebook pressed')}>
                            <Image source={require('../assets/fbpng.png')} style={tw`h-10 w-10 mb-2`} />
                            <Text style={{ fontFamily: 'risque' }}>
                                Facebook
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={tw`items-center`}
                            onPress={() => console.log('Sign in with Google pressed')}>
                            <Image source={require('../assets/ggl.png')} style={tw`h-10 w-10 mb-2`} />
                            <Text style={{ fontFamily: 'risque' }}>
                                Google
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={[tw`text-red-600 text-center`, { fontFamily: 'risque' }]}>
                            Don't have an Account? Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    );
};

export default SignUpScreen;
