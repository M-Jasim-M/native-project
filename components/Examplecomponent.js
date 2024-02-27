import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ExampleComponent = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (
    <View style={{ backgroundColor: isDarkMode ? '#333' : '#fff', padding: 20 }}>
      <Text style={{ color: isDarkMode ? '#fff' : '#333' }}>Example Component</Text>
    </View>
  );
};

export default ExampleComponent;
