import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function MoneyInput({initialValue, label, onChangeHandler}) {
    const [value, setValue] = useState(initialValue);
    const changeHandler = val => {
        setValue(val);
        onChangeHandler(val);
    };
    
    return (
        <View>
          <Text style={styles.label}>{label}</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={changeHandler}
            defaultValue={initialValue}
            keyboardType='numeric'
            onFocus={() => changeHandler('')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
      fontSize: 18,
      color: '#938598',
      textAlign: 'left',
      width: 300,
      padding: 5,
      marginTop: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      color: '#ccc',
      padding: 10,
      fontSize: 18,
      borderRadius: 6,
      width: 300,
    },
  });
  