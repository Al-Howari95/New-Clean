import React from "react";
import Why from "./Why";
import Button from "../Component/Button";
import { useEffect } from "react";

const WhyUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Button/>
      <Why />


      
    </div>
  );
};

export default WhyUse;
