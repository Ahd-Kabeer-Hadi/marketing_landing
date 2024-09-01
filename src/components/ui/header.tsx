import Link from "next/link";
import Logo from "./logo";
import { Button } from "./button";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6 ">
      <div className="mx-auto flex justify-between max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] mx-auto lg:w-full">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign-in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Button variant="default" className="py-2 px-4 sm:py-3 sm:px-6">
                Boost My YouTube Revenue
              </Button>
            </li>
          </ul>

         
        </div>
      </div>
    </header>
  );
}
