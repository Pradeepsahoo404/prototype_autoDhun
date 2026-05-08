import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-zinc-950">Page not found</h1>
      <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link className="mt-6 text-sm font-semibold text-emerald-700 hover:text-emerald-800" href="/">
        Go home
      </Link>
    </div>
  );
}
