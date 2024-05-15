'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/client';
import { signIn as signInByNextAuth } from 'next-auth/react';

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

const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    if (!email) return;
    if (!password) return;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      await signInByNextAuth('credentials', {
        idToken,
        callbackUrl: '/',
      });
    } catch (e) {
      alert('ログインに失敗しました');
      console.error(e);
    }
  };

  return (
    <Card className='w-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <CardHeader>
        <CardTitle>ログイン</CardTitle>
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
          <Link href='/signup'>新規登録はこちら</Link>
        </Button>
        <Button onClick={() => signIn()}>ログイン</Button>
      </CardFooter>
    </Card>
  );
};

export default SingIn;
