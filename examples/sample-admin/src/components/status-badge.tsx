const colors: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Paid: "bg-green-100 text-green-700",
  Trial: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Churned: "bg-gray-100 text-gray-600",
  Overdue: "bg-red-100 text-red-700",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${colors[status] ?? "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}
