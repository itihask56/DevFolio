import React from "react";
import Image from "next/image";
import Motion from "./Motion";

// import { getAbout } from '@/utils/sanity-utils'
// import { PortableTextBlock } from 'sanity'
type Props = {};

const About = async (props: Props) => {
  return (
    <section className="max-w-7xl h-screen mx-auto p-5 flex flex-col items-center justify-center space-y-24 my-24">
      <h1 className="text-2xl uppercase tracking-[20px] text-violet-500">
        About
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between w-full mt-0">
        <div className="md:w-[70%] w-full ">
          <Motion delay={1} direction={"left"}>
            <div className="p-4 text-center md:text-left font-semibold text-[12px] sm:text-lg lg:text-xl text-violet-200">
              <p>
                {/* I'm Itihas Verma, a passionate third-year CSE student, dedicated to making a positive impact
                by solving real-world problems. Currently, I'm actively
                engaged in a project named "ReHostify," which is aimed at
                simplifying campus commerce. This innovative platform empowers
                students to effortlessly buy/sell their products, allowing them to
                earn some extra income. With ReHostify, I aim to create a more efficient and
                collaborative marketplace within the campus community, fostering
                a win-win scenario for all involved. */}
                I'm Itihas Verma, a passionate third-year Computer Science and
                Engineering (CSE) student, dedicated to making a positive impact
                by solving real-world problems. My journey in the field of
                technology has been driven by a profound love for continuous
                learning, which allows me to consistently enhance my technical
                skills and stay ahead of the curve. At the moment, I'm actively
                engaged in a project named "ReHostify," which is aimed at
                simplifying campus commerce. This innovative platform empowers
                students to effortlessly sell their products, allowing them to
                earn some extra income. Simultaneously, it provides an
                accessible and cost-effective avenue for those seeking these
                products. With ReHostify, I aim to create a more efficient and
                collaborative marketplace within the campus community, fostering
                a win-win scenario for all involved.
              </p>
            </div>
          </Motion>
        </div>

        <div className="w-[200px] md:w-auto">
          <Motion delay={1} direction={"right"}>
            <div className="flex items-center justify-center shadow-lg shadow-violet-500 rounded-lg bg-violet-200 h-[250px] p-2 w-full my-12 ">
              <div className="w-full h-full bg-violet-500 rounded-lg  hover:scale-105 duration-500">
                <Image
                  src={"/images/about-image.png"}
                  alt="not available"
                  width={150}
                  height={150}
                  className="rounded-lg w-full h-full object-cover "
                />
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    //     <section className='text-black'>
    //     <div className='md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
    //         <Image src="/images/about-image.png" width={500} height={500} alt='not available'/>
    //         <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
    //             <h2 className='text-4xl font-bold text-black mb-4'>About Me</h2>
    //             <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                 Iure officia odit quaerat vero voluptatem voluptas impedit
    //                 repudiandae magnam. Perferendis, expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                 Iure officia odit quaerat vero voluptatem voluptas impedit
    //                 repudiandae magnam. Perferendis, expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                 Iure officia odit quaerat vero voluptatem voluptas impedit
    //                 repudiandae magnam. Perferendis, expedita.
    //             </p>

    //         </div>
    //     </div>

    //  </section>
  );
};

export default About;
