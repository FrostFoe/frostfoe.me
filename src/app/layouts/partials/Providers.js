"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Preloader from "../components/Preloader";

const Providers = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      // Small delay to allow transition to complete
      setTimeout(() => setLoading(false), 300);
    };

    handleComplete(); // For initial load

    // These are not direct event listeners for Next.js 13+ App Router,
    // but we use the pathname change to simulate the behavior.
    return () => {
      handleStart();
    };
  }, [pathname]);

  return (
    <>
      <Suspense fallback={<Preloader />}>
        {loading && <Preloader />}
        {children}
      </Suspense>
    </>
  );
};

export default Providers;
