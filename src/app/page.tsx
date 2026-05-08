import { ArrowRight, Gauge, ShieldCheck, Workflow } from "lucide-react";

import { FaqSection } from "@/components/sections/faq-section";
import { LinkButton } from "@/components/ui/button";

const featureCards = [
  {
    title: "Fast Foundation",
    description: "App Router, TypeScript, Tailwind, linting, and formatting are ready from day one.",
    icon: Gauge
  },
  {
    title: "Production Defaults",
    description: "Strict typing, metadata, environment examples, and clean ownership boundaries are in place.",
    icon: ShieldCheck
  },
  {
    title: "Clear Workflow",
    description: "A simple structure keeps future product modules easy to add without reorganizing the app.",
    icon: Workflow
  }
];

export default function Home() {
  return (
    <div className="bg-zinc-50">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-normal text-emerald-700">
            Production scaffold
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
            autoDhun is ready for the next build step.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
            A clean Next.js application foundation with modern defaults, sensible folders, and room for the product features we add next.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#overview">
              View structure
              <ArrowRight aria-hidden="true" className="ml-2 size-4" />
            </LinkButton>
            <LinkButton href="#workflow" variant="secondary">
              Development flow
            </LinkButton>
          </div>
        </div>
        <div
          aria-label="Project setup summary"
          className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4">
            {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "ESLint", "Prettier"].map(
              (item) => (
                <div
                  className="flex items-center justify-between border-b border-zinc-100 pb-3 last:border-0 last:pb-0"
                  key={item}
                >
                  <span className="text-sm font-medium text-zinc-900">{item}</span>
                  <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                    Ready
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white" id="overview">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-normal text-zinc-950">
              Built for steady product work
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              The scaffold separates application routes, reusable components, configuration, and utilities so upcoming features can land cleanly.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {featureCards.map((feature) => (
              <article className="rounded-lg border border-zinc-200 p-5" key={feature.title}>
                <feature.icon aria-hidden="true" className="size-5 text-emerald-700" />
                <h3 className="mt-4 text-base font-semibold text-zinc-950">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-normal text-zinc-950">
            Development workflow
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["npm install", "npm run dev", "npm run build"].map((command) => (
              <div className="rounded-lg border border-zinc-200 bg-white p-5" key={command}>
                <code className="text-sm font-semibold text-zinc-950">{command}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white" id="contact">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-zinc-700">
            Next step: add autoDhun product modules, data models, and user flows.
          </p>
        </div>
      </section>

      <FaqSection />
    </div>
  );
}
