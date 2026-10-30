"use client";

import { useState } from "react";
import { findCustomer, formatAmount, invoices } from "@/lib/data";
import { StatusBadge } from "./status-badge";

const statuses = ["All", "Paid", "Pending", "Overdue"] as const;

export function InvoiceTable() {
  const [status, setStatus] = useState<(typeof statuses)[number]>("All");

  const filtered = status === "All" ? invoices : invoices.filter((invoice) => invoice.status === status);
  const outstanding = invoices
    .filter((invoice) => invoice.status !== "Paid")
    .reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Invoices</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">View and manage all invoices.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Stat label="Total Invoices" value={String(invoices.length)} />
        <Stat label="Outstanding" value={formatAmount(outstanding)} />
        <Stat label="Overdue" value={String(invoices.filter((invoice) => invoice.status === "Overdue").length)} />
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="status" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Status:
        </label>
        <select
          id="status"
          value={status}
          onChange={(event) => setStatus(event.target.value as (typeof statuses)[number])}
          className="rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm"
        >
          {statuses.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <table className="w-full whitespace-nowrap text-left text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800 text-xs uppercase text-gray-500 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Invoice</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Issued</th>
              <th className="px-6 py-3">Due</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {filtered.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 font-medium">{invoice.id}</td>
                <td className="px-6 py-4">{findCustomer(invoice.customerId)?.company}</td>
                <td className="px-6 py-4">{formatAmount(invoice.amount)}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={invoice.status} />
                </td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{invoice.issuedAt}</td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{invoice.dueAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm">
      <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </div>
  );
}
