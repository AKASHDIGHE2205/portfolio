import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Button from '../component/button';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      {/* <ImageBackground
        source={require('../assets//portfilo2.jpg')}
        className='flex-1 w-full h-full'
        resizeMode="cover"
      > */}
      <LinearGradient
        colors={['#FFDED9', '#D5FFFC']}
        className="flex-1"
      >
        <View className="pt-10 items-center">
          <Text className="text-red-500 text-3xl font-semibold left-[-20px]">
            Welcome to my portfolio!
          </Text>
        </View>
        <View>
          <View className='flex justify-center items-center pt-10'>
            <Image
              source={require('../assets/hello gifs.gif')}
              style={{ width: 300, height: 400 }}
              resizeMode='cover'
            />
          </View>
        </View>
        <View className="flex-1 justify-end items-center mb-10">
          <Text className="text-bloack text-2xl mb-4 text-center">
            Welcome to your app!
            <Text className='text-red-500'>Let's get started.</Text>
          </Text>
          <Button
            title="Get Started"
            onPress={() => router.push("/home")}
            styles="bg-[#56CCF2]  w-[23rem] h-12 justify-center items-center rounded-lg shadow-lg"
          />
        </View>

        <StatusBar style="light" />
      </LinearGradient>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

export default App;
