
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MOCK_PROJECT = {
  id: "1",
  title: "Mobile App for Campus Events",
  description: "Looking for developers to build a mobile app that helps students discover and track campus events. The app will feature real-time notifications, event categories, and social sharing capabilities.",
  skills: ["React Native", "Node.js", "UI/UX"],
  postedBy: "Sarah Chen",
  postedDate: "2025-04-20"
};

interface ProjectViewProps {
  id?: string;
}

export const ProjectView = ({ id }: ProjectViewProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{MOCK_PROJECT.title}</h1>
      
      <div className="flex items-center text-gray-600 mb-6">
        <span>Posted by {MOCK_PROJECT.postedBy}</span>
        <span className="mx-2">•</span>
        <span>{formatDate(MOCK_PROJECT.postedDate)}</span>
      </div>
      
      <div className="prose max-w-none mb-6">
        <p className="text-gray-700">{MOCK_PROJECT.description}</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills Needed</h2>
        <div className="flex flex-wrap gap-2">
          {MOCK_PROJECT.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      
      <Button className="w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-lg py-6">
        I'm Interested
      </Button>
    </div>
  );
};
