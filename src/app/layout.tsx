"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store"; 
import AuthProvider from "/src/components/auth/AuthProvider"; 
import { usePathname } from "next/navigation";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
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
    "/lawyerList",
    '/lawyerProfile'
  ].includes(pathname);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
      </head>
      <body className="container">
        <Header/>
          <Provider store={store}>
            <main className="">
              {isPublicRoute ? children : <AuthProvider>{children}</AuthProvider>}
              {/* {children} */}
            </main>
          </Provider>
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;
