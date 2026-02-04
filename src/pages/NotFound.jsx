import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="text-center space-y-6 animate-fade-in">
        
        <div className="flex justify-center">
          <AlertTriangle className="h-16 w-16 text-primary" />
        </div>

        <h1 className="text-5xl font-bold">404</h1>

        <h2 className="text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="text-muted-foreground max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          <Home size={18} />
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
