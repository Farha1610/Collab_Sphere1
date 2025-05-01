
import { Link } from "react-router-dom";
import { Home, Plus, User, LogIn } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-semibold text-xl text-gray-900">
            CollabHub
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center text-gray-700 hover:text-gray-900">
              <Home className="h-5 w-5 mr-1" />
              <span>Feed</span>
            </Link>
            <Link to="/create" className="flex items-center text-gray-700 hover:text-gray-900">
              <Plus className="h-5 w-5 mr-1" />
              <span>Create</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/login" className="flex items-center">
                  <LogIn className="h-5 w-5 mr-1" />
                  <span>Login</span>
                </Link>
              </Button>
              <Button asChild className="bg-[#98f5e1] hover:bg-[#7ad6c2] text-gray-800">
                <Link to="/register">
                  <User className="h-5 w-5 mr-1" />
                  <span>Register</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
