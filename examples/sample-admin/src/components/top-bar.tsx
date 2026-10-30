"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function TopBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          router.push(`/customers?q=${encodeURIComponent(query)}`);
        }}
        className="w-full max-w-md"
      >
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </form>
      <div className="flex size-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
        JD
      </div>
    </header>
  );
}
