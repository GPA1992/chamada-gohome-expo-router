import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

export default function Chamada() {
  const data = Array.from({ length: 10 }, (_, index) => ({
    id: index.toString(),
    name: `Aluno ${index + 1}`,
    status: index < 3 ? 'Ausente' : 'Presente',
  }));

  const renderItem = ({ item }: any) => (
    <View style={[styles.row, { backgroundColor: item.status === 'Presente' ? '#008267' : '#d3d3d3' }]}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chamada</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.scrollView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#008267',
  },
  scrollView: {
    maxHeight: 400,
    width: '90%',

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    width: '100%',
    borderRadius: 5,
  },
  cell: {
    fontSize: 16,
    color: 'white',
  },
});
