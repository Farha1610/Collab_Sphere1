import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const ProjectCard = ({ id, title, description, skills }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardColors = [
    "from-pink-500 to-purple-500",
    "from-blue-500 to-teal-500",
    "from-orange-500 to-pink-500",
    "from-green-500 to-teal-500",
    "from-purple-500 to-indigo-500",
    "from-yellow-500 to-orange-500"
  ];

  const randomGradient = cardColors[Math.floor(Math.random() * cardColors.length)];

  return (
    <div className="relative group">
      {/* Hover Content */}
      <div 
        className={`absolute left-0 bottom-full mb-2 w-64 bg-gray-50 rounded-lg shadow-xl p-3 transition-all duration-300 
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'} 
          z-[9999]`}
      >
        <div className="space-y-1.5">
          <h3 className="font-semibold text-sm text-gray-800">{title}</h3>
          <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
          <div className="pt-1">
            <h4 className="text-xs font-medium mb-0.5 text-gray-700">Required Skills:</h4>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-700 transition-all duration-300 hover:bg-gray-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div 
        className={`relative bg-white rounded-lg transition-all duration-500 ease-out transform 
          ${isOpen ? 'scale-105 shadow-xl' : 'shadow-sm'}`}
      >
        <div className={`h-2 bg-gradient-to-r ${randomGradient} rounded-t-lg`} />
        <div className="p-4">
          <Link to={`/project/${id}`}>
            <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2 transition-all duration-300">
              {title}
              <Star className={`w-4 h-4 text-yellow-500 transition-all duration-500 ${isOpen ? 'rotate-12 scale-110' : ''}`} />
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Link>
          <div className="flex flex-col gap-2">
            <Button 
              variant="outline"
              className="w-full border-teal-500 text-teal-600 hover:bg-teal-50 transition-all duration-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 'Close Details' : 'See Details'}
            </Button>
            <Button 
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 transition-all duration-500"
            >
              I'm Interested
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
