
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AnalyticsChartProps {
  className?: string;
}

const data = [
  { name: 'Jan', requests: 400, tokens: 2100 },
  { name: 'Feb', requests: 300, tokens: 1800 },
  { name: 'Mar', requests: 600, tokens: 3200 },
  { name: 'Apr', requests: 800, tokens: 4100 },
  { name: 'May', requests: 700, tokens: 3700 },
  { name: 'Jun', requests: 900, tokens: 4500 },
  { name: 'Jul', requests: 1100, tokens: 5200 },
];

export function AnalyticsChart({ className }: AnalyticsChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>API Usage Trends</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#7E69AB" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5096C8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#5096C8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #f0f0f0',
                  borderRadius: '4px',
                }}
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="requests" 
                stroke="#7E69AB" 
                fillOpacity={1} 
                fill="url(#colorRequests)" 
                name="API Requests"
              />
              <Area 
                yAxisId="right"
                type="monotone" 
                dataKey="tokens" 
                stroke="#5096C8" 
                fillOpacity={1} 
                fill="url(#colorTokens)" 
                name="Tokens Used (K)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
