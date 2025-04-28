
import React from "react";
import { 
  ArrowRight, 
  Home, 
  BarChart3, 
  Settings, 
  Users, 
  Brain,
  Cpu,
  DollarSign,
  LayoutGrid,
  Menu,
  Zap,
  Gauge,
  Shield,
  Clock
} from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter,
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Cpu, label: "Models", path: "/models" },
  { icon: DollarSign, label: "Cost Management", path: "/costs" },
  { icon: Gauge, label: "Performance", path: "/performance" },
  { icon: Shield, label: "Security", path: "/security" },
  { icon: Users, label: "Team", path: "/team" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function DashboardSidebar({ className }: { className?: string }) {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile && (
        <div className="fixed top-4 left-4 z-50">
          <SidebarTrigger>
            <Button size="icon" variant="outline">
              <Menu className="h-4 w-4" />
            </Button>
          </SidebarTrigger>
        </div>
      )}
      <Sidebar className={cn("border-r", className)}>
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-purple flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <h1 className="font-bold text-lg">AI Analytics</h1>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton asChild>
                  <a 
                    href={item.path} 
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@aianalytics.com</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}

export default DashboardSidebar;
