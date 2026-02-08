import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const icpPages = [
    {
      title: "Real Estate Investors",
      description: "2-5 properties, multiple LLCs",
      href: "/real-estate-investors",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "E-commerce Brands",
      description: "Multi-brand operators",
      href: "/ecommerce-brands",
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "Franchise Operators",
      description: "QSR, 3-10 locations",
      href: "/franchise-operators",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      title: "Family Business",
      description: "Second-generation leaders",
      href: "/family-business",
      color: "bg-amber-700 hover:bg-amber-800"
    },
    {
      title: "SaaS Startups",
      description: "Post-seed to Series A",
      href: "/saas-startups",
      color: "bg-indigo-600 hover:bg-indigo-700"
    }
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-16 px-8 bg-white dark:bg-black">
        <div className="w-full max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-4">
              Prise Validation
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-2">
              Corporate Document Management for Growing Businesses
            </p>
            <p className="text-base text-zinc-500 dark:text-zinc-500">
              Choose your industry to learn more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {icpPages.map((icp) => (
              <Link
                key={icp.href}
                href={icp.href}
                className={`${icp.color} text-white rounded-lg p-6 transition-all hover:shadow-lg hover:scale-105`}
              >
                <h2 className="text-xl font-semibold mb-2">{icp.title}</h2>
                <p className="text-sm text-white/90">{icp.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center text-sm text-zinc-500 dark:text-zinc-600">
            <p>Phase 1 Validation Landing Pages</p>
            <p className="mt-2">Micro-Test: Real Estate + E-commerce ($100)</p>
            <p>Validation: All 5 pages ($150-200)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
