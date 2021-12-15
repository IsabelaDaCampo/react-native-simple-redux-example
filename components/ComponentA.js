import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const ComponentA = () => {
  const counter = useSelector(state => state)
  return (
    <View>
      <Text style={{ fontSize: 30 }}>ComponentA: {counter}</Text>
    </View>
  );
}

export default ComponentA;
