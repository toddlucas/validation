'use client';

import { ThemeToggle } from "@/components/ThemeToggle";
import { WaitlistButton } from "@/components/WaitlistButton";

export default function Home() {

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Floating Theme Toggle */}
      <div className="fixed top-4 left-4 z-50">
        <ThemeToggle />
      </div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950" />
      
      {/* Ambient glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl" />

      {/* Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24">
        <div className="max-w-2xl text-center space-y-12">
          {/* Logo/Brand */}
          <div className="space-y-4">
            <h1 className="text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Sorcery
            </h1>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            Documents that understand each other.
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-zinc-400 leading-relaxed max-w-xl mx-auto">
            A new workspace for multi-document projects. Research, write, and maintain document sets with intelligence that spans your entire project.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <WaitlistButton
              size="lg"
              className="bg-white text-black hover:bg-zinc-200 font-medium h-12 px-8"
              source="home-landing-page"
            >
              Join Waitlist
            </WaitlistButton>
          </div>
          
          <p className="text-sm text-zinc-600">
            Request early access.
          </p>

          {/* Footer tagline */}
          <div className="pt-12">
            <p className="text-sm text-zinc-600 tracking-wide">
              COMING SOON
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
