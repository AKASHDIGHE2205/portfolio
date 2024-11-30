import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const EducationScreen = () => {
  const educationData = [
    {
      id: 1,
      title: 'M.Sc. in Computer Science',
      university: 'Savitribai Phule Pune University',
      graduationYear: '2024',
      grade: "A+",
      percentage: "9.00",
    },
    {
      id: 2,
      title: 'B.Sc. in Computer Science',
      university: 'Savitribai Phule Pune University',
      graduationYear: '2022',
      grade: "A+",
      percentage: "9.00",
    },
    {
      id: 3,
      title: 'HSC (Higher Secondary Certificate)',
      university: 'S.S.J.S. Jr.College,Kolhewadi',
      graduationYear: '2023',
      grade: "A+",
      percentage: "56.00%",
    },
    {
      id: 4,
      title: 'SSC (Secondary School Certificate.)',
      university: 'S.S.J.S. Jr.Vidyalaya,Kolhewadi',
      graduationYear: '2023',
      grade: "A+",
      percentage: "63.00%",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Gradient Background */}
      <LinearGradient colors={['#FFDED9', '#D5FFFC']} className="flex-1 p-6">
        {/* Title */}
        <Text className="text-4xl font-extrabold text-center text-gray-700 mb-5 mt-4">
          Education & Qualifications
        </Text>

        {/* Cards Layout */}
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {educationData.map((edu) => (
            <View
              key={edu.id}
              className="bg-white rounded-lg shadow-xl p-6 mb-6"
            >
              <Text className="text-2xl font-semibold text-gray-800 mb-2">{edu.title}</Text>
              <Text className="text-lg font-medium text-gray-600 mb-2">{edu.university}</Text>
              <Text className="text-lg text-gray-600 mb-2">Graduated: {edu.graduationYear}</Text>
              <Text className="text-lg text-gray-600 mb-2">Percentage: {edu.percentage}</Text>
              <Text className="text-lg text-gray-600 mb-4">Grade: {edu.grade}</Text>
              <View className="w-full h-[1px] bg-gray-300 mb-4" />
              {/* <Text className="text-sm text-gray-500 italic">
                This course focused on developing advanced technical skills in software development, system design, and algorithms.
              </Text> */}
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default EducationScreen;
