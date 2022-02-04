import { View, Text, Button } from 'react-native';
import React from 'react';

const Todo = (props) => {
  return (
    <View>
      <Text> {props.name} </Text>
    </View>
  );
};

export default Todo;
