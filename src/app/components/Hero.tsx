"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="mt-8 sm:m-28 ">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-black mb-4 font-extrabold lg:text-4xl text-4xl sm:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "< Mr_Verma />",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                "< Web Developer />",
                1500,
                "<Enterprenuer />",
                1500,
                "< Ethical Hacker />",
                1500,
              ]}
              wrapper="span"
              speed={5}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 m-4">
            I am Itihas Verma a Tech Enthusiast and aspiring Entreprenur from Chandigarh University
          </p>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#793FEF] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"/images/hero-image.png"}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              alt="not available"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      {/* social Icons */}
      {/* <div className="flext item-center space-x-6 ">
        <SocialIcon
          style={{ height: 50, width: 50 }}
          bgColor="#793FEF"
          className="hover:scale-125 duration-200"
          url="https://twitter.com/itihas_verma"
        />
        <SocialIcon
          style={{ height: 50, width: 50 }}
          bgColor="#793FEF"
          className="hover:scale-125 duration-200"
          url="https://www.instagram.com/itihasverma/"
        />
        <SocialIcon
          style={{ height: 50, width: 50 }}
          bgColor="#793FEF"
          className="hover:scale-125 duration-200"
          url="https://github.com/itihask56"
        />
        <SocialIcon
          style={{ height: 50, width: 50 }}
          bgColor="#793FEF"
          className="hover:scale-125 duration-200"
          url="https://www.linkedin.com/in/itihas-verma-71641b266/"
        />
      </div> */}
    </section>
  );
};

export default Hero;
