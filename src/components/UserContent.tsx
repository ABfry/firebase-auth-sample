'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const UserContent = () => {
  const { data: session, status } = useSession();
  const [iframeSrc, setIframeSrc] = useState<string>('');

  useEffect(() => {
    if (status === 'authenticated') {
      setIframeSrc(`/content/${session?.user?.uid}`);
    } else {
      setIframeSrc('');
    }
  }, [status, session]);

  if (status === 'loading') {
    return <div className='text-center font-bold text-3xl'>Loading...</div>;
  }

  return (
    <div className='mx-auto w-fit'>
      <iframe src={iframeSrc} width='600' height='400' />
    </div>
  );
};

export default UserContent;
