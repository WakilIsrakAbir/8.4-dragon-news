import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl mb-2">Login With</h2>
        <button className="flex gap-2 items-center btn border-blue-500 text-blue-500"><FaGoogle />Login With Google</button>
        <button className="flex gap-2 items-center btn"><FaGithub />Login With GitHub</button>
    </div>
  )
};

export default RightSidebar;