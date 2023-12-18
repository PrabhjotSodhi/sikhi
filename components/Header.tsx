"use client";

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";


interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className,
}) => {
  const router = useRouter();

  return (
    <div className={twMerge("h-fit bg-gradient-to-b from-amber-800 p-6", className)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button onClick={() => router.back()} className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition">
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button onClick={() => router.forward()} className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition">
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          // Insert Mobile Navigation here
        </div>
        <div className="flex justify-between items-center gap-x-4">
        </div>
        <div className="flex justify-between items-center gap-x-4">
            <>
              <div>
                <Button className="bg-transparent text-neutral-300 font-medium">Sign up</Button>
              </div>
              <div>
                <Button className="bg-white px-6 py-2">Log in</Button>
              </div>
            </>
        </div>
      </div>
      </div>
  );
}

export default Header;