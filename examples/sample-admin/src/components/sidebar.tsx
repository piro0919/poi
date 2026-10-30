"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/customers", label: "Customers" },
  { href: "/invoices", label: "Invoices" },
  { href: "/settings", label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 border-r border-gray-200 bg-white">
      <div className="px-6 py-5 text-lg font-bold text-indigo-600">Acme CRM</div>
      <nav className="flex flex-col gap-1 px-3">
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                active ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
