"use client";

import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const GestureRobotArmProject = () => {
  const techStack = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  ];

  const systemComponents = [
    {
      title: "Gesture Recognition Node",
      description: "Computer vision pipeline running on host machine that captures video, tracks hand landmarks, and classifies gestures using MediaPipe"
    },
    {
      title: "Communication Bridge",
      description: "Wireless link using Bluetooth (HC-05) transmitting encoded command signals from host computer to robot controller"
    },
    {
      title: "Robotic Control Node",
      description: "Arduino-based embedded system that parses received commands and drives servo motors to replicate intended motion"
    }
  ];

  const features = [
    {
      title: "Real-Time Hand Gesture Recognition",
      description: "95%+ recognition accuracy using MediaPipe's ML model to detect 21 3D hand keypoints with visual skeletal overlay feedback"
    },
    {
      title: "Wireless Bluetooth Control",
      description: "HC-05 module enables untethered operation with low-latency command transmission (~10m range)"
    },
    {
      title: "Multi-DOF Control",
      description: "Maps specific hand gestures to robotic axes: Index up (lift), Fist (grip), Open palm (release), Hand tilt (drive base)"
    },
    {
      title: "Integrated Mobility",
      description: "Wheeled chassis enables Pick and Place tasks with unified gesture interface for manipulation and navigation"
    }
  ];

  const specifications = [
    { label: "Recognition Accuracy", value: "95%+" },
    { label: "Bluetooth Range", value: "~10 meters" },
    { label: "Degrees of Freedom", value: "3-4 DOF" },
    { label: "Response Time", value: "<100ms" },
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
              Moving Robot Arm Controlled by Hand Gestures
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Touchless Human-Robot Interaction Using Computer Vision & Wireless Communication
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Duration:</span>
                <span className="ml-2 text-white font-semibold">Nov 2023 - Apr 2024</span>
              </div>
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Status:</span>
                <span className="ml-2 text-green-400 font-semibold">Completed</span>
              </div>
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Category:</span>
                <span className="ml-2 text-white font-semibold">Human-Robot Interaction</span>
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
                    src={`/projects/project2/image-${num}.jpg`}
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
              A human-computer interaction (HCI) project that enables touchless, intuitive control of a robotic 
              manipulator. By leveraging computer vision and wireless communication, this system translates natural 
              hand movements into precise mechanical actions in real-time, bridging the gap between digital gesture 
              recognition and physical actuation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The system eliminates physical controllers (joysticks/keyboards) by using a standard webcam to track 
              hand movements, achieving 95%+ recognition accuracy while providing immediate visual feedback through 
              skeletal overlay visualization.
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
                  <span><strong>Arduino Uno:</strong> Central MCU for parsing commands and generating PWM signals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>HC-05 Bluetooth:</strong> Wireless serial communication (~10m range)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Servo Motors (SG90/MG995):</strong> Precise angular positioning for joints</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>3-4 DOF Robotic Arm:</strong> Multi-joint chassis with base, shoulder, elbow, gripper</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Mobile Wheeled Base:</strong> Adds mobility to manipulation capabilities</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-black-100 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Software Stack</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Python (OpenCV):</strong> Image processing and vision pipeline core</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>MediaPipe:</strong> Robust hand landmark detection (21 3D keypoints)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Arduino C/C++:</strong> Firmware for serial data interpretation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>PySerial:</strong> Handles serial communication to Bluetooth COM port</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Gesture Classification Logic:</strong> Analyzes finger landmark positions</span>
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

      {/* Implementation Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Implementation Highlights</h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">🎯 Computer Vision Pipeline</h3>
              <p className="text-gray-400 text-sm">
                Captures frames, converts to RGB, processes through MediaPipe Hands solution extracting 21 landmark 
                coordinates. Custom logic calculates Euclidean distances between landmarks (e.g., thumb tip to index 
                tip) for dynamic gesture recognition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">🤖 Inverse Kinematics (Simplified)</h3>
              <p className="text-gray-400 text-sm">
                Translates abstract gestures into specific servo angles. For example, "V-sign" maps to "set servo 2 
                to 90 degrees" ensuring predictable movement patterns for intuitive control.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">📡 Robust Serial Communication</h3>
              <p className="text-gray-400 text-sm">
                Implements concise protocol sending single-character command bytes rather than complex strings. Arduino 
                processes instructions within millisecond loop cycle required for smooth servo PWM generation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Challenges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technical Challenges & Solutions</h2>
          <div className="space-y-6">
            {[
              {
                challenge: "Jitter & False Positives",
                solution: "Implemented moving average smoothing filter and confidence threshold (min_detection_confidence=0.7) to ignore low-quality frames"
              },
              {
                challenge: "Power Supply Isolation",
                solution: "Separate high-current power source for motors while keeping Arduino logic on stable regulated supply with shared common ground"
              },
              {
                challenge: "Latency Management",
                solution: "Optimized Python loop with lower resolution (640x480) and increased Bluetooth baud rate (38400+) to maximize throughput"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-black-100 border-l-4 border-purple rounded-r-xl"
              >
                <h3 className="text-lg font-bold mb-2 text-white">⚡ {item.challenge}</h3>
                <p className="text-gray-400 text-sm">✓ {item.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Real-World Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Prosthetics", desc: "Controlling artificial limbs using muscle signals or visual gestures" },
              { title: "Industrial Safety", desc: "Operators control heavy machinery from safe distance without contact" },
              { title: "Medical Robotics", desc: "Touchless control of surgical tools in sterile environments" },
              { title: "Smart Home Automation", desc: "Control appliances using simple hand signs for elderly/disabled" },
              { title: "Education & Research", desc: "Platform for HCI and robotics learning and experimentation" },
              { title: "Entertainment", desc: "Interactive gaming and immersive gesture-based experiences" }
            ].map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 bg-black-200 border border-white/10 rounded-xl hover:border-purple/50 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-purple">{app.title}</h3>
                <p className="text-gray-400 text-sm">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Future Enhancements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Flex Sensor Integration: Add 'Smart Glove' for precise finger tracking",
              "Haptic Feedback: User 'feels' when robot grips objects",
              "Full IK Solver: True 1:1 motion tracking in 3D space",
              "Multi-hand Control: Support for bimanual manipulation tasks",
              "ML-based Gesture Learning: Custom gesture training interface",
              "Enhanced Mobility: Omnidirectional base with path planning"
            ].map((enhancement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-3 p-4 bg-black-100 border border-white/10 rounded-lg"
              >
                <span className="text-purple text-xl">→</span>
                <span className="text-gray-300">{enhancement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-purple/20 to-blue-500/20 border border-purple/30 rounded-2xl text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Project Impact</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The <strong>Gesture-Controlled Robot Arm</strong> successfully demonstrates the power of integrating 
              modern AI-based computer vision with classical embedded robotics. It creates a seamless, intuitive 
              interface that makes controlling complex hardware as simple as waving a hand, highlighting the future 
              of natural Human-Computer Interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in This Project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            This project demonstrates advanced human-robot interaction, computer vision, and wireless embedded systems. 
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

export default GestureRobotArmProject;
