"use client";

import React from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AnimatedPinDemo } from "@/components/animated-pin-demo";
import { TimelineDemo } from "@/components/timeline-demo";
import { LinkPreviewDemoSecond } from "@/components/link-preview-demo";
import { HoverBorderGradientDemo } from "@/components/hover-border-gradient-demo";
import { frostFoeContent } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-20 space-y-32">
      {/* ❄️ FrostFoe Centered Section */}
      <section className="w-full max-w-2xl text-center flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl flex flex-col items-center">
          <span>{frostFoeContent.headingPrefix}</span>
          <span className="mt-2 inline-flex justify-center">
            <PointerHighlight
              rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
              pointerClassName="text-yellow-500"
            >
              <span className="relative z-10 text-center block">
                {frostFoeContent.highlightText}
              </span>
            </PointerHighlight>
          </span>
        </h1>

        <div className="mt-8 md:mt-12 w-full flex justify-center">
          <TextGenerateEffect words={frostFoeContent.words} />
        </div>
      </section>



      {/* 🎯 Animated Pins */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-5xl">
          <AnimatedPinDemo />
        </div>
      </section>

      {/* 🧭 Timeline */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-6xl">
          <TimelineDemo />
        </div>
      </section>

            {/* 🔗 Link Preview Section */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <LinkPreviewDemoSecond />
        </div>
      </section>
      
      {/* 🌈 Hover Border Gradient Section */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <HoverBorderGradientDemo />
        </div>
      </section>
    </main>
  );
}
