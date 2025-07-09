import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TabBarIconProps {
  route: string;
  focused: boolean;
  color: string;
  size: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ route, focused, color, size }) => {
  const getIcon = () => {
    switch (route) {
      case 'Home':
        return focused ? '🏠' : '🏠';
      case 'Profile':
        return focused ? '👤' : '👤';
      case 'Settings':
        return focused ? '⚙️' : '⚙️';
      default:
        return '📱';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.icon, { fontSize: size, color }]}>
        {getIcon()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
});

export default TabBarIcon; 