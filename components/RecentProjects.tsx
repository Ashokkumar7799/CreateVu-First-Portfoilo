"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { projects } from "@/data";
import StarField from "./ui/StarField";

import "react-vertical-timeline-component/style.min.css";

const ProjectCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <VerticalTimelineElement
      // CRITICAL FIX: Forces element to be visible, bypassing broken scroll detection in Next.js
      visible={true}
      className="vertical-timeline-element--work"
      date={item.timeline}
      contentStyle={{
        background: "rgba(16, 16, 40, 0.9)",
        color: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
        border: "1px solid rgba(99, 102, 241, 0.2)",
        padding: "1.5rem",
        cursor: "pointer",
      }}
      onTimelineElementClick={() => {
        if (item.link) window.location.href = item.link;
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(16, 16, 40, 0.9)",
      }}
      iconStyle={{
        background: "#6366f1",
        // SCALED DOWN: 1/2 size overrides
        width: "32px",
        height: "32px",
        marginLeft: "-16px", // Must be negative half of width to center on line
        
        // Scaled border to 3px so the icon inside isn't crushed
        border: "3px solid #ffffff", 
        
        // KEEPING EXACT GLOW from your prompt
        boxShadow:
          "0 0 0 10px rgba(99, 102, 241, 0.3), 0 0 30px 10px rgba(99, 102, 241, 0.8), 0 0 60px 20px rgba(99, 102, 241, 0.6)",
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <motion.div
          className="flex justify-center items-center w-full h-full overflow-hidden rounded-full relative"
          // KEEPING EXACT ANIMATION from your prompt
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px rgba(99, 102, 241, 0.6)",
              "0 0 40px rgba(255, 255, 255, 0.8)",
              "0 0 20px rgba(99, 102, 241, 0.6)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Pulsing background layer */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(99, 102, 241, 0.4) 30%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Company Logo */}
          <img
            src={item.companyIcon}
            alt={item.company}
            className="w-[70%] h-[70%] object-contain rounded-full relative z-10"
          />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        {/* Project Image */}
        <div className="relative w-full h-[140px] sm:h-[180px] mb-3 sm:mb-4 rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full"
            style={{ backgroundColor: "#13162D" }}
          >
            <img
              src="/bg.png"
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>
          <img
            src={item.img}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: item.id === 4 ? "center center" : "center",
            }}
          />
        </div>

        {/* Project Title */}
        <h3 className="text-white text-[16px] sm:text-[20px] font-bold mb-1 sm:mb-2">{item.title}</h3>

        <p
          className="text-[#BEC1DD] text-[11px] sm:text-[13px] font-semibold mb-2 sm:mb-3"
          style={{ margin: 0 }}
        >
          {item.company}
        </p>

        {/* Project Description */}
        <p className="text-[#BEC1DD] text-[12px] sm:text-[14px] leading-relaxed mb-3 sm:mb-4">
          {item.des}
        </p>

        {/* Technical Points */}
        <ul className="mt-3 sm:mt-4 list-disc ml-4 sm:ml-5 space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
          {item.points.map((point: string, i: number) => (
            <li
              key={`project-point-${i}`}
              className="text-white-100 text-[11px] sm:text-[13px] pl-1 tracking-wider leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>

        {/* Technology Stack */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {item.iconLists.map((icon: string, idx: number) => (
              <div
                key={idx}
                className="border border-white/[.2] rounded-full bg-black w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center hover:scale-110 transition-transform"
              >
                <img
                  src={icon}
                  alt={`tech-${idx}`}
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                />
              </div>
            ))}
          </div>

          <a 
            href={item.link} 
            className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group mt-2 sm:mt-0"
            {...(item.link.startsWith('http') && { 
              target: '_blank', 
              rel: 'noopener noreferrer' 
            })}
          >
            <p className="text-purple text-xs sm:text-sm font-semibold whitespace-nowrap">
              {item.link.startsWith('http') ? 'View Site' : 'View Details'}
            </p>
            <FaLocationArrow
              className="text-purple group-hover:translate-x-1 transition-transform"
              size={12}
            />
          </a>
        </div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const RecentProjects = () => {
  return (
    <section className="relative w-full py-20" id="projects">
      <StarField />

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1.25 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="text-sm text-center text-blue-100 uppercase tracking-widest mb-2">
          What I have done so far
        </p>
        <h1 className="heading">
          🔬 Impact-Driven <span className="text-purple">AI Projects</span>
        </h1>
      </motion.div>

      <div className="mt-20">
        <VerticalTimeline>
          {[...projects].reverse().map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default RecentProjects;
