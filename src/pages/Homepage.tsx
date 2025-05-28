
import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Plus, Home, Globe, FileText, GraduationCap, Library, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const sidebarItems = [
    { icon: Home, label: "Home", active: true },
    { icon: FileText, label: "Finance" },
    { icon: Globe, label: "Travel" },
    { icon: FileText, label: "Shopping" },
    { icon: GraduationCap, label: "Academic" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-48 bg-white border-r border-gray-200 p-4">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 border border-white transform rotate-45"></div>
          </div>
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
              Home
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600">
              <Globe className="w-4 h-4" />
              Discover
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600">
              <FileText className="w-4 h-4" />
              Spaces
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600 mb-2">Library</div>
            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-100">
              <Plus className="w-4 h-4 mr-3" />
              Create a Thread
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
        <div className="w-full max-w-2xl px-8">
          {/* Logo */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-gray-800 mb-8">AskAVA</h1>
          </div>

          {/* Search Interface */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6">
                <textarea 
                  placeholder="Ask anything..."
                  className="w-full h-20 resize-none border-0 outline-none text-gray-800 placeholder-gray-400 text-lg"
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-50">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                    <Button variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-50">
                      Research
                    </Button>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                      <FileText className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                      <Globe className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                      <FileText className="w-4 h-4" />
                    </Button>
                    <Button 
                      className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-4 py-2"
                      onClick={() => {/* Handle submit */}}
                    >
                      <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to use button - bottom right */}
        <div className="absolute bottom-8 right-8">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white border-gray-300 text-gray-600 hover:bg-gray-50 shadow-sm"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            How to use
          </Button>
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
            <span>Finance</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
  );
}
