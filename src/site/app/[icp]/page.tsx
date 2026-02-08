import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getAllICPs, getICPBySlug } from '@/lib/icp';
import { MDXRemote } from 'next-mdx-remote/rsc';

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
    title: `${page.title} | Prise`,
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
      {/* Hero Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {page.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {page.subtitle}
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href={page.ctaUrl}>{page.ctaText}</a>
            </Button>
          </div>

          {/* Pain Points */}
          {page.painPoints.length > 0 && (
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Sound familiar?
                </h2>
                <ul className="space-y-4">
                  {page.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
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
            <MDXRemote source={page.content} />
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
            Join the waitlist and be among the first to experience Prise.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href={page.ctaUrl}>{page.ctaText}</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
