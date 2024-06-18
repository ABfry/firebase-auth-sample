'use client';
import React from 'react';

import { signOut, useSession } from 'next-auth/react';
import { Button } from './ui/button';

type style = {
  className: string;
};

const SignOutButton = (style: style) => {
  return (
    <Button
      type='button'
      onClick={async () => {
        await signOut();
      }}
      className={`${style.className}`}
    >
      SignOut
    </Button>
  );
};

export default SignOutButton;
