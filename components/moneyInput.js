import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function MoneyInput({initialValue, label, onChangeHandler, onHelpClick}) {
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
        <View style={styles.moneyInputContainer}>
          <View style={styles.labelContainer}>
            {onHelpClick && <MaterialIcons
                name='help'
                size={20}
                style={styles.modalToggle}
                onPress={onHelpClick}
                />}
            <Text style={styles.label}>{label}</Text>
          </View>
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
  },
  labelContainer: {
    padding: 5,
    flexDirection: 'row',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#ccc',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    width: '100%',
  },
  modalToggle: {
    color: '#938598',
    marginRight: 7,
  },
  moneyInputContainer: {
    alignSelf:'center', 
    width: '90%',
  },
});
  