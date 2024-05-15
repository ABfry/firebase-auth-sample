'use client';
import React from 'react';

import { signOut, useSession } from 'next-auth/react';
import { Button } from './ui/button';

const SignOutButton = () => {
  return (
    <Button
      type='button'
      onClick={async () => {
        await signOut();
      }}
    >
      SignOut
    </Button>
  );
};

export default SignOutButton;
