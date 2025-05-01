
import { ProjectCard } from "./ProjectCard";
import { useInView } from "@/hooks/useInView";

const MOCK_PROJECTS = [
  {
    id: "1",
    title: "Mobile App for Campus Events",
    description: "Looking for developers to build a mobile app that helps students discover and track campus events.",
    skills: ["React Native", "Node.js", "UI/UX"]
  },
  {
    id: "2",
    title: "Study Group Platform",
    description: "Create a platform where students can form and manage study groups for different courses.",
    skills: ["React", "Express", "MongoDB"]
  },
  {
    id: "3",
    title: "Student Marketplace",
    description: "Build a marketplace for students to buy and sell textbooks, notes, and other academic materials.",
    skills: ["React", "Node.js", "API Design"]
  },
  {
    id: "4",
    title: "Virtual Lab Simulator",
    description: "Develop a virtual laboratory simulation platform for science experiments.",
    skills: ["Three.js", "WebGL", "React"]
  },
  {
    id: "5",
    title: "Campus Navigation App",
    description: "Create an interactive map application to help students navigate the campus efficiently.",
    skills: ["React", "Maps API", "Geolocation"]
  },
  {
    id: "6",
    title: "Student Portfolio Platform",
    description: "Build a platform where students can showcase their projects and connect with potential employers.",
    skills: ["Next.js", "TypeScript", "AWS"]
  },
  {
    id: "7",
    title: "AI Study Assistant",
    description: "Develop an AI-powered study assistant that helps students with homework and exam preparation.",
    skills: ["Machine Learning", "Python", "React"]
  },
  {
    id: "8",
    title: "Educational Game Development",
    description: "Create interactive educational games to make learning more engaging for K-12 students.",
    skills: ["Unity", "C#", "Game Design"]
  },
  {
    id: "9",
    title: "Sustainable Campus Initiatives",
    description: "Build a platform to track and promote sustainable initiatives across the university campus.",
    skills: ["React", "Node.js", "Data Visualization"]
  },
  {
    id: "10",
    title: "Mental Health Support App",
    description: "Create an app providing resources, meditation guides, and anonymous peer support for students.",
    skills: ["React Native", "Firebase", "UX Research"]
  },
  {
    id: "11",
    title: "Augmented Reality Campus Tour",
    description: "Develop an AR application that gives prospective students an interactive tour of the campus.",
    skills: ["AR Kit", "Unity", "3D Modeling"]
  },
  {
    id: "12",
    title: "Internship Matching Platform",
    description: "Create a platform connecting students with relevant internship opportunities based on skills and interests.",
    skills: ["React", "Express", "Matching Algorithms"]
  },
  {
    id: "13",
    title: "Collaborative Research Tool",
    description: "Build a tool that facilitates collaboration among researchers and students across departments.",
    skills: ["Next.js", "WebSockets", "Document Processing"]
  },
  {
    id: "14",
    title: "Student Wellness Tracker",
    description: "Develop an app for tracking physical activity, diet, sleep, and mental well-being for students.",
    skills: ["React Native", "HealthKit Integration", "Data Analytics"]
  },
  {
    id: "15",
    title: "Smart Classroom Management",
    description: "Create a system for efficient classroom resource allocation, scheduling, and equipment management.",
    skills: ["React", "Node.js", "IoT"]
  },
  {
    id: "16",
    title: "Peer Review Platform",
    description: "Build a platform allowing students to give and receive constructive feedback on assignments.",
    skills: ["React", "Express", "Real-time Collaboration"]
  },
  {
    id: "17",
    title: "Campus Food Delivery Network",
    description: "Develop an app connecting campus eateries with students for efficient food delivery services.",
    skills: ["React Native", "Google Maps API", "Payment Processing"]
  },
  {
    id: "18",
    title: "E-Sports Tournament Platform",
    description: "Create a platform for organizing and managing e-sports tournaments between university teams.",
    skills: ["React", "WebSockets", "Tournament Brackets"]
  },
  {
    id: "19",
    title: "Accessibility Map",
    description: "Build an interactive map highlighting accessible routes, facilities, and services across campus.",
    skills: ["React", "Maps Integration", "Accessibility Guidelines"]
  },
  {
    id: "20",
    title: "Virtual Career Fair",
    description: "Develop a platform for hosting virtual career fairs with video meetings, resource sharing, and networking.",
    skills: ["React", "WebRTC", "Event Management"]
  },
  {
    id: "21",
    title: "Student Housing Finder",
    description: "Create a platform connecting students with housing options near campus, including reviews and virtual tours.",
    skills: ["React", "Google Maps API", "Virtual Tour Integration"]
  },
  {
    id: "22",
    title: "Academic Resource Repository",
    description: "Build a searchable repository of academic resources, past exams, and study materials for various courses.",
    skills: ["Next.js", "Search Algorithms", "Document Management"]
  }
];

export const ProjectCard2 = ({ project, index }: { project: any, index: number }) => {
  const [ref, isInView] = useInView({ 
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <div 
      ref={ref}
      className={`opacity-0 ${isInView ? 'animate-fade-up' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <ProjectCard {...project} />
    </div>
  );
};

export const ProjectFeed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MOCK_PROJECTS.map((project, index) => (
        <ProjectCard2 key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};
