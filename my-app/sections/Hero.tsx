import HeroInfo from "@/components/HeroInfo";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen center pt-20">
      <div className="flex-1 space-y-8 md:text-left text-center">
        <HeroInfo />
        <h1>
          Transform Your Healthcare Practice
          <br className="md:hidden block" />
          <Image
            src={"/hero-design.png"}
            alt="healthcare practice growth design"
            width={120}
            height={54}
            className="ml-2 inline-block"
            priority
          />
          <br /> with Performance-Based Consulting
        </h1>
        <p>
          Endorphin Global specializes in healthcare business consulting that
          delivers measurable results. Our performance-based model ensures we
          only earn when your practice grows. We handle revenue optimization,
          cost reduction, and practice scaling while you focus on patient care.
          Book a consultation today and see your practice transform.
        </p>
        <div className="flex gap-2 md:justify-start justify-center">
          <button className="button-bg border-b-4 border-b-gray-800 px-8 py-2 text-gray-90 rounded-xl button-hover font-main">
            <Link
              href={"https://app.centerfy.ai/v2/preview/YadZEw2HoLSsxybYdwv9"}
              target="_blank"
            >
              Book a Healthcare Consultation
            </Link>
          </button>
          <Image
            src={"/hero-add-on.png"}
            alt="healthcare consulting benefits"
            height={54}
            width={54}
            className="md:block hidden"
            priority
          />
        </div>
      </div>
      <div className="flex-1 md:block hidden">
        <Image
          src={"/hero-image.png"}
          alt="healthcare practice consulting services"
          width={600}
          height={120}
          priority
        />
      </div>
    </section>
  );
}
