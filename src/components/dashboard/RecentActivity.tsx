
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Brain, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

interface RecentActivityProps {
  className?: string;
}

const activities = [
  {
    id: 1,
    icon: Brain,
    iconColor: "text-purple-500",
    action: "GPT-4o usage spike",
    description: "Detected 120% increase in API calls",
    time: "2 hours ago",
  },
  {
    id: 2,
    icon: AlertTriangle,
    iconColor: "text-yellow-500",
    action: "Budget alert",
    description: "Monthly OpenAI budget at 85%",
    time: "5 hours ago",
  },
  {
    id: 3,
    icon: CheckCircle2,
    iconColor: "text-green-500",
    action: "Performance optimization",
    description: "Reduced average latency by 15%",
    time: "Yesterday",
  },
  {
    id: 4,
    icon: Clock,
    iconColor: "text-blue-500",
    action: "Scheduled report",
    description: "Monthly usage analytics exported",
    time: "2 days ago",
  },
];

export function RecentActivity({ className }: RecentActivityProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
