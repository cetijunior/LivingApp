import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import * as Notifications from 'expo-notifications';

const ProfileCreationScreen = ({ navigation }) => {
    const [imageUri, setImageUri] = useState(null);
    const [userName, setUserName] = useState('');

    const [agreeWithTerms, setAgreeWithTerms] = useState(false);
    const [allowNotifications, setAllowNotifications] = useState(false);
    const [date, setDate] = useState(new Date());
    const [birthday, setBirthday] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        setShowDatePicker(Platform.OS === 'ios'); // Keep DatePicker visible for iOS after selection
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setBirthday(currentDate.toISOString().split('T')[0]); // Format YYYY-MM-DD
    };

    const showDatePickerAndroid = () => {
        setShowDatePicker(true); // For Android, trigger the DatePicker display
        if (Platform.OS === 'android') {
            // For Android, directly invoke the DateTimePicker as a modal
            DateTimePicker.open({
                value: date,
                onChange: onChangeDate,
                mode: 'date',
            });
        }
    };

    const requestNotificationPermission = async () => {
        const { status } = await Notifications.requestPermissionsAsync();
        return status === 'granted';
    };

    const handleNotificationSwitch = async () => {
        const hasPermission = await requestNotificationPermission();
        setAllowNotifications(hasPermission);
    };

    const pickImage = async () => {
        // Request permissions
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('You have refused to allow this app to access your photos!');
            return;
        }

        // Launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.uri);
        }
    };

    const finishProfileCreation = () => {
        console.log({
            userName,
            birthday,
            agreeWithTerms,
            allowNotifications,
            imageUri,
        });
        navigation.navigate('MainMenu', { userName: 'YourUserName', imageUri: 'YourImageUri' });
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={tw`flex-1 px-3`}>
            <View style={tw`flex-1 justify-center pt-15 px-5`}>
                {/* Section 1 - Top */}
                <View style={tw`items-center`}>
                    <Text style={[tw`text-5xl text-[#366648] mb-5 text-center pt-10`, { fontFamily: 'rochester', }]}>
                        Tell us more about yourself!
                    </Text>

                    <TouchableOpacity onPress={pickImage}>
                        <Image
                            source={imageUri ? { uri: imageUri } : require('../assets/plus.png')}
                            style={tw`rounded-full w-32 h-32 mb-4`}
                        />
                    </TouchableOpacity>


                    <Text style={[tw`text-red-400 text-xl text-center`, { fontFamily: 'risque' }]}>
                        Please select your avatar
                    </Text>
                </View>

                {/* Section 2 - Middle */}
                <View style={tw`w-full items-start py-5`}>
                    <View style={tw`w-full items-start py-8`}>
                        <TextInput style={tw`border-2 border-[#15631b] w-full px-4 py-2 rounded mb-4`} placeholder="User Name" value={userName} onChangeText={setUserName} />

                        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={tw` w-full mb-4`}>
                            <View style={tw`border-2 border-[#15631b] flex-row items-center justify-between w-full px-4 py-2 rounded mb-4`}>
                                <Text style={tw`opacity-90`}>{"Select your birthday"}</Text>
                                {showDatePicker && Platform.OS === 'ios' && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        mode={'date'}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChangeDate}
                                    />
                                )}

                            </View>
                            {Platform.OS === 'android' && showDatePicker && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={'date'}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChangeDate}
                                />
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={tw`flex-row items-center mb-4`}>
                        <Switch value={agreeWithTerms} onValueChange={setAgreeWithTerms} />
                        <Text style={tw`ml-2 text-red-400`}>
                            Agree with Terms of Service
                        </Text>
                    </View>

                    <View style={tw`flex-row mb-10 justify-center items-center`}>
                        <Switch value={allowNotifications} onValueChange={setAllowNotifications} />
                        <Text style={tw`ml-2 text-red-400`}>
                            Allow Notifications
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={tw`bg-[#0b3b55] py-3 w-full rounded-xl items-center mb-7`}
                        onPress={() => finishProfileCreation()}>
                        <Text style={[tw`text-white text-xl`, { fontFamily: 'risque' }]}>
                            Finish!
                        </Text>
                    </TouchableOpacity>

                </View >
            </View >
        </KeyboardAvoidingView >
    );
};

export default ProfileCreationScreen;
