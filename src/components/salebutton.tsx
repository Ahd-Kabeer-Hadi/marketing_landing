import { Button } from "./ui/button";

interface SaleButtonProps {
  showOffer?: boolean;
  isForm?: boolean;
}

function SaleButton({ showOffer = true, isForm = false }: SaleButtonProps) {
  return (
    <div className=" flex flex-col items-center my-6 justify-center gap-3 text-base sm:text-xl md:text-2xl">
      <Button
        size={"lg"}
        className="w-full h-auto flex flex-col items-center gap-2 justify-center text-2xl p-5"
      >
        <p className="capitalize text-center text-xl md:text-2xl xl:text-4xl">
          Yes, I want to Boost <br className="lg:hidden" /> My YouTube Revenue
        </p>
        <p className=" text-center">(Only ₹ 999/month)</p>
      </Button>
      {showOffer && (
        <div className="h-16 flex items-center justify-center mt-6">
          <p className="text-center text-lg md:text-xl xl:text-3xl caption-bottom font-medium ">
            Register quickly before{" "}
            <span className="text-red-500">the offer ends</span> to unlock
            bonuses worth <span className="text-red-500"> ₹ 72,000</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default SaleButton;
