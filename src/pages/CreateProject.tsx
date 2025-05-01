
import { CreateProjectForm } from "@/components/CreateProjectForm";
import { FileText } from "lucide-react";

const CreateProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 animate-gradient-xy">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg mb-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <FileText className="h-8 w-8 text-white animate-pulse-soft" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Create New Project
          </h1>
          <p className="mt-2 text-gray-600 max-w-md mx-auto">
            Share your vision and find collaborators for your next big idea
          </p>
        </div>
        <CreateProjectForm />
      </main>
    </div>
  );
};

export default CreateProject;
