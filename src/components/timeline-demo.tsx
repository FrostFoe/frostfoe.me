"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/lib/content";

export function TimelineDemo() {
  return (
    <div className="relative w-full overflow-hidden flex justify-center">
      <div className="w-full max-w-3xl">
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
                    <Image
                      key={i}
                      src={src}
                      alt={`${item.title} image ${i + 1}`}
                      width={400}
                      height={300}
                      className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                    />
                  ))}
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
}
