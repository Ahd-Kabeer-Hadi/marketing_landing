import React from "react";
import { useId } from "react";
import SaleButton from "./salebutton";

export function Features() {
  return (
    <div className="py-16 lg:py-24 ">
      <div className="px-4 pb-12 text-center md:pb-16">
        <h3
          className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
          data-aos="zoom-y-out"
          data-aos-delay={150}
        >
          HERE IS WHAT YOU ARE GOING TO ACHIEVE!
        </h3>
      </div>
      <div className="grid grid-cols-1  md:px-2 rounded-md md:py-4 md:bg-gray-700 shadow-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <SaleButton />
    </div>
  );
}
const grid = [
  {
    title: "Top Rankings on YouTube",
    description:
      "Automatically perform professional YouTube SEO to get your videos to the top.",
  },
  {
    title: "Maximize Revenue",
    description:
      "Increase YouTube income by 10 times with effective SEO strategies.",
  },
  {
    title: "Generate Optimized Content",
    description:
      "Discover the best keywords, titles, tags, and descriptions tailored to your video.",
  },
  {
    title: "Save Time and Effort",
    description:
      "Automate your YouTube SEO and focus on creating amazing content.",
  },
  {
    title: "Increase Viewership",
    description:
      "Attract more viewers with high CTR thumbnails and optimized SEO.",
  },
  {
    title: "Leverage Trends",
    description:
      "Utilize Google Trends & other tools to stay ahead in the game.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
