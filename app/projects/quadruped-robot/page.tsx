"use client";

import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const QuadrupedRobotProject = () => {
  const techStack = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  ];

  const systemComponents = [
    {
      title: "Locomotion System",
      description: "Quadruped chassis with bio-inspired gait patterns providing stable navigation across rough agricultural terrain using adaptive control algorithms"
    },
    {
      title: "Vision System",
      description: "ESP32-CAM module with real-time computer vision processing to distinguish weeds from crops using deep learning models"
    },
    {
      title: "Manipulation System",
      description: "4-DOF robotic arm executing precise mechanical weed removal guided by inverse kinematics calculations"
    }
  ];

  const features = [
    {
      title: "Autonomous Terrain Navigation",
      description: "SLIP model-based control with 8-DOF locomotion providing superior mobility on muddy fields, uneven ground, and crop rows without soil compaction"
    },
    {
      title: "Real-Time Weed Detection",
      description: "CNN-based classification analyzing morphological features and color signatures with detection overlays for system verification"
    },
    {
      title: "Precision Mechanical Intervention",
      description: "3D position calculation with IK solver commanding 4-DOF arm for mechanical removal, eliminating chemical herbicides"
    },
    {
      title: "Adaptive Control Systems",
      description: "3-axis gyroscope with real-time orientation feedback compensating for body tilt and maintaining arm accuracy"
    }
  ];

  const specifications = [
    { label: "Degrees of Freedom", value: "8-DOF" },
    { label: "Servo Torque", value: "35 kg/cm" },
    { label: "Leg Reach", value: "38 cm" },
    { label: "Arm DOF", value: "4-DOF" },
    { label: "Labor Reduction", value: "70%" },
    { label: "Herbicide Reduction", value: "90%" },
  ];

  const ImagePlaceholder = ({ num, caption }: { num: number; caption: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-black-100 border border-white/10 rounded-xl overflow-hidden group"
    >
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple/20 to-blue-500/20 min-h-[200px]">
        <div className="text-center">
          <div className="text-6xl mb-2">📷</div>
          <p className="text-gray-400">Image Placeholder {num}</p>
          <p className="text-sm text-gray-500 mt-2">{caption}</p>
        </div>
      </div>
      <Image
        src={`/projects/quadruped/image-${num}.jpg`}
        alt={`Project image ${num}`}
        width={800}
        height={600}
        className="w-full h-auto"
      />
    </motion.div>
  );

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
              Autonomous Quadruped with Robotic Arm
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Precision Weed Removal for Sustainable Agriculture
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Duration:</span>
                <span className="ml-2 text-white font-semibold">Jun - Dec 2024</span>
              </div>
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Status:</span>
                <span className="ml-2 text-green-400 font-semibold">Completed & Published</span>
              </div>
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Category:</span>
                <span className="ml-2 text-white font-semibold">Agricultural Robotics</span>
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

      {/* Image 1 - Hero Image */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ImagePlaceholder num={1} caption="Quadruped Robot Overview" />
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
              A precision agriculture solution that combines legged robotics, computer vision, and intelligent manipulation 
              to address the critical challenge of sustainable weed management. This system represents a shift from 
              chemical-intensive farming to mechanical intervention, utilizing a terrain-adaptive quadruped platform 
              equipped with a 4-DOF robotic arm and real-time vision processing for autonomous weed detection and removal.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Developed at Sathyabama Institute of Science and Technology, this project addresses the environmental 
              impact of chemical herbicides while reducing labor costs by 70% through autonomous operation.
            </p>

            {/* Problem Statement */}
            <div className="mt-8 p-6 bg-black-200 border-l-4 border-purple rounded-r-xl">
              <h3 className="text-xl font-bold mb-3 text-purple">Problem Statement</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Traditional weed control methods pose significant challenges: manual weeding is labor-intensive and costly, 
                while chemical herbicides harm the environment, contaminate soil and water, and contribute to herbicide-resistant 
                weed strains. The agricultural sector requires an efficient, sustainable, and precise weed management system 
                that operates effectively on uneven terrain typical of real-world farming environments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image 2 - System Architecture */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-5xl mx-auto">
          <ImagePlaceholder num={2} caption="System Architecture & Components" />
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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
                className="p-6 bg-black-200 border border-purple/20 rounded-xl hover:border-purple/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3 text-purple">{component.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{component.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Hardware & Software */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-black-100 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Hardware Specifications</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Quadruped Platform:</strong> 8-DOF locomotion (4 legs × 2 DOF each)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Servo Motors:</strong> High-torque 35 kg/cm for leg actuation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Leg Segments:</strong> Two 19 cm segments per leg (38 cm total reach)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>4-DOF Robotic Arm:</strong> 20 kg/cm precision servos with 3D-printed components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Raspberry Pi:</strong> Central processing unit for coordination and vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>ESP32-CAM:</strong> Real-time video capture and streaming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>3-Axis Gyroscope/IMU:</strong> Balance monitoring and tilt compensation</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-black-100 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Software Stack</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Python:</strong> Primary language for control algorithms and integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>OpenCV:</strong> Image processing for weed detection and feature extraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>NumPy:</strong> Numerical computations for IK and trajectory planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>SLIP Model:</strong> Bio-inspired locomotion control for energy-efficient gaits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Inverse Kinematics:</strong> Mathematical framework for arm positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Deep Learning:</strong> CNN-based weed/crop classification models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>VNC Server:</strong> Remote monitoring and wireless control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image 3 - Locomotion System */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-5xl mx-auto">
          <ImagePlaceholder num={3} caption="Quadruped Locomotion & Gait Control" />
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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

      {/* Image 4 - Robotic Arm */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ImagePlaceholder num={4} caption="4-DOF Robotic Arm & Weed Removal Mechanism" />
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
              <h3 className="text-lg font-bold mb-2 text-white">🦿 Bio-Inspired Locomotion</h3>
              <p className="text-gray-400 text-sm">
                The SLIP model (Spring-Loaded Inverted Pendulum) abstracts the quadruped as a point mass bouncing on 
                compliant legs, enabling lightweight, computationally efficient control that generates natural gaits 
                suitable for agricultural environments with minimal energy expenditure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">🎯 Inverse Kinematics Solver</h3>
              <p className="text-gray-400 text-sm">
                For the 4-DOF arm, the IK problem involves computing joint angles θ₁, θ₂, θ₃, θ₄ given desired 
                end-effector position (x, y, z). The system implements geometric and algebraic methods to solve 
                these equations in real-time, ensuring the arm reaches target weeds accurately.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">👁️ Computer Vision Pipeline</h3>
              <p className="text-gray-400 text-sm">
                The vision system preprocesses camera frames, applies segmentation to isolate vegetation, and uses 
                trained CNN classifiers to distinguish crop species from weed species. Detected weed centroids are 
                converted from image coordinates to world coordinates using camera calibration parameters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">⚖️ Dynamic Stability Control</h3>
              <p className="text-gray-400 text-sm">
                The control algorithm continuously monitors gyroscope data to detect body roll, pitch, and yaw. 
                When deviations exceed thresholds, the system adjusts leg servo positions to restore balance, 
                preventing tip-overs on slopes or during arm extension movements.
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
                challenge: "Terrain Adaptability",
                solution: "SLIP model's inherent compliance and energy-aware trajectory synthesis enable robust performance. Four-point contact distributes weight, minimizing soil compaction"
              },
              {
                challenge: "Real-Time Processing Constraints",
                solution: "Optimized algorithms with reduced-resolution images and ESP32-CAM handling video encoding, offloading tasks from Raspberry Pi"
              },
              {
                challenge: "Weed Classification Accuracy",
                solution: "Training deep learning models on diverse datasets representing different field conditions and growth stages improves robustness"
              },
              {
                challenge: "Power Management",
                solution: "Efficient gait patterns minimizing energy expenditure per stride and power-optimized servo control strategies extend battery life"
              },
              {
                challenge: "Arm-Base Coordination",
                solution: "Gyroscope provides orientation feedback updating IK reference frame, compensating for body tilt and movement"
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

      {/* Image 5 - Field Testing */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ImagePlaceholder num={5} caption="Field Testing & Real-World Operation" />
        </div>
      </section>

      {/* Applications & Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Applications & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Precision Weed Management", desc: "Targets individual weeds, reducing herbicide use by 90% compared to broadcast spraying" },
              { title: "Labor Shortage Mitigation", desc: "Automates repetitive manual weeding tasks, reducing labor costs by 70%" },
              { title: "Organic Farming", desc: "Enables chemical-free weed control, supporting organic certification requirements" },
              { title: "Crop Health Monitoring", desc: "Vision system adaptable for detecting diseases, pests, or nutrient deficiencies" },
              { title: "Targeted Pesticide Application", desc: "Robotic arm can be equipped with spraying nozzles for spot treatment" },
              { title: "Environmental Sustainability", desc: "Eliminates soil and water contamination from chemical herbicides" }
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

      {/* Results & Validation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Results & Validation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Functional locomotion across various terrains with stable SLIP model gaits",
              "4-DOF arm demonstrated precise positioning and object manipulation",
              "Real-time vision with object detection and overlaid bounding boxes",
              "VNC server enabled wireless control with live gyroscope data",
              "Integrated system autonomously detecting and executing removal actions",
              "Paper submitted: 'Quadruped with Robotic Arm for Weed Removal In Fields'"
            ].map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-3 p-4 bg-black-100 border border-white/10 rounded-lg"
              >
                <span className="text-green-400 text-xl mt-1">✓</span>
                <span className="text-gray-300">{result}</span>
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
              "AI-Driven Decision Making: Reinforcement learning for adaptive field strategies",
              "Multi-Robot Coordination: Deploying fleets for faster coverage",
              "Advanced Sensors: Hyperspectral cameras for improved discrimination",
              "Extended Battery Life: Solar panel integration for all-day operation",
              "Cloud Connectivity: Real-time data upload for farm management systems",
              "Enhanced Mobility: Improved gait patterns for challenging terrains"
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

      {/* Conclusion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-purple/20 to-blue-500/20 border border-purple/30 rounded-2xl text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Project Impact</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
              This project successfully demonstrates the viability of combining quadruped robotics, computer vision, 
              and intelligent manipulation for sustainable precision agriculture. By providing an environmentally 
              friendly alternative to chemical herbicides while addressing labor challenges, this autonomous system 
              represents a significant step toward the future of smart farming.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Team:</strong> Pilli Ashok Kumar (41130394), Podapala Venkat (41130396)<br />
              <strong>Guided by:</strong> Dr. T. Ravi, M.E., Ph.D., Head of Department<br />
              <strong>Institution:</strong> Sathyabama Institute of Science and Technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in This Project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            This project demonstrates advanced agricultural robotics, bio-inspired locomotion, and sustainable farming technology. 
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

export default QuadrupedRobotProject;

