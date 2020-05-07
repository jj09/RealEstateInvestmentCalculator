import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function MoneyInput({initialValue, label, onChangeHandler}) {
    const [value, setValue] = useState(initialValue);
    const changeHandler = val => {
        const num = val.replace(/[^A-Za-z0-9]/g, '');
        console.info(num);
        const formatted = num && formatter.format(num);
        setValue(formatted);
        onChangeHandler(num);
    };
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
    
    return (
        <View>
          <Text style={styles.label}>{label}</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={changeHandler}
            defaultValue={initialValue}
            value={value}
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
  