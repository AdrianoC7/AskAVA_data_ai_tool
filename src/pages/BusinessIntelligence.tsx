
import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FileUpload } from "@/components/data-upload/FileUpload";
import { ChatInterface } from "@/components/ai-assistant/ChatInterface";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function BusinessIntelligence() {
  const [businessData, setBusinessData] = useState<any[] | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const handleFileProcessed = (data: any) => {
    setBusinessData(data);
    setIsDataLoaded(true);
    console.log("Data processed:", data);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">HikmaAI</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="transition-all hover:bg-primary/10">
                  <Info className="w-4 h-4 mr-2" /> How It Works
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl">How HikmaAI Works</DialogTitle>
                  <DialogDescription>
                    Upload your business data and chat with our AI assistant to gain insights
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-5 py-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">Step 1: Upload Your Data</h4>
                    <p className="text-sm text-muted-foreground">
                      Upload your business data in CSV or Excel format. We support data about sales, 
                      inventory, customer satisfaction, and more.
                    </p>
                  </div>
                  <Separator className="my-2" />
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">Step 2: Ask Questions</h4>
                    <p className="text-sm text-muted-foreground">
                      Once your data is processed, you can ask natural language questions about your business.
                      For example:
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      <li>What were my best-selling products last month?</li>
                      <li>Which day of the week has the highest customer traffic?</li>
                      <li>What can I improve about my business operations?</li>
                    </ul>
                  </div>
                  <Separator className="my-2" />
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">Step 3: Get Insights</h4>
                    <p className="text-sm text-muted-foreground">
                      The AI assistant will analyze your data and provide meaningful insights and
                      recommendations tailored to your specific business.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-muted-foreground text-center text-xl font-light mb-4">
            What do you want to know about your business?
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          {/* Data Upload - Now with smaller height */}
          <Card className="border-primary/10 hover:border-primary/20 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="py-4">
              <CardTitle>Data Upload</CardTitle>
              <CardDescription>
                Upload your CSV or Excel files to analyze
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <FileUpload onFileProcessed={handleFileProcessed} />
              
              {isDataLoaded && (
                <div className="mt-4 p-3 bg-muted/30 rounded-lg border border-primary/10 animate-scale-in">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium">Data Preview</h4>
                    <p className="text-xs text-muted-foreground">
                      {businessData ? `Showing ${Math.min(5, businessData.length)} of ${businessData.length} records` : "No data available"}
                    </p>
                  </div>
                  <div className="text-xs max-h-28 overflow-auto">
                    {businessData && businessData.length > 0 ? (
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-primary/10">
                            {Object.keys(businessData[0]).map((header, i) => (
                              <th key={i} className="p-1 text-left">{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {businessData.slice(0, 5).map((row, i) => (
                            <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
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
            </CardContent>
          </Card>
          
          {/* Business Assistant - Now taking full width below */}
          <Card className="border-primary/10 hover:border-primary/20 shadow-lg transition-all hover:shadow-xl flex-grow">
            <CardHeader>
              <CardTitle>Business Assistant</CardTitle>
              <CardDescription>
                Ask questions about your business data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChatInterface data={businessData} isDataLoaded={isDataLoaded} />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
