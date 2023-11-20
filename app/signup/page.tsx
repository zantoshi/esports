"use client";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from 'react';
import SignUp from "../../components/SignUp";

export default function SignUpPage(): JSX.Element {

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}

