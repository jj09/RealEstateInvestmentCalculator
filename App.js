import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import MoneyInput from './components/MoneyInput';
import {MaterialIcons} from '@expo/vector-icons';

export default function App() {
  const [cashFlow, setCashFlow] = useState('$400');
  const [roi, setRoi] = useState('$206,000');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  const calculate = () => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });

    const ri = Number(rentalIncome);
    const mp = Number(mortgagePayment);
    const h = Number(hoa);
    const t = Number(tax);
    const i = Number(insurance);
    const v = Number(vacancy);
    const r = Number(repairs);
    const ce = Number(capEx);
    const cf = ri - mp - h - t - i - v - r -ce;
    setCashFlow(formatter.format(cf));

    const pp = Number(purchasePrice);
    const dp = Number(downpayment);
    setRoi(formatter.format(pp - dp + (30*12*cf)));
  };

  let purchasePrice = '500000';
  const changePurchasePrice = newPrice => {
    purchasePrice = newPrice;
    calculate();
  };

  let downpayment = '150000';
  const changeDownpayment = newVal => {
    downpayment = newVal;
    calculate();
  };

  let rentalIncome = '2500';
  const changeRentalIncome = newVal => {
    rentalIncome = newVal;
    calculate();
  };

  let mortgagePayment = '1700';
  const changeMortgagePayment = newVal => {
    mortgagePayment = newVal;
    calculate();
  };

  let hoa = '500';
  const changeHoa = newVal => {
    hoa = newVal;
    calculate();
  };

  let tax = '400';
  const changeTax = newVal => {
    tax = newVal;
    calculate();
  };

  let insurance = '50';
  const changeInsurance = newVal => {
    insurance = newVal;
    calculate();
  };

  let vacancy = '125';
  const changeVacancy = newVal => {
    vacancy = newVal;
    calculate();
  };

  let repairs = '125';
  const changeRepairs = newVal => {
    repairs = newVal;
    calculate();
  };

  let capEx = '0';
  const changeCapEx = newVal => {
    capEx = newVal;
    calculate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Real Estate Investment Calculator</Text>
      <View style={styles.results}>
        <Text style={styles.subheader}>Cash flow: {cashFlow}</Text>
        <Text style={styles.subheader}>ROI (30 years): {roi}</Text>
      </View>
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

          <MoneyInput
            initialValue={vacancy}
            label='Vacancy'
            onChangeHandler={changeVacancy}
            />
            
          <MoneyInput
            initialValue={repairs}
            label='Repairs'
            onChangeHandler={changeRepairs}
            />
          
          <MoneyInput
            initialValue={capEx}
            label='Capital Expenditures'
            onChangeHandler={changeCapEx}
            onHelpClick={() => {
              setModalOpen(true);
              setModalText('Big repairs like roof, flooring, water heater, plumbing, etc.');
            }}
            />

          <Modal visible={modalOpen} animationType='slide'>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View style={styles.modalContent}>
                      <MaterialIcons
                          name='close'
                          size={24}
                          style={{...styles.modalToggle, ...styles.modalClose}}
                          onPress={() => setModalOpen(false)}
                          />
                      <Text>{modalText}</Text>
                  </View>
              </TouchableWithoutFeedback>
          </Modal>
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
    paddingTop: 20,
    color: '#78a4c3',
    width: '100%',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    textAlignVertical: 'top',
    padding: 5,
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
  results: {
    flexDirection: 'column',
    textAlign: 'left',
    width: '100%',
    padding: 5,
  },
  modalContent: {
    flex: 1,
    marginTop: 20,
  },
  modalClose: {
      marginTop: 20,
      marginBottom: 0,
  },
  modalToggle: {
      borderWidth: 1,
      borderColor: '#ddd',
      color: '#ddd',
      padding: 2,
      borderRadius: 5,
      marginLeft: 10,
      alignSelf: 'center',
  },
});
