import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top when page path completely changes, or when explicitly requested
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}
