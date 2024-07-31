"use client";

import { pieDiagramData } from "@/app/mock/mockdata";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function TeamDistributionChart() {
  const data = pieDiagramData;

  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border"
        />

        <Pie data={data} dataKey="value" nameKey="name">
          {data.map((dataItem) => (
            <Cell key={dataItem.id} fill={dataItem.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
