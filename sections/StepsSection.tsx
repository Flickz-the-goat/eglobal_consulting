import SectionInfo from "@/components/SectionInfo";
import StepsCard from "@/components/StepsCard";
import Image from "next/image";

export default function StepsSection() {
  return (
    <section className="py-20 min-h-screen bg-gray-100 relative" id="plan">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        <SectionInfo text="Healthcare Consulting Process" />
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
            Simple Healthcare Practice Setup,
            <span className="text-[#bada55]"> Powerful Healthcare Results</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Our streamlined, AI-powered healthcare consulting process is
            designed to drive measurable results for your medical practice with
            minimal input from your side.
          </p>
        </div>

        <div className="relative mt-20">
        <div className="object-contain w-[1220px] h-[200px] absolute hidden lg:block top-1/2 left-0 right-0 -translate-y-1/2 z-0">
          <Image
            src={"/dashed-line.png"}
            alt="healthcare consulting process flow"
            fill
            className=""
            priority
          />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12 relative z-10">
            <div className="lg:translate-y-[-60px]">
              <StepsCard
                title="Share Your Healthcare Practice Data"
                description="Securely provide your core healthcare business metrics and financial data. No operational changes required from your side."
                number={1}
              />
            </div>
            <div className="lg:translate-y-[60px]">
              <StepsCard
                title="AI-Powered Healthcare Analysis & Strategy"
                description="Our advanced AI and healthcare consulting team identify revenue optimization opportunities and cost reduction strategies for your practice."
                number={2}
              />
            </div>
            <div className="lg:translate-y-[-60px]">
              <StepsCard
                title="Automated Healthcare Practice Execution"
                description="We deploy healthcare-specific automation, marketing campaigns, and internal systems — all optimized for your medical practice."
                number={3}
              />
            </div>
            <div className="lg:translate-y-[60px]">
              <StepsCard
                title="Comprehensive Healthcare Practice Reporting"
                description="Receive detailed results every cycle through transparent, visual dashboards and reports showing your practice's growth metrics."
                number={4}
              />
            </div>
          </div>
        </div>
      </div>

      <Image
        src={"/side-gear.png"}
        alt="healthcare consulting process optimization"
        width={50}
        height={120}
        className="absolute bottom-0 right-0 rotate-180"
        priority
      />
    </section>
  );
}
