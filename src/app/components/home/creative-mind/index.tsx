// "use client";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import SingleCreativeMind from "./SingleCreativeMind";

// function CreativeMind() {
//   const ref = useRef(null);
//   const inView = useInView(ref);
//   // Static 4-step development process
//   const steps = [
//     {
//       title: "Discover",
//       desc: "Understand goals, users, and constraints to define the right problem.",
//       icon: "/images/home/creative/creative_img_1.png",
//     },
//     {
//       title: "Design",
//       desc: "Create delightful UX and pixel-perfect UI prototypes for validation.",
//       icon: "/images/home/creative/creative_img_2.png",
//     },
//     {
//       title: "Develop",
//       desc: "Build fast, maintainable, and testable products with modern tech.",
//       icon: "/images/home/creative/creative_img_3.png",
//     },
//     {
//       title: "Deploy",
//       desc: "Launch, monitor, and iterate — ensuring measurable outcomes.",
//       icon: "/images/home/creative/creative_img_4.png",
//     },
//   ];

//   const bottomAnimation = (index: any) => ({
//     initial: { y: "5%", opacity: 0 },
//     animate: inView ? { y: 0, opacity: 1 } : { y: "10%", opacity: 0 },
//     transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
//   });
//   return (
//     <section id="team">
//       <div ref={ref} className="2xl:py-20 py-11">
//         <div className="container">
//           <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
//             <div className="max-w-32 text-center">
//               <motion.div {...bottomAnimation(-1)}>
//                 <h2>
//                   Meet the creative minds behind{" "}
//                   <span className="instrument-font italic font-normal dark:text-white/70">
//                     our success
//                   </span>
//                 </h2>
//               </motion.div>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
//               {steps.map((step, index) => (
//                 <motion.div {...bottomAnimation(index)} key={index}>
//                   <div className="p-6 rounded-lg border border-dark_black/5 dark:border-white/5 h-full flex flex-col items-start gap-4">
//                     <div className="w-12 h-12 flex items-center justify-center bg-linear-to-r rounded-md">
//                       <img
//                         src={step.icon}
//                         alt={step.title}
//                         className="w-8 h-8 object-contain"
//                       />
//                     </div>
//                     <h3 className="text-lg font-semibold">{step.title}</h3>
//                     <p className="text-sm text-dark_black/60 dark:text-white/60">
//                       {step.desc}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CreativeMind;

"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function CreativeMind() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const steps = [
    {
      title: "Discover",
      desc: "We start by deeply understanding your brand, users, and challenges — setting a strong strategic foundation.",
      icon: "/images/home/creative/creative_img_1.png",
    },
    {
      title: "Design",
      desc: "We translate insights into visual concepts, crafting experiences that are both intuitive and timeless.",
      icon: "/images/home/creative/creative_img_2.png",
    },
    {
      title: "Develop",
      desc: "We bring designs to life with precision — building scalable, high-performing digital products.",
      icon: "/images/home/creative/creative_img_3.png",
    },
    {
      title: "Deploy",
      desc: "We launch, measure, and refine — ensuring lasting impact and exceptional performance.",
      icon: "/images/home/creative/creative_img_4.png",
    },
  ];

  const bottomAnimation = (index: number) => ({
    initial: { y: 20, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.5, delay: index * 0.15 },
  });

  return (
    <section
      id="process"
      ref={ref}
      className="py-20 bg-white dark:bg-neutral-950"
    >
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            {...bottomAnimation(-1)}
            className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white"
          >
            Our Process
          </motion.h2>
          <motion.p
            {...bottomAnimation(-1)}
            className="mt-3 text-neutral-600 dark:text-neutral-400 text-base leading-relaxed"
          >
            A clear, collaborative framework designed to move from insight to
            impact — beautifully.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div {...bottomAnimation(index)} key={index}>
              <div className="group relative flex flex-col items-start h-full border-t border-neutral-200 dark:border-neutral-800 pt-6">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-24 h-10 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800 transition-colors">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white ">
                      Step : {index + 1}
                    </h3>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>

                {/* Subtle hover line */}
                <span className="absolute top-0 left-0 w-0 h-[1px] bg-neutral-900 dark:bg-white transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
