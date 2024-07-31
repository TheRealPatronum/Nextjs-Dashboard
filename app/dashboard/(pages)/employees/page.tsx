import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { setTimeout } from "timers/promises";
import { columns } from "./columns";
import { employees } from "@/app/mock/mockdata";

export default async function EmployeesPage() {
  // Fake load time of page to test the skeleton
  await setTimeout(2500);

  const data = employees;

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable data={data} columns={columns} />
        </CardContent>
      </Card>
    </div>
  );
}
