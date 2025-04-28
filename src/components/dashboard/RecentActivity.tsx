
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activities = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      avatar: "A",
    },
    action: "completed task",
    target: "Website Redesign",
    time: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Sarah Miller",
      avatar: "S",
    },
    action: "commented on",
    target: "User Flow Documents",
    time: "5 hours ago",
  },
  {
    id: 3,
    user: {
      name: "Robert Chen",
      avatar: "R",
    },
    action: "uploaded",
    target: "Brand Guidelines.pdf",
    time: "Yesterday",
  },
  {
    id: 4,
    user: {
      name: "Emily Parker",
      avatar: "E",
    },
    action: "created project",
    target: "Mobile App Development",
    time: "2 days ago",
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage alt={activity.user.name} />
                <AvatarFallback className="bg-purple-light/20 text-purple">
                  {activity.user.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span>{activity.user.name}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-semibold">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
