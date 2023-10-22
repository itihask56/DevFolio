import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import Motion from "./Motion";
import Link from "next/link";

type Props = {};

const Project = (props: Props) => {
  return (
    <section className="h-screen mx-auto max-w-7xl flex flex-col items-center justify-center space-y-24 ">
      <h1 className="text-2xl uppercase tracking-[20px] text-violet-500">
        projects
      </h1>
      <Motion delay={1} direction={""}>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
      </Motion>

      <Motion delay={1} direction={""}>
      <div className="grid md:hidden grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard/>
        <ProjectCard/>
      </div>
      </Motion>
    <Link href={'/projects'}> <p className="text-center text-xs text-violet-500 cursor-pointer">see more...</p></Link>
    </section>
  );
};

export default Project;
