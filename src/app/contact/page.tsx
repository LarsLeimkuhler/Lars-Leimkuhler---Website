import type { Metadata } from "next";
import {
  Envelope,
  GithubLogo,
  House,
  LinkedinLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10">
      <header className="pt-32 sm:pt-44 pb-20 grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-3">
          <Reveal as="span" className="eyebrow">
            <span className="eyebrow-dot" />
            Contact
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
          <Reveal as="h1" className="font-display text-h1 text-ink max-w-3xl leading-[1.06]">
            Say hello.
          </Reveal>
          <Reveal index={1}>
            <p className="mt-8 text-[1.125rem] leading-[1.7] text-ink-muted max-w-2xl">
              My name is Lars Leimk&uuml;hler and I&rsquo;m a PhD Student in
              Economics at UC Santa Barbara, working on labour, personnel
              economics and taxation. The fastest way to reach me is email,
              or come find me in office hours.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="grid grid-cols-12 gap-x-6 gap-y-16 lg:gap-y-0 border-t border-border-faint pt-12 pb-32">
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:pr-10 space-y-10">
            <Channel
              icon={<Envelope weight="regular" className="w-5 h-5" />}
              label="Email"
              value="lleimkuhler@ucsb.edu"
              href="mailto:lleimkuhler@ucsb.edu"
            />
            <Channel
              icon={<MapPin weight="regular" className="w-5 h-5" />}
              label="Office"
              value="North Hall 2015"
            />
            <Channel
              icon={<House weight="regular" className="w-5 h-5" />}
              label="Department page"
              value="UCSB Economics"
              href="https://econ.ucsb.edu/people/students/lars-leimkuhler"
            />
            <Channel
              icon={<LinkedinLogo weight="regular" className="w-5 h-5" />}
              label="LinkedIn"
              value="larsleimkuhler"
              href="https://www.linkedin.com/in/larsleimkuhler/"
            />
            <Channel
              icon={<GithubLogo weight="regular" className="w-5 h-5" />}
              label="GitHub"
              value="LarsLeimkuhler"
              href="https://github.com/LarsLeimkuhler"
            />
            <div className="pt-6 border-t border-border-faint">
              <p className="mono-label mb-3">Reply window</p>
              <p className="text-[1.0625rem] text-ink leading-[1.6]">
                Within a week, usually faster. If something is on a real
                deadline, say so in the first line and I&rsquo;ll prioritise.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:border-l lg:border-border-faint">
          <div className="lg:pl-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function Channel({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="mt-0.5 text-ink-muted transition-colors group-hover:text-accent">
        {icon}
      </span>
      <span className="block">
        <span className="block mono-label mb-1">{label}</span>
        <span className="block font-display text-[1.375rem] text-ink leading-[1.2] transition-colors group-hover:text-accent">
          {value}
        </span>
      </span>
    </>
  );

  if (!href) {
    return <div className="flex items-start gap-4">{content}</div>;
  }

  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className="group flex items-start gap-4 transition-colors"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}
