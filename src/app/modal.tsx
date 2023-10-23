import AddProductForm from 'components/forms/AddProductForm';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

export default function ModalScreen() {
  return (
    <AddProductForm />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
