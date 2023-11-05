import React from "react";
import Image from "next/image";
import { Skill } from "@/app/types/Skill";
type Props = {
  props:Skill
};

const SkillCircle = ({props}: Props) => {
  return (
    <div className="h-20 w-20 sm:h-24 sm:w-24 flex justify-center items-center p-1 rounded-full shadow-violet-200  bg-violet-500 hover:bg-violet-800 hover:scale-110 duration-300">
      <div className="flex items-center justify-center bg-[#F1F6F9] rounded-full h-full w-full ">
        <Image src={props.image} alt="skill" height={50} width={50} className=""></Image>
        


      </div>
    </div>
  );
};

export default SkillCircle;
