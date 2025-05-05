
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="min-h-screen flex w-full">
        {!isMobile && <DashboardSidebar />}
        <div className="flex-1">
          <main className="p-4 md:p-6 max-w-7xl mx-auto w-full transition-all duration-200">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
