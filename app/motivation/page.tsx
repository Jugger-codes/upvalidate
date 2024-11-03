"use client";
import Motivation from "./../../assets/Motivational_Quote.png";
import Image from "next/image";
import React from "react";

function Page() {
  const [state, setState] = React.useState<number>(0);

  return (
    <div className="xl:screen w-screen">
      <div className="grid lg:grid-cols-[minmax(300px,_400px)_1fr] xl:grid-cols-[minmax(300px,_600px)_1fr] gap-10 lg:py-40 min-h-[95vh] items-center">
        <div className="lg:pl-16 xl:pl-20 space-y-3 px-12 pt-40 lg:pt-0">
          {MotivationQuotes.map((items, index) => (
            <h3
              key={index}
              className={`text-3xl md:text-5xl xl:text-7xl cursor-pointer ${
                state === index ? "opacity-100" : "opacity-30"
              } text-black font-medium`}
              onClick={() => setState(index)}
            >
              {items.label}
            </h3>
          ))}
        </div>
        <div className="flex items-center">
          <div className="max-h-[600px] relative w-full h-full overflow-hidden lg:rounded-l-[40px] xl:rounded-l-[60px]">
            <Image
              src={Motivation}
              className="h-full w-full object-cover object-center bg-fixed"
              alt="Motivational Background"
              sizes="100%"
              fill
            />
            <div className="bg-black/70 overflow-hidden h-full w-full relative z-10 px-6 xl:px-20 md:px-14 flex items-center py-20 md:py-28 xl:py-36">
              <p className="text-white text-xl md:text-3xl lg:text-xl xl:text-3xl leading-[1.5] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.5]">
                &quot;
                {MotivationQuotes[state].quote}
                &quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

const MotivationQuotes = [
  {
    label: "Mindset",
    quote:
      "Your mindset is the foundation of everything you build. When you choose to see obstacles as opportunities and setbacks as lessons, you’re not just changing your perspective—you’re changing the direction of your life. Transform your thoughts, and you’ll transform your journey.",
  },
  {
    label: "Wealth",
    quote:
      "Real wealth isn’t measured by possessions but by the depth of your purpose and the impact you make. When you cultivate a mindset of giving and growth, you create value that transcends material wealth. Wealth is about living a life that inspires, uplifts, and empowers others, so that long after you’re gone, your legacy continues to enrich the lives of others.",
  },
  {
    label: "Health",
    quote:
      "True health is a balance of body, mind, and purpose. When you commit to nurturing your physical and mental well-being, you’re building the strength to pursue your dreams, face challenges, and live life fully. Health is not a destination but a powerful tool for creating the life you envision.",
  },
  {
    label: "Relationships",
    quote:
      "Relationships are the cornerstone of a meaningful life. The connections you build with others fuel your growth, inspire your resilience, and enrich your journey. Invest in relationships that uplift and challenge you—because true success isn’t just about what you achieve, but who you have by your side.",
  },
  {
    label: "Business",
    quote:
      "A successful business is more than profits and products—it’s built on purpose, integrity, and the value it brings to others. When you focus on creating impact over income, you build a business that stands the test of time and leaves a legacy of positive change.",
  },
  {
    label: "Leadership",
    quote:
      "Leadership is the art of seeing potential where others see limits. It’s about lifting others, making bold choices, and building a vision that inspires people to bring their best selves forward. Lead with purpose, and you’ll create a lasting impact.",
  },
  {
    label: "Happiness",
    quote:
      "Happiness is not a destination; it’s a journey fueled by gratitude, purpose, and connection. When you embrace the present, nurture your passions, and cultivate meaningful relationships, you create a life rich in joy and fulfillment.",
  },
];
