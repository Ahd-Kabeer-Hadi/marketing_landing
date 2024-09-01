/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import playstore from "../../public/images/playstore.png";
import SaleButton from "./salebutton";
export default function UnlockPotential() {
  return (
    <div className="w-full bg-slate-300/30 py-16 lg:py-24 ">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="px-4 pb-6 text-center md:pb-16">
          <h4
            className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            Unlock Your Potential in{" "}
            <span className="text-green-500">YouTube SEO Today!</span>
          </h4>
        </div>
        <div className="px-4 py-12 text-center md:pb-16">
          <p className="mb-6 text-2xl sm:text-xl md:text-2xl lg:text-4xl">
            With the right guidance and access to{" "}
            <span className="underline">cutting-edge tools</span>, you can rank
            your videos higher and grow your channel effortlessly!
          </p>
          <p className="mb-6 text-2xl sm:text-xl md:text-2xl lg:text-4xl">
            Whether you're a complete novice with zero SEO experience And have
            never attempted YouTube optimization before…
          </p>
          <p className="mb-6 text-2xl sm:text-xl md:text-2xl lg:text-4xl">
            And That's What Exactly You Will Experiance In this
          </p>
          <h4
            className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-red-500"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            “FOZATO YOUTUBE AUTO SEO APP”
          </h4>
        </div>
        <div className="relative mb-6 aspect-video rounded-2xl bg-transparent px-4 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
          <Image
            src={playstore}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto px-4">
        <SaleButton showOffer={false}/>
      </div>
    </div>
  );
}
