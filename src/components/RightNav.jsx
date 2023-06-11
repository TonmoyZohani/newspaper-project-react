import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import img1 from "../assets/qZone1.png";
import img2 from "../assets/qZone2.png";
import img3 from "../assets/qZone3.png";

const RightNav = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Login With</h1>

      <div className="space-y-4 mt-4">
        <div className="border rounded-md p-2 border-red-400 cursor-pointer">
          <GoogleIcon /> Login with Google
        </div>
        <div className="border rounded-md p-2 border-gray-400 cursor-pointer">
          <GitHubIcon /> Login with Github
        </div>
      </div>

      <h1 className="text-xl font-semibold mt-3">Find Us On</h1>
      <div className="mt-4 norder rounded-md">
        <div className="border p-2 cursor-pointer space-x-4">
          <FacebookIcon /> <span>Facebook</span>
        </div>
        <div className="border p-2  cursor-pointer space-x-4">
          <InstagramIcon /> <span>Instagram</span>
        </div>
        <div className="border p-2  cursor-pointer space-x-4">
          <TwitterIcon /> <span>Twitter</span>
        </div>
      </div>

      <div className="bg-slate-300 mt-4 border rounded-md">
        <h1 className="text-lg font-semibold pl-3 mb-4 mt-4">Q-Zone </h1>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
      </div>
    </div>
  );
};

export default RightNav;
