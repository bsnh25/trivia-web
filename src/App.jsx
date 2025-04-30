import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import SkeletonCard from "./components/SkeletonCard";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(""); //local storagre

  useEffect(() => {
    const theme_ls = localStorage.getItem("theme"); //local storagre
    setTheme(theme_ls);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function handleClick() {
    let change = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", change); //local storagre
    sessionStorage.setItem("theme", change); //local storagre
    setTheme(change);
  }

  return (
    <>
      <h1
        className={
          "underline text-3xl pb-19 font-bold " +
          (theme === "dark" ? "bg-black" : "bg-green-500")
        }
      >
        {" "}
        Skeleton Demo
      </h1>
      <button className="" onClick={handleClick}></button>
      {loading ? <SkeletonCard /> : <Card />}
    </>
  );
}

export default App;
