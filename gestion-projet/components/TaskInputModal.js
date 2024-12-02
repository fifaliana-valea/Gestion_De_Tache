import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';

export default function TaskInputModal({ visible, onClose, onSave }) {
  const [taskText, setTaskText] = useState('');

  const handleSave = () => {
    if (taskText.trim()) {
      onSave(taskText.trim());
      setTaskText('');
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modal}>
        <TextInput
          placeholder="Nouvelle tâche"
          style={styles.input}
          value={taskText}
          onChangeText={setTaskText}
        />
        <Button title="Enregistrer" onPress={handleSave} />
        <Button title="Annuler" color="red" onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 18,
  },
});
