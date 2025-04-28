
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Users, BarChart3, ShoppingCart, ArrowUpRight } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your application.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Customers"
            value="2,543"
            icon={<Users className="h-5 w-5" />}
            trend={{ value: 12.5, positive: true }}
          />
          <StatCard
            title="Active Users"
            value="1,832"
            icon={<Users className="h-5 w-5" />}
            trend={{ value: 8.2, positive: true }}
          />
          <StatCard
            title="Sales"
            value="$45,231"
            icon={<ShoppingCart className="h-5 w-5" />}
            trend={{ value: 5.1, positive: true }}
          />
          <StatCard
            title="Conversion"
            value="3.2%"
            icon={<BarChart3 className="h-5 w-5" />}
            trend={{ value: 1.2, positive: false }}
          />
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
