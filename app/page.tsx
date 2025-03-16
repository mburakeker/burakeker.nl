import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

const TechStackItems = [
  "C#",
  ".NET",
  "ASP.NET WebAPI",
  "MSSQL",
  "TypeScript",
  "Next.js",
  "React",
  "Angular",
  "Azure",
  "Docker",
  "Redis",
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center justify-center">
      <section>
        <h1 className="scroll-m-20 text-7xl font-bold tracking-tight lg:text-7xl">
          Burak Eker
        </h1>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
          Full Stack .NET Developer
        </h2>
        <div className="flex flex-row gap-3 align-center justify-center mt-4">
          <a
            href="https://github.com/mburakeker"
            target="_blank"
            title="Link to GitHub Profile"
          >
            <FaGithub
              size={28}
              className="hover:text-ring"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mburakeker"
            target="_blank"
            title="Link to Linkedin Profile"
          >
            <FaLinkedin
              size={28}
              className="hover:text-ring"
            />
          </a>
          <a href="mailto:mburakeker@outlook.com">
            <FaEnvelope
              size={28}
              className="hover:text-ring"
            />
          </a>
        </div>
      </section>
      <section className="mt-16">
        <div>
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
          <ul className="flex gap-3 mt-2">
            {TechStackItems.map((value, index) => (
              <li key={index}>
                <Badge variant="secondary">{value}</Badge>
              </li>
            ))}
          </ul>
          <Link href="/about">
            <div className="inline-flex flex-row gap-1 mt-4 text-primary/80 hover:text-primary">
              <p>Read more about me here</p>{" "}
              <HiArrowLongRight className="h-6 w-6" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
