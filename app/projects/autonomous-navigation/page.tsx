"use client";

import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AutonomousNavigationProject = () => {
  const techStack = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "ROS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  ];

  const systemComponents = [
    {
      title: "Camera Node",
      description: "ESP32-CAM module handles real-time video streaming and converts footage into formats suitable for computer vision processing"
    },
    {
      title: "Navigation Node",
      description: "Processes sensor data from ultrasonic/infrared sensors to detect obstacles, plan paths, and send motor commands"
    },
    {
      title: "Mapping Node",
      description: "Continuously updates 2D grid map and builds 3D environmental reconstructions based on robot movements"
    }
  ];

  const features = [
    {
      title: "Autonomous Navigation",
      description: "Intelligent path planning with real-time obstacle detection and dynamic trajectory adjustment using multi-sensor fusion"
    },
    {
      title: "Real-Time Processing",
      description: "ESP32-CAM streams video at 15-30 FPS with Python-based OpenCV pipelines for frame-by-frame spatial analysis"
    },
    {
      title: "2D Grid Mapping",
      description: "Occupancy grid representation of explored space with free/occupied/unexplored cell classification"
    },
    {
      title: "3D Reconstruction",
      description: "Computer vision-based 3D modeling using feature detection, stereo principles, and structure-from-motion"
    }
  ];

  const specifications = [
    { label: "Detection Range", value: "10-200cm" },
    { label: "Video Streaming", value: "15-30 FPS" },
    { label: "Operation Duration", value: "1-2 hours" },
    { label: "Mapping Resolution", value: "Configurable grid" },
  ];

  return (
    <div className="min-h-screen bg-black-100 text-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black-100/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-purple hover:text-white transition-colors">
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple to-blue-500 bg-clip-text text-transparent">
              Autonomous Navigation and Scanning System
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Using ESP32-CAM and ROS for 2D/3D Indoor Environment Mapping
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Duration:</span>
                <span className="ml-2 text-white font-semibold">May - Nov 2023</span>
              </div>
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Status:</span>
                <span className="ml-2 text-green-400 font-semibold">Completed</span>
              </div>
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Category:</span>
                <span className="ml-2 text-white font-semibold">Autonomous Robotics</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-12">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-black-200 border border-white/10 rounded-full hover:border-purple/50 transition-colors"
                >
                  <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Images Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: num * 0.1 }}
                className="relative bg-black-100 border border-white/10 rounded-xl overflow-hidden group"
              >
                {/* Placeholder for images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple/20 to-blue-500/20 min-h-[200px]">
                  <div className="text-center">
                    <div className="text-6xl mb-2">📷</div>
                    <p className="text-gray-400">Image Placeholder {num}</p>
                    <p className="text-sm text-gray-500 mt-2">Add your project image here</p>
                  </div>
                </div>

                <Image
                  src={`/projects/autonomous-nav/image-${num}.jpg`}
                  alt={`Project image ${num}`}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              An innovative robotics project that combines embedded systems, computer vision, and autonomous navigation 
              to create an intelligent indoor mapping solution. The system autonomously explores indoor environments, 
              detecting and avoiding obstacles while simultaneously capturing real-time video footage to construct 
              detailed 2D grid maps and 3D environmental models.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Developed at Sathyabama Institute of Science and Technology, Department of Electronics and Communication 
              Engineering, this project demonstrates the integration of affordable components like ESP32-CAM and Arduino 
              with powerful frameworks like ROS to achieve sophisticated navigation and environmental modeling capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technical Architecture</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {systemComponents.map((component, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-black-100 border border-purple/20 rounded-xl hover:border-purple/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3 text-purple">{component.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{component.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Hardware & Software */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-black-100 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Hardware Components</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>ESP32-CAM:</strong> Video capture with integrated WiFi transmission</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Arduino Uno:</strong> Motor control and sensor data processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Ultrasonic/IR Sensors:</strong> Obstacle detection (10-200cm range)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Motor Driver & DC Motors:</strong> Precise mobility control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Custom Chassis:</strong> Houses all electronic components</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-black-100 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Software Stack</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Python (OpenCV, NumPy):</strong> Computer vision & image processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>ROS:</strong> System integration and inter-process communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Arduino C/C++:</strong> Microcontroller programming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>SLAM Algorithms:</strong> Simultaneous localization and mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Sensor Fusion:</strong> Multi-sensor data integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Core Features & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-gradient-to-br from-purple/10 to-blue-500/10 border border-purple/20 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Performance Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specifications.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 bg-black-100 border border-white/10 rounded-xl text-center hover:border-purple/50 transition-colors"
              >
                <div className="text-3xl font-bold text-purple mb-2">{spec.value}</div>
                <div className="text-sm text-gray-400">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Challenges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technical Challenges & Solutions</h2>
          <div className="space-y-6">
            {[
              {
                challenge: "Camera Quality Constraints",
                solution: "Implemented adaptive image enhancement algorithms and optimized lighting conditions for ESP32-CAM limitations"
              },
              {
                challenge: "Limited Field of View",
                solution: "Strategic movement patterns with multiple-pass scanning for comprehensive environment coverage"
              },
              {
                challenge: "Sensor Accuracy Variations",
                solution: "Multi-sensor fusion combining ultrasonic and infrared data for improved reliability"
              },
              {
                challenge: "Power Management",
                solution: "Balanced performance with energy efficiency through selective processing and intelligent sleep modes"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
              >
                <h3 className="text-lg font-bold mb-2 text-white">⚡ {item.challenge}</h3>
                <p className="text-gray-400 text-sm">✓ {item.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Real-World Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Indoor Mapping", desc: "Accurate floor plans of buildings and facilities" },
              { title: "Security & Surveillance", desc: "Autonomous patrol and monitoring systems" },
              { title: "Inventory Management", desc: "Warehouse layout scanning and optimization" },
              { title: "Emergency Response", desc: "Exploring hazardous environments safely" },
              { title: "Smart Homes", desc: "Learning and adapting to residential layouts" },
              { title: "Research & Education", desc: "Platform for robotics and AI learning" }
            ].map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 bg-black-100 border border-white/10 rounded-xl hover:border-purple/50 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-purple">{app.title}</h3>
                <p className="text-gray-400 text-sm">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Future Enhancements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "LiDAR integration for enhanced depth perception",
              "ML-based object recognition and classification",
              "Multi-robot coordination for faster coverage",
              "Improved 3D reconstruction algorithms",
              "Extended battery life with solar charging",
              "Cloud connectivity for remote monitoring"
            ].map((enhancement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-3 p-4 bg-black-200 border border-white/10 rounded-lg"
              >
                <span className="text-purple text-xl">→</span>
                <span className="text-gray-300">{enhancement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in This Project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            This project demonstrates advanced robotics, computer vision, and autonomous systems integration. 
            Feel free to reach out for collaboration or technical discussions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://wa.me/919030896835?text=Hi%20Ashok%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-purple hover:bg-purple/80 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/#projects"
              className="px-8 py-3 bg-black-200 border border-white/20 hover:border-purple/50 rounded-lg font-semibold transition-colors"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousNavigationProject;
