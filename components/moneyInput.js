import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#090f18',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 50,
    },
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
  