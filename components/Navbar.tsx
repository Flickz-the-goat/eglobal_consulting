import Image from "next/image";
import CtaButton from "./CtaButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-10 shadow-sm h-[80] flex items-center center min-w-full backdrop-blur-xl bg-white/50 justify-between font-main">
      <div>
        <Image
          src={"/endorphin-logo-2.png"}
          alt="Endorphin Global Healthcare Consulting Logo"
          priority
          width={248}
          height={44}
          className="block"
        />
      </div>
      <div className="gap-10 text-gray-500 flex">
        <div className="hidden md:flex gap-2 items-center hover:text-gray-900 transition-colors hover:cursor-pointer group">
          <div className="w-2 h-2 button-bg rounded-full group-hover:button-hover"></div>
          <Link href={"#method"} className="text-lg">
            Method
          </Link>
        </div>
        <div className="hidden md:flex gap-2 items-center hover:text-gray-900 transition-colors hover:cursor-pointer group">
          <div className="w-2 h-2 button-bg rounded-full group-hover:button-hover"></div>
          <Link href={"#plan"} className="text-lg">
            Plan
          </Link>
        </div>
        <CtaButton text="Book a Call" />
      </div>
    </nav>
  );
}
