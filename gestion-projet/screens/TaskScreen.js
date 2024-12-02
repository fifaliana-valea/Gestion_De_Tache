import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function TaskScreen({ route, navigation }) {
  const [task, setTask] = useState('');
  const { onSave } = route.params;

  const handleSave = () => {
    onSave(task);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Nouvelle tâche"
        value={task}
        onChangeText={setTask}
        style={{
          borderBottomWidth: 1,
          borderColor: '#ccc',
          marginBottom: 20,
          fontSize: 18,
        }}
      />
      <Button title="Enregistrer" onPress={handleSave} />
    </View>
  );
}
