'use client';
import { auth } from '@/features/auth/auth';
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   const getAuth = async () => {
  //     const session = await auth();
  //     if (session!.user) return null;
  //   };
  //   getAuth();
  // });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
