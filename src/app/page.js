"use client";
import { useRouter } from 'next/navigation';
import Company from './component/Company';

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Company router={router} />
    </main>
  );
}