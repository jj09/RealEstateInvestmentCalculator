# Plan

## v1. Quick calculation

| item | cost |
|------------|--------------|
| purchase price | $500,000.00 |
| downpayment | $150,000.00 |
| | |	
| rental income | $2,500.00 |
| | |
| HOA	             | $400.00 |
| tax	             | $333.33 |
| insurance	         | $50.00 |
| vacancy (5%)	     | $125.00 |
| repairs (5%)	     | $125.00 |
| CapEx (5%)	     | $125.00 |
| Mortgage payment	 | $1,700.00 |
| | |
| cash flow	 | $(358.33) |
| ROI	 | $221,000.00 |

`cash flow: monthly rental income - monthly costs`

`ROI: purchase price - downpayment + cash flow`

TODOs:
* [x] defaults
* [x] easy clear
* [x] currency formatting fileds
* [x] make calculations working without submit button
* [x] (?) next to labels
* [x] add (?) descriptions where needed
* [x] create an icon
* [ ] polish
    * [ ] polish headers
    * [ ] polish modal
    * [ ] design icon
    * [ ] colors?
    * [ ] status bar color
    * [ ] beautify icon (use app colors)
* publish
    * [x] App Store ([docs](https://docs.expo.io/distribution/building-standalone-apps/))
    * [x] Google Play
    * [x] [Configure OTA Updates](https://docs.expo.io/guides/configuring-ota-updates/) = turned on by default, no action required <3
 
## v1.0.1

* [x] make (?) wider
* [x] fix math/alignment of close button in toggle popup
* [x] get rid of this annyoing warning

## v1.1 monetization

* [x] [The Ultimate Guide To Mobile In-App Purchases Optimization](https://instabug.com/blog/mobile-in-app-purchases/)
* [ ] Google ads (admob)
    * [x] [Adding Admob Ads to your React Native Expo Project](https://www.youtube.com/watch?v=aZOv_mxeu68) - the best instructions! Thanks [MissCoding](https://www.youtube.com/channel/UCwJWXcI12lhcorzG7Vrf2zw)
    * [x] [Expo Admob](https://docs.expo.io/versions/latest/sdk/admob/)
    * for reference
        * [x] [Google Admob - use react-native-admob to add google admob advertisement to react-native](https://dev-yakuza.github.io/en/react-native/react-native-admob/)
        * [x] [Firebase Admob - let's use react-native-firebase library to display Google Admob](https://dev-yakuza.github.io/en/react-native/react-native-firebase-admob/)
* [ ] fb ads?
* [ ] freemium: $0.99 for no-ads experience
* [ ] donate button: $1, $2, $3, $5, $10, $15 (maybe slider?)

## v1.2

* [ ] add button to autofill vacancy, repairs, capex at 5%

## v1.3 loan customization

- add splashscreen
- enable choosing loan length (15 or 30 years)
- set interest
- downpayment (+ 10% closing costs)
- [maybe] downpayment as % of purchase price(?)
- purchase price rename to total investment

## v2. Opportunity to save calculations

- in app?
- by email?    
- send to dropbox as spreadsheet?
- send to gdocs as spreadsheet?

# v3. add simple, advanced tabs for calculations

- remove repairs/vacancies/capex from simple?
- advanced will have additionally:
    * ???
    * ???
    * ???

## v99. Backlog

- add logging to measure CTR for (?) next to labels

# notes

## marketing

* where audience is hanging out on the internet?
    + biggerpockets.com
    + roofstock
    + ...

* content marketing: https://designmodo.com/update-emails 

# references

* [Investment Property ROI spreadsheet](https://docs.google.com/spreadsheets/d/1s7BwjC9fE213bOYVq2m0GkjBO1o4IVzl9MDPqR6a9vo/edit#gid=1795265665)