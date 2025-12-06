"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import StarField from "./ui/StarField";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        onUpdate: (value) => setCount(Math.floor(value)),
      });

      return controls.stop;
    } else {
      setCount(0);
    }
  }, [target, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Profile = () => {
  return (
    <section id="profile" className="relative w-full py-20">
      {/* Star field animation */}
      <StarField />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center max-w-6xl mx-auto">
          {/* Left side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing ring effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full opacity-30 blur-2xl" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src="/profile1.png"
                  alt="Ashok Kumar"
                  fill
                  className="object-cover object-[center_20%]"
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 350px"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Name and Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
                Ashok Kumar
              </h2>
              <h3 className="text-base sm:text-lg md:text-2xl text-gray-300 font-normal mb-4">
                Embedded Systems | Robotics | AI/Computer Vision Engineer
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                B.Tech ECE @ Sathyabama | TCS Selected | Currently @ InsituMicron (DIC Research) | Alumni @ Pixel Expert
              </p>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6"
            >
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Passionate AI engineer with expertise in robotics, computer vision, and AI-powered automation. 
                I bridge the gap between <span className="text-purple-400 font-semibold">hardware intelligence</span> and{" "}
                <span className="text-cyan-400 font-semibold">software innovation</span>, creating autonomous systems 
                that solve real-world problems. Currently contributing to cutting-edge Digital Image Correlation (DIC) 
                research at InsituMicron.
              </p>
            </motion.div>


            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-5"
            >
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-5 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  <AnimatedCounter target={10} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Projects</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-5 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  <AnimatedCounter target={95} suffix="%+" />
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Accuracy</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-5 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  <AnimatedCounter target={90} suffix="%" />
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Efficiency</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <a
                href="https://wa.me/919030896835?text=Hi%20Ashok%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black px-4 sm:px-6 py-3 rounded-md text-sm sm:text-base font-semibold transition-all transform hover:scale-105"
              >
                <FaEnvelope />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 sm:px-6 py-3 rounded-md text-sm sm:text-base font-semibold transition-all"
              >
                View Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
