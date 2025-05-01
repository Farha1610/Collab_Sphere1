
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { FileText, Clock, Code, PenTool } from "lucide-react";

export const CreateProjectForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Project Created",
      description: "Your project has been successfully created!",
    });
    
    setLoading(false);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="space-y-8 backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-lg border border-white/20 transition-all duration-500 hover:shadow-xl animate-fade-in">
        <div className="space-y-6">
          <div className="group transition-all duration-300">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-teal-600 transition-colors duration-300">
              Project Title
            </label>
            <div className="relative">
              <Input
                id="title"
                placeholder="Enter project title"
                required
                className="pl-10 bg-white/50 border-gray-200 focus:border-teal-500 transition-all duration-300"
              />
              <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
            </div>
          </div>
          
          <div className="group transition-all duration-300">
            <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-teal-600 transition-colors duration-300">
              Short Description
            </label>
            <div className="relative">
              <Input
                id="shortDescription"
                placeholder="Brief overview of your project"
                required
                className="pl-10 bg-white/50 border-gray-200 focus:border-teal-500 transition-all duration-300"
              />
              <PenTool className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
            </div>
          </div>
          
          <div className="group transition-all duration-300">
            <label htmlFor="fullDescription" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-teal-600 transition-colors duration-300">
              Full Description
            </label>
            <div className="relative">
              <Textarea
                id="fullDescription"
                placeholder="Detailed description of your project"
                className="min-h-[150px] pl-10 bg-white/50 border-gray-200 focus:border-teal-500 transition-all duration-300"
                required
              />
              <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
            </div>
          </div>
          
          <div className="group transition-all duration-300">
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-teal-600 transition-colors duration-300">
              Skills Needed
            </label>
            <div className="relative">
              <Input
                id="skills"
                placeholder="React, Node.js, UI/UX"
                required
                className="pl-10 bg-white/50 border-gray-200 focus:border-teal-500 transition-all duration-300"
              />
              <Code className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
            </div>
          </div>
          
          <div className="group transition-all duration-300">
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-teal-600 transition-colors duration-300">
              Timeline (optional)
            </label>
            <div className="relative">
              <Input
                id="timeline"
                placeholder="e.g., 2-3 months"
                className="pl-10 bg-white/50 border-gray-200 focus:border-teal-500 transition-all duration-300"
              />
              <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
            </div>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white transition-all duration-500 transform hover:scale-[1.02] disabled:opacity-80 disabled:hover:scale-100"
          disabled={loading}
        >
          {loading ? 
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating...
            </span> : 
            "Create Project"
          }
        </Button>
      </div>
    </form>
  );
};
