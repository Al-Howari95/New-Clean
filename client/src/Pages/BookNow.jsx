import React from "react";
import Book from "../Component/Book";
import Button from "../Component/Button";
import Pyment from "../Component/Pyment ";
import { useEffect } from "react";



const Books = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
<Book/>
<Button/>
<Pyment/>
</>
  );
};

export default Books;