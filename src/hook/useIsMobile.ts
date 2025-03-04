import { useEffect, useState } from "react";

export const MOBILE_WIDTH = 768;

const useIsMobile = () => {
  const [inner, setInner] = useState<number>(0);

  useEffect(() => {
    const handleInner = () => setInner(window.innerWidth);
    handleInner();

    window.addEventListener("resize", handleInner);
    return () => window.removeEventListener("resize", handleInner);
  }, []);

  return inner > 0 && inner < MOBILE_WIDTH;
};

export default useIsMobile;
