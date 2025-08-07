import HeroInfo from "@/components/HeroInfo";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen center pt-20">
      <div className="flex-1 space-y-8 lg:text-left text-center">
        <HeroInfo />
        <h1 className="text-4xl lg:text-6xl ">
          Transform Your Healthcare Practice
          <br className="lg:hidden block" /> with Performance-Based Consulting
        </h1>
        <p>
          Endorphin Global specializes in healthcare business consulting that
          delivers measurable results. Our performance-based model ensures we
          only earn when your practice grows. We handle revenue optimization,
          cost reduction, and practice scaling while you focus on patient care.
          Book a consultation today and see your practice transform.
        </p>
        <div className="flex gap-2 lg:justify-start justify-center">
          <Link
            href={"https://app.centerfy.ai/v2/preview/YadZEw2HoLSsxybYdwv9"}
            target="_blank"
          >
            <button className="button-bg border-b-4 border-b-gray-800 px-8 py-4 text-gray-90 rounded-xl button-hover font-main">
              Book a Healthcare Consultation
            </button>
          </Link>
          <Image
            src={"/hero-add-on.png"}
            alt="healthcare consulting benefits"
            height={54}
            width={54}
            className="lg:block hidden"
            priority
          />
        </div>
      </div>
      <div className="relative object-contain w-[600px] h-[600px] flex-1 lg:block hidden">
        <Image
          src={"/hero-image.png"}
          alt="healthcare practice consulting services"
          fill
          priority
          className="mx-auto"
        />
      </div>
    </section>
  );
}
