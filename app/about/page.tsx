import { contactInfo, knowledge } from "@/lib/data";


export default function AboutMe() {
  return (
    <main className="mx-auto flex max-w-2xl w-full px-8">
      <div className="flex flex-col">
        <section>
          <h1 className="text-4xl font-bold tracking-tight lg:text-4xl text-left mb-6">
            About Me
          </h1>
          <p>
            I&apos;m Burak Eker, a Full-Stack Developer with 6 years of
            experience crafting secure, scalable, and user-friendly web
            applications. I&apos;ve had the chance to work across finance,
            e-commerce, and manufacturing, where I&apos;ve tackled complex
            challenges and built solutions that make a real difference.
          </p>
          <p className="mt-2">
            My skill set covers both backend and frontend development, with a
            strong focus on .NET, React, Angular, and Azure.
          </p>
          <p className="mt-2">
            Outside of work, I enjoy reading tech news, trying out new indie
            games, discovering <a href={contactInfo.spotify} className="underline underline-offset-4">music to binge</a>, and engaging in voluntary work.
          </p>
        </section>
        <section className="mt-6 mb-6">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-left mb-3">
            Skills
          </h2>
          <div className="flex flex-col">
            <div className="grid grid-cols-3 space-y-4">
              {knowledge.map((category, index) => (
                <div key={index}>
                  <h3 className="scroll-m-20 text-lg font-semibold tracking-tight text-left mb-1">
                    {category.title}
                  </h3>
                  <ul>
                    {category.skills.map((value, index2) => (
                      <p key={index2}>• {value}</p>
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
