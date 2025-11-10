"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import { pinData } from "@/lib/content";

export function AnimatedPinDemo() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 py-10">
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
