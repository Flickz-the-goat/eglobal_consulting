import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-[#292D32]">
      <div className="center ">
        <div className="flex flex-col md:flex-row border-b border-b-gray-600 py-5">
          <div className="w-full">
            <Image
              src={"/endorphin-logo-2.png"}
              alt="Endorphin Global Healthcare Consulting Logo"
              width={300}
              height={30}
              className="brightness-150 mx-auto"
              priority
            />
            <p className="text-gray-400 text-center">
              Transforming healthcare practices through intelligent automation,
              data-driven digital marketing strategies, and performance-based
              business consulting for medical professionals.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between space-y-2 mt-4">
          <div className="flex gap-2 md:gap-4 justify-center">
            <p className="text-sm text-gray-400">Privacy Policy</p>
            <p className="text-sm text-gray-400">Terms of Service</p>
            <p className="text-sm text-gray-400">Cookie Policy</p>
          </div>
          <p className="text-sm text-gray-400">
            Endorphin Global Healthcare Consulting
          </p>
          <p className="text-sm text-gray-400">@ 2025 All right Reserved</p>
        </div>
      </div>
    </section>
  );
}
