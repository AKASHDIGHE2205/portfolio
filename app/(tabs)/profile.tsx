import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const ProfileScreen = () => {
  const handleLinkedin = () => {
    Linking.openURL('https://in.linkedin.com/in/akash-dighe-006958239')
  }
  const handlegithub = () => {
    Linking.openURL('https://github.com/AKASHDIGHE2205')
  }

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        colors={['#FFDED9', '#D5FFFC']}
        className="flex-1 p-4"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

          <View className="flex-row justify-between items-center mt-10">
            <LinearGradient
              colors={['#fd1d1d', '#fcb045', '#f7b731', '#ff7e5f', '#d15b94']}
              style={{
                borderRadius: 9999,
                padding: 4,
              }}
            >
              <Image
                source={require('../../assets/profile.jpg')}
                className="w-32 h-32 rounded-full"
              />
            </LinearGradient>
            <View className="ml-4 flex-1">
              <Text className="text-black text-3xl font-bold ">Akash Dighe</Text>
              <Text className="text-black text-xl font-medium">Fullstack Developer | React Developer | React Native</Text>
              <Text className="text-black text-sm mt-2">Location: Kharadi, Pune, Maharashtra</Text>
            </View>
          </View>

          {/* About Me Section */}
          <View className="mb-8">
            <Text className="text-black text-2xl font-semibold mb-2">About Me</Text>
            <Text className="text-black text-lg">
              I am a Full Stack Developer with expertise in React.js and React Native, building dynamic web and mobile applications. I have strong experience with Node.js, Express.js, and MySQL, focusing on creating seamless and scalable solutions. Passionate about continuous learning, I strive to deliver high-quality, innovative products that solve real-world challenges.
            </Text>
          </View>

          {/* Contact Info Section */}
          <View className="mb-8">
            <Text className="text-black text-2xl font-semibold mb-2">Contact Info</Text>
            <View className="space-y-2">
              <Text className="text-black text-lg">Email: akashdighe2205@gmail.com</Text>
              <Text className="text-black text-lg">Phone: +91 9370331608</Text>
              <Text className="text-black text-lg">LinkedIn:
                <Text className='text-blue-700 underline' onPress={handleLinkedin}>https://in.linkedin.com/in/akash-dighe-006958239</Text>
              </Text>
              <Text className="text-black text-lg">GitHub:
                <Text className='text-blue-700 underline' onPress={handlegithub}>https://github.com/AKASHDIGHE2205</Text>
              </Text>
              {/* <Text className="text-black text-lg">Portfolio: akash.dev</Text> */}
            </View>
          </View>

          {/* Skills Section */}
          <View className="mb-8">
            <Text className="text-black text-2xl font-semibold mb-2">Skills & Technologies</Text>
            <View className="flex-row flex-wrap gap-3">
              <TouchableOpacity className="bg-white rounded-full px-4 py-2">
                <Text className="text-gray-800">React</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white rounded-full px-4 py-2">
                <Text className="text-gray-800">React Native</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white rounded-full px-4 py-2">
                <Text className="text-gray-800">Node</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white rounded-full px-4 py-2">
                <Text className="text-gray-800">Express.js</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white rounded-full px-4 py-2">
                <Text className="text-gray-800">MySQL</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white rounded-full px-4 py-2">
                <Text className="text-gray-800">MongoDB</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white rounded-full px-4 py-2">
                <Text className="text-gray-800">Express.js</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Availability Section */}
          <View className="mb-8">
            <Text className="text-black text-2xl font-semibold mb-2">Availability</Text>
            <Text className="text-black text-lg">
              Currently available for freelance projects and full-time opportunities. Feel free to reach out!
            </Text>
          </View>

          <View className="flex-row justify-center items-center space-x-16 mb-8">
            <TouchableOpacity>
              <AntDesign name="instagram" size={35} color="#E1306C" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Entypo name="facebook" size={35} color="#1877F2" />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLinkedin}>
              <AntDesign name="linkedin-square" size={35} color="#0077B5" />
            </TouchableOpacity>

            <TouchableOpacity>
              <FontAwesome name="twitter-square" size={35} color="#1DA1F2" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProfileScreen;