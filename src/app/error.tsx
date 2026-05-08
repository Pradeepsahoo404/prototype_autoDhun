"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-normal text-red-700">
        Something went wrong
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-zinc-950">Unable to load this page.</h1>
      <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">{error.message}</p>
      <div className="mt-6">
        <Button onClick={() => reset()} type="button">
          Try again
        </Button>
      </div>
    </div>
  );
}
