import React, { useState, useCallback } from 'react';
import { TextInput } from '../components/UIkit';

const SignUp = () => {
  
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const inputUserName = useCallback(
    (e) => {
      setUserName(e.target.value)
    },
    [setUserName],
  );

  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value)
    },
    [setEmail],
  );

  const inputPassword = useCallback(
    (e) => {
      setPassword(e.target.value)
    },
    [setPassword],
  );

  const inputConfirmPassword = useCallback(
    (e) => {
      setConfirmPassword(e.target.value)
    },
    [setConfirmPassword],
  );

  return (
    <div>
      <h2>Create Account</h2>

      <TextInput
        label={'name'}
        required={true}
        value={userName}
        type={"text"}
        onChange={inputUserName}/>

      <TextInput
        label={'email'}
        required={true}
        value={userName}
        type={"email"}
        onChange={inputEmail}/>

      <TextInput
        label={'password'}
        required={true}
        value={userName}
        type={"password"}
        onChange={inputPassword}/>

      <TextInput
        label={'confirm'}
        required={true}
        value={userName}
        type={"password"}
        onChange={inputConfirmPassword}/>

    </div>
  )
}

export default SignUp
