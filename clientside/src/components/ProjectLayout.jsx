import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

const ProjectLayout = ({
  id,
  majorTitle,
  majorImg,
  majorDesc,
  minorTitle1,
  minorImg1,
  minorTitle2,
  LoginDetails,
  LoginDetails2,
  minorImg2,
  gitLinkMajor,
  gitLinkMinor1,
  gitLinkMinor2,
  majorProjectLiveLink1,
  majorProjectLiveLink2,
  minorProjectLiveLink1,
  minorProjectLiveLink2,
  minorProjectLiveLink3,
  minorProjectLiveLink4,
}) => {
  return (
    <div className="w-full h-full" key={id}>
      <div
        className="flex items-center justify-between w-[80%] border border-solid
         border-black rounded-3xl bg-white shadow-2xl z-0 mx-32 p-10 lg:w-[90%] lg:mx-11 lg:flex-col sm:mx-7 sm:p-7"
      >
        <img
          src={`/${majorImg}`}
          alt=""
          className="w-1/2 rounded-xl px-8 lg:w-full lg:h-auto lg:overflow-hidden sm:px-2 sm:overflow-auto "
        />
        <div className="flex flex-col gap-4 lg:mt-3 lg:ml-9 sm:mx-2">
          <h2 className="text-violet-600 text-bold text-2xl font-medium">
            Featured Project
          </h2>
          <Link to={majorProjectLiveLink1} target="_blank">
            <h1 className="text-black text-bold text-4xl font-bold hover:underline sm:text-2xl">
              {majorTitle}{" "}
            </h1>
          </Link>
          <p className="text-black font-medium">{majorDesc}</p>
          <div className="flex flex-row gap-4">
            <Link to={gitLinkMajor} target="_blank">
              <AiFillGithub size={40} />
            </Link>
            <Link to={majorProjectLiveLink2} target="_blank">
              <button className=" flex items-center justify-center gap-3 border border-none bg-black text-white w-32 h-10 rounded-lg cursor-pointer ">
                Live{" "}
                <i>
                  <MdArrowOutward />
                </i>
              </button>{" "}
            </Link>
          </div>
          <p className="text-sm text-purple-600 font-bold">{LoginDetails}</p>
        </div>
      </div>

      <div className="flex mt-36 justify-evenly sm:flex-col sm:items-center">
        <div
          className="flex items-center justify-center w-[38%] h-auto
             border border-solid border-black rounded-3xl bg-white shadow-2xl flex-col p-5
             lg:w-[45%] lg:h-[22rem] sm:w-[90%] sm:h-full sm:p-10"
          id={2}
        >
          <Link to={minorProjectLiveLink1} target="_blank">
            <img
              src={`/${minorImg1}`}
              alt=""
              className="w-[90%] rounded-2xl mx-4 sm:w-full sm:mx-0"
            />
          </Link>
          <h2 className="font-semibold text-violet-600 text-lg w-full pl-4">
            Website Template
          </h2>
          <Link to={minorProjectLiveLink1} target="_blank">
            <h1 className="font-bold text-black text-2xl w-full hover:underline">
              {minorTitle1}{" "}
            </h1>
          </Link>
          <div className="flex w-full justify-around">
            <Link to={minorProjectLiveLink1} target="_blank">
              <span className="font-medium text-black text-lg underline">
                Visit
              </span>
            </Link>
            <Link to={gitLinkMinor1} target="_blank">
              <span>
                <AiFillGithub size={30} />
              </span>
            </Link>
          </div>
          <p className="text-sm text-purple-600 font-bold">{LoginDetails2}</p>
        </div>
        <div
          className="flex items-center justify-center w-[38%] h-auto  border border-solid
                 border-black rounded-3xl bg-white shadow-2xl flex-col p-5
                 lg:w-[45%] lg:h-[22rem] sm:w-[90%] sm:mt-32 sm:h-full sm:p-10"
          id={3}
        >
          <Link to={minorProjectLiveLink3} target="_blank">
            <img
              src={`/${minorImg2}`}
              alt=""
              className="w-[90%] rounded-2xl mx-4 sm:w-full sm:mx-0"
            />
          </Link>
          <h2 className="font-semibold text-violet-600 text-lg w-full pl-4">
            Website Template
          </h2>
          <Link to={minorProjectLiveLink4} target="_blank">
            <h1 className="font-bold text-black text-2xl w-full hover:underline">
              {minorTitle2}{" "}
            </h1>
          </Link>
          <div className="flex w-full justify-around">
            <Link to={minorProjectLiveLink3} target="_blank">
              <span className="font-medium text-black text-lg underline">
                Visit
              </span>
            </Link>
            <Link to={gitLinkMinor2} target="_blank">
              <span>
                <AiFillGithub size={30} />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ProjectLayout;
