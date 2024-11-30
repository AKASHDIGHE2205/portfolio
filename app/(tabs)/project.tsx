import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import ProjectCard from '../../component/projectCard';
import { LinearGradient } from 'expo-linear-gradient';

const ProjectScreen = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      image: require('../../assets/portfilio.jpg'),
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?`,
    },
    {
      id: 2,
      title: 'Project Two',
      image: require('../../assets/portfilio.jpg'),
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?`,
    },
    {
      id: 3,
      title: 'Project Three',
      image: require('../../assets/portfilio.jpg'),
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?`,
    },
    {
      id: 4,
      title: 'Project Four',
      image: require('../../assets/portfilio.jpg'),
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, atque?`,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <LinearGradient colors={['#FFDED9', '#D5FFFC']} className="flex-1">
        <ScrollView className="flex-1 px-4 py-8" showsVerticalScrollIndicator={false}>
          {/* Loop through the projects array and pass each project to ProjectCard */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>

  );
};

export default ProjectScreen;
