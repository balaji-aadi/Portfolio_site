import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ education, time, title, info }) => {
  return (
    <li className="my-5 first:mt-1 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[100%] ">
      <div>
        <h3 className="capitalize font-bold 2xl:text-2xl sm:lg">{education}</h3>
        <span className="capitalize font-medium text-black/75 sm:text-sm">
          {time} | {title}
        </span>
        <p className="w-full text-black font-medium sm:text-md">{info}</p>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-2 w-[2px] h-full bg-black origin-top md:left-0 "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            education="Bachelor of Technology in Computer Science"
            time="August 2019 - June 2023"
            title="ITM University, Gwalior"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Web development."
          />
          <Details
            education="Senior Secondary (XII)"
            time="June 2017 - May 2018"
            title="Sri Chaitanya Junior College"
            info="Completed my 12th successfully and scored 84 percentage and have a first divison in school."
          />
          <Details
            education="Secondary School (X)"
            time="May 2015 - March 2016"
            title="Sri Chaitanya School"
            info="Completed my 10th successfully and scored 87 percentage and have a first divison in school."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
