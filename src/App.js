import React, { useState } from 'react';

import { getAuth, RecaptchaVerifier} from "firebase/auth";
function App() {
  const [captchaValue, setCaptchaValue] = useState(null);
 
  const auth = getAuth()
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

