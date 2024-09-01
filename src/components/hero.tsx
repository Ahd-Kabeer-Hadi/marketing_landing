/* eslint-disable react/no-unescaped-entities */
import SaleButton from "./salebutton";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center w-full items-center">
      <div className="px-4 pb-12 text-center md:pb-16">
        <h1
          className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
          data-aos="zoom-y-out"
          data-aos-delay={150}
        >
          Experience How You Can
          <br className="max-lg:hidden" />{" "}
          <span className="block text-3xl font-bold text-red-500 sm:text-4xl md:text-5xl lg:text-6xl">
            "DOUBLE YOUR YOUTUBE VIEWS & REVENUE"{" "}
          </span>{" "}
          <br className="max-lg:hidden" /> with Our Revolutionary YouTube SEO
          App Fozato, by Ranking on the First Page of YouTube Automatically!
        </h1>
        <div className="mx-auto max-w-3xl">
          <h2
            className="mb-4 text-lg font-bold text-slate-800 sm:text-xl md:text-2xl"
            data-aos="zoom-y-out"
            data-aos-delay={300}
          >
            (Like 5857+ satisfied users who have transformed their YouTube
            videos using Fozato)
          </h2>
          <h3
            className="mb-4 text-lg font-bold text-slate-800 sm:text-xl md:text-2xl"
            data-aos="zoom-y-out"
            data-aos-delay={300}
          >
            (Even if you've never done SEO for YouTube videos before)
          </h3>

          <p
            className="mb-8 text-base font-bold text-gray-700 sm:text-lg md:text-xl"
            data-aos="zoom-y-out"
            data-aos-delay={300}
          >
            Rank Higher | Increase Views | Boost Your Revenue
          </p>
        
        </div>

      </div>
        <div className="relative mb-6 before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
            <Card className="bg-[#07A058]/30 text-slate-900">
              <CardHeader>
                <CardTitle>Fozato:</CardTitle>
                <CardDescription className="text-lg font-semibold text-slate-900 md:text-3xl">
                  The World's Most Powerful YouTube Ranking System
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div
            className="mx-auto max-w-7xl w-full aspect-video rounded-2xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative mb-6 aspect-video rounded-2xl bg-gray-900 px-4 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]"></div>
          </div>

          <div>
            <SaleButton />
          </div>
    </section>
  );
}
