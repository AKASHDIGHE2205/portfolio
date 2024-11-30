import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const data = [
    {
      id: '1',
      title: 'React Native App',
      description: 'A sample React Native app showcasing amazing features.',
    },
    {
      id: '2',
      title: 'Portfolio Website',
      description: 'A professional portfolio website to showcase your skills.',
    },
    {
      id: '3',
      title: 'E-commerce App',
      description: 'An e-commerce platform with smooth user experience.',
    },
    {
      id: '4',
      title: 'Social Media App',
      description: 'A social media app with engaging user features.',
    },
  ];

  // Automatic scroll behavior
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevInd) =>
        prevInd === data.length - 1 ? 0 : prevInd + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll FlatList to the current index
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }
  }, [currentIndex]);

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient colors={['#FFDED9', '#D5FFFC']} className="flex-1">
        <View className="pt-10 items-center">
          <Text className="text-2xl">Welcome back!
            <Text className="text-red-600"> Akash.</Text>
          </Text>
        </View>

        <FlatList
          data={data}
          horizontal
          ref={flatListRef}
          renderItem={({ item }) => (
            <View className="bg-white rounded-lg p-5 m-3">
              <Text className="text-lg font-bold text-gray-700">{item.title}</Text>
              <Text className="text-gray-500">{item.description}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          snapToInterval={300}
          decelerationRate="fast"
          className='h-10'
        />

        <View className="flex-row justify-center items-center mt-4">
          {data.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setCurrentIndex(index);
                flatListRef.current.scrollToIndex({ index, animated: true });
              }}
            >

            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
