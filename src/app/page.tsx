"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Timeline } from "@/components/ui/timeline";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { LinkPreview } from "@/components/ui/link-preview";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  pinData,
  timelineData,
  frostFoeContent,
  linkPreviewContent,
  hoverBorderContent,
} from "@/lib/content";

// 🎯 Animated Pins Grid
export function AnimatedPinDemo() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-8 py-10">
      {pinData.map((pin, i) => (
        <div key={i} className="flex items-center justify-center">
          <PinContainer title={pin.linkTitle} href={pin.linkHref}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {pin.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{pin.subtitle}</span>
              </div>
              <div
                className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${pin.gradient}`}
              />
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
}

// 🧭 Timeline
export function TimelineDemo() {
  return (
    <div className="relative w-full overflow-hidden">
      <Timeline
        data={timelineData.map((item) => ({
          title: item.title,
          content: (
            <div>
              {item.description && (
                <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                  {item.description}
                </p>
              )}
              {item.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
                >
                  {p}
                </p>
              ))}
              {item.checklist && (
                <ul className="mb-6 space-y-1 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  {item.checklist.map((task, i) => (
                    <li key={i}>✅ {task}</li>
                  ))}
                </ul>
              )}
              <div className="grid grid-cols-2 gap-4">
                {item.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${item.title} image ${i + 1}`}
                    className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                  />
                ))}
              </div>
            </div>
          ),
        }))}
      />
    </div>
  );
}

// 🔗 Link Preview Section (All content from linkPreviewContent)
export function LinkPreviewDemoSecond() {
  const p1 = linkPreviewContent.paragraphOne;
  const p2 = linkPreviewContent.paragraphTwo;

  return (
    <div className="flex justify-center items-start h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl text-left mb-10">
        {p1.prefix}{" "}
        <LinkPreview
          url={p1.url}
          className={`font-bold bg-clip-text text-transparent bg-gradient-to-br ${p1.gradient}`}
        >
          {p1.linkText}
        </LinkPreview>{" "}
        {p1.suffix}
      </p>

      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl text-left">
        {p2.prefix}{" "}
        <LinkPreview
          url={p2.linkOneUrl}
          imageSrc={p2.linkOneImg}
          isStatic
          className="font-bold"
        >
          {p2.linkOneText}
        </LinkPreview>{" "}
        {p2.linkTwoPrefix}{" "}
        <LinkPreview
          url={p2.linkTwoUrl}
          imageSrc={p2.linkTwoImg}
          isStatic
          className="font-bold"
        >
          {p2.linkTwoText}
        </LinkPreview>{" "}
        {p2.suffix}
      </p>
    </div>
  );
}

// 🌈 Hover Border Gradient Section (Data-driven)
export function HoverBorderGradientDemo() {
  const c = hoverBorderContent;
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName={c.rounded}
        as="button"
        className={`${c.buttonBgLight} ${c.buttonBgDark} ${c.textColorLight} ${c.textColorDark} flex items-center space-x-2`}
      >
        <AceternityLogo
          className={`h-3 w-3 ${c.logoColorLight} ${c.logoColorDark}`}
        />
        <span>{c.buttonText}</span>
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = ({ className }: { className?: string }) => (
  <svg
    width="66"
    height="65"
    viewBox="0 0 66 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
      stroke="currentColor"
      strokeWidth="15"
      strokeMiterlimit="3.86874"
      strokeLinecap="round"
    />
  </svg>
);

// ❄️ FrostFoe Home Page
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 space-y-32">
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

      {/* 🔗 Link Preview Section */}
      <section className="w-full max-w-5xl">
        <LinkPreviewDemoSecond />
      </section>

      {/* 🌈 Hover Border Gradient Section */}
      <section className="w-full max-w-5xl">
        <HoverBorderGradientDemo />
      </section>

      {/* 🎯 Animated Pins */}
      <section className="w-full max-w-5xl">
        <AnimatedPinDemo />
      </section>

      {/* 🧭 Timeline */}
      <section className="w-full max-w-5xl">
        <TimelineDemo />
      </section>
    </main>
  );
}
