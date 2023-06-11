import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import { Button } from "@mui/material";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="container max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <img src={logo} />
        <span className="text-center">
          {moment().format("dddd, MMMM Do YYYY")}
        </span>
      </div>
      <div className="flex justify-center">
        <Button
          sx={{
            textTransform: "none",
            p: "2px 6px 2px 6px",
            color: "white",
            bgcolor: "red",
          }}
        >
          Latest
        </Button>
        <Marquee className="text-red-500" speed={80}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          repudiandae voluptatum quas animi, ex hic aliquam molestias itaque
          voluptas natus!
        </Marquee>
      </div>

      {/* navbar */}
      <nav class="flex items-center justify-between bg-gray-600 py-4 px-6 border rounded-md mt-4">
        <div class="flex items-center">
          <a href="#" class="text-white text-lg font-semibold">
            Home
          </a>
          <a href="#" class="ml-6 text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" class="ml-6 text-gray-300 hover:text-white">
            Career
          </a>
        </div>
        <div class="flex items-center">
          <a href="#" class="text-gray-300 hover:text-white mr-4">
            User
          </a>
          <a href="#" class="text-gray-300 hover:text-white">
            Login
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
