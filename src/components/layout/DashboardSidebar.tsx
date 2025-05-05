
import React from "react";
import { 
  ArrowRight, 
  Home, 
  Settings, 
  Brain,
  DollarSign,
  Menu,
  Gauge,
  MessageSquareText
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
import { Link } from "react-router-dom";

const navItems = [
  { icon: MessageSquareText, label: "HikmaAI", path: "/" },
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: DollarSign, label: "Cost Management", path: "/costs" },
  { icon: Gauge, label: "Performance", path: "/performance" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function DashboardSidebar({ className }: { className?: string }) {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile && (
        <div className="fixed bottom-4 left-4 z-50">
          <SidebarTrigger>
            <Button size="icon" variant="outline" className="shadow-sm hover:shadow-md transition-all">
              <Menu className="h-4 w-4" />
            </Button>
          </SidebarTrigger>
        </div>
      )}
      <Sidebar className={cn("border-r border-border", className)}>
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-sm">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <h1 className="font-bold text-lg bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">HikmaAI</h1>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton asChild>
                  <Link 
                    to={item.path} 
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-all hover:translate-x-1 duration-200"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-border">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>HI</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@hikma.ai</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-muted rounded-full transition-colors">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}

export default DashboardSidebar;
