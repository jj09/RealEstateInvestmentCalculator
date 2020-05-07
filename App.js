import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import MoneyInput from './components/MoneyInput';

export default function App() {
  const [cashFlow, setCashFlow] = useState('');
  const [roi, setRoi] = useState('');

  const calculate = () => {
    const ri = Number(rentalIncome);
    const mp = Number(mortgagePayment);
    const h = Number(hoa);
    const t = Number(tax);
    const i = Number(insurance);
    const cf = ri - mp - h - t - i;
    setCashFlow(cf);

    const pp = Number(purchasePrice);
    const dp = Number(downpayment);
    setRoi(pp - dp + (30*12*cf));
  };

  const [purchasePrice, setPurchasePrice] = useState('500000');
  const changePurchasePrice = newPrice => {
    setPurchasePrice(newPrice);
  };

  const [downpayment, setDownpayment] = useState('150000');
  const changeDownpayment = newVal => {
    setDownpayment(newVal);
  };

  const [rentalIncome, setRentalIncome] = useState('2500');
  const changeRentalIncome = newVal => {
    setRentalIncome(newVal);
  };

  const [mortgagePayment, setMortgagePayment] = useState('1700');
  const changeMortgagePayment = newVal => {
    setMortgagePayment(newVal);
  };

  const [hoa, setHoa] = useState('500');
  const changeHoa = newVal => {
    setHoa(newVal);
  };

  const [tax, setTax] = useState('400');
  const changeTax = newVal => {
    setTax(newVal);
  };

  const [insurance, setInsurance] = useState('50');
  const changeInsurance = newVal => {
    setInsurance(newVal);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Real Estate Investment Calculator</Text>
      <Text style={styles.header}>Cash flow: ${cashFlow}</Text>
      <Text style={styles.header}>ROI (30 years): ${roi}</Text>
      <Button 
            title='Calculate' 
            onPress={calculate}
            />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <MoneyInput
            initialValue={purchasePrice}
            label='Purchase Price'
            onChangeHandler={changePurchasePrice}
            />

          <MoneyInput
            initialValue={downpayment}
            label='Downpayment'
            onChangeHandler={changeDownpayment}
            />

          <MoneyInput
            initialValue={rentalIncome}
            label='Rental Income'
            onChangeHandler={changeRentalIncome}
            />

          <MoneyInput
            initialValue={mortgagePayment}
            label='Mortgage Payment'
            onChangeHandler={changeMortgagePayment}
            />

          <MoneyInput
            initialValue={hoa}
            label='HOA'
            onChangeHandler={changeHoa}
            />

          <MoneyInput
            initialValue={tax}
            label='Tax'
            onChangeHandler={changeTax}
            />

          <MoneyInput
            initialValue={insurance}
            label='Insurance'
            onChangeHandler={changeInsurance}
            />

          {/* <Text style={styles.label}>Vacancy</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Repairs</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>CapEx</Text>
          <TextInput style={styles.input} /> */}
          
        </View>

      </ScrollView>
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
  header: {
    fontSize: 22,
    textAlignVertical: 'top',
    padding: 20,
    color: '#78a4c3'
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
  scrollView: {
    margin: 0,
    flex: 1,
    width: '100%',
  },
});
