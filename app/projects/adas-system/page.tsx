"use client";

import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ADASProject = () => {
  const techStack = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  ];

  const systemComponents = [
    {
      title: "Perception Layer",
      description: "Dual USB cameras (front and rear) capturing real-time video at 720p/30fps for comprehensive environmental awareness"
    },
    {
      title: "Processing Core",
      description: "NVIDIA Jetson Nano (4GB) executing optimized YOLO object detection, distance estimation, and TTC calculations in real-time"
    },
    {
      title: "Alert System",
      description: "Visual display cluster with UART-based data transmission to external microcontrollers for collision warnings"
    }
  ];

  const features = [
    {
      title: "Real-Time Object Detection",
      description: "Custom-trained YOLO model optimized for two-wheeler environments, detecting vehicles, pedestrians, motorcycles, and obstacles with high accuracy"
    },
    {
      title: "Distance Calculation",
      description: "Monocular vision techniques estimating distance using bounding box dimensions, camera calibration, and known object sizes"
    },
    {
      title: "Time-To-Collision (TTC)",
      description: "Physics-based calculations using relative velocity and acceleration: TTC = (-V + √(V² + 2aX)) / a"
    },
    {
      title: "Dual-Camera System",
      description: "360-degree awareness with front and rear cameras alerting riders to threats from all directions"
    }
  ];

  const specifications = [
    { label: "Resolution", value: "720p" },
    { label: "Frame Rate", value: "30 FPS" },
    { label: "Inference Time", value: "<100ms" },
    { label: "GPU Cores", value: "128 CUDA" },
    { label: "RAM", value: "4GB" },
    { label: "Detection mAP", value: "85%+" },
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
              Advanced Driver Assistance System (ADAS)
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Real-Time Safety System for Two-Wheeler Collision Avoidance
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Duration:</span>
                <span className="ml-2 text-white font-semibold">Dec 2024 - Mar 2025</span>
              </div>
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Status:</span>
                <span className="ml-2 text-green-400 font-semibold">Completed (Core Features)</span>
              </div>
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Platform:</span>
                <span className="ml-2 text-white font-semibold">NVIDIA Jetson Nano</span>
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

      {/* Project Gallery */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
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
                  src={`/projects/adas/image-${num}-.jpg`}
                  alt={`ADAS project image ${num}`}
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
              A real-time safety system designed to enhance two-wheeler vehicle safety through intelligent collision 
              avoidance capabilities. Built on the NVIDIA Jetson Nano edge computing platform, this system performs 
              on-device object detection, distance estimation, and Time-To-Collision (TTC) calculations to provide 
              timely visual alerts to riders, preventing potential accidents.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              By deploying deep learning models directly on resource-constrained hardware, the system achieves 
              low-latency processing without cloud dependency, making it ideal for real-time automotive safety applications.
            </p>

            {/* Problem Statement */}
            <div className="mt-8 p-6 bg-black-200 border-l-4 border-purple rounded-r-xl">
              <h3 className="text-xl font-bold mb-3 text-purple">Problem Statement</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Two-wheelers face significantly higher accident rates compared to four-wheeled vehicles due to reduced 
                visibility, lack of protective structure, and minimal safety systems. Traditional ADAS features are 
                predominantly designed for cars, leaving motorcycles and scooters vulnerable. There is a critical need 
                for affordable, real-time collision avoidance systems specifically tailored for two-wheelers that can 
                operate reliably on compact, power-efficient hardware.
              </p>
            </div>
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
              <h3 className="text-2xl font-bold mb-4">Hardware Specifications</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>NVIDIA Jetson Nano:</strong> 4GB RAM, 128 CUDA cores, quad-core ARM A57 @ 1.43 GHz</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Storage:</strong> 64GB microSD card for OS and model storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Front Camera:</strong> Logitech USB, 720p @ 30fps, 720mm focal length, f/1.8</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Rear Camera:</strong> Logitech USB, 720p @ 30fps, 720mm focal length, f/1.8</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Communication:</strong> UART for ESP32, XMC1400, IMX8 integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Power:</strong> 5V/4A supply with active thermal management</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-black-100 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Software Stack</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>JetPack SDK:</strong> CUDA, cuDNN, TensorRT for GPU acceleration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Python 3:</strong> Primary language for inference pipeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>YOLO:</strong> Custom-trained object detection for vehicles/pedestrians</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>OpenCV:</strong> Image preprocessing, distance estimation, visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>TensorRT:</strong> Inference optimizer with FP16/INT8 quantization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>LabelImg:</strong> Dataset annotation for bounding boxes</span>
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
              <h3 className="text-lg font-bold mb-2 text-white">🎯 Model Training Pipeline</h3>
              <p className="text-gray-400 text-sm">
                Captured diverse two-wheeler riding scenarios (highways, urban streets, traffic junctions) in MP4 format. 
                Converted videos to image frames using custom Python scripts. Annotated objects using LabelImg to generate 
                bounding box datasets. Trained YOLO model on high-performance GPU workstation, tuning hyperparameters for 
                optimal detection accuracy based on mAP metrics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">⚡ Edge Deployment Optimization</h3>
              <p className="text-gray-400 text-sm">
                Converted trained PyTorch models to TensorRT format with FP16/INT8 quantization, reducing precision 
                while maintaining accuracy. Applied layer fusion combining sequential operations to reduce memory transfers. 
                Expanded Jetson Nano memory with swap files to accommodate larger models. Achieved 720p processing at 
                15-30 FPS by balancing detection accuracy with computational efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">📏 Distance & TTC Computation</h3>
              <p className="text-gray-400 text-sm mb-2">
                The system calculates object distance using the pinhole camera model:
              </p>
              <div className="bg-black-100 p-3 rounded-lg font-mono text-sm text-purple mb-2">
                Distance = (Known Object Height × Focal Length) / Pixel Height
              </div>
              <p className="text-gray-400 text-sm">
                TTC is computed by tracking distance changes across consecutive frames to derive relative velocity, 
                applying physics-based formulas: TTC = (-V + √(V² + 2aX)) / a, where X is distance, V is relative 
                velocity, and a is relative acceleration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">🔗 Multi-Sensor Fusion Architecture</h3>
              <p className="text-gray-400 text-sm">
                The system architecture supports integration with IMX8 processors for high-level decision making, 
                XMC1400 microcontrollers for actuator control, ESP32 for wireless connectivity, and radar sensors 
                for precise velocity measurements. All modules communicate via UART serial protocol, enabling 
                modular architecture and fault tolerance.
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
                challenge: "Computational Resource Constraints",
                solution: "Deployed lightweight YOLO variants (YOLOv5n/YOLOv8n), optimized with TensorRT FP16 quantization, processed 720p instead of 1080p, and expanded memory with swap files"
              },
              {
                challenge: "Real-Time Performance Requirements",
                solution: "Utilized NVIDIA Jetson Inference SDK with TensorRT optimization, achieving <100ms inference times. Optimized Python code with NumPy vectorization and minimized CPU-GPU data transfers"
              },
              {
                challenge: "Accurate Distance Estimation",
                solution: "Trained on common vehicle dimensions with camera focal length calibration. Used bounding box stability filtering to reduce estimation jitter"
              },
              {
                challenge: "Power and Thermal Management",
                solution: "Implemented duty-cycle processing (analyzing every Nth frame) when load is high, designed thermal solutions with active cooling for sustained operation"
              },
              {
                challenge: "Environmental Variability",
                solution: "Selected cameras with wide aperture (f/1.8) for low-light sensitivity. Augmented training data with diverse lighting scenarios (night, rain, direct sunlight)"
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

      {/* Project Status */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Project Deliverables & Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { feature: "Object Detection (Sample Videos)", status: "✅ Completed" },
              { feature: "Distance Calculation", status: "✅ Completed" },
              { feature: "Dual Camera Integration (Front/Rear)", status: "✅ Completed" },
              { feature: "Real-Time Object Detection", status: "✅ Completed" },
              { feature: "UART Data Transfer & Alert System", status: "✅ Completed" },
              { feature: "Time-To-Collision (TTC) Estimation", status: "⏳ Pending" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center justify-between p-4 bg-black-200 border border-white/10 rounded-lg"
              >
                <span className="text-gray-300">{item.feature}</span>
                <span className={item.status.includes("✅") ? "text-green-400" : "text-yellow-400"}>{item.status}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Applications & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Two-Wheeler Safety", desc: "Reduces collision risk for motorcycles and scooters through proactive warnings" },
              { title: "Blind Spot Monitoring", desc: "Rear camera detects vehicles in blind spots during lane changes" },
              { title: "Forward Collision Warning", desc: "Alerts riders to sudden braking or obstacles ahead" },
              { title: "Pedestrian Detection", desc: "Identifies pedestrians at crosswalks and urban intersections" },
              { title: "Fleet Management", desc: "Commercial delivery and taxi services deploy for driver safety monitoring" },
              { title: "Edge AI Deployment", desc: "Demonstrates feasibility of real-time DL models on resource-constrained hardware" }
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
              "Advanced TTC Implementation: Complete pending module with multi-object tracking and trajectory prediction",
              "Traffic Sign Detection: Recognize speed limits, stop signs, and traffic signals",
              "Driver Drowsiness Detection: Monitor rider alertness using facial landmark detection",
              "Lane Departure Warning: Add lane detection algorithms to prevent unintentional drifting",
              "V2X Communication: Integrate vehicle-to-everything connectivity for cooperative collision avoidance",
              "Hardware Upgrade: Explore Jetson Orin Nano for 5-10× performance improvement"
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
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              This ADAS project successfully demonstrates the feasibility of deploying sophisticated deep learning 
              models on edge devices for real-time automotive safety applications. By optimizing YOLO object detection 
              for the resource-constrained Jetson Nano platform and implementing distance estimation with visual alert 
              systems, the project delivers a practical solution for enhancing two-wheeler safety. The modular architecture 
              supporting multi-sensor fusion positions the system as a foundation for comprehensive next-generation vehicle 
              safety systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in This Project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            This project showcases edge AI deployment, real-time computer vision, and automotive safety systems. 
            Feel free to reach out for technical discussions or collaboration opportunities.
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

export default ADASProject;
