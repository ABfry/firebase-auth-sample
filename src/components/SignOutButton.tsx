'use client';
import React, { ButtonHTMLAttributes } from 'react';

import { signOut, useSession } from 'next-auth/react';
import { Button } from './ui/button';
import { twMerge } from 'tailwind-merge';

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
}

const SignOutButton = ({ children, className, ...props }: SignOutButtonProps) => {
  return (
    <Button
      type='button'
      onClick={async () => {
        await signOut();
      }}
      className={twMerge('', className)}
    >
      {children}
    </Button>
  );
};

export default SignOutButton;
