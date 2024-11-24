## Information

SDK level ``51.0.0``

Create new project at https://console.firebase.google.com, used ``Firebase/Database`` Realtime Database used in this project
## Package.json

```JSON

"dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@emailjs/react-native": "^4.2.2",
    "@react-native-async-storage/async-storage": "1.23.1",
    "@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/native": "^6.1.18",
    "@react-navigation/stack": "^6.4.1",
    "axios": "^1.7.7",
    "expo": "~51.0.28",
    "expo-dev-client": "~4.0.28",
    "expo-font": "~12.0.10",
    "expo-image-picker": "~15.0.7",
    "expo-mail-composer": "~13.0.1",
    "expo-status-bar": "~1.12.1",
    "expo-updates": "~0.25.27",
    "firebase": "^11.0.1",
    "react": "18.2.0",
    "react-native": "0.74.5",
    "react-native-chart-kit": "^6.12.0",
    "react-native-gesture-handler": "~2.16.1",
    "react-native-pager-view": "^6.3.0",
    "react-native-reanimated": "~3.10.1",
    "react-native-safe-area-context": "4.10.5",
    "react-native-screens": "3.31.1",
    "react-native-svg": "^15.8.0"
  },
```
```
npm install --save @emailjs/browser
```
## explanation

This application was developed for testing react native integration with emailjs.


## emailJS
first we should create a mail service on https://www.emailjs.com/ then the appearance of the mail to be sent should be set in the mail templates section if you are using the free version of emailjs you should get ready values ​​such as service id from the database 
```JS
onValue(ref(db,'Emailjs/'),(snapshot)=>{
console.log('public key:'+snapshot.child('/publickey').val());
console.log('template id:'+snapshot.child('/templateid').val());
console.log('service:'+snapshot.child('/service').val());
emailjs.send(snapshot.child('/service').val(), snapshot.child('/templateid').val(), {
Message:random,
email: email,
},{publicKey:snapshot.child('/publickey').val()});
})
```
the appearance should be like this this line of code Even if our trial period ends, we create new keys and protect the application. You also have 200 credits for the trial, you must update when these are over.

## Screenshots from Application

<img src="https://github.com/AliArslan44/React-Native-Email-App/blob/main/screenshots/email0.jpg?raw=true" width="400"/>
<img src="https://github.com/AliArslan44/React-Native-Email-App/blob/main/screenshots/email.5.jpg?raw=true" width="400"/>
<img src="https://github.com/AliArslan44/React-Native-Email-App/blob/main/screenshots/email1.jpg?raw=true" width="400"/>
<img src="https://github.com/AliArslan44/React-Native-Email-App/blob/main/screenshots/email2.jpg?raw=true" width="400"/>
<img src="https://github.com/AliArslan44/React-Native-Email-App/blob/main/screenshots/email3.jpg?raw=true" width="400"/>
<img src="https://github.com/AliArslan44/React-Native-Email-App/blob/main/screenshots/email4.jpg?raw=true" width="400"/>


