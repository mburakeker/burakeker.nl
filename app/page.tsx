import { Badge } from "@/components/ui/badge";
import { contactInfo, techStackItems } from "@/lib/data";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="px-8">
      <section>
        <div className="mx-auto flex max-w-2xl flex-col text-center">
          <h1 className="text-6xl font-bold tracking-tight lg:text-7xl">
            Burak Eker
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight">
            Full Stack .NET Developer
          </h2>
          <div className="flex flex-row gap-3 justify-center mt-4">
            <a
              href={contactInfo.github}
              target="_blank"
              title="Link to GitHub Profile"
            >
              <FaGithub size={28} className="hover:text-ring" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              title="Link to Linkedin Profile"
            >
              <FaLinkedin size={28} className="hover:text-ring" />
            </a>
            <a href={contactInfo.mailAddress} title="Contact Email Address">
              <FaEnvelope size={28} className="hover:text-ring" />
            </a>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="mx-auto flex max-w-2xl flex-col">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-left mb-6">
            Summary
          </h2>
          <p>
            Hi! I&apos;m a Full-Stack Developer with 6 years of experience
            creating secure, scalable, and user-friendly web applications in
            industries like finance, e-commerce, and manufacturing.
          </p>
          <p className="mt-2">
            I love solving problems, simplifying complex systems, and building
            tools that make people&apos;s lives easier.
          </p>
          <p className="mt-1">Here is my primary tech stack:</p>
          <ul className="flex flex-wrap gap-3">
            {techStackItems.map((value, index) => (
              <li key={index}>
                <Badge variant="secondary" className="hover:cursor-default">
                  {value}
                </Badge>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex flex-row gap-1 text-primary/80 hover:text-primary"
            >
              <p>Read more about me here</p>
              <HiArrowLongRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
