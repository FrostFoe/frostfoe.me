'use client';

import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import Preloader from './Preloader';

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <Suspense fallback={<Preloader />}>
      <div key={pathname} className="page-transition">
        {children}
      </div>
    </Suspense>
  );
};

export default PageTransition;
