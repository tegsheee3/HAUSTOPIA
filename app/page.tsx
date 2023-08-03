"use client"

import Contact from "@components/Contact";
import About from "@components/About";
import { Hero } from "@components";
import Catalogue from "@components/Catalogue";


export default async function Home() {
  
  return (
    <main >
      <Hero/>
      <Catalogue />
      <About/>
      <Contact/>
    </main>
  );
}
