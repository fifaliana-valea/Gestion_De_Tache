import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onDelete }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem task={item} onDelete={onDelete} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
});
