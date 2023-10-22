import React from "react";
import SkillCircle from "./SkillCircle";
import Motion from "./Motion";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section className="h-screen p-5 max-w-7xl mx-auto flex flex-col items-center justify-center space-y-24">
      <h1 className="text-2xl uppercase tracking-[20px] text-violet-500">
        skills
      </h1>
      <Motion delay={1} direction={"up"}>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
          <SkillCircle />
          <SkillCircle />
          <SkillCircle />
          <SkillCircle />
          <SkillCircle />
          <SkillCircle />
          <SkillCircle />
          <SkillCircle />
          <SkillCircle />
          <SkillCircle />
          <SkillCircle />
          <SkillCircle />
        </div>
      </Motion>
    </section>
  );
};

export default Skills;
