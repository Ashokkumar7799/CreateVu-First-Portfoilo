"use client";

import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import StarField from "./ui/StarField";

const StartupHero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Star Field Background */}
      <StarField />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        
        {/* Top Section - Building Intelligent Systems */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-40"
        >
          <p className="uppercase tracking-widest text-xs text-blue-100 mb-8 font-light">
            Autonomous Systems & Edge AI Innovation
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
            Building Intelligent Systems That <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Bridge Hardware and Software</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            From ROS-based robotics to real-time AI on Jetson Nano
          </p>

          <a 
            href="#about"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105"
          >
            Show my work →
          </a>
        </motion.div>

        {/* Profile Section */}
        <div id="profile" className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center max-w-6xl mx-auto">
          {/* Left side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing ring effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full opacity-30 blur-2xl" />
              
              {/* Profile image container - reduced size */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src="/profile.jpg"
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
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Name and Title */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
                Ashok Kumar
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-300 font-normal mb-4">
                Embedded Systems | Robotics | AI/Computer Vision Engineer
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                B.Tech ECE @ Sathyabama | TCS Ninja Selected | Currently @ InsituMicron (DIC Research) | Alumni @ Pixel Expert
              </p>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6"
            >
              <p className="text-gray-300 leading-relaxed text-base">
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
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-5"
            >
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">5+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Projects</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">90%+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Accuracy</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">70%</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Efficiency</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://wa.me/919030896835?text=Hi%20Ashok%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-md font-semibold transition-all transform hover:scale-105"
              >
                <FaEnvelope />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-md font-semibold transition-all"
              >
                View Work
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            🌟 Core Expertise
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔬",
                title: "Digital Image Correlation (DIC)",
                desc: "Advanced strain measurement and deformation analysis using computer vision"
              },
              {
                icon: "🤖",
                title: "Autonomous Robotics",
                desc: "Designed quadruped robot with 4-DOF robotic arm for precision agricultural weed removal"
              },
              {
                icon: "👁️",
                title: "Computer Vision Integration",
                desc: "Deployed real-time YOLO object detection on NVIDIA Jetson Nano with sub-3 second inference"
              },
              {
                icon: "🏭",
                title: "Industrial AI Systems",
                desc: "Multi-modal pipelines for material quantity estimation achieving 90%+ accuracy"
              },
              {
                icon: "🔧",
                title: "ROS Ecosystem",
                desc: "Built room-scanning robots with ESP32-CAM, creating comprehensive 2D/3D simulation environments"
              },
              {
                icon: "⚡",
                title: "Edge AI Deployment",
                desc: "Optimized deep learning models for resource-constrained embedded platforms"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:bg-white/10 hover:border-purple-500/40 transition-all group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2 group-hover:text-purple-200">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Arsenal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            🛠️ Technical Arsenal
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-purple-300 mb-4">Hardware</h4>
              <div className="flex flex-wrap gap-2">
                {["Arduino", "Raspberry Pi", "Jetson Nano", "ESP32", "STM32", "MPU6050/9250", "IMXRT1176"].map((tech) => (
                  <span key={tech} className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Software</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "C/C++", "ROS/ROS2", "OpenCV", "PyTorch", "YOLO", "Flask", "Gazebo", "Verilog HDL"].map((tech) => (
                  <span key={tech} className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-cyan-300 mb-4">Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {["DIC Analysis", "SLAM", "Path Planning", "Sensor Fusion", "Real-time Systems", "VLSI Design"].map((tech) => (
                  <span key={tech} className="bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex justify-center mt-16"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-2xl"
            >
              ↓
            </motion.div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default StartupHero;
