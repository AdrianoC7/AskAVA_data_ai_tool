
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageSquareText, BarChart3, DollarSign, Gauge, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const features = [
    {
      icon: MessageSquareText,
      title: "AskAVA Chat",
      description: "Talk to your data with AI",
      path: "/askava"
    },
    {
      icon: BarChart3,
      title: "Dashboard",
      description: "Monitor usage and metrics",
      path: "/dashboard"
    },
    {
      icon: DollarSign,
      title: "Cost Management",
      description: "Track and optimize spending",
      path: "/costs"
    },
    {
      icon: Gauge,
      title: "Performance",
      description: "Analyze response times",
      path: "/performance"
    },
    {
      icon: Settings,
      title: "Settings",
      description: "Configure preferences",
      path: "/settings"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/4fa6f6b1-f31d-4030-a5ba-daefdb466206.png" 
              alt="AskAVA Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h1 className="text-6xl font-black mb-3 text-gray-900">
            Ask<span className="text-blue-600">AVA</span>
          </h1>
          <p className="text-xl text-gray-600 mb-1">Talk to your data</p>
          <p className="text-sm text-blue-600 font-medium tracking-wider">ANALYZE • VISUALIZE • ACT</p>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <Link to="/askava">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Link key={feature.title} to={feature.path}>
              <Card className="h-full hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer border-gray-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-gray-900">{feature.title}</h3>
                  <p className="text-xs text-gray-500">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
