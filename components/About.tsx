import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <AnimatedSection
      id="about"
      className="bg-white py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
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
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Word Electric, LLC is a trusted electrical contractor based in{" "}
                {siteConfig.location}, proudly serving {siteConfig.serviceArea}.
                We are committed to delivering quality workmanship, honest
                service, and dependable electrical solutions for both
                residential and commercial customers.
              </p>
              <p>
                Whether you need a simple repair, a full panel upgrade, or
                complete wiring for a new construction project, our team
                approaches every job with the same dedication to safety and
                excellence. We understand that electrical work is about more
                than wires and circuits—it is about protecting your home, your
                business, and the people who depend on them.
              </p>
              <p>
                When you choose Word Electric, you get a local team that values
                clear communication, fair pricing, and getting the job done
                right the first time. From troubleshooting a stubborn outlet to
                powering a commercial build-out, we are here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
