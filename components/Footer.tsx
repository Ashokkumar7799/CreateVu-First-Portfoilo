import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[50vw] text-3xl md:text-4xl">
          Ready to bring <span className="text-purple">your</span> robotics or AI vision to life?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-sm md:text-base">
          Let&apos;s collaborate on your next autonomous system, computer vision project, or embedded AI solution.
        </p>
        <a href="https://wa.me/919030896835?text=Hi%20Ashok%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col-reverse justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ashok Kumar
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-black-300 transition-colors"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
