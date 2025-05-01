
import { useState, useEffect } from "react";
import { ProjectFeed } from "@/components/ProjectFeed";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";

const Index = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [mounted, setMounted] = useState(false);

  // This ensures the animations play correctly on page load
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-500">
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Project Feed
          </h1>
          <Button 
            variant="outline" 
            className="mt-2 md:mt-0 flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <ListFilter size={16} />
            <span>Filter Projects</span>
          </Button>
        </div>
        
        {showFilters && (
          <div className="bg-white rounded-lg p-4 shadow-sm mb-6 animate-fade-in">
            <p className="text-gray-500 text-sm italic">Filter options will be available soon.</p>
          </div>
        )}
        
        <ProjectFeed />
      </main>
    </div>
  );
};

export default Index;
