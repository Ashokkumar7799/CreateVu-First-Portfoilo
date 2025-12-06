"use client";

import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const FlowerDensityProject = () => {
  const techStack = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  ];


  const systemComponents = [
    {
      title: "Depth Estimation Module",
      description: "Depth-Anything-V2 generates monocular depth maps for intelligent background separation, isolating foreground flowers from distant foliage"
    },
    {
      title: "Detection & Segmentation",
      description: "Custom-trained YOLO model performs instance segmentation with precise polygon masks for individual flowers at pixel level"
    },
    {
      title: "Clustering Engine",
      description: "DBSCAN-based spatial clustering with geometric union operations groups flower detections into biologically meaningful clusters"
    },
    {
      title: "Density Analysis",
      description: "Multi-factor density calculation combining flower pixel coverage and edge pixel metrics with configurable weighting schemes"
    }
  ];

  const features = [
    {
      title: "Intelligent Background Removal",
      description: "Depth-based segmentation leveraging geometric cues to separate foreground flowers from complex backgrounds with 50th percentile threshold"
    },
    {
      title: "High-Density Flower Detection",
      description: "Segmentation + regression pipeline maintains accuracy with >100 flowers per image, handling extreme occlusions in full-bloom conditions"
    },
    {
      title: "Biologically Meaningful Clustering",
      description: "DBSCAN spatial clustering with adaptive epsilon tuning (0.15-0.30) mirrors natural branch structure with ~8 clusters per image"
    },
    {
      title: "Configurable Density Metrics",
      description: "Dual-factor calculation: (flower_weight × Flower%) + (edge_weight × Edge%) customizable for different crop morphologies"
    }
  ];

  const specifications = [
    { label: "YOLO Resolution", value: "640×640" },
    { label: "Confidence Threshold", value: "0.0001" },
    { label: "IOU Threshold", value: "0.45" },
    { label: "Cluster Target", value: "~8" },
    { label: "Max Cluster Area", value: "15-30%" },
    { label: "Density Accuracy", value: "90%+" },
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
              Agricultural AI: Flower Density Estimation
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Advanced Computer Vision for Precision Orchard Yield Prediction
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Duration:</span>
                <span className="ml-2 text-white font-semibold">Apr - Aug 2025</span>
              </div>
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Status:</span>
                <span className="ml-2 text-green-400 font-semibold">Active Development</span>
              </div>
              <div className="px-4 py-2 bg-purple/10 border border-purple/30 rounded-lg">
                <span className="text-sm text-gray-400">Category:</span>
                <span className="ml-2 text-white font-semibold">Precision Agriculture</span>
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
                className="relative bg-black-100 border border-white/10 rounded-xl overflow-hidden group aspect-[4/3]"
              >
                {/* Placeholder for images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple/20 to-blue-500/20">
                  <div className="text-center">
                    <div className="text-6xl mb-2">📷</div>
                    <p className="text-gray-400">Image Placeholder {num}</p>
                    <p className="text-sm text-gray-500 mt-2">Add your project image here</p>
                  </div>
                </div>

                <Image
                  src={`/projects/flower-density/image-${num}.jpg`}
                  alt={`Flower density project image ${num}`}
                  fill
                  className="object-contain"
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
              An advanced agricultural computer vision solution that quantifies flower density in tree fruit orchards 
              using deep learning and image analysis. This system combines depth-based background removal, YOLO 
              segmentation, intelligent clustering algorithms, and multi-factor density calculations to provide 
              accurate bloom density assessments critical for yield prediction, crop-load management, and thinning 
              decisions in commercial orchards.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The pipeline integrates Depth-Anything-V2 for monocular depth estimation, custom-trained YOLO models 
              for instance segmentation, DBSCAN spatial clustering for biologically meaningful grouping, and 
              sophisticated density metrics combining flower pixel coverage with edge detection analysis.
            </p>

            {/* Problem Statement */}
            <div className="mt-8 p-6 bg-black-200 border-l-4 border-purple rounded-r-xl">
              <h3 className="text-xl font-bold mb-3 text-purple">Problem Statement</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Accurate flower density estimation is essential for orchard management decisions including yield 
                forecasting, optimal thinning, and crop-load planning. Manual counting is labor-intensive and 
                impractical for commercial operations, while flowers present unique detection challenges due to dense 
                clustering, high occlusions, variable lighting, and similar appearance to background foliage. Traditional 
                object detection approaches struggle with densely packed flowers (&gt;100 per image), exhibiting error 
                rates five times higher than regression-based methods in high-density scenarios.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technical Architecture</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

          {/* Software Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-black-100 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Deep Learning & CV Stack</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>PyTorch:</strong> Core deep learning framework for model inference and tensor operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Ultralytics YOLO:</strong> Instance segmentation with polygon mask extraction at 640×640 resolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Depth-Anything-V2:</strong> Vision Transformer (ViT-Large 256 features) for monocular depth estimation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>OpenCV:</strong> Image preprocessing, Canny edge detection, color space conversions (RGB/HSV/LAB)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Scikit-learn (DBSCAN):</strong> Density-based spatial clustering with adaptive epsilon tuning</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-black-100 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Geometric & Data Processing</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Shapely:</strong> Computational geometry for polygon union, intersection, buffer operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>NumPy:</strong> Numerical computing for array operations, quantile calculations, vectorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Pandas:</strong> DataFrame operations for structured data management and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>OpenPyXL:</strong> Excel file generation for comprehensive per-cluster and per-image reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1">▸</span>
                  <span><strong>Matplotlib & PIL:</strong> Visualization and image loading/manipulation capabilities</span>
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

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gradient-to-br from-purple/10 to-blue-500/10 border border-purple/20 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-3 text-white">Robust Lighting Adaptation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dynamic brightness adjustment in HSV color space ensures consistent detection from harsh midday sun 
                to overcast skies and shadowed areas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gradient-to-br from-purple/10 to-blue-500/10 border border-purple/20 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-3 text-white">Comprehensive Reporting</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automated Excel generation with per-cluster analysis, image-level summaries, and dataset-wide 
                statistics with visual annotation overlays
              </p>
            </motion.div>
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

      {/* Key Algorithms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Key Algorithms & Techniques</h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">🔍 Monocular Depth Estimation (Depth-Anything-V2)</h3>
              <p className="text-gray-400 text-sm mb-3">
                Vision Transformer encoder generates relative depth maps from single RGB images. Background pixels 
                (higher depth values) are identified using quantile-based thresholding and removed:
              </p>
              <div className="bg-black-100 p-3 rounded-lg font-mono text-sm text-purple">
                threshold = quantile(depth_map, 0.5)<br />
                foreground_mask = depth_map &lt;= threshold
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">💡 Dynamic Brightness Adjustment</h3>
              <p className="text-gray-400 text-sm mb-3">
                Adaptive image enhancement compensates for variable lighting in HSV color space:
              </p>
              <div className="bg-black-100 p-3 rounded-lg font-mono text-sm text-purple">
                if avg_brightness &lt; min_threshold:<br />
                &nbsp;&nbsp;brightness_factor = max_factor<br />
                elif avg_brightness &lt; max_threshold:<br />
                &nbsp;&nbsp;brightness_factor = interpolate(avg_brightness)
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">🎯 YOLO Instance Segmentation</h3>
              <p className="text-gray-400 text-sm">
                Custom-trained YOLO model with pixel-level flower segmentation generating polygon masks. Optimized with 
                low confidence threshold (0.0001) to capture faint/partial flowers, IOU threshold (0.45) balancing 
                false positives vs. negatives, and 640×640 input resolution for detail and efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">📊 Spatial Clustering (DBSCAN)</h3>
              <p className="text-gray-400 text-sm mb-3">
                Detected flowers grouped into biologically meaningful clusters with dynamically calculated epsilon:
              </p>
              <div className="bg-black-100 p-3 rounded-lg font-mono text-sm text-purple mb-3">
                epsilon = image_diagonal × factor<br />
                clustering = DBSCAN(eps=epsilon, min_samples=1)
              </div>
              <p className="text-gray-400 text-sm">
                Iterates through epsilon factors (0.15–0.30) to achieve target cluster counts (~8 per image) matching 
                typical branch structure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-black-200 border-l-4 border-purple rounded-r-xl"
            >
              <h3 className="text-lg font-bold mb-2 text-white">🔢 Multi-Factor Density Calculation</h3>
              <p className="text-gray-400 text-sm mb-3">
                Density percentage combines two independent metrics with configurable weights:
              </p>
              <ul className="space-y-2 text-gray-400 text-sm mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-purple">•</span>
                  <span><strong>Flower Pixel %:</strong> Ratio of flower tissue pixels (white/light colors, multi-color-space thresholds: RGB, HSV, LAB) within cluster boundary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple">•</span>
                  <span><strong>Edge Pixel %:</strong> Ratio of Canny edge pixels within flower pixels, indicating flower structure and density</span>
                </li>
              </ul>
              <div className="bg-black-100 p-3 rounded-lg font-mono text-sm text-purple">
                Density% = (flower_weight × Flower%) + (edge_weight × Edge%)
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Implementation Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Depth-Anything-V2 Integration",
                content: "Supports multiple ViT encoder sizes (Small/Base/Large/Giant). ViT-Large (256 features) default configuration. Pre-trained checkpoints with gradient-disabled evaluation mode for efficient inference."
              },
              {
                title: "YOLO Mask Polygon Extraction",
                content: "Direct access to mask.xy coordinates preserving precise boundary information. Coordinates scaled from 640×640 inference to original image dimensions maintaining geometric accuracy."
              },
              {
                title: "Robust Polygon Geometry Handling",
                content: "Comprehensive error handling for invalid geometries using Shapely's buffer(0) operation. Try-except blocks prevent pipeline failures from self-intersections and edge cases."
              },
              {
                title: "Multi-Color Space Flower Detection",
                content: "Fuses RGB, HSV, LAB, and grayscale representations. Masks combined via bitwise OR creating comprehensive flower pixel classifier robust to color variation."
              },
              {
                title: "Batch Processing Pipeline",
                content: "End-to-end orchestration: depth → brightness → YOLO → clustering → density. Generates individual and aggregated Excel reports with tqdm progress bars."
              },
              {
                title: "Visual Annotation System",
                content: "Green polygon boundaries for clusters, red overlay (30% transparency) for flower pixels, green overlay (20%) for edge pixels, numbered labels with density percentages."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-black-100 border border-white/10 rounded-xl"
              >
                <h3 className="text-lg font-bold mb-2 text-purple">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.content}</p>
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
                challenge: "Dense Flower Occlusions",
                solution: "Instance segmentation with polygon masks captures overlapping flowers. Clustering + union operations merge partially occluded flowers into coherent representations without individual delineation"
              },
              {
                challenge: "Invalid Polygon Geometries",
                solution: "Shapely's buffer(0) repair operation and try-except blocks gracefully handle self-intersections, zero-area slivers, and geometric edge cases"
              },
              {
                challenge: "Background Noise & False Positives",
                solution: "Depth-based foreground segmentation removes background elements using geometric priors. Quantile-based threshold adapts to each image's depth distribution"
              },
              {
                challenge: "Variable Lighting Conditions",
                solution: "Dynamic brightness adjustment in HSV color space with multi-color-space flower detection (RGB/HSV/LAB/grayscale) ensures illumination robustness"
              },
              {
                challenge: "Computational Efficiency",
                solution: "CUDA GPU acceleration with CPU fallback, 640×640 YOLO inference resolution, NumPy vectorization, and batch processing amortizing model loading overhead"
              },
              {
                challenge: "Cluster Size Variability",
                solution: "Maximum area constraints (15-30% of image) prevent oversized clusters. Adaptive DBSCAN epsilon tuning with ~8 cluster target ensures biologically meaningful groupings"
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
          <h2 className="text-3xl font-bold mb-8">Applications & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Yield Prediction", desc: "Early-season flower density estimates predict harvest volume, enabling better market planning and resource allocation" },
              { title: "Crop-Load Management", desc: "Quantitative bloom density data informs thinning decisions (chemical/mechanical) to optimize fruit size and quality" },
              { title: "Orchard Monitoring", desc: "Temporal density tracking across seasons identifies high/low-performing tree sections for targeted interventions" },
              { title: "Research & Breeding", desc: "Automated phenotyping accelerates breeding programs by efficiently quantifying flowering traits across cultivars" },
              { title: "Autonomous Systems", desc: "Pipeline integrates with UAVs, ground robots, or autonomous tractors for large-scale automated orchard assessment" },
              { title: "Decision Support", desc: "Data-driven insights empower orchard managers with precision agriculture tools for sustainable production" }
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

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Results & Validation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Annotated visualizations with color-coded overlays delineating flower clusters with density labels",
              "Detailed Excel reports: per-cluster metrics (ID, flower %, edge %, density %, pixels)",
              "Image-level summaries: total clusters, overall density, aggregate statistics",
              "Dataset-wide reports: multi-image averages, distribution statistics, comparative analysis",
              "Configurable density metrics with adjustable weighting (flower_weight, edge_weight) for crop calibration",
              "Robust error handling preventing pipeline failures from edge cases (invalid geometries, missing detections)"
            ].map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-3 p-4 bg-black-200 border border-white/10 rounded-lg"
              >
                <span className="text-green-400 text-xl mt-1">✓</span>
                <span className="text-gray-300">{result}</span>
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
              "Temporal Tracking: Multi-image sequence analysis for bloom progression and fruit set over time",
              "3D Reconstruction: Stereo vision or structure-from-motion for volumetric density estimation",
              "Multi-Species Support: Train models for cherry, peach, citrus, and other tree fruit flowers",
              "Real-Time Processing: TensorRT/ONNX optimization for edge deployment on agricultural robots and UAVs",
              "Fruit Density Estimation: Extend pipeline to post-bloom fruit counting and sizing for in-season forecasting",
              "Cloud Platform: Web-based interface for farm-scale deployment with mobile app integration",
              "Regression-Based Counting: Integrate density map regression models for direct flower counting without explicit detection"
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
              This Automated Flower Density Estimation System demonstrates the power of integrating modern computer 
              vision techniques—monocular depth estimation, YOLO instance segmentation, spatial clustering, and 
              multi-factor analysis—to solve complex agricultural challenges. By providing accurate, automated bloom 
              density quantification, the system empowers orchard managers with data-driven insights for yield prediction, 
              crop-load management, and precision thinning practices. The modular, configurable pipeline architecture 
              ensures adaptability across diverse fruit crops and deployment scenarios, positioning it as a valuable 
              tool for advancing precision agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in This Project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            This project showcases advanced agricultural computer vision, deep learning deployment, and production-grade 
            system development. Feel free to reach out for technical discussions or collaboration opportunities.
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

export default FlowerDensityProject;
