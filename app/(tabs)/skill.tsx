import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const SkillScreen = () => {
  const flatlistRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const Skills = [
    {
      id: '1',
      title: 'React.Js',
      description: `A sample React Native app showcasing amazing features and best practices in React.js development. With deep knowledge in state management using Redux and Context API,
      I create scalable applications that are easy to manage and maintain. I implement performance optimization techniques like memoization, lazy loading, and code splitting to ensure smooth user experiences. 
      Reusability is a key focus, with reusable components and hooks designed to promote modularity and cleaner code. From component-based architecture to advanced state management solutions, I leverage React’s ecosystem to build efficient, fast, and dynamic web and mobile applications.
      Additionally, I have experience with tools like React Router for navigation, and testing frameworks like Jest and React Testing Library for ensuring high-quality code.
      My expertise also extends to integrating third-party libraries and APIs, customizing UI elements, and enhancing overall app performance.
      This project demonstrates my ability to handle complex UI structures, manage data flow, and deliver high-performance React applications that scale seamlessly.`
    },
    {
      id: '2',
      title: 'Express.Js',
      description: `A professional portfolio website built using Express.js, showcasing a variety of skills including RESTful API design, middleware usage, and routing.
      The website leverages Express.js to manage server-side logic, handle HTTP requests, and efficiently serve dynamic content. With a focus on performance and scalability,
      I ensure fast request handling, optimized database queries, and smooth integration with front-end technologies. The application is designed with a modular structure, promoting code reusability and maintainability. Additionally,
      I incorporate security best practices like input validation, authentication, and authorization using JWT and sessions.
      The project also demonstrates my ability to integrate third-party services, deploy applications, and manage environment configurations.
      This portfolio reflects my expertise in building robust, full-stack applications that are both user-friendly and performant.`
    },
    {
      id: '3',
      title: 'MYSQL',
      description: `An e-commerce platform powered by MySQL, designed for efficient data storage, retrieval, and management.
      The project showcases expertise in relational database design, utilizing MySQL to structure and query data effectively for a seamless user experience.
      It involves creating optimized database schemas with tables for products, customers, orders, payments, and inventory management.
      Complex SQL queries are used to handle tasks such as user authentication, order processing, and dynamic product listings, ensuring fast and reliable access to data.
      The platform also demonstrates my ability to implement database normalization, indexing for performance improvement, and writing complex joins to fetch related data efficiently. I prioritize data integrity, ensuring ACID compliance and implementing proper foreign key constraints. Additionally, I’ve worked on advanced MySQL features such as stored procedures, triggers, and views to automate tasks and enhance overall performance.`
    },
    {
      id: '4',
      title: 'DEMO',
      description: 'A social media app with engaging user features. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam tempora, suscipit perspiciatis dolorem, fugiat nulla mollitia vitae quod neque ducimus laudantium, illum modi? Dignissimos aperiam voluptatum, tenetur nesciunt voluptate nostrum explicabo, temporibus corporis molestiae facere sapiente facilis reiciendis. Enim nesciunt, distinctio consequuntur quam est eius molestiae id nemo fugiat ea!'
    },
  ];

  // Scroll FlatList to the current index
  useEffect(() => {
    if (flatlistRef.current) {
      flatlistRef.current.scrollToIndex({
        index: currentIndex, animated: true
      });
    }
  }, [currentIndex]);

  // Automatic scroll behavior
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevInd) =>
        prevInd === Skills.length - 1 ? 0 : prevInd + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView className='flex-1'>
      <LinearGradient colors={['#FFDED9', '#D5FFFC']} className='flex-1 p-4'>
        <View className='pt-10 items-start justify-start'>
          <Text className='text-2xl font-semibold'>Skills & Technologies</Text>
        </View>
        <FlatList
          data={Skills}
          horizontal
          ref={flatlistRef}
          renderItem={({ item }) => (
            <View className='bg-gray-200 p-5 m-3' style={{ width: 300 }}>
              <Text className='text-2xl font-bold '>{item.title}</Text>
              <Text className='text-sm' style={{ flexWrap: 'wrap' }}>
                {item.description}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          snapToInterval={300}
          decelerationRate="fast"
        />
        {/* Slider Bar */}
        <View className="flex-row justify-center items-center mt-4">
          {Skills.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setCurrentIndex(index);
                flatListRef.current.scrollToIndex({ index, animated: true });
              }}
            >
              <View
                className={`w-3 h-3 m-1 rounded-full ${currentIndex === index ? 'bg-[#fc5c7d]' : 'bg-[#6a82fb]'
                  }`}
              />
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SkillScreen;
