import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { getAllICPs, getICPBySlug } from '@/lib/icp';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Callout } from '@/mdx-components';
import { ClickableImage } from '@/components/ClickableImage';
import { ThemeToggle } from '@/components/ThemeToggle';
import { WaitlistButton } from '@/components/WaitlistButton';

export async function generateStaticParams() {
  const icps = getAllICPs();
  return icps.map((icp) => ({
    icp: icp.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ icp: string }> }) {
  const { icp } = await params;
  const page = getICPBySlug(icp);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `${page.title} | Sorcery`,
    description: page.subtitle,
  };
}

export default async function ICPLandingPage({ params }: { params: Promise<{ icp: string }> }) {
  const { icp } = await params;
  const page = getICPBySlug(icp);

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Floating Theme Toggle */}
      <div className="fixed top-4 left-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-32 overflow-hidden">
        {/* Background Image */}
        {page.heroImage && (
          <>
            <Image
              src={page.heroImage}
              alt={page.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </>
        )}
        
        {/* Content */}
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-white drop-shadow-lg">
              {page.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {page.subtitle}
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center mb-16">
            <WaitlistButton
              size="lg"
              className="text-lg px-8 py-6 shadow-xl"
              accentColor={page.accentColor}
              source={`icp-${page.slug}`}
            >
              {page.ctaText}
            </WaitlistButton>
          </div>

          {/* Pain Points */}
          {page.painPoints.length > 0 && (
            <Card 
              className="max-w-3xl mx-auto bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border-2"
              style={page.accentColor ? { borderColor: page.accentColor } : undefined}
            >
              <CardContent className="pt-1">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Sound familiar?
                </h2>
                <ul className="space-y-4">
                  {page.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 
                        className="h-6 w-6 flex-shrink-0 mt-0.5" 
                        style={page.accentColor ? { color: page.accentColor } : undefined}
                      />
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-20">
        <article className="container mx-auto max-w-4xl">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <MDXRemote source={page.content} components={{ Callout, ClickableImage }} />
          </div>
        </article>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to get organized?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the waitlist and be among the first to experience Sorcery.
          </p>
          <WaitlistButton
            size="lg"
            className="text-lg px-8 py-6"
            accentColor={page.accentColor}
            source={`icp-${page.slug}-bottom`}
          >
            {page.ctaText}
          </WaitlistButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Base 2 LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
