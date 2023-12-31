 
'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { SocialIcon } from "react-social-icons";
import Motion from "./Motion";
import {Social} from '@/app/types/Social'
// import { Profile } from "@/app/types/Profile";
// import {getProfile} from'@/utils/sanity-utils'

type Props = {
  props:Social[]
};

const Header = ({props}: Props) => {
  return (
    <section className="relative z-0 h-[calc(100vh-56px)] w-full flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Motion delay={1} direction={"down"}>
          <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-full h-40 w-40 flex items-center justify-center shadow-lg shadow-violet-500 hover:scale-105 duration-500">
            <Image
              className=""
              src={"/images/Image2.png"}
              alt="itihas"
              height={150}
              width={150}
            />
          </div>
        </Motion>
        <Motion delay={1} direction={""}>
          <p className="font-bold text-violet-400">
            A Tech Enthusiast from Chandigarh Univesity{" "}
          </p>
        </Motion>

        <TypeAnimation
          className="text-xl md:text-4xl font-extrabold text-violet-400"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            // "< Mr_Verma />",
            // 1500, // wait 1s before replacing "Mice" with "Hamsters"
            "< Web Developer />",
            1500,
            "Enterprenuer",
            1500,
            "{ Programer }",
            1500,
          ]}
          wrapper="span"
          speed={5}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
        <Motion delay={1} direction={"up"}>
          <div className="flext item-center space-x-6 mt-4">
            <SocialIcon
              style={{ height: 40, width: 40 }}
              bgColor="#793FEF"
              className="hover:scale-125 duration-200"
              url="https://twitter.com/itihas_verma"
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              bgColor="#793FEF"
              className="hover:scale-125 duration-200"
              url="https://www.instagram.com/itihasverma/"
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              bgColor="#793FEF"
              className="hover:scale-125 duration-200"
              url="https://github.com/itihask56"
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              bgColor="#793FEF"
              className="hover:scale-125 duration-200"
              url="https://www.linkedin.com/in/itihas-verma-71641b266/"
            />
             {/* {props?.map((s:Social,index:number)=>(
          <SocialIcon key={index} style={{height:40,width:40}} bgColor='#793FEF' className='hover:scale-125 duration-200' url={s.url} />
        ))} */}
          </div>
        </Motion>
      </div>
      <div className="absolute w-[50%] -z-10 md:w-[20%] h-[30%] filter blur-3xl opacity-50 bg-gradient-to-r from bg-purple-500 to-indigo-900"></div>
    </section>
  );
};

export default Header;
