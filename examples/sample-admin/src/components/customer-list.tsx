"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { type Customer, customers as seed } from "@/lib/data";
import { StatusBadge } from "./status-badge";

export function CustomerList() {
  const searchParams = useSearchParams();
  const [customers, setCustomers] = useState(seed);
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [showForm, setShowForm] = useState(false);

  const filtered = customers.filter((customer) =>
    `${customer.name} ${customer.company} ${customer.email}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage your customers here.</p>
        </div>
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="shrink-0 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700"
        >
          + Add Customer
        </button>
      </div>

      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Filter customers..."
        className="w-full rounded-lg sm:w-72 border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900"
      />

      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-sm text-gray-500 dark:text-gray-400">No data found.</div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-800">
            {filtered.map((customer) => (
              <li key={customer.id}>
                <Link
                  href={`/customers/${customer.id}`}
                  className="flex items-center justify-between gap-4 px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 sm:px-6"
                >
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{customer.name}</div>
                    <div className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {customer.company} · {customer.email}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-4">
                    <span className="hidden text-sm text-gray-500 dark:text-gray-400 sm:inline">{customer.plan}</span>
                    <StatusBadge status={customer.status} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {showForm && (
        <AddCustomerDialog
          onCancel={() => setShowForm(false)}
          onSubmit={(customer) => {
            setCustomers((current) => [customer, ...current]);
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}

function AddCustomerDialog({
  onCancel,
  onSubmit,
}: {
  onCancel: () => void;
  onSubmit: (customer: Customer) => void;
}) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!name || !company || !email) {
            setError("Error: All fields are required.");
            return;
          }
          if (!email.includes("@")) {
            setError("Error: Invalid email.");
            return;
          }
          onSubmit({
            id: `c_${Date.now()}`,
            name,
            company,
            email,
            plan: "Free",
            status: "Trial",
            createdAt: new Date().toISOString().slice(0, 10),
          });
        }}
        className="w-full max-w-md space-y-4 rounded-xl bg-white dark:bg-gray-900 p-6 shadow-xl"
      >
        <h2 className="text-lg font-bold">Add Customer</h2>
        <Field label="Name" value={name} onChange={setName} />
        <Field label="Company" value={company} onChange={setCompany} />
        <Field label="Email" value={email} onChange={setEmail} />
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900"
      />
    </label>
  );
}
