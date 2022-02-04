import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const TodoList = () => {
  const [title, setTitle] = useState('TodoList');

  return (
    <View>
      <Text>{title}</Text>
      <Button title='Change Me' onPress={() => setTitle('My List')} />
    </View>
  );
};

export default TodoList;
