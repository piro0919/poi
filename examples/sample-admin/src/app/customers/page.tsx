import { Suspense } from "react";
import { CustomerList } from "@/components/customer-list";

export default function CustomersPage() {
  return (
    <Suspense>
      <CustomerList />
    </Suspense>
  );
}
