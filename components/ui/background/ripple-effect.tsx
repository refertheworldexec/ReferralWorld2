"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

import { LiveButtonDemo } from "@/components/button/live-button";
import { AnimatedBadgeDemo } from "@/components/bage/animated-badge";
import { MapDemo } from "@/components/map/map";

export function BackgroundRippleEffectDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full flex justify-center ml-40">
        <div>
          <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
            Referral World
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
            Where trusted connections turn into real rewards.
          </p>
          <div className="flex  mt-32  flex-row justify-center gap-12">
            <div>
              <LiveButtonDemo />
            </div>
            <div className="">
              <AnimatedBadgeDemo />
            </div>
          </div>
        </div>

        <MapDemo />
      </div>
    </div>
  );
}
