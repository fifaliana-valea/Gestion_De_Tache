import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TaskItem({ task, onDelete }) {
  return (
    <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.container}>
      <Text style={styles.taskText}>{task.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 16,
  },
});
