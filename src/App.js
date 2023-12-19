import React, { useState } from 'react';

import { getAuth, RecaptchaVerifier ,initializeAuth,} from "firebase/auth";
function App() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const firebaseConfig = {
 
    apiKey: "AIzaSyBmSs3e-RrLAgTp_KmBTViNO2iHGQgClJA",
    authDomain: "appchat-17fa8.firebaseapp.com",
    projectId: "appchat-17fa8",
    storageBucket: "appchat-17fa8.appspot.com",
    messagingSenderId: "595341060110",
    appId: "1:595341060110:web:5f9871d5e4e06b1ccb345f"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  const app = firebase.app();
  const auth = getAuth(app)
  function cap(){
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        setCaptchaValue(response)
       console.log(response,'response')
      }
    });
  }
 


console.log(captchaValue,'captchaValue!!!!!!!!!!!')
  return (
    <div >
      <button onClick={cap}  id='sign-in-button'>reCAPTCHAbtn</button>
   
    </div>
  );
}

export default App;

