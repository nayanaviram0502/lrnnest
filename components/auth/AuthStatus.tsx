'use client';

import { useSession } from 'next-auth/react';

export function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    return <div>Signed in as {session.user?.email}</div>;
  }

  return <div>Not signed in</div>;
}