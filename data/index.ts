export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I bridge hardware intelligence with software innovation for autonomous systems",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Currently @ InsituMicron (DIC Research) | Chennai",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Embedded Systems | Robotics | AI/CV",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Robotics & AI expert passionate about creating intelligent autonomous systems",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on Digital Image Correlation (DIC) Research",
    description: "Advanced Strain Measurement & Deformation Analysis",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to collaborate on your next embedded systems or robotics project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Autonomous Navigation and Scanning System Using ESP32-CAM and ROS for 2D/3D Simulation",
    des: "",
    img: "/project111.jpg",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
    ],
    link: "/projects/autonomous-navigation",
    timeline: "May - Nov 2023",
    company: "Autonomous Robotics",
    companyIcon: "/project111.jpg",
    points: [
      "Autonomous navigation with obstacle detection using ultrasonic/infrared sensors",
      "Real-time video capture via ESP32-CAM",
      "2D mapping & 3D modeling using computer vision and ROS",
      "Path planning & sensor data fusion for accurate environment reconstruction"
    ]
  },
  {
    id: 2,
    title: "Moving Robot Arm Controlled by Hand Gestures",
    des: "",
    img: "/project2.png",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    ],
    link: "/projects/gesture-robot-arm",
    timeline: "Nov 2023 - Apr 2024",
    company: "Human-Robot Interaction",
    companyIcon: "/project2.png",
    points: [
      "Real-time hand gesture recognition using OpenCV and computer vision",
      "Wireless Bluetooth communication for seamless Arduino control",
      "Enhanced human-computer interaction for intuitive robotics control",
      "Integrated servo motor control with gesture-based commands"
    ]
  },
  {
    id: 3,
    title: "Autonomous Quadruped with Robotic Arm",
    des: "",
    img: "/quadruped_robot.jpeg",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    ],
    link: "/projects/quadruped-robot",
    timeline: "Jun - Dec 2024",
    company: "Agricultural Robotics",
    companyIcon: "/quadruped_robot.jpeg",
    points: [
      "Computer vision-guided autonomous navigation with terrain-adaptive locomotion algorithms",
      "4-DOF robotic arm control with inverse kinematics for precision positioning",
      "ESP32-CAM integration for real-time weed detection and mechanical intervention",
      "Reduced manual labor by 70% with autonomous agricultural operations"
    ]
  },
  {
    id: 4,
    title: "Advanced Driver Assistance System (ADAS)",
    des: "",
    img: "/ADAS.webp",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    ],
    link: "/projects/adas-system",
    timeline: "Dec 2024 - Mar 2025",
    company: "Real-time Safety System",
    companyIcon: "/ADAS.webp",
    points: [
      "Custom YOLO deployment on Jetson Nano with optimized inference for edge computing",
      "Time-To-Collision (TTC) algorithms with distance estimation and visual alerts",
      "Real-time 720p processing with multi-sensor data fusion",
      "Sub-3 second inference achieving production-level performance"
    ]
  },
  {
    id: 5,
    title: "Agricultural AI: Apple Flowers Density Calculation",
    des: "",
    img: "/project5.png",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
    ],
    link: "/projects/flower-density",
    timeline: "Apr - Aug 2025",
    company: "Precision Agriculture System",
    companyIcon: "/project5.png",
    points: [
      "24+ feature extraction pipeline: HSV color analysis, texture features, spatial distribution",
      "Grid-based density mapping (50x50 pixel) with percentile-based classification",
      "Individual flower cluster tracking with comprehensive Excel reporting",
      "Automated yield prediction with 90%+ accuracy for orchard management"
    ]
  },
  {
    id: 6,
    title: "Advanced Material Quantity Estimation System",
    des: "",
    img: "/project6.jpg",
    iconLists: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
    ],
    link: "https://binsight.constructphi.com/",
    timeline: "Aug 2025 - Present",
    company: "Enterprise AI Solution",
    companyIcon: "/project6.jpg",
    points: [
      "Custom 6-channel neural network (RGB + depth) with EfficientNet-B2 backbone and scalar fusion",
      "Sub-5% prediction error with <3s inference for construction material quantification",
      "Temporal consistency engine reducing prediction variance by 15-20%",
      "Production Flask API with audit trails and enterprise error handling"
    ]
  },
];

export const testimonials = [
  {
    quote:
      "Ashok's expertise in computer vision and embedded systems is exceptional. His work on the ADAS project demonstrated remarkable technical depth and problem-solving skills. He consistently delivered high-quality results and showed great passion for robotics and AI innovation.",
    name: "Dr. Rajesh Kumar",
    title: "Research Director at AgriTech",
    img: "/boy1.jpeg",
  },
  {
    quote:
      "Working with Ashok at Pixel Expert was a fantastic experience. His ability to implement complex YOLO models on Jetson Nano and achieve real-time performance was impressive. He has a unique talent for bridging hardware constraints with software optimization.",
    name: "Priya Sharma",
    title: "Senior Engineer at Construction Tech",
    img: "/girl1.jpeg",
  },
  {
    quote:
      "Ashok's quadruped robot with precision weed removal capabilities was a game-changer for agricultural automation. His integration of ROS, computer vision, and mechanical design shows a holistic understanding of robotics systems.",
    name: "Dr. T. Ravi, M.E., Ph.D.",
    title: "Head of Department ECE, Sathyabama University",
    img: "/RAVI.jpeg",
  },
  {
    quote:
      "The material quantity estimation system Ashok developed exceeded our expectations. His attention to detail in training the model and achieving 90%+ accuracy in real-world conditions demonstrates his commitment to excellence in AI engineering.",
    name: "Vikram Reddy",
    title: "Construction Tech Lead",
    img: "/boy3.jpeg",
  },
  {
    quote:
      "Ashok's agricultural AI project for apple flower density calculation showcased his innovative approach to solving real-world problems. His understanding of both computer vision algorithms and practical deployment challenges is truly remarkable.  ",
    name: "Meera Patel",
    title: "AgriTech Innovation Manager",
    img: "/girl2.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    nameImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: 2,
    name: "TensorFlow",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    nameImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    id: 3,
    name: "PyTorch",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    nameImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    id: 4,
    name: "OpenCV",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    nameImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  {
    id: 5,
    name: "Docker",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    nameImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Research Engineer @ InsituMicron",
    desc: "Contributing to cutting-edge Digital Image Correlation (DIC) research, developing advanced strain measurement and deformation analysis systems using computer vision.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Project Engineer Intern @ Pixel Expert",
    desc: "Developed Computer Vision and AI solutions, built autonomous robotics systems with YOLO on Jetson Nano achieving sub-3 second inference.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Autonomous Robotics Development",
    desc: "Designed quadruped robot with 4-DOF robotic arm for precision agricultural weed removal, reducing manual labor by 70%.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Imagathon Winner",
    desc: "Secured 2nd place in Imagathon competition, demonstrating excellence in computer vision and innovative AI-powered problem-solving.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Ashokkumar7799",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/ashok_1_1_/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/pilli-ashok-kumar-65b941251/",
  },
];
