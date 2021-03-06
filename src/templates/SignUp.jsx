import React, { useState, useCallback } from 'react';
import { TextInput, PrimaryButton } from '../components/UIkit';
import { signUp } from '../reducks/users/operation';
import { useDispatch } from 'react-redux';

const SignUp = () => {

  const dispatch = useDispatch();
  
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
        value={email}
        type={"email"}
        onChange={inputEmail}/>

      <TextInput
        label={'password'}
        required={true}
        value={password}
        type={"password"}
        onChange={inputPassword}/>

      <TextInput
        label={'confirm'}
        required={true}
        value={confirmPassword}
        type={"password"}
        onChange={inputConfirmPassword}/>

      <PrimaryButton
        label={'Sign Up'}
        onClick={() => {dispatch(signUp(userName, email, password, confirmPassword))}}/>

    </div>
  )
}

export default SignUp
