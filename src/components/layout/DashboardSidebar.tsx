
import React from "react";
import { 
  ArrowRight, 
  Home, 
  Settings, 
  Zap,
  DollarSign,
  Menu,
  Gauge,
  MessageSquareText,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter,
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { icon: MessageSquareText, label: "AskAVA", path: "/askava" },
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: DollarSign, label: "Cost Management", path: "/costs" },
  { icon: Gauge, label: "Performance", path: "/performance" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function DashboardSidebar({ className }: { className?: string }) {
  const isMobile = useIsMobile();
  const { toggleSidebar, state } = useSidebar();

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
        <SidebarHeader className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Custom Logo */}
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg rotate-12 transform"></div>
              <div className="absolute inset-0.5 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-md rotate-6 transform"></div>
              <div className="absolute inset-1 bg-gradient-to-bl from-blue-300 to-blue-500 rounded-sm transform flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute w-1 h-1 bg-blue-600 rounded-full top-1.5 right-1.5"></div>
                <div className="absolute w-0.5 h-0.5 bg-blue-700 rounded-full bottom-1 left-1"></div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                Ask<span className="font-black">AVA</span>
              </h1>
            </div>
          </div>
          {!isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 rounded-full hover:bg-muted"
              onClick={toggleSidebar}
            >
              {state === "expanded" ? (
                <ChevronLeft className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          )}
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton asChild tooltip={item.label}>
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
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@askava.ai</p>
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-muted rounded-full transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Log out</TooltipContent>
            </Tooltip>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}

export default DashboardSidebar;
