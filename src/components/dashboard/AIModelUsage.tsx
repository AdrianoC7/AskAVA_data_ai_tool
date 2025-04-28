
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface AIModelUsageProps {
  className?: string;
}

const data = [
  { name: "GPT-4o", value: 48 },
  { name: "Claude 3", value: 25 },
  { name: "GPT-3.5", value: 15 },
  { name: "Mistral", value: 8 },
  { name: "Others", value: 4 },
];

const COLORS = ["#7E69AB", "#5096C8", "#4AC1A0", "#E6A06F", "#F1757B"];

export function AIModelUsage({ className }: AIModelUsageProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>AI Model Usage</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => `${value}%`}
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #f0f0f0',
                  borderRadius: '4px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
