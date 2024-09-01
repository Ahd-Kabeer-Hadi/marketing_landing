/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export function Checklist() {
  const checklistItems = [
    {
      title: "Get more views and subscribers effortlessly",
      description:
        "I want to get more views and subscribers on YouTube effortlessly.",
    },
    {
      title: "Beginner in YouTube SEO",
      description:
        "I am a complete beginner in YouTube SEO with no prior experience or technical skills.",
    },
    {
      title: "Explore automated SEO tools",
      description:
        "I am keen to explore automated SEO tools to enhance my YouTube channel without spending too much time.",
    },
    {
      title: "Cost-effective SEO solutions",
      description:
        "I cannot afford expensive SEO services and seek cost-effective solutions.",
    },
    {
      title: "Increase YouTube revenue",
      description:
        "I want to increase my YouTube revenue but don't know where to start.",
    },
    {
      title: "Current videos not performing",
      description:
        "My current videos are not getting the desired views and subscribers.",
    },
  ];

  return (
    <div className="py-16 lg:py-24 ">
      <div className="px-4 pb-12 text-center md:pb-16">
        <h4
          className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
          data-aos="zoom-y-out"
          data-aos-delay={150}
        >
          Please Check All Boxes Where Your Answer Is <span className="text-green-500">YES!</span>
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
        {checklistItems.map((item, index) => (
          <ChecklistItem key={item.title} {...item} index={index} />
        ))}
      </div>
      <div className="px-4 py-12 text-center md:pb-16">
        <p className="mb-6 text-2xl sm:text-xl md:text-2xl lg:text-4xl">If You Checked ANY Of The Boxes Above, <br /> Then <span className="font-bold text-gray-700 scale-105">You're Invited To Use The</span> </p>
        <h4
          className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-gray-700"
          data-aos="zoom-y-out"
          data-aos-delay={150}
        >
         “FOZATO YOUTUBE AUTO SEO APP”
        </h4>
      </div>
    </div>
  );
}

const ChecklistItem = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:border-r py-10 relative group/feature dark:border-neutral-800",
        index % 3 === 0 && "md:border-l dark:border-neutral-800", // Adjust for 2-column layout
        index < 3 && "md:border-b dark:border-neutral-800" // Adjust for top row
      )}
    >
      <div className="mb-4 relative z-10 px-10 flex items-center">
        <Checkbox className="mr-3 group-hover/feature:ring-2 group-hover/feature:ring-red-500 transition-all duration-200" />
        <span className="text-lg font-bold group-hover/feature:text-red-500 transition duration-200 text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
