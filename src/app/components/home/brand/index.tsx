"use client";
import Slider from "react-infinite-logo-slider";
import SingleBrand from "./SingleBrand";
import { useEffect, useState } from "react";

function Brand() {
  const brandList = [
    {
      image: "/images/logos/Android.png",
      title: "Android",
      darkImg: "/images/logos/Android.png",
    },
    {
      image: "/images/logos/IOS.png",
      title: "IOS",
      darkImg: "/images/logos/IOS.png",
    },
    {
      image: "/images/logos/Angular.png",
      title: "Angular",
      darkImg: "/images/logos/Angular.png",
    },
    {
      image: "/images/logos/ReactNative.png",
      title: "ReactNative",
      darkImg: "/images/logos/ReactNative.png",
    },
    {
      image: "/images/logos/Figma.png",
      title: "Figma",
      darkImg: "/images/logos/Figma.png",
    },
    {
      image: "/images/logos/Framer.png",
      title: "Framer",
      darkImg: "/images/logos/Framer.png",
    },
    {
      image: "/images/logos/Canva.png",
      title: "Canva",
      darkImg: "/images/logos/Canva.png",
    },
    {
      image: "/images/logos/GitHub.png",
      title: "GitHub",
      darkImg: "/images/logos/GitHub.png",
    },
    {
      image: "/images/logos/GitLab.png",
      title: "GitLab",
      darkImg: "/images/logos/GitLab.png",
    },
    {
      image: "/images/logos/Asana.png",
      title: "Asana",
      darkImg: "/images/logos/Asana.png",
    },
    {
      image: "/images/logos/ClickUp.png",
      title: "ClickUp",
      darkImg: "/images/logos/ClickUp.png",
    },
    {
      image: "/images/logos/Bitbucket.png",
      title: "Bitbucket",
      darkImg: "/images/logos/Bitbucket.png",
    },
    {
      image: "/images/logos/Auth0.png",
      title: "Auth0",
      darkImg: "/images/logos/Auth0.png",
    },
  ];

  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="gap-4">
            <div className="flex justify-center text-center py-4 relative">
              <p
                className="relative px-2 text-dark_black/60 dark:text-white/60
                    md:before:absolute md:before:right-[-150px] md:before:top-1/2 md:before:h-0.5 md:before:w-36 md:before:bg-linear-to-r md:before:from-gray-800 dark:md:before:from-gray-300 dark:md:before:opacity-100 md:before:opacity-10 md:before:to-transparent md:after:absolute md:after:left-[-150px] md:after:top-1/2 md:after:h-0.5 md:after:w-36 md:after:bg-linear-to-l md:after:from-gray-800 dark:md:after:from-gray-300 md:after:opacity-10 dark:md:after:opacity-100 md:after:to-transparent"
              >
                Name the tech — we’ll turn it into your next big win
              </p>
            </div>

            {brandList && brandList.length > 0 && (
              <div className="py-3 Xsm:py-7">
                <Slider duration={20} pauseOnHover={true} blurBorders={false}>
                  {brandList.map((items: any, index: number) => (
                    <SingleBrand key={index} brand={items} />
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;
