'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/landing');
  }, []);

  return null; // No necesitas retornar ningún contenido, ya que la redirección se ejecutará antes de que se renderice cualquier elemento
}
