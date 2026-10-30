import { useRouter } from "next/navigation";
import { useState } from "react";

export function TopBar({ menuOpen, onMenuClick }: { menuOpen: boolean; onMenuClick: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <header className="flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-4 md:px-8">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open menu"
        aria-expanded={menuOpen}
        className="flex size-9 shrink-0 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 md:hidden"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5" aria-hidden>
          <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          router.push(`/customers?q=${encodeURIComponent(query)}`);
        }}
        className="w-full max-w-md min-w-0 flex-1"
      >
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </form>
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
        JD
      </div>
    </header>
  );
}
