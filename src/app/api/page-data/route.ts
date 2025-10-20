import { NextResponse } from "next/server";
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from "@/app/types/menu";

const avatarList: avatar[] = [
  {
    image: "/images/home/avatar_1.jpg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/home/avatar_2.jpg",
    title: "Olivia Miller",
  },
  {
    image: "/images/home/avatar_3.jpg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/home/avatar_4.jpg",
    title: "Isabella Clark",
  },
];

const brandList: brand[] = [
  {
    image: "/images/home/brand/brand-icon-1.svg",
    darkImg: "/images/home/brand/brand-darkicon-1.svg",
    title: "Adobe",
  },
  {
    image: "/images/home/brand/brand-icon-2.svg",
    darkImg: "/images/home/brand/brand-darkicon-2.svg",
    title: "Figma",
  },
  {
    image: "/images/home/brand/brand-icon-3.svg",
    darkImg: "/images/home/brand/brand-darkicon-3.svg",
    title: "Shopify",
  },
  {
    image: "/images/home/brand/brand-icon-4.svg",
    darkImg: "/images/home/brand/brand-darkicon-4.svg",
    title: "Dribble",
  },
  {
    image: "/images/home/brand/brand-icon-5.svg",
    darkImg: "/images/home/brand/brand-darkicon-5.svg",
    title: "Webflow",
  },
];

const innovationList: innovation[] = [
  {
    image: "/images/home/innovation/brand.svg",
    title: "Brand\nStrategy",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    image: "/images/home/innovation/digitalmarketing.svg",
    title: "Digital\nMarketing",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    image: "/images/home/innovation/uiux.svg",
    title: "UI/UX\nDesign",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
  {
    image: "/images/home/innovation/analitics.svg",
    title: "Application &\nDevelopment",
    bg_color: "bg-green/20",
    txt_color: "text-green",
  },
  {
    image: "/images/home/innovation/webdevp.svg",
    title: "Web\nDevelopment",
    bg_color: "bg-pink/20",
    txt_color: "text-pink",
  },
];

const onlinePresenceList: onlinePresence[] = [
  {
    image: "/images/home/onlinePresence/online_img_1.jpg",
    title: "GyanVistara",
    tag: ["UX Research", "Interface Design"],
    link: "https://www.gyanvistara.ai/",
  },
  {
    image: "/images/home/onlinePresence/online_img_2.jpg",
    title: "Academy",
    tag: ["Product Design", "Interaction Design"],
    link: "https://www.wrappixel.com/",
  },
  {
    image: "/images/home/onlinePresence/online_img_3.jpg",
    title: "Maasai Maara",
    tag: ["Brand identity design", "UX Research"],
    link: "https://themaasaimara.in/water-park/",
  },
  {
    image: "/images/home/onlinePresence/online_img_4.jpg",
    title: "Drizzling Land",
    tag: ["Visual Storytelling", "Web & Mobile Design"],
    link: "https://drizzlingland.com/water-park/",
  },
];

const creativeMindList: creativeMind[] = [
  {
    image: "/images/home/creative/creative_img_1.png",
    name: "Logan Dang",
    position: "WordPress Developer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_2.png",
    name: "Ana Belić",
    position: "Social Media Specialist",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_3.png",
    name: "Brian Hanley",
    position: "Product Designer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_4.png",
    name: "Darko Stanković",
    position: "UI Designer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
];

const WebResultTagList: WebResultTag[] = [
  {
    image: "/images/home/result/creativity.svg",
    name: "Creativity",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    image: "/images/home/result/innovation.svg",
    name: "Innovation",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    image: "/images/home/result/strategy.svg",
    name: "Strategy",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
];

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: "bg-pale-yellow",
    text_color: "text-dark_black",
    descp_color: "dark_black/60",
    border_color: "border-dark_black/10",
    plan_name: "Starter",
    plan_descp: "For companies who need design support. One request at a time",
    plan_price: "$2500",
    icon_img: "/images/home/startupPlan/white_tick.svg",
    plan_feature: [
      "Design Updates Every 2 Days",
      "Mid-level Designer",
      "SEO optimization",
      "Monthly analytics",
      "2x Calls Per Month",
      "License free assets",
    ],
  },
  {
    plan_bg_color: "bg-purple_blue",
    text_color: "text-white",
    descp_color: "white/60",
    border_color: "border-white/10",
    plan_name: "Pro",
    plan_descp: "2x the speed. Great for an MVP, Web App or complex problem",
    plan_price: "$3800",
    icon_img: "/images/home/startupPlan/black_tick.svg",
    plan_feature: [
      "Design Updates Daily",
      "Senior-level Designer",
      "AI Advisory Framework",
      "Full-service Creative Team",
      "4x Calls Per Month",
      "License free assets",
    ],
  },
];

const faqList: faq[] = [
  {
    faq_que: "What services does CodexOne offer?",
    faq_ans:
      "We specialize in end-to-end digital solutions — including brand strategy, UI/UX design, website and web app development, mobile app design, and ongoing product support.",
  },
  {
    faq_que: "How long does a typical project take?",
    faq_ans:
      "Timelines vary depending on project scope and complexity. A standard website project usually takes 6–10 weeks from discovery to launch, while larger digital products may take 3–6 months with multiple milestones.",
  },
  {
    faq_que: "How is pricing structured at CodexOne?",
    faq_ans:
      "We offer flexible pricing models based on your needs — fixed-cost projects for clearly defined scopes, and retainer-based or hourly engagements for ongoing work. All estimates are transparent and shared before we begin.",
  },
  {
    faq_que: "Do you provide ongoing support after project completion?",
    faq_ans:
      "Absolutely. We offer post-launch support and maintenance plans that include performance monitoring, regular updates, and feature enhancements to keep your product running smoothly.",
  },
  {
    faq_que: "What does your development process look like?",
    faq_ans:
      "Our 4-phase process — Discover, Design, Develop, Deploy — ensures clarity, creativity, and quality. Each phase includes collaboration, feedback loops, and milestone approvals to keep everything aligned.",
  },
  {
    faq_que: "Can you work with our existing design or development team?",
    faq_ans:
      "Yes. We frequently collaborate with in-house teams, providing design system support, code integration, or technical consulting to extend your existing capabilities.",
  },
  {
    faq_que: "Who owns the final design and code?",
    faq_ans:
      "Once the final payment is completed, all project assets — including design files, source code, and documentation — are transferred to you. You own everything we create for your project.",
  },
  {
    faq_que: "Do you handle content creation or only design and development?",
    faq_ans:
      "We can assist with copywriting, photography, and basic content strategy if required. For full-scale content production, we work closely with trusted partners to align messaging with your brand.",
  },
  {
    faq_que: "What tools and technologies do you use?",
    faq_ans:
      "Our stack includes modern technologies such as React, Next.js, Node.js, and Tailwind CSS for development, and Figma, Webflow, and Adobe tools for design. We tailor our tech stack based on each project’s requirements.",
  },
  {
    faq_que: "How do you ensure quality and performance?",
    faq_ans:
      "Every project goes through multiple review stages, code audits, and device testing. We optimize for accessibility, speed, and SEO to ensure your product performs at an industry-leading level.",
  },
];

const achievementsList: achievements[] = [
  {
    icon: "/images/home/achievement/framer_award.svg", // Placeholder, consider new icon
    dark_icon: "/images/home/achievement/dark_framer_award.svg", // Placeholder, consider new icon
    sub_title: "Human-Centricity",
    title:
      "We design with deep empathy, prioritizing intuitive interaction and crafting seamless digital experiences that elevate and simplify the user's life.",
    year: "Empathy in Action", // Used for the year/anchor text
    url: "#", // Changed to a placeholder link
  },
  {
    icon: "/images/home/achievement/dribble_award.svg", // Placeholder, consider new icon
    dark_icon: "/images/home/achievement/dribble_award.svg", // Placeholder, consider new icon
    sub_title: "Relentless Innovation",
    title:
      "A commitment to pushing the boundaries of technology and aesthetics, exploring new forms to deliver creative excellence and truly unique, future-proof solutions.",
    year: "Future-Proof Craft", // Used for the year/anchor text
    url: "#", // Changed to a placeholder link
  },
  {
    icon: "/images/home/achievement/awward_award.svg", // Placeholder, consider new icon
    dark_icon: "/images/home/achievement/dark_awward_award.svg", // Placeholder, consider new icon
    sub_title: "Value-Driven Impact",
    title:
      "We view every project as a strategic partnership, ensuring our design work is aligned with your business goals to deliver measurable growth and lasting transformation.",
    year: "Growth & Collaboration", // Used for the year/anchor text
    url: "#", // Changed to a placeholder link
  },
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
