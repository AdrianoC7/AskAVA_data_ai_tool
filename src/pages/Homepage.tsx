
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Plus, Home, TrendingUp, BarChart3, FileText, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { FileUpload } from "@/components/data-upload/FileUpload";
import { ChatInterface } from "@/components/ai-assistant/ChatInterface";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

export default function Homepage() {
  const [businessData, setBusinessData] = useState<any[] | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const sidebarItems = [
    { icon: Home, label: "Home", active: true },
    { icon: TrendingUp, label: "Insights" },
    { icon: BarChart3, label: "Predictions" },
  ];

  const handleFileProcessed = (data: any) => {
    setBusinessData(data);
    setIsDataLoaded(true);
    console.log("Data processed:", data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-48 bg-white border-r border-gray-200 p-4">
        {/* Logo and AskAVA */}
        <div className="flex items-center gap-2 mb-8">
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg rotate-12 transform"></div>
            <div className="absolute inset-0.5 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-md rotate-6 transform"></div>
            <div className="absolute inset-1 bg-gradient-to-bl from-blue-300 to-blue-500 rounded-sm transform flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="absolute w-0.5 h-0.5 bg-blue-600 rounded-full top-1 right-1"></div>
              <div className="absolute w-0.5 h-0.5 bg-blue-700 rounded-full bottom-0.5 left-0.5"></div>
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
            Ask<span className="font-black">AVA</span>
          </span>
        </div>

        {/* Add button */}
        <Button variant="ghost" className="w-full justify-start mb-6 text-gray-600 hover:bg-gray-100">
          <Plus className="w-4 h-4 mr-3" />
        </Button>

        {/* Navigation */}
        <nav className="space-y-1">
          {sidebarItems.map((item, index) => (
            <Link key={item.label} to="/" className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
              item.active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
            }`}>
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="mt-auto pt-8">
          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600">
              <Search className="w-4 h-4" />
              Discovery
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600">
              <FileText className="w-4 h-4" />
              Library
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-100">
              <Plus className="w-4 h-4 mr-3" />
              New Thread
            </Button>
          </div>
        </div>

        {/* Sign in at bottom */}
        <div className="absolute bottom-4 left-4">
          <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
            Sign in
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Center content */}
        <div className="w-full max-w-4xl px-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-light text-gray-800 mb-4">AskAVA</h1>
            <p className="text-gray-600 text-lg">Upload and ask questions about your business</p>
          </div>

          {/* File Upload Section */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-6">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Upload Your Data</h3>
              <FileUpload onFileProcessed={handleFileProcessed} />
              
              {isDataLoaded && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium">Data Preview</h4>
                    <p className="text-xs text-gray-500">
                      {businessData ? `Showing ${Math.min(5, businessData.length)} of ${businessData.length} records` : "No data available"}
                    </p>
                  </div>
                  <div className="text-xs max-h-28 overflow-auto">
                    {businessData && businessData.length > 0 ? (
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200">
                            {Object.keys(businessData[0]).map((header, i) => (
                              <th key={i} className="p-1 text-left">{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {businessData.slice(0, 5).map((row, i) => (
                            <tr key={i} className="border-b border-gray-100 last:border-0">
                              {Object.values(row).map((value, j) => (
                                <td key={j} className="p-1">{String(value)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>No data available</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6">
              <ChatInterface data={businessData} isDataLoaded={isDataLoaded} />
            </div>
          </div>
        </div>

        {/* How to use button - bottom right */}
        <div className="absolute bottom-8 right-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-white border-gray-300 text-gray-600 hover:bg-gray-50 shadow-sm"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                How to use
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl">How AskAVA Works</DialogTitle>
                <DialogDescription>
                  Talk to your data - Analyze, Visualize, Act
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-5 py-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-600">Step 1: Upload Your Data</h4>
                  <p className="text-sm text-gray-600">
                    Upload your business data in CSV or Excel format. We support data about sales, 
                    inventory, customer satisfaction, and more.
                  </p>
                </div>
                <Separator className="my-2" />
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-600">Step 2: Ask Questions</h4>
                  <p className="text-sm text-gray-600">
                    Once your data is processed, you can ask natural language questions about your business.
                    For example:
                  </p>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li>What were my best-selling products last month?</li>
                    <li>Which day of the week has the highest customer traffic?</li>
                    <li>What can I improve about my business operations?</li>
                  </ul>
                </div>
                <Separator className="my-2" />
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-600">Step 3: Get Insights</h4>
                  <p className="text-sm text-gray-600">
                    AskAVA will analyze your data and provide meaningful insights and
                    recommendations tailored to your specific business.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4">
          <div className="flex gap-6 text-sm text-gray-500">
            <span>Pro</span>
            <span>Enterprise</span>
            <span>API</span>
            <span>Blog</span>
            <span>Privacy</span>
            <span>Careers</span>
            <span>Store</span>
          </div>
        </div>
      </div>
    </div>
  );
}
