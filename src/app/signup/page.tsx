'use client';
import React from 'react';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import auth from '../../firebase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const signUp = async () => {
    if (!email) return;
    if (!password) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();

      updateProfile(userCredential.user, {
        displayName: 'test',
      });

      await sendEmailVerification(userCredential.user);

      router.push('/signin');
      alert('ユーザ登録が完了しました');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder='メールアドレス'
      />
      <input
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder='パスワード'
      />
      <button
        type='button'
        onClick={() => {
          signUp();
        }}
      >
        ユーザ登録
      </button>

      <Link href='/signin'>ユーザー登録済みの方はこちら</Link>
    </div>
  );
};

export default SignUp;
