import SectionInfo from "@/components/SectionInfo";
import {
  Eye,
  Handshake,
  Lock,
  Percent,
  ShieldCheck,
  Stars,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function WhySection() {
  return (
    <section
      className="py-20 min-h-screen center space-y-8 font-main"
      id="method"
    >
      <div className="w-full h-20 mb-30 rounded-xl p-[2px] bg-gradient-to-t from-white to-gray-200">
        <div className="w-full h-full rounded-[10px] bg-transparent "></div>
      </div>{" "}
      <SectionInfo text="Why Choose Endorphin Global for Healthcare Consulting?" />
      <h1 className="text-center px-0 md:px-20">
        From Practice Burnout to Sustainable{" "}
        <Image
          src={"/growth-design.png"}
          alt="healthcare practice growth metrics"
          width={44}
          height={44}
          className="inline-block"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />{" "}
        Growth:{" "}
        <span className="text-[#bada55] underline hover:text-green-700">
          AI-Powered Healthcare Consulting
        </span>{" "}
        That Scales Your Practice
      </h1>
      <p className="text-gray-700 text-center px-0 md:px-40">
        Endorphin Global revolutionizes healthcare business consulting with our
        performance-based model. Unlike traditional consultants, we only succeed
        when your practice grows. Our AI-powered solutions handle revenue
        optimization, cost reduction, and practice scaling while you focus on
        delivering exceptional patient care.
      </p>
      <div className="flex flex-col lg:flex-row gap-4 mt-20">
        <div className="bg-[#d9d9d9] p-4 rounded-lg mx-auto lg:mx-0 max-w-[500px]">
          <div className="rounded-lg bg-gray-900 py-2 px-5 space-y-4 pb-20 ">
            <h3 className="text-white p-2 font-main flex gap-2 justify-center md:justify-start items-center">
              <div className="rounded-full button-bg inline-block p-2">
                <Zap className="stroke-none fill-gray-900" />{" "}
              </div>
              Rapid Healthcare Practice Results
            </h3>
            <p className="text-white text-center md:text-left">
              Experience measurable improvements in your healthcare
              practice&apos;s digital presence and revenue within the first 30
              days of our partnership.
            </p>
            <div className="flex gap-2 justify-center items-center md:justify-start">
              <div className="button-bg button-hover rounded-lg text-gray-900 p-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> 30-Day Healthcare Guarantee
              </div>
              <div className="button-bg button-hover rounded-lg text-gray-900 p-2 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                HIPAA Compliant Consulting
              </div>
            </div>
          </div>
          <div className="bg-transparent flex gap-5 mt-6">
            <div className="button-bg hard-shadow  text-gray-900 text-center px-2 py-4 border-1 border-gray-900 rounded-lg button-hover">
              <span className="text-xl font-semibold">150%</span> <br />
              Average Healthcare ROI Increase
            </div>
            <div className="button-bg hard-shadow  text-gray-900 text-center px-2 py-4 border-1 border-gray-900 rounded-lg button-hover">
              <span className="text-xl font-semibold">2.5x</span> <br />
              Practice Traffic Growth
            </div>
            <div className="button-bg hard-shadow  text-gray-900 text-center px-2 py-4 border-1 border-gray-900 rounded-lg button-hover ">
              <span className="text-xl font-semibold">45%</span> <br />
              Healthcare Cost Reduction
            </div>
          </div>
        </div>

        <div className="mx-auto lg:mx-none max-w-[500px] md:max-w-full min-h-fit flex-col bg-gray-100 flex-1 rounded-lg">
          <div className="flex-col lg:flex-row flex h-1/2 gap-2 lg:gap-0">
            <div className="bg-gray-100 rounded-md py-4 px-2 flex-1 hover:bg-gray-200 transition-colors">
              <div className="button-bg rounded-full w-fit h-fit p-2 mb-6 mx-auto md:mx-0">
                <Percent className=" fill-gray-900" />
              </div>
              <h3 className="text-center md:text-left font-main text-gray-900 font-semibold text-lg mb-2">
                Performance-Based Healthcare Consulting
              </h3>
              <p>
                {" "}
                Our success is directly tied to your practice&apos;s growth. We
                only earn when your healthcare business succeeds.
              </p>
            </div>
            <div className="bg-gray-100 rounded-md py-4 px-2 flex-1 hover:bg-gray-200 transition-colors">
              <div className="button-bg rounded-full w-fit h-fit p-2 mb-6 mx-auto md:mx-0">
                <Eye className="stroke-gray-900" />
              </div>
              <h3 className="text-center md:text-left font-main text-gray-900 font-semibold text-lg mb-2">
                Transparent Healthcare Business Process
              </h3>
              <p>
                Clear, transparent processes with zero hidden strategies - trust
                and compliance are our foundation in healthcare consulting.
              </p>
            </div>
          </div>
          <div className="lg:flex-row flex-col flex h-1/2">
            <div className="bg-gray-100 rounded-md py-4 px-2 flex-1 hover:bg-gray-200 transition-colors">
              <div className="button-bg rounded-full w-fit h-fit p-2 mb-6 mx-auto md:mx-0">
                <Handshake className="stroke-gray-900" />
              </div>
              <h3 className="text-center md:text-left font-main text-gray-900 font-semibold text-lg mb-2">
                Hands-Off Healthcare Practice Management
              </h3>
              <p>
                Simply share your practice data. We manage all business growth
                processes, saving you time to focus on patient care.
              </p>
            </div>
            <div className="bg-gray-100 rounded-md py-4 px-2 flex-1 hover:bg-gray-200 transition-colors">
              <div className="button-bg rounded-full w-fit h-fit p-2 mb-6 mx-auto md:mx-0">
                <Stars className="stroke-none fill-gray-900" />
              </div>
              <h3 className="text-center md:text-left font-main text-gray-900 font-semibold text-lg mb-2">
                AI-Powered Healthcare Cost Efficiency
              </h3>
              <p>
                Leverage advanced automation and modern technology to reduce
                healthcare practice costs and enhance performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/side-gear.png"}
        alt="healthcare consulting process"
        width={50}
        height={120}
        className="absolute -translate-x-1/2 md:-translate-x-[120%]"
        priority
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </section>
  );
}
