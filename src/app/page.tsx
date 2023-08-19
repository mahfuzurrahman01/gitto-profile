"use client";
import { IUserDetails } from "@/components/types/Response";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiGitRepoForked } from "react-icons/bi";
import GitHubCalendar from "react-github-calendar";
export default function Home() {
  const [searchText, setSearchText] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [details, setDetails] = useState<IUserDetails>({} as IUserDetails);
  // this function will set the searched name / user name for search
  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    setSearchText(event?.target?.value);
  };
  // this function will return the github profile details
  const getUserDetails = async (userName: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      console.log(response?.data);
      if (response?.data) {
        setDetails(response?.data);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Please enter a valid username!");
    }
  };
  // after clicking on search button this function will work
  const doSearch = () => {
    setDetails({} as IUserDetails);
    getUserDetails(searchText);
  };
  const buttonRef: any = useRef(null);
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      buttonRef?.current?.click();
    }
  };

  return (
    <div className="w-full relative">
      <div className="flex justify-center items-center gap-3 w-full">
        <input
          onChange={searchHandle}
          type="text"
          name="search"
          id="search"
          className="px-3 py-1 rounded"
          value={searchText}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={doSearch}
          className="flex justify-center items-center shadow-md shadow-sky-500"
          ref={buttonRef}
        >
          <AiOutlineSearch className="text-sky-600 w-7 h-7 bg-gray-200 rounded " />
        </button>
      </div>
      <div className="flex justify-center items-center mt-1 p-0 pt-1 m-0">
        <small className="text-red-500 text-xs text-center">
          {errorMessage}
        </small>
      </div>
      <div className="w-full justify-center items-center mt-5">
        {details?.name ? (
          <div className="mb-4 relative bg-gray-900 bg-opacity-50 flex justify-center flex-col items-center text-gray-200 md:w-[40%] w-11/12 p-5 mx-auto rounded gap-3">
            {/* // three dot  */}
            <div className="flex justify-start gap-1 items-center absolute left-2 top-2">
              <div className="w-3 h-3 rounded-full bg-red-700"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-700"></div>
            </div>
            <Image
              alt="user image"
              src={details?.avatar_url}
              width={135}
              height={135}
              className="rounded-full"
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="text-lg font-semibold tracking-wider">
                {details?.name}
              </p>
              <p className="font-light text-gray-400 text-sm tracking-wider">
                {details?.login}
              </p>
              <p className="font-light text-gray-200 text-sm tracking-wider text-center">
                {details?.bio}
              </p>
              {/* ============== followers and following ============= */}
              <div className="flex justify-center items-center gap-2 flex-wrap">
                <p className="font-light text-gray-200 text-sm tracking-wider text-center flex justify-center items-center gap-1">
                  <FiUsers />{" "}
                  <span className="text-sky-600 font-semibold">
                    {details?.followers}
                  </span>{" "}
                  Followers
                </p>
                <p> | </p>
                <p className="font-light text-gray-200 text-sm tracking-wider text-center flex justify-center items-center gap-1">
                  <FiUsers />{" "}
                  <span className="text-sky-600 font-semibold">
                    {details?.following}
                  </span>{" "}
                  Following
                </p>
                <p> | </p>
                <p className="font-light text-gray-200 text-sm tracking-wider text-center flex justify-center items-center gap-1">
                  <BiGitRepoForked />{" "}
                  <span className="text-sky-600 font-semibold">
                    {details?.public_repos}
                  </span>{" "}
                  Public repo
                </p>
              </div>

              <a
                href={details?.html_url}
                target="_blank"
                className=" text-gray-200 border border-sky-600 px-7 py-1 text-xs mt-2 font-light rounded"
              >
                Check on GitHub
              </a>
            </div>
            {/* ============ for showing github calendar ===========  */}
            <div className="mt-3 w-11/12 mx-auto">
              <GitHubCalendar username={details?.login} />
            </div>
          </div>
        ) : (
          <div className=" flex justify-center flex-col items-center text-gray-200 font-mono md:w-[40%] w-11/12 text-center p-5 mx-auto rounded">
            <p>
              {" "}
              Please Search with your github{" "}
              <span className="font-semibold text-sky-600">username</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
