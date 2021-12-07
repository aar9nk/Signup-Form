import { useState } from 'react';
import {Button} from '@mui/material';
import Input from './components/Input';

function App() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
 
  function validateEmail(text) {
    if(text.length > 3) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  }

  function validatePassword(text) {
    if(text.length > 8) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <p>email</p>
        <Input error={emailError} onChangeFunction={(e) => validateEmail(e.target.value)} />
        <p>password</p>
        <Input error={passwordError} onChangeFunction={(e) => validatePassword(e.target.value) } />
        <Button variant="contained" onClick={() => console.log('button clicked... fetching data from server')}>Sign up</Button>
      </form>
    </>
  );
}

export default App;
