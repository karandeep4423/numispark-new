import Image from "next/image";
import Link from "next/link";

/* ── Image assets from Figma ── */
const IMG_HERO = "/services/seo.jpg";
const IMG_LEFT_PORTRAIT = "/services/seo.jpg";
const IMG_RIGHT_TOP = "/services/seo.jpg ";
const IMG_RIGHT_BOTTOM = "/services/seo.jpg";
const IMG_WIDE = "/services/seo.jpg";
const IMG_ARTICLE_2 = "/services/seo.jpg";
const IMG_ARTICLE_3 = "/services/seo.jpg";
const IMG_ARTICLE_4 = "/services/seo.jpg";

/* ── Icons ── */
function ArrowBackIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 12H4M4 12l6-6M4 12l6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 16V8M12 8l-3 3M12 8l3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16v1a4 4 0 004 4h10a4 4 0 004-4v-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Related article card ── */
type RelatedArticle = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
};

const RELATED_ARTICLES: RelatedArticle[] = [
  {
    slug: "article-2",
    date: "Rédigé le 12 janvier 2026",
    title: "Article 2",
    excerpt:
      "Nunc velit augue, scelerisque dignissim, lobortis et, aliquam in, risus. In eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: IMG_ARTICLE_2,
  },
  {
    slug: "article-3",
    date: "Rédigé le 12 janvier 2026",
    title: "Article 3",
    excerpt:
      "Nunc velit augue, scelerisque dignissim, lobortis et, aliquam in, risus. In eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: IMG_ARTICLE_3,
  },
  {
    slug: "article-4",
    date: "Rédigé le 12 janvier 2026",
    title: "Article 4",
    excerpt:
      "Nunc velit augue, scelerisque dignissim, lobortis et, aliquam in, risus. In eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: IMG_ARTICLE_4,
  },
];

function RelatedCard({ article }: { article: RelatedArticle }) {
  return (
    <Link href={`/blog/${article.slug}`} className="group flex flex-col gap-4">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
      </div>
      <div>
        <p className="mb-2 font-[Roboto_Mono] text-[11px] uppercase tracking-widest text-[#676768]">
          {article.date}
        </p>
        <h3 className="mb-2 font-[Neue_Montreal] text-[20px] font-medium leading-tight text-black">
          {article.title}
        </h3>
        <p className="font-[Neue_Montreal] text-[14px] leading-6 text-[#676768]">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}

/* ── Main component ── */
export default function BlogDetailPage() {
  return (
    <main className="bg-white">
      {/* ─── Hero image ─── */}
      <div className="relative h-[55vh] min-h-95 w-full overflow-hidden lg:h-[62vh]">
        <Image
          src={IMG_HERO}
          alt="Article à la une"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
      </div>

      {/* ─── Article header ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl w-full px-6 pt-10 pb-0 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-start justify-between gap-6">
            {/* Back button + meta */}
            <div className="flex items-center gap-6">
              <Link
                href="/blog"
                aria-label="Retour au blog"
                className="flex shrink-0 items-center justify-center rounded-full border border-[#e8e8e8] p-5 text-black transition-colors hover:border-black"
              >
                <ArrowBackIcon />
              </Link>
              <div>
                <p className="mb-1 font-[Roboto_Mono] text-[12px] uppercase tracking-widest text-[#676768]">
                  Rédigé le 23 janvier 2026
                </p>
                <h1 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black sm:text-[34px] lg:text-[42px]">
                  Article à la une
                </h1>
              </div>
            </div>

            {/* Share button */}
            <button
              type="button"
              className="hidden shrink-0 items-center gap-2 rounded-full border border-[#d9d9d9] px-5 py-3.5 font-[Neue_Montreal] text-[14px] text-black transition-colors hover:border-black sm:flex"
            >
              Partager
              <UploadIcon />
            </button>
          </div>

          {/* Divider */}
          <div className="mt-10 h-px bg-[#e0e0e0]" />
        </div>
      </section>

      {/* ─── Article body ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 lg:px-12 xl:px-16">
          {/* First heading + intro text */}
          <h2 className="mb-6 font-[Neue_Montreal] text-[24px] font-medium leading-tight text-black sm:text-[28px] lg:text-[32px]">
            Ut porttitor leo a diam sollicitudin tempor
          </h2>

          <div className="mb-8 space-y-5 font-[Neue_Montreal] text-[16px] leading-7 text-[#2c2c2e] lg:text-[17px] lg:leading-7">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Curabitur gravida arcu ac tortor dignissim. Habitant morbi
              tristique senectus et netus et malesuada fames. Viverra orci
              sagittis eu volutpat odio facilisis. Enim nulla aliquet porttitor
              lacus luctus accumsan tortor posuere. Scelerisque varius morbi
              enim nunc faucibus a pellentesque sit. Dictumst quisque sagittis
              purus sit amet. Diam sit amet nisl suscipit adipiscing. Eleifend
              mi in nulla posuere sollicitudin. Id diam maecenas ultricies mi
              eget mauris. Mattis enim ut tellus elementum sagittis vitae. Eget
              velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
              Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.
            </p>
            <p>
              Facilisis leo vel fringilla est ullamcorper eget nulla facilisi
              etiam. Iaculis urna id volutpat lacus laoreet non. Lacus luctus
              accumsan tortor posuere ac ut consequat semper viverra. Posuere ac
              ut consequat semper viverra nam libero. Leo in vitae turpis massa
              sed elementum tempus. Egestas sed sed risus pretium quam vulputate
              dignissim suspendisse.
            </p>
          </div>

          {/* Image grid: left portrait + right 2-stack */}
          <div className="mb-12 grid items-start gap-4 lg:grid-cols-[minmax(0,0.91fr)_minmax(0,1fr)]">
            {/* Left: tall portrait */}
            <div className="relative aspect-462/572 w-full overflow-hidden rounded-xl">
              <Image
                src={IMG_LEFT_PORTRAIT}
                alt="Illustration de l'article"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Right: two stacked images */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-509/383 w-full overflow-hidden rounded-xl">
                <Image
                  src={IMG_RIGHT_TOP}
                  alt="Illustration de l'article"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative aspect-509/284 w-full overflow-hidden rounded-xl">
                <Image
                  src={IMG_RIGHT_BOTTOM}
                  alt="Illustration de l'article"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Second heading + extended text */}
          <h2 className="mb-6 font-[Neue_Montreal] text-[24px] font-medium leading-tight text-black sm:text-[28px] lg:text-[32px]">
            Ut porttitor leo a diam sollicitudin tempor
          </h2>

          <div className="mb-10 space-y-5 font-[Neue_Montreal] text-[16px] leading-7 text-[#2c2c2e] lg:text-[17px] lg:leading-7">
            <p>
              Accumsan in nisl nisi scelerisque eu ultrices vitae. Lorem ipsum
              dolor sit amet. Eu turpis egestas pretium aenean. Libero enim sed
              faucibus turpis in. Netus et malesuada fames ac turpis egestas.
              Sit amet commodo nulla facilisi. In hac habitasse platea dictumst
              vestibulum rhoncus est. Nibh venenatis cras sed felis eget velit.
              Semper auctor neque vitae tempus quam pellentesque. Amet massa
              vitae tortor condimentum. Ac tortor vitae purus faucibus ornare
              suspendisse sed nisi.
            </p>
            <p>
              Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
              pellentesque. Dui faucibus in ornare quam viverra orci sagittis.
              Ut porttitor leo a diam sollicitudin tempor. Nunc id cursus metus
              aliquam eleifend mi. Id aliquet lectus proin nibh nisl. Phasellus
              vestibulum lorem sed risus ultricies tristique nulla aliquet enim.
              Non curabitur gravida arcu ac. Fames ac turpis egestas integer
              eget aliquet nibh. Ac feugiat sed lectus vestibulum mattis
              ullamcorper. Molestie a iaculis at erat pellentesque. Nibh tellus
              molestie nunc non blandit massa enim nec dui.
            </p>
            <p>
              Vestibulum morbi blandit cursus risus at ultrices mi. Tellus in
              metus vulputate eu scelerisque felis. Elit duis tristique
              sollicitudin nibh. Vitae et leo duis ut diam quam. Odio ut enim
              blandit volutpat maecenas volutpat blandit aliquam. Mi tempus
              imperdiet nulla malesuada pellentesque elit. Dapibus ultrices in
              iaculis nunc sed augue. Viverra ipsum nunc aliquet bibendum enim.
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Id leo
              in vitae turpis massa sed elementum. Tristique magna sit amet
              purus gravida quis blandit turpis. Quisque sagittis purus sit amet
              volutpat. Vulputate dignissim suspendisse in est ante.
            </p>
          </div>

          {/* Wide image */}
          <div className="relative aspect-990/530 w-full overflow-hidden rounded-xl">
            <Image
              src={IMG_WIDE}
              alt="Illustration de l'article"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ─── Prev / Next navigation ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl w-full px-6 py-10 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="rounded-full border border-[#e8e8e8] px-8 py-4 font-[Neue_Montreal] text-[13px] font-medium uppercase text-black transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              Précédent
            </Link>
            <Link
              href="/blog/article-2"
              className="rounded-full border border-[#e8e8e8] px-8 py-4 font-[Neue_Montreal] text-[13px] font-medium uppercase text-black transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              Suivant
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="h-px bg-[#e0e0e0]" />
      </div>

      {/* ─── Related articles ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {RELATED_ARTICLES.map((article) => (
              <RelatedCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
