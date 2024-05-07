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
  console.log('test');
  console.log('test2');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
