'use client';
import { auth } from '@/features/auth/auth';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';

export default function LoginPage() {
  const onClick = async () => {
    const session = await signIn('kakao', {
      redirect: true,
      callbackUrl: '/',
    });
    console.log(session);
  };
  return (
    <button className="border-2 p-2" onClick={onClick}>
      카카오 로그인
    </button>
  );
}
