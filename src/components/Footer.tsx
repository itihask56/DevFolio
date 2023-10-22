import React from "react";
import Motion from "./Motion";

type Props = {};

const Footer = (props: Props) => {
  return (
 
      <footer className=" w-full py-5 border border-t-[#33353F] border-l-transparent border-r-transparent">
        <Motion delay={1} direction="up">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-5 space-x-48">
            
            <h1>Dev.Verma</h1>
            <p className='text-slate-400'>Made with  <span className='text-red-600'>&hearts;</span> by Itihas</p>
            <p className='text-slate-600'>&copy; All rights reserved.</p>
            
            </div>
            </Motion>
      </footer>
  
  );
};

export default Footer;
