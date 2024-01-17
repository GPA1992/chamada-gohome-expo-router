import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TabRoutesLayout: React.FC = () => {
  return (
    <Tabs screenOptions={{ headerShown: false}}>
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                tabBarIcon: ({size, color}) => <MaterialIcons name='home' size={size} color='#008267' />
            }}
        />

      <Tabs.Screen
            name="chamada"
            options={{
                title: "Chamada",
                tabBarIcon: ({size, color}) => <MaterialIcons name='list' size={size} color='#008267' />
            }}
        />
    </Tabs>
  );
}

export default TabRoutesLayout;