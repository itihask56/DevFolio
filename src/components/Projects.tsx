import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

type Props = {};

const Project = (props: Props) => {
  return (
    <section className="h-screen mx-auto max-w-7xl flex flex-col items-center justify-center space-y-24 ">
      <h1 className="text-2xl uppercase tracking-[20px] text-violet-500">
        projects
      </h1>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>

      <div className="grid md:hidden grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard/>
        <ProjectCard/>
      
      </div>
      <p className="text-center text-xs text-violet-500 cursor-pointer">see more...</p>
    </section>
  );
};

export default Project;
