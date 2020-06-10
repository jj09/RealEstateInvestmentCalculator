import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import MoneyInput from './components/MoneyInput';
import {MaterialIcons} from '@expo/vector-icons';
import 'intl';
import 'intl/locale-data/jsonp/en';

import { AdMobBanner } from 'expo-ads-admob';
import * as FacebookAds from 'expo-ads-facebook';
// FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);
// console.log(Platform.OS, FacebookAds.AdSettings);

export default function App() {
  // ads init
  const admobAndroidId = "ca-app-pub-8304240234233416/3133228630";
  const admobIosId = "ca-app-pub-8304240234233416/4155500417";
  const adMobAdId = Platform.OS === 'ios' ? admobIosId : admobAndroidId;
  
  // fb ads init
  const iosPlacementId = "171290390989054_180817953369631";
  const androidPlacementId = "171290390989054_171291250988968";
  const placementId = Platform.OS === 'ios' ? iosPlacementId : androidPlacementId;

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

  const getModalCallback = modalText => {
    return () => {
        setModalOpen(true);
        setModalText(modalText);
      };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Real Estate Investment Calculator</Text>
      <View style={styles.results}>
        <Text style={styles.subheader}>Cash flow: {cashFlow}</Text>
        <Text style={styles.subheader}>ROI (30 years): {roi}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
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
            onHelpClick={getModalCallback('Monthly Rental Income.')}
            />

          <MoneyInput
            initialValue={mortgagePayment}
            label='Mortgage Payment'
            onChangeHandler={changeMortgagePayment}
            />

          <MoneyInput
            initialValue={hoa}
            label='HOA dues'
            onChangeHandler={changeHoa}
            onHelpClick={getModalCallback('If you are buying a condo, you have to pay HOA. In case of buying house or townhouse usually you will not.')}
            />

          <MoneyInput
            initialValue={tax}
            label='Tax'
            onChangeHandler={changeTax}
            onHelpClick={getModalCallback('Monthly property tax.')}
            />

          <MoneyInput
            initialValue={insurance}
            label='Insurance'
            onChangeHandler={changeInsurance}
            onHelpClick={getModalCallback('Monthly insurance payment. If you pay per year, then just divide by 12.')}
            />

          <MoneyInput
            initialValue={vacancy}
            label='Vacancy'
            onChangeHandler={changeVacancy}
            onHelpClick={getModalCallback('Estimated monthly amount spend on vacancies. It is recommended to allocate 5% of monthly rent for vacancies.')}
            />
            
          <MoneyInput
            initialValue={repairs}
            label='Repairs'
            onChangeHandler={changeRepairs}
            onHelpClick={getModalCallback('Estimated monthly amount spend on repairs. It is recommended to allocate 5% of monthly rent for repairs.')}
            />
          
          <MoneyInput
            initialValue={capEx}
            label='Capital Expenditures'
            onChangeHandler={changeCapEx}
            onHelpClick={getModalCallback('Capital Expenditures are big repairs like roof, flooring, water heater, plumbing, etc. It is recommended to allocate 5% of monthly rent for Cap Ex.')}
            />

          <Modal transparent visible={modalOpen} animationType='slide'>
              <TouchableWithoutFeedback onPress={() => setModalOpen(false)}>
                  <View style={styles.modalContent}>
                      <MaterialIcons
                          name='close'
                          size={24}
                          style={{...styles.modalToggle, ...styles.modalClose}}
                          onPress={() => setModalOpen(false)}
                          />
                      <Text style={styles.modalText}>{modalText}</Text>
                  </View>
              </TouchableWithoutFeedback>
          </Modal>
        </View>
      </ScrollView>
      {/* <AdMobBanner
          bannerSize="banner"
          adUnitID={adMobAdId}
          servePersonalizedAds={false}
          onDidFailToReceiveAdWithError={err => console.log('error:', err)}
          /> */}
      <View 
          style={{
              // backgroundColor: 'pink',
              paddingRight: 70,
              paddingBottom: 30,
              paddingTop: 0,
              marginTop: -30,
              width: '50%',
              marginLeft: -Dimensions.get('window').width/1.8,
            }}
      >
        <FacebookAds.BannerAd
          placementId={placementId}
          type="standard"
          onError={error => console.log('fb error', Platform.OS, error)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    backgroundColor: '#090f18',
    alignItems: 'center',
    justifyContent: 'center',
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
  scrollView: {
    margin: 0,
    flex: 1,
    width: '100%',
    marginBottom: 10,
  },
  results: {
    flexDirection: 'column',
    textAlign: 'left',
    width: '100%',
    padding: 5,
  },
  modalContent: {
    flex: 1,
    marginTop: Dimensions.get('window').height/2 - 100,
    marginBottom: Dimensions.get('window').height/2 - 100,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
    backgroundColor: '#090f18',
    color: '#78a4c3',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  modalClose: {
    marginTop: 5,
    marginBottom: 10,
    marginRight: 5,
    alignSelf: 'flex-end',
  },
  modalText: {
    color: '#78a4c3',
    fontSize: 18,
    padding: 5,
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
