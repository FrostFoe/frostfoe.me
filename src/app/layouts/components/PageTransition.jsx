'use client';

import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return <Suspense fallback={<div>Loading...</div>}>
    <div key={pathname}>{children}</div>
  </Suspense>;
};

export default PageTransition;
