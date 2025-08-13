import { contactInfo, knowledge } from "@/lib/data";

export default function AboutMe() {
  return (
    <main className="mx-auto flex max-w-2xl w-full px-8">
      <div className="flex flex-col">
        <section>
          <h1 className="text-4xl font-bold tracking-tight lg:text-4xl text-left mb-6">
            About Me
          </h1>
          <div className="space-y-2">
            <p>
              Hey, I&apos;m Burak Eker! I&apos;ve been working as a Full-Stack
              Developer for 7 years, building web apps.
            </p>
            <p>
              I started messing around with computers when I was just 9 years
              old, mainly for gaming and later diving into programming. Over the
              years, I&apos;ve worked in industries like finance, e-commerce,
              and manufacturing, tackling challenges and building solutions that
              truly make a difference.
            </p>
            <p>
              My skill set covers both backend and frontend development, with a
              strong focus on .NET, React, Angular, and Azure.
            </p>
            <p>
              Outside of work, I enjoy reading tech news, trying out new indie
              games, discovering{" "}
              <a
                href={contactInfo.spotify}
                className="underline underline-offset-4 text-primary hover:text-primary/80"
                target="_blank"
              >
                music to binge
              </a>
              , and engaging in voluntary work.
            </p>
          </div>
        </section>
        <section className="my-6">
          <h2 className="text-2xl font-semibold tracking-tight text-left mb-6">
            Skills
          </h2>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 space-y-4 md:grid-cols-3">
              {knowledge.map((category, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold tracking-tight text-left mb-2">
                    {category.title}
                  </h3>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    {category.skills.map((value, index2) => (
                      <li key={index2}>{value}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
