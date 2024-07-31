import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import rö from "@/public/images/rö.jpg";
import WorkLocationTrends from "./work-location-trends";
import { companyData } from "@/app/mock/mockdata";

export default function EmployeesStats() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Total employees Card*/}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total employees</CardTitle>
          </CardHeader>

          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">
                {companyData.totalEmployees}
              </div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/employees">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Employees pressent Card*/}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employees present</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex gap-2">
              {companyData.getEmployeesPressentPercentage() > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}
              <div className="text-5xl font-bold">
                {companyData.employeesPressent}
              </div>
            </div>
          </CardContent>

          <CardFooter>
            {companyData.getEmployeesPressentPercentage() > 75 ? (
              <span className="text-xs text-green-500 flex gap-1 items-center">
                <BadgeCheckIcon />
                {companyData.getEmployeesPressentPercentage()}% of employees are
                pressent
              </span>
            ) : (
              <span className="text-xs text-red-500 flex gap-1 items-center">
                <AlertTriangleIcon />
                only {companyData.getEmployeesPressentPercentage()}% of
                employees are pressent
              </span>
            )}
          </CardFooter>
        </Card>

        {/* Employee of the month Card*/}
        <Card className="border-pink-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employee of the month</CardTitle>
          </CardHeader>

          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <Image src={rö} alt="Employee of the month avatar" />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Ragnar Öst!</span>
          </CardContent>

          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            <PartyPopperIcon className=" text-pink-500" />
            <span>Congratulations, Ragnar</span>
          </CardFooter>
        </Card>
      </div>

      {/* Employee work location trends Card*/}
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="pl-0">
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}
