'use client';
import { useSession } from 'next-auth/react';

import React from 'react';

const Content = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const uid = user?.uid;
  const email = user?.email;

  return (
    <div className='bg-stone-800 text-white h-lvh w-full'>
      <h1>uid : {uid}</h1>
      <h1>e-mail : {email}</h1>
    </div>
  );
};

export default Content;
