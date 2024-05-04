import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
}) => {
  return (
    <li className="my-10 first:mt-1 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[100%] ">
      <div>
        <h3 className="capitalize font-bold text-2xl sm:font-semibold">
          {position}&nbsp;{" "}
          <Link
            to={companyLink}
            target="_blank"
            download={true}
            className="text-pink-600 capitalize sm:text-lg"
          >
            @{company}
          </Link>
        </h3>
        <span className="capitalize font-bold text-black/75 sm:text-sm ">
          {time} | {address}
        </span>

        <p className="w-full text-black font-medium sm:text-sm">{work1}</p>
        <br />
        <p className="w-full text-black font-medium sm:text-sm">{work2}</p>
        <br />
        <p className="w-full text-black font-medium sm:text-sm">{work3}</p>
        <br />
        <p className="w-full text-black font-medium sm:text-sm">{work4}</p>
        <br />
        <p className="w-full text-black font-medium sm:text-sm">{work5}</p>
        <br />
        <p className="w-full text-black font-medium sm:text-sm">{work6}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32 md:my-20">
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-16 top-3 w-[2px] h-full bg-black origin-top md:left-0"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Associate Full Stack Software Engineer | Full Time"
            company="Nable Invent Solutions Pvt.Ltd"
            companyLink="/Experience_Letter.pdf"
            time=" 03/10/23 to present"
            address="Vyapar Vihar Main Road Top Floor, Karan Chamber Bilaspur, Chhattisgarh, India ,beside Katanga TV Tower, Jabalpur, Madhya Pradesh 482002"
            work1="As a FullStack Developer, I spearheaded pivotal projects, including a comprehensive Business Management Website and an innovative Employee Self-Service platform."
            work2="Implemented robust frontend solutions utilizing REST APIs, ensuring seamless integration with backend systems"
            work3="Engineered a meticulously structured UI employing advanced optimization techniques like useMemo and code splitting to enhance performance"
            work4="Integrated state management with Redux Persist and Redux Toolkit, ensuring data integrity and application stability"
            work5="Designed and implemented user authentication systems to safeguard sensitive information"
            work6="Developed a dynamic dashboard featuring intuitive drag-and-drop functionality for enhanced user experience"
          />
        </ul>

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Intern"
            company="Dave’s Brother Technology"
            companyLink="/Experience_Letter.pdf"
            time=" 23/01/23 to 27/04/23"
            address="3 floor, JIC, Udhyog Bhawan,
          beside Katanga TV Tower, Jabalpur,
          Madhya Pradesh 482002"
            work1="Working on their core application using frontend technologies involving the React and Redux toolkit"
            work2="Worked on a team responsible for developing a website dashboard feature that allowed users to create, update and delete items including designing and implementing a new user interface and developing the backend infrastructure to support the feature"
            work3="Tech stacks: ReactJs, NodeJs, ExpressJs, MongoDB"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
