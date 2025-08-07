import SectionInfo from "@/components/SectionInfo";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="min-w-screen bg-gray-100 py-20 font-main">
      <div className="px-5 md:px-40 space-y-8 flex flex-col">
        <SectionInfo text="Ready to Transform Your Healthcare Practice?" />
        <h1 className="text-4xl md:text-6xl text-center">
          Experience Performance-Based Healthcare Consulting Today
        </h1>
        <p className="text-center">
          Join hundreds of healthcare practices who trust Endorphin Global with
          their business growth. Start your healthcare consulting journey and
          see measurable results in 30 days.
        </p>
        <Link
          target="_blank"
          href={"https://app.centerfy.ai/v2/preview/YadZEw2HoLSsxybYdwv9"}
          className="flex justify-center items-center w-fit mx-auto"
        >
          <button className="button-bg button-hover text-xl hard-shadow px-8 font-main py-4 text-gray-800 rounded-lg w-fit self-center">
            Book a Healthcare Consultation
          </button>
        </Link>
        <div className="mx-auto max-w-4xl gap-10 flex justify-between text-center">
          <div>
            <span className="text-[#BADA55] text-xl font-semibold">99.9%</span>
            <br /> Healthcare Practice Uptime
          </div>
          <div>
            <span className="text-[#BADA55] text-xl font-semibold">
              256-bit
            </span>
            <br /> HIPAA Encryption
          </div>
          <div>
            <span className="text-[#BADA55] text-xl font-semibold">365</span>
            <br /> Days Healthcare Support
          </div>
        </div>
      </div>
    </section>
  );
}
