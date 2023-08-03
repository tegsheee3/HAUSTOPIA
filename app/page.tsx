"use client"

import Contact from "@components/Contact";
import About from "@components/About";
import { Hero } from "@components";
import Main from "@components/Main";


export default async function Home() {
  
  return (
    <main>
      <Hero/>
      <Main />
      <About/>
      <Contact/>
    </main>
  );
}
