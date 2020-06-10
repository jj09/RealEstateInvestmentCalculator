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
* [x] Google ads (admob)
    * [x] [Adding Admob Ads to your React Native Expo Project](https://www.youtube.com/watch?v=aZOv_mxeu68) - the best instructions! Thanks [MissCoding](https://www.youtube.com/channel/UCwJWXcI12lhcorzG7Vrf2zw)
    * [x] [Expo Admob](https://docs.expo.io/versions/latest/sdk/admob/)
    * for reference
        * [x] [Google Admob - use react-native-admob to add google admob advertisement to react-native](https://dev-yakuza.github.io/en/react-native/react-native-admob/)
        * [x] [Firebase Admob - let's use react-native-firebase library to display Google Admob](https://dev-yakuza.github.io/en/react-native/react-native-firebase-admob/)
    * [ ] fix issue:
        * [ ] ERROR_CODE_NO_FILL - [explanation](https://support.google.com/admob/answer/3063564?hl=en&visit_id=637272716882814095-3053485040&rd=1)

## v1.1.1 - make fb ads working

* [ ] Facebook ads
    * [x] [Facebook Audience Network vs AdMob Review 2020](https://blognife.com/2017/10/23/facebook-audience-network-vs-admob-cpm-rates-payment-earnings-report/)
    * [x] [FacebookAds at Expo docs](https://docs.expo.io/versions/latest/sdk/facebook-ads/)
    * [x] [React Native Redux Tutorial #16: Setting up Facebook Ads](https://www.youtube.com/watch?v=pywOxaW0x6M&list=PL06z42zB6YZ-9CQDX015uaeqMcSErKbes&index=16)
    * [x] [React Native Redux Tutorial #17: Facebook Interstitial Ad Setup](https://www.youtube.com/watch?v=aUqAg2EdnD0&list=PL06z42zB6YZ-9CQDX015uaeqMcSErKbes&index=17)
    * [x] [React Native Redux Tutorial #18: Facebook Banner Ad Setup](https://www.youtube.com/watch?v=lHnH584JJZY&list=PL06z42zB6YZ-9CQDX015uaeqMcSErKbes&index=18)
    * [ ] fix issues
        * [ ] no ads on android: `currentDeviceHash` is null (but maybe it's just test)
        * [ ] iOS app is disabled, because fb cannot find it (created support ticket)
        * [ ] remove `Real Estate Investment Calculator` from Monetization Manager, and keep REIC
        * [ ] styling (but maybe just test?)

## v1.2

* [x] display app/OTA version
* [ ] refactor
    * [ ] move styles
    * [ ] extract main component
    * [ ] extract ad component
    * [ ] [React Native Redux Tutorial with Expo](https://www.youtube.com/watch?v=KHzc5PjFg0U&list=PL06z42zB6YZ-9CQDX015uaeqMcSErKbes)
    * [ ] [Redux in React Native in 1 hour - ReactNativeTutorial.net](https://www.youtube.com/watch?v=Hn2acItzQBk)
* [ ] add button to autofill (add (?) with explanation how autofill works)
    - tax at 1%/12 of purchase price
    - insurance at 0.1%/12 of purchase price
    - vacancy at 5% rent
    - repairs at 5% rent
    - capex at 5% rent (if HOA=0), otherwise 0

## v1.3 loan customization (advanced tab? not yet?)

- add splashscreen
- enable choosing loan length (15 or 30 years)
- set interest
- downpayment (+ 10% closing costs)
- [maybe] downpayment as % of purchase price(?)
- purchase price rename to total investment

## v1.4 monetization & marketing

* [ ] freemium: $0.99 for no-ads experience
* [ ] buy facebook ads to promote app
    * [ ] [Facebook Ads Tutorial 2020 - How to Create Facebook Ads For Beginners (COMPLETE GUIDE)](https://www.youtube.com/watch?v=1iZl0bCyDPQ)
* [ ] donate button: $1, $2, $3, $5, $10, $15 (maybe slider?)
* [ ] figure out other marketing channels
    * [ ] Buy Google Ads?
    * [ ] Promote on bigger pockets forum?


## v2. Opportunity to save calculations

- in app?
- by email?    
- send to dropbox as spreadsheet?
- send to gdocs as spreadsheet?

## v2.1 add educational section

- Explain how these calculation work
- Add Quiz?
- ...

## v3. add simple, advanced tabs for calculations

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

# OTA updates

`expo publish`

# references

* [Investment Property ROI spreadsheet](https://docs.google.com/spreadsheets/d/1s7BwjC9fE213bOYVq2m0GkjBO1o4IVzl9MDPqR6a9vo/edit#gid=1795265665)
* [React Native Tutorial for Beginners by The Net Ninja](https://www.youtube.com/watch?v=ur6I5m2nTvk&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ)