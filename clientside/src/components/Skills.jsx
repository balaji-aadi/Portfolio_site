import React from "react";

const Skills = ({ id, path, name }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        className="relative p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full 
        shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out group"
      >
        <img
          src={path}
          alt={name}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
        />
        {/* Hover effect for displaying the name */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 
          group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        >
          <span className="text-white text-lg font-semibold">{name}</span>
        </div>
      </div>
      {/* Name Below the Icon */}
      <p className="text-center text-lg font-medium mt-3">{name}</p>
    </div>
  );
};

export default Skills;
