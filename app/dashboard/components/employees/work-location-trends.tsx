"use client";

import { workLocationTrends } from "@/app/mock/mockdata";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const legendFormatter = (value: string) => {
  if (value === "wfh") {
    return <div className="text-sm">Work from home</div>;
  } else if (value === "office") {
    return <div className="text-sm">Work from office</div>;
  }
};

const tooltipFormatter = (value: string, name: string) => {
  if (name === "wfh") {
    return [value, "Work from home"];
  } else if (name === "office") {
    return [value, "Work from Office"];
  }
};

export default function WorkLocationTrends() {
  const data = workLocationTrends;
  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
      >
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip
          separator=": "
          formatter={tooltipFormatter}
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <Legend iconType="circle" formatter={legendFormatter} />
        <Bar dataKey="office" stackId={1} fill="#ec4899" />
        <Bar dataKey="wfh" stackId={1} fill="#6b7280" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
