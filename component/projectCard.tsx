import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ProjectCard = ({ project }: any) => {
  return (
    <SafeAreaView className="mb-8">
      {/* Card Background with Gradient */}
      <LinearGradient
        colors={['#ffafbd', '#ffc3a0']}
        style={{
          borderRadius: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 10,
          padding: 16,
        }}
      >
        {/* Image */}
        <View className="items-center mb-4">
          <Image
            source={project.image}
            style={{
              width: '100%',
              height: 150,
              borderRadius: 12,
              resizeMode: 'cover',
            }}
          />
        </View>

        {/* Project Title with Gradient Text */}
        <Text className="text-lg font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-orange-400 mb-2">
          {project.title}
        </Text>

        {/* Description */}
        <Text className="text-sm text-gray-600 text-justify">{project.description}</Text>

        <View className="flex-1 justify-end items-end p-4">
          {/* Gradient Button */}
          <TouchableOpacity className="overflow-hidden">
            <LinearGradient
              colors={['#36D1DC', '#5B86E5']}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 15,
                shadowOpacity: 0.3,
              }}
              className='justify-center items-center shadow-slate-400'
            >
              <Text className="text-lg text-white font-semibold" onPress={() => console.log("Go To")}>Go to</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </SafeAreaView >
  );
};

export default ProjectCard;
