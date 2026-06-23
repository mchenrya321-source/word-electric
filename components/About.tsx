import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, sectionPadding } from "@/lib/site-config";

export function About() {
  return (
    <AnimatedSection id="about" className={`bg-white ${sectionPadding}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative hidden aspect-[16/10] overflow-hidden rounded-xl shadow-lg md:block lg:aspect-[4/3] lg:rounded-2xl">
            <Image
              src="/gallery/2.jpg"
              alt="Word Electric team performing professional electrical work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <SectionHeading
              title="Your Local Electrical Professionals"
              centered={false}
            />
            <div className="space-y-3 text-sm leading-relaxed text-muted md:space-y-4 md:text-base">
              <p>
                Word Electric, LLC is a trusted electrical contractor based in{" "}
                {siteConfig.location}, proudly serving {siteConfig.serviceArea}.
                We deliver quality workmanship, honest service, and dependable
                electrical solutions for residential and commercial customers.
              </p>
              <p>
                Whether you need a repair, a panel upgrade, or complete wiring
                for a new build, our team approaches every job with dedication
                to safety and excellence. When you choose Word Electric, you get
                a local team that values clear communication and getting the job
                done right the first time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
