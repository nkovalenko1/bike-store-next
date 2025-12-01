"use client";

import Image from "next/image";
import type { CategoryFeatureSection } from "@/types/product";

interface ProductFeaturesProps {
  features: CategoryFeatureSection[] | null;
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <>
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        const isLast = index === features.length - 1;

        return (
          <div
            key={index}
            className={`mx-auto mt-14 grid max-w-[768px] items-start gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-10 ${
              !isLast ? "xl:items-center" : ""
            }`}
          >
            <div
              className={`px-4 lg:max-w-[716px] xl:py-10 ${
                isEven ? "lg:ml-auto" : "lg:order-2"
              } ${isLast ? "xl:py-24" : ""}`}
            >
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl/tight xl:text-[50px]/[60px]">
                {feature.title.split(" ").map((word, i, arr) => {
                  // Check if this word should be italicized (last word of title)
                  const isLastWord = i === arr.length - 1;
                  const shouldItalicize =
                    isLastWord &&
                    (word.toLowerCase().includes("roadster") ||
                      word.toLowerCase().includes("control") ||
                      word.toLowerCase().includes("tyres") ||
                      word.toLowerCase().includes("tyres") ||
                      word.toLowerCase().includes("adventure") ||
                      word.toLowerCase().includes("performance") ||
                      word.toLowerCase().includes("capability") ||
                      word.toLowerCase().includes("navigation") ||
                      word.toLowerCase().includes("reliability") ||
                      word.toLowerCase().includes("ready") ||
                      word.toLowerCase().includes("easy") ||
                      word.toLowerCase().includes("style"));

                  if (shouldItalicize) {
                    return (
                      <span key={i} className="font-roboto font-medium italic">
                        {word}
                      </span>
                    );
                  }

                  return (
                    <span key={i}>
                      {word}
                      {i < arr.length - 1 ? " " : ""}
                    </span>
                  );
                })}
              </h2>
              <p className="mt-3 text-base text-gray md:text-lg">
                {feature.description}
              </p>
              {feature.items && feature.items.length > 0 && (
                <div className="mt-8 grid gap-x-4 gap-y-7 sm:grid-cols-2 md:gap-y-10 2xl:mt-14 2xl:gap-y-14">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-2">
                      <div className="text-sm font-medium uppercase text-gray">
                        {item.label}
                      </div>
                      <div>{item.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className={`max-h-[700px] overflow-hidden ${
                isEven ? "lg:rounded-l-xl" : "lg:order-1 lg:rounded-r-xl"
              }`}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                className="h-full w-full object-cover"
                width={940}
                height={700}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

