"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";

const Providers = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, isInitialLoad]);

  return (
    <>
      {loading && <Preloader />}
      {children}
    </>
  );
};

export default Providers;
