import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NoTasks() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aucune tâche pour le moment !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#888',
  },
});
