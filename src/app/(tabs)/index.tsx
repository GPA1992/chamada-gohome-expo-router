import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function GoHome() {
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date: any) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GoHome - Chamada</Text>

      <Text style={[styles.label]}>Selecione o Professor(a):</Text>
      <Picker
        selectedValue={selectedTeacher}
        onValueChange={(itemValue: any) => setSelectedTeacher(itemValue)}
        style={[styles.picker, { color: 'black' }]}
      >
        <Picker.Item label="Professor 1" value="professor1" />
        <Picker.Item label="Professor 2" value="professor2" />
      </Picker>

      <Text style={[styles.label, { color: 'black' }]}>Selecione a Turma:</Text>
      <Picker
        selectedValue={selectedClass}
        onValueChange={(itemValue: any) => setSelectedClass(itemValue)}
        style={[styles.picker, { color: 'black' }]}
      >
        <Picker.Item label="Turma A" value="turmaA" />
        <Picker.Item label="Turma B" value="turmaB" />
      </Picker>

      <TouchableOpacity style={styles.dateContainer} onPress={showDatePicker} >
        <Ionicons name="calendar" size={24} color="#008267" />
        <Text style={[styles.dateText, { color: 'black' }]}>{selectedDate.toLocaleString()}</Text>
      </TouchableOpacity>

      <Link href='/chamada' asChild>
          <Button title="Iniciar Chamada" color="#008267"  />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '90%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#008267',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    width: '90%',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    color: '#008267',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  button: {
    borderRadius: 10,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#008267',
  },
});
