
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from "recharts";

interface AIProviderCostsProps {
  className?: string;
}

const data = [
  { name: "Jan", OpenAI: 1200, Anthropic: 800, Mistral: 400, Cohere: 200 },
  { name: "Feb", OpenAI: 1400, Anthropic: 950, Mistral: 450, Cohere: 350 },
  { name: "Mar", OpenAI: 1800, Anthropic: 1100, Mistral: 600, Cohere: 400 },
  { name: "Apr", OpenAI: 1600, Anthropic: 1250, Mistral: 700, Cohere: 450 },
  { name: "May", OpenAI: 1900, Anthropic: 1400, Mistral: 750, Cohere: 500 },
  { name: "Jun", OpenAI: 2200, Anthropic: 1600, Mistral: 800, Cohere: 550 },
];

const COLORS = {
  OpenAI: "#7E69AB",
  Anthropic: "#5096C8",
  Mistral: "#4AC1A0",
  Cohere: "#E6A06F"
};

export function AIProviderCosts({ className }: AIProviderCostsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>AI Provider Costs</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `$${value}`} />
              <Tooltip 
                formatter={(value) => `$${value}`}
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #f0f0f0',
                  borderRadius: '4px',
                }}
              />
              <Legend />
              <Bar dataKey="OpenAI" fill={COLORS.OpenAI} radius={[4, 4, 0, 0]} />
              <Bar dataKey="Anthropic" fill={COLORS.Anthropic} radius={[4, 4, 0, 0]} />
              <Bar dataKey="Mistral" fill={COLORS.Mistral} radius={[4, 4, 0, 0]} />
              <Bar dataKey="Cohere" fill={COLORS.Cohere} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
