import React from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import TransitionEffect from "./TransitionEffect";

const AboutPage = () => {
  const items = [
    { id: 1, imgPath: "/js.png", name: "JavaScript" },
    { id: 2, imgPath: "/html.png", name: "HTML" },
    { id: 3, imgPath: "/redux.png", name: "Redux" },
    { id: 4, imgPath: "/tailwindcss.png", name: "Tailwind" },
    { id: 5, imgPath: "/reactjs.png", name: "React" },
    { id: 6, imgPath: "/nodejs.png", name: "Node.js" },
    { id: 7, imgPath: "/mysql.png", name: "MySQL" },
    { id: 8, imgPath: "/mongodb.png", name: "MongoDB" },
    { id: 9, imgPath: "/css.png", name: "CSS" },
  ];

  const skillsData = items.map((data) => (
    <Skills key={data.id} id={data.id} path={data.imgPath} name={data.name} />
  ));

  return (
    <main className="flex w-full flex-col items-center justify-center">
      <TransitionEffect />
      <h1 className="text-8xl font-bold text-black rounded-md  xl:text-7xl xl:mb-2 lg:text-6xl lg:mx-28 md:mb-12 md:text-3xl md:mx-20 xs:mx-3">
        Passion Fuels Purpose!{" "}
      </h1>
      <div className="relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 2xl:hidden md:block w-[90%]">
        <img
          src="/my_image.jpg"
          alt="Balaji aadi"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <div className="w-full flex flex-1 mt-[10rem] md:mt-5">
        <div className="w-[23rem] mx-20 text-black font-semibold lg:mx-12 md:mx-10 md:w-[100%] sm:mx-3">
          <h2 className="mb-4 text-lg font-bold uppercase text-black/75">
            Biography
          </h2>
          <p className="text-medium ">
            Hi, I'm Balaji Aadesh, a web developer passionate about creating
            beautiful, functional, and user-centered digital experiences. With
            one year of experience, I continuously seek innovative ways to bring
            my clients' visions to life.
          </p>
          <p className="text-medium my-4">
            Adaptable back-end developer with a strong track record of creating
            efficient, scalable web applications. Proficient in Node and Express
            Js, with a deep understanding of CRUD and microservices
            architecture. Skilled at implementing secure authentication and
            authorization mechanisms, ensuring data integrity and protection.
          </p>
          <p className="text-medium">
            When I'm working on a website or other digital product, I work to my
            full potential for excellence and user-centered thinking for every
            project I work on. I look forward to the opportunity to bring my
            skills and passion to your next project.
          </p>
        </div>

        <div className="relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 md:hidden">
          <img
            src="/my_image.jpg"
            alt="Balaji aadi"
            className="w-[20rem] h-[24rem] rounded-2xl xl:w-[20rem] xl:h-auto"
          />
        </div>

        {/* This style is for more than 2xl screen */}
        <div className="grid col-span-2 mx-12 h-[28rem] gap-10 xl:hidden">
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">300+</span>
            <h2 className="text-xl font-medium capitalize text-black/75">
              DSA Problems solved
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">4</span>
            <h2 className="text-xl font-medium capitalize text-black/75">
              Live Projects Completed
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center ">
            <span className="inline-block text-7xl font-bold">1.5</span>
            <h2 className="text-xl font-medium capitalize text-black/75">
              Year of Experience
            </h2>
          </div>
        </div>
      </div>
      {/* This style is applicable for equal to xl and less than xl */}

      <div className="2xl:hidden xl:inline-block mt-[10rem] sm:mt-10">
        <div className="col-span-8 flex flex-row items-center gap-8">
          <div className="flex flex-col items-center justify-center ">
            <span className="inline-block text-7xl font-bold md:text-5xl sm:text-5xl xs:text-4xl">
              300+
            </span>
            <h2 className="mb-4 text-4xl font-medium capitalize text-dark/75 xl: text-center md:text-lg sm:text-base xs:text-sm">
              DSA Problems solved
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="inline-block text-7xl font-bold md:text-5xl sm:text-5xl xs:text-4xl">
              4
            </span>
            <h2 className="mb-4 text-4xl font-medium capitalize text-dark/75 xl: text-center md:text-lg sm:text-base xs:text-sm">
              Live Projects Completed
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <span className="inline-block text-7xl font-bold md:text-5xl sm:text-5xl xs:text-4xl">
              1.5
            </span>
            <h2 className="mb-4 text-4xl font-medium capitalize text-dark/75 xl: text-center md:text-lg sm:text-base xs:text-sm">
              Years of Experience
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        {/* Skills Section */}
        <h2 className="font-bold text-8xl mt-20 mb-12 w-full text-center md:text-6xl sm:text-4xl">
          Skills I Have
        </h2>
        <div className="w-full px-8 grid grid-cols-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 place-items-center">
          {skillsData}
        </div>
      </div>
      <h1 className="font-bold text-8xl mt-52 w-full text-center md:text-6xl md:mt-32 sm:text-4xl ">
        Experience
      </h1>
      <Experience />
      <h1 className="font-bold text-8xl mt-5 w-full text-center md:text-6xl md:mt-32 sm:text-4xl">
        Education
      </h1>
      <Education />
    </main>
  );
};

export default AboutPage;
