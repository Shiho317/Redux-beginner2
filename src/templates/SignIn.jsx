import React, { useState, useCallback } from 'react';
import { TextInput, PrimaryButton } from '../components/UIkit';
import { signUp } from '../reducks/users/operation';
import { useDispatch } from 'react-redux';

const SignIn = () => {

  const dispatch = useDispatch();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <div>
      <h2>Sign In</h2>

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

      <PrimaryButton
        label={'Sign In'}
        onClick={() => {dispatch(signUp(email, password))}}/>

    </div>
  )
}

export default SignIn
