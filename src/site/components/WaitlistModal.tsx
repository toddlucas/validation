'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  accentColor?: string;
  source?: string;
}

export function WaitlistModal({ open, onOpenChange, accentColor, source = 'icp-landing-page' }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
            name: name || undefined,
            source: source,
            timestamp: new Date().toISOString()
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      const data = await response.json();
      console.log('Waitlist response:', data);

      const eventId = crypto.randomUUID();

      if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Lead', {}, { eventID: eventId });
      }
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'waitlist',
          event_label: source,
        });
      }

      fetch('/api/track-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          eventId,
          eventSourceUrl: window.location.href,
        }),
      }).catch(() => {});

      setSubmitted(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setEmail('');
        setName('');
        setSubmitted(false);
        onOpenChange(false);
      }, 3000);
    } catch (err) {
      console.error('Error submitting to waitlist:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset form when closing
      setEmail('');
      setName('');
      setError(null);
      setSubmitted(false);
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
          <DialogDescription>
            Be among the first to experience Sorcery when we launch.
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name (optional)</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              style={accentColor ? { backgroundColor: accentColor } : undefined}
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </form>
        ) : (
          <div className="py-6 text-center space-y-2">
            <p className="text-lg font-medium text-green-600 dark:text-green-400">
              You&apos;re on the list!
            </p>
            <p className="text-sm text-muted-foreground">
              We&apos;ll be in touch soon.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
