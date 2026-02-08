'use client';

import { useState } from 'react';
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with your waitlist service
    console.log('Email submitted:', email);
    setSubmitted(true);
  };

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
              Prise
            </h1>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            You&apos;re early.
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-zinc-400 leading-relaxed max-w-xl mx-auto">
            A select group of business owners are about to discover something different.
          </p>

          {/* Email Capture */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-zinc-600 h-12 px-4"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 font-medium h-12 px-8"
                >
                  Join Waitlist
                </Button>
              </div>
              <p className="text-sm text-zinc-600">
                Limited early access.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto space-y-4">
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <p className="text-lg text-zinc-300">
                  Welcome to the waitlist.
                </p>
                <p className="text-sm text-zinc-500 mt-2">
                  We&apos;ll be in touch soon.
                </p>
              </div>
            </div>
          )}

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
