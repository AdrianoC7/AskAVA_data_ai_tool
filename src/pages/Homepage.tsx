
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquareText, BarChart3, DollarSign, Gauge, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const quickActions = [
    {
      icon: MessageSquareText,
      title: "AskAVA Chat",
      path: "/askava"
    },
    {
      icon: BarChart3,
      title: "Dashboard", 
      path: "/dashboard"
    },
    {
      icon: DollarSign,
      title: "Cost Management",
      path: "/costs"
    },
    {
      icon: Gauge,
      title: "Performance",
      path: "/performance"
    },
    {
      icon: Settings,
      title: "Settings",
      path: "/settings"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-100">
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
          <h1 className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
            Ask<span className="font-black">AVA</span>
          </h1>
        </div>
        <div className="text-sm text-gray-500">
          v1.0
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-2xl mx-auto w-full">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Where knowledge begins
          </h2>
          <p className="text-lg text-gray-600">
            Ask anything. AskAVA searches the internet to give you reliable answers with sources.
          </p>
        </div>

        {/* Main CTA */}
        <div className="w-full mb-8">
          <Link to="/askava" className="block">
            <div className="relative group">
              <div className="flex items-center w-full p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-all cursor-pointer bg-white hover:shadow-lg">
                <MessageSquareText className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-500 flex-1">Ask anything...</span>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="w-full">
          <p className="text-sm text-gray-500 mb-4 text-center">Or try:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {quickActions.map((action) => (
              <Link key={action.title} to={action.path}>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-xs border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <action.icon className="h-3 w-3 mr-2" />
                  {action.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full px-6 py-4 border-t border-gray-100">
        <div className="max-w-2xl mx-auto flex justify-center">
          <p className="text-xs text-gray-400">
            Built with AskAVA • Analyze • Visualize • Act
          </p>
        </div>
      </footer>
    </div>
  );
}
