import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';

const Todo = (props) => {
  return (
    <View style={[styles.item, { margin: 8, padding: 8 }]}>
      <Text> {props.item} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
  },
});

export default Todo;
