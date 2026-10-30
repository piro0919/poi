const colors: Record<string, string> = {
  Active: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Paid: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Trial: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  Churned: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
  Overdue: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${colors[status] ?? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"}`}>
      {status}
    </span>
  );
}
