"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NotFoundContextType {
  isNotFoundPage: boolean;
}

const NotFoundContext = createContext<NotFoundContextType | undefined>(
  undefined,
);

export const NotFoundProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // This logic assumes a custom 404 page is rendered at a route like '/404'
    // or by Next.js's default 404 handling which might not change the pathname
    // in a way that's easily detectable without being on the page itself.
    // A more robust solution might involve the NotFoundPage component setting a context value.
    // For now, let's assume direct navigation to a '/404' path for simplicity or rely on page-specific logic.
    setIsNotFoundPage(pathname === "/404");
  }, [pathname]);

  return (
    <NotFoundContext.Provider value={{ isNotFoundPage }}>
      {children}
    </NotFoundContext.Provider>
  );
};

export const useNotFound = () => {
  const context = useContext(NotFoundContext);
  if (context === undefined) {
    throw new Error("useNotFound must be used within a NotFoundProvider");
  }
  return context;
};
