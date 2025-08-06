import IndustryCard from "@/components/IndustryCard";
import SectionInfo from "@/components/SectionInfo";
import { Globe } from "lucide-react";

export default function Security() {
  return (
    <section className="min-h-screen min-w-screen pt-20">
      <div className="center space-y-8 min-h-full">
        <SectionInfo text="Healthcare Trust & Compliance" />
        <h1 className="text-center">
          Built with{" "}
          <span className="text-[#86BC25]">Healthcare Compliance </span>
          <Globe className="inline-block " />, Backed by{" "}
          <span className="text-[#86BC25]">Enterprise Security</span>
        </h1>
        <p className="text-center px-20">
          We follow the highest healthcare industry standards including HIPAA,
          SOC 2, and ISO 27001, ensuring secure, compliant operations for your
          medical practice at every step.
        </p>
        <div className="flex gap-1 h-full items-center justify-center">
          <IndustryCard
            text="ISO"
            desc="ISO27001"
            bool={true}
            type="Certified"
          />
          <IndustryCard text="SOC" desc="SOC 2" bool={false} type="Audited" />
          <IndustryCard
            text="SSL"
            desc="SSL/TLS"
            bool={true}
            type="Encrypted"
          />
          <IndustryCard
            text="PCI"
            desc="PCI DSS"
            bool={false}
            type="Compliant"
          />
        </div>

        <p className="text-center text-sm">
          Healthcare data privacy is non-negotiable. We safeguard your practice
          information with enterprise-grade security protocols and
          HIPAA-compliant consulting services.
        </p>
      </div>
    </section>
  );
}
