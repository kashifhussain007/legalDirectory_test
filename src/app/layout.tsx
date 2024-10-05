"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store"; 
import AuthProvider from "/src/components/auth/AuthProvider"; 
import { usePathname } from "next/navigation";
import "./globals.css"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  // Define which routes are public
  const isPublicRoute = [
    "/",
    "/auth/login",
    "/auth",
    "/about",
    "/contact",
  ].includes(pathname);

  return (
    <html lang="en">
      <body className="">
        <Provider store={store}>
          <main className="">
            {isPublicRoute ? children : <AuthProvider>{children}</AuthProvider>}
            {/* {children} */}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
