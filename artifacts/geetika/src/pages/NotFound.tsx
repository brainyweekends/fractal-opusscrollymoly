import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-ink">404</h1>
        <p className="mb-4 text-xl text-ink-soft">Oops! Page not found!</p>
        <button
          onClick={() => navigate("/")}
          className="text-gold underline hover:text-gold/80 bg-transparent border-0 cursor-pointer"
        >
          Return to Homepage: Geetika Gehlot - E-Portfolio
        </button>
      </div>
    </div>
  );
};

export default NotFound;
