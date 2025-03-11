import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    // مقدار اولیه
    setWidth(window.innerWidth);

    // لیسنر برای تغییر اندازه صفحه
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};