"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
import Organizers from "../components/Organizers";
import StarterKits from "../components/StarterKits";
import Learn from "../components/Learn";
import Sponsors from "../components/Sponsors";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import SignUp from "../components/SignUp";
import CallToAction from "../components/CallToAction";

export default function HomePage(): JSX.Element {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <Hero />
        <SignUp />
        <Sponsors />
        <Organizers />
        {/* <Categories /> */}
        {/* <Learn />
        <StarterKits /> */}
        {/* <CallToAction /> */}
      </main>
      <Footer />
    </div>
  );
}
