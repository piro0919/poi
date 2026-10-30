import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/status-badge";
import { customers, findCustomer, formatAmount, invoices } from "@/lib/data";

export function generateStaticParams() {
  return customers.map((customer) => ({ id: customer.id }));
}

export default async function CustomerPage({ params }: PageProps<"/customers/[id]">) {
  const { id } = await params;
  const customer = findCustomer(id);
  if (!customer) notFound();

  const customerInvoices = invoices.filter((invoice) => invoice.customerId === customer.id);

  return (
    <div className="space-y-6">
      <Link href="/customers" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
        ← Back
      </Link>

      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl font-bold">{customer.name}</h1>
            <p className="text-gray-500 dark:text-gray-400">{customer.company}</p>
          </div>
          <StatusBadge status={customer.status} />
        </div>
        <dl className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3 sm:gap-6">
          <div className="min-w-0">
            <dt className="text-gray-500 dark:text-gray-400">Email</dt>
            <dd className="break-words font-medium">{customer.email}</dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Plan</dt>
            <dd className="font-medium">{customer.plan}</dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Created</dt>
            <dd className="font-medium">{customer.createdAt}</dd>
          </div>
        </dl>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold">Invoices</h2>
        {customerInvoices.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">No invoices yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
            {customerInvoices.map((invoice) => (
              <li key={invoice.id} className="flex items-center justify-between py-3">
                <span className="font-medium">{invoice.id}</span>
                <span>{formatAmount(invoice.amount)}</span>
                <StatusBadge status={invoice.status} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
