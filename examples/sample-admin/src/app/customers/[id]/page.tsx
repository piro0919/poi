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
      <Link href="/customers" className="text-sm font-medium text-indigo-600 hover:underline">
        ← Back
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{customer.name}</h1>
            <p className="text-gray-500">{customer.company}</p>
          </div>
          <StatusBadge status={customer.status} />
        </div>
        <dl className="mt-6 grid grid-cols-3 gap-6 text-sm">
          <div>
            <dt className="text-gray-500">Email</dt>
            <dd className="font-medium">{customer.email}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Plan</dt>
            <dd className="font-medium">{customer.plan}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Created</dt>
            <dd className="font-medium">{customer.createdAt}</dd>
          </div>
        </dl>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold">Invoices</h2>
        {customerInvoices.length === 0 ? (
          <p className="text-sm text-gray-500">No invoices yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200 text-sm">
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
