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

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
    <Card className='w-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <CardHeader>
        <CardTitle>ユーザ登録</CardTitle>
        <CardDescription>E-Mailとパスワードを入力</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='email'>E-Mail</Label>
              <Input
                id='email'
                placeholder='xxx@xxx.xxx'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                placeholder='xxxxxxxx'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline' asChild>
          <Link href='/signin'>登録済みの方はこちら</Link>
        </Button>
        <Button onClick={() => signUp()}>ユーザ登録</Button>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
