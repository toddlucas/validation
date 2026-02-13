import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const icpPages = [
    {
      title: "Government Contractors",
      description: "RFP response teams, 10-50+ documents",
      href: "/government-contractors",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Grant Writers",
      description: "Nonprofit development directors",
      href: "/grant-writers",
      color: "bg-green-700 hover:bg-green-800"
    },
    {
      title: "Consulting Firms",
      description: "Proposal and deliverable teams",
      href: "/consulting-firms",
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "Academic Researchers",
      description: "PhD candidates, dissertations",
      href: "/academic-researchers",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      title: "Franchise Operators",
      description: "Multi-unit QSR, 3-20 locations",
      href: "/franchise-operators",
      color: "bg-orange-600 hover:bg-orange-700"
    },
    {
      title: "Legal Firms",
      description: "Complex litigation teams",
      href: "/legal-firms",
      color: "bg-cyan-600 hover:bg-cyan-700"
    }
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-16 px-8 bg-white dark:bg-black">
        <div className="w-full max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-4">
              Docuscribe Validation
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-2">
              AI Document Management for Multi-Document Intelligence
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
            <p>Tier 1 ICP Validation Landing Pages</p>
            <p className="mt-2">Phase 1: Test all 6 ICPs simultaneously ($3,000)</p>
            <p>Phase 2: Focus on top 3 performers ($3,000)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
