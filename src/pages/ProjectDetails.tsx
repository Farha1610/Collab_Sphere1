
import { useParams } from "react-router-dom";
import { ProjectView } from "@/components/ProjectView";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <ProjectView id={id} />
      </main>
    </div>
  );
};

export default ProjectDetails;
