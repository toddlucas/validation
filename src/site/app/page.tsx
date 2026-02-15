'use client';

import { useState } from 'react';
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://api.freewaitlists.com/waitlists/cmln16h2200df01p2cgku1fo1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          meta: {
            source: 'validation-landing-page',
            timestamp: new Date().toISOString()
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      const data = await response.json();
      console.log('Waitlist response:', data);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting to waitlist:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                  disabled={isSubmitting}
                  className="flex-1 bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-zinc-600 h-12 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-white text-black hover:bg-zinc-200 font-medium h-12 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </div>
              {error && (
                <p className="text-sm text-red-400">
                  {error}
                </p>
              )}
              {!error && (
                <p className="text-sm text-zinc-600">
                  Request early access.
                </p>
              )}
            </form>
          ) : (
            <div className="max-w-md mx-auto space-y-4">
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <p className="text-lg text-zinc-300">
                  You&apos;re on the list.
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
