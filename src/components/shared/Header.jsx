import React from "react";
import logo from "@/assets/logo.png"
import Image from "next/image";
import { format, compareAsc } from "date-fns";

const Header = () => {
  return (
    <div className="text-center pt-10 space-y-2">
      <Image className="mx-auto" src={logo} alt="Logo" width={300} height={400} />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;