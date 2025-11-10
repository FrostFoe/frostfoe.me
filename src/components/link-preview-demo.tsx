"use client";

import { LinkPreview } from "@/components/ui/link-preview";
import { linkPreviewContent } from "@/lib/content";

export function LinkPreviewDemoSecond() {
  const p1 = linkPreviewContent.paragraphOne;
  const p2 = linkPreviewContent.paragraphTwo;

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl flex flex-col items-center justify-center">
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl text-center mb-10">
          {p1.prefix}{" "}
          <LinkPreview
            url={p1.url}
            className={`font-bold bg-clip-text text-transparent bg-gradient-to-br ${p1.gradient}`}
          >
            {p1.linkText}
          </LinkPreview>{" "}
          {p1.suffix}
        </p>

        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl text-center">
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
    </div>
  );
}
