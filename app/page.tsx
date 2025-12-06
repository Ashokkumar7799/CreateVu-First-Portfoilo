"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Lazy load heavy components to improve initial page load
const Grid = dynamic(() => import("@/components/Grid"), { 
  loading: () => <div className="h-screen" />,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Approach = dynamic(() => import("@/components/Approach"));
const Clients = dynamic(() => import("@/components/Clients"));
const Footer = dynamic(() => import("@/components/Footer"));

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full relative z-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Profile />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
