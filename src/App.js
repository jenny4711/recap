import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
function App() {
  const [captchaValue, setCaptchaValue] = useState(null);


  const auth = getAuth();
  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      setCaptchaValue(response)
      // reCAPTCHA solved, allow signInWithPhoneNumber.
     console.log(response,'response')
    }
  });

  // const handleCaptchaChange = (value) => {
  //   setCaptchaValue(value);
  //  console.log(value,'value')
  //   window.postMessage(value, '*');
  // }
console.log(captchaValue,'captchaValue!!!!!!!!!!!')
  return (
    <div >
      <button  id='sign-in-button'>reCAPTCHAbtn</button>
      {/* <ReCAPTCHA
        sitekey="6LdHKjIpAAAAAHHQ2arVbfNBarJamB5eIEYohuGv"
        onChange={handleCaptchaChange}
       size="invisible"
      />
      {captchaValue && <p>Captcha Value: {captchaValue}</p>} */}
    </div>
  );
}

export default App;

