import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function MoneyInput({initialValue, label, onChangeHandler}) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });

    const [value, setValue] = useState(formatter.format(initialValue));
    const changeHandler = val => {
        const num = val.replace(/[^A-Za-z0-9]/g, '');
        onChangeHandler(num);

        const formatted = num && formatter.format(num);
        setValue(formatted);
    };
    
    
    
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
  