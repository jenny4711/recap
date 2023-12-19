import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
   console.log(value,'value')
    window.postMessage(value, '*');
  }

  return (
    <div>
      <h1>reCAPTCHA Example</h1>
      <ReCAPTCHA
        sitekey="6LdHKjIpAAAAAHHQ2arVbfNBarJamB5eIEYohuGv"
        onChange={handleCaptchaChange}
       
      />
      {captchaValue && <p>Captcha Value: {captchaValue}</p>}
    </div>
  );
}

export default App;

