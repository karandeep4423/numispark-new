interface ContentSectionProps {
  title: string;
  body: string;
}

export default function ContentSection({ title, body }: ContentSectionProps) {
  const paragraphs = body.split("\n\n").filter(Boolean);

  return (
    <section className="px-[7.3%] py-20">
      <div className="grid grid-cols-5 gap-x-8 lg:gap-x-12">
        <div className="col-span-5 lg:col-span-2 mb-8 lg:mb-0">
          <h2 className="font-[Neue_Montreal] text-[clamp(32px,3vw,52px)] font-medium leading-tight text-white">
            {title}
          </h2>
        </div>
        <div className="col-span-5 lg:col-span-3 flex flex-col gap-6">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-[Neue_Montreal] text-[19px] leading-[1.42] text-white/70"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
