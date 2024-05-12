'use client';
import React from 'react';

import { signOut, useSession } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <button
      type='button'
      onClick={async () => {
        await signOut();
      }}
    >
      SignOut
    </button>
  );
};

export default SignOutButton;
