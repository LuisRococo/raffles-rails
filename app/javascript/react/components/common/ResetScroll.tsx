import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ResetScroll() {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
  }, [location]);

  return <></>;
}

export default ResetScroll;
