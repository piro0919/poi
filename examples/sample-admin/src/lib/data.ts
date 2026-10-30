export type Customer = {
  id: string;
  name: string;
  company: string;
  email: string;
  plan: "Free" | "Pro" | "Enterprise";
  status: "Active" | "Trial" | "Churned";
  createdAt: string;
};

export type Invoice = {
  id: string;
  customerId: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
  issuedAt: string;
  dueAt: string;
};

export const customers: Customer[] = [
  { id: "c_001", name: "Hana Sato", company: "Blue Harbor Logistics", email: "hana@blueharbor.example", plan: "Enterprise", status: "Active", createdAt: "2026-02-14" },
  { id: "c_002", name: "Marcus Lee", company: "Pine & Oak Studio", email: "marcus@pineoak.example", plan: "Pro", status: "Active", createdAt: "2026-03-02" },
  { id: "c_003", name: "Aiko Tanaka", company: "Kumo Analytics", email: "aiko@kumo.example", plan: "Pro", status: "Trial", createdAt: "2026-09-21" },
  { id: "c_004", name: "Daniel Brooks", company: "Northgate Supply", email: "daniel@northgate.example", plan: "Free", status: "Churned", createdAt: "2025-11-08" },
  { id: "c_005", name: "Priya Nair", company: "Lattice Health", email: "priya@lattice.example", plan: "Enterprise", status: "Active", createdAt: "2026-01-19" },
  { id: "c_006", name: "Tom Fischer", company: "Fischer Bikes", email: "tom@fischerbikes.example", plan: "Free", status: "Trial", createdAt: "2026-10-03" },
  { id: "c_007", name: "Yui Mori", company: "Sora Travel", email: "yui@soratravel.example", plan: "Pro", status: "Active", createdAt: "2026-05-27" },
  { id: "c_008", name: "Elena García", company: "Verde Foods", email: "elena@verdefoods.example", plan: "Pro", status: "Active", createdAt: "2026-06-11" },
];

export const invoices: Invoice[] = [
  { id: "INV-1042", customerId: "c_001", amount: 4800, status: "Paid", issuedAt: "2026-10-01", dueAt: "2026-10-31" },
  { id: "INV-1043", customerId: "c_002", amount: 290, status: "Pending", issuedAt: "2026-10-05", dueAt: "2026-11-04" },
  { id: "INV-1044", customerId: "c_005", amount: 5200, status: "Overdue", issuedAt: "2026-09-01", dueAt: "2026-10-01" },
  { id: "INV-1045", customerId: "c_007", amount: 290, status: "Paid", issuedAt: "2026-10-08", dueAt: "2026-11-07" },
  { id: "INV-1046", customerId: "c_008", amount: 290, status: "Pending", issuedAt: "2026-10-12", dueAt: "2026-11-11" },
  { id: "INV-1047", customerId: "c_003", amount: 0, status: "Paid", issuedAt: "2026-10-15", dueAt: "2026-11-14" },
  { id: "INV-1048", customerId: "c_001", amount: 4800, status: "Pending", issuedAt: "2026-10-28", dueAt: "2026-11-27" },
];

export function findCustomer(id: string) {
  return customers.find((customer) => customer.id === id);
}

export function formatAmount(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}
