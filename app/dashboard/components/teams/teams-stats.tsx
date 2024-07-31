import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ListChecksIcon,
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import TeamDistributionChart from "./team-distribution-chart";
import SuportTicketsResolved from "./suport-tickets-resolved";
import { teamleaders } from "@/app/mock/mockdata";

export default function TeamsStats() {
  const data = teamleaders;

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Total teams card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>

          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Team leaders card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-wrap gap-2">
            {data.map((teamLeader) => (
              <TooltipProvider
                key={`${teamLeader.firstName}${teamLeader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName}`}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {`${teamLeader.firstName} ${teamLeader.lastName}`}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>

        {/* Teams distrubution card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team distrubution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>

          <CardContent className="pb-0">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>

      {/* Support ticket resolved card */}
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ListChecksIcon />
            <span>Support ticket resolved</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="pl-0">
          <SuportTicketsResolved />
        </CardContent>
      </Card>
    </>
  );
}
