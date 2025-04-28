
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { AIModelUsage } from "@/components/dashboard/AIModelUsage"; 
import { AIProviderCosts } from "@/components/dashboard/AIProviderCosts";
import { 
  Users, 
  BarChart3, 
  Brain, 
  Cpu, 
  DollarSign,
  Zap 
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">AI Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your AI usage, costs, and performance across all providers.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total API Calls"
            value="24,531"
            icon={<Zap className="h-5 w-5" />}
            trend={{ value: 12.5, positive: true }}
          />
          <StatCard
            title="Active Users"
            value="1,832"
            icon={<Users className="h-5 w-5" />}
            trend={{ value: 8.2, positive: true }}
          />
          <StatCard
            title="Monthly Cost"
            value="$2,451"
            icon={<DollarSign className="h-5 w-5" />}
            trend={{ value: 5.1, positive: false }}
          />
          <StatCard
            title="Avg. Latency"
            value="235ms"
            icon={<Cpu className="h-5 w-5" />}
            trend={{ value: 3.2, positive: true }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <AIProviderCosts className="md:col-span-4" />
          <AIModelUsage className="md:col-span-3" />
        </div>
        
        <div className="grid gap-4 md:grid-cols-7">
          <AnalyticsChart className="md:col-span-4" />
          <RecentActivity className="md:col-span-3" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
