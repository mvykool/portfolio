import React, { useEffect, useState } from "react";

export const ThemeSwitch = (props: {}) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <label
        htmlFor="switch"
        className="switch rounded-3xl ring ring-blue-400 dark:ring-gray-300 dark:ring-offset-black ring-offset-4 ring-opacity-70"
      >
        <input id="switch" type="checkbox" onClick={toggleTheme} />
        <span className="slider"></span>
        <span className="decoration"></span>
      </label>
    </div>
  );
};
