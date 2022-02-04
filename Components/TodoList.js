import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
  const [title, setTitle] = useState('TodoList');

  return (
    <View>
      <Text>{title}</Text>
      <Todo name={'First Todo'} />
      <Todo name={'Second Todo'} />
      <Button title='Change Me' onPress={() => setTitle('My List')} />
    </View>
  );
};

export default TodoList;
