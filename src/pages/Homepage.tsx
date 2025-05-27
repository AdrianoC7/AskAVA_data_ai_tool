
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
      description: "Talk to your data with our intelligent AI assistant",
      path: "/askava"
    },
    {
      icon: BarChart3,
      title: "Dashboard",
      description: "Monitor your AI usage and performance metrics",
      path: "/dashboard"
    },
    {
      icon: DollarSign,
      title: "Cost Management",
      description: "Track and optimize your AI spending",
      path: "/costs"
    },
    {
      icon: Gauge,
      title: "Performance",
      description: "Analyze latency and response times",
      path: "/performance"
    },
    {
      icon: Settings,
      title: "Settings",
      description: "Configure your AskAVA preferences",
      path: "/settings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24">
              <img 
                src="/lovable-uploads/4fa6f6b1-f31d-4030-a5ba-daefdb466206.png" 
                alt="AskAVA Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
            Ask<span className="font-black">AVA</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2">Talk to your data</p>
          <p className="text-lg text-blue-600 font-medium">Analyze • Visualize • Act</p>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Transform Your Data Into Insights
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            AskAVA empowers you to analyze, visualize, and act on your data with the power of AI. 
            Get instant insights, track performance, and optimize your operations all in one place.
          </p>
          <Link to="/askava">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Link key={feature.title} to={feature.path}>
              <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to unlock your data's potential?</h3>
          <p className="text-blue-100 mb-6 text-lg">
            Join thousands of users who trust AskAVA to power their data-driven decisions.
          </p>
          <Link to="/askava">
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
              Start Exploring Your Data
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
