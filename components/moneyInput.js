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
        <View>
          
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{label}</Text>
            {onHelpClick && <MaterialIcons
                name='question'
                size={12}
                style={styles.modalToggle}
                onPress={onHelpClick}
                />}
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
    width: 300,
  },
  modalToggle: {
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#ddd',
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    marginLeft: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
  