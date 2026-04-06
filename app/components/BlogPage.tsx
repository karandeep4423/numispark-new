import Image from "next/image";
import Link from "next/link";

/* ────────────────────────── Article images from Figma ────────────────────────── */
const IMG_FEATURED =
  "https://www.figma.com/api/mcp/asset/fcaf12be-580c-47fb-9cbd-77e37067f819";
const IMG_ARTICLE_2 =
  "https://www.figma.com/api/mcp/asset/61447b28-ca37-4ae9-b177-12ce0deddb0e";
const IMG_ARTICLE_3 =
  "https://www.figma.com/api/mcp/asset/13eb3955-e8c5-480d-ac31-2a45ae76b3b1";
const IMG_ARTICLE_4 =
  "https://www.figma.com/api/mcp/asset/c47b909e-32e3-4fc2-8e91-f5570a718154";
const IMG_ARTICLE_5 =
  "https://www.figma.com/api/mcp/asset/cf4fec9d-1c76-4528-b2f3-efa5e169e6c9";
const IMG_ARTICLE_6 =
  "https://www.figma.com/api/mcp/asset/7e939762-8488-4a2a-b4cb-1c103cca3d69";
const IMG_ARTICLE_7 =
  "https://www.figma.com/api/mcp/asset/6ede0bba-57e3-488a-add0-6d5ed7532cf3";
const IMG_ARTICLE_8 =
  "https://www.figma.com/api/mcp/asset/37bad6d5-0755-4dd3-8651-8f8d52be0dd8";
const IMG_ARTICLE_9 =
  "https://www.figma.com/api/mcp/asset/4ba0ef42-3c47-497c-81ff-8247e75f76e5";
const IMG_ARTICLE_10 =
  "https://www.figma.com/api/mcp/asset/259d9860-89a3-44d7-92e8-b4ea1301b094";

/* ────────────────────────── Data ────────────────────────── */

type Article = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
};

const FEATURED_ARTICLE: Article = {
  slug: "article-a-la-une",
  date: "Rédigé le 12 janvier 2026",
  title: "Article à la une",
  excerpt:
    "Nunc velit augue, scelerisque dignissim, lobortis et, aliquam in, risus. In eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
  image: IMG_FEATURED,
};

const ARTICLES: Article[] = [
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
  {
    slug: "article-5",
    date: "Rédigé le 12 janvier 2026",
    title: "Article 5",
    excerpt:
      "Nunc velit augue, scelerisque dignissim, lobortis et, aliquam in, risus. In eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: IMG_ARTICLE_5,
  },
  {
    slug: "article-6",
    date: "Rédigé le 12 janvier 2026",
    title: "Article 6",
    excerpt:
      "Nunc velit augue, scelerisque dignissim, lobortis et, aliquam in, risus. In eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: IMG_ARTICLE_6,
  },
  {
    slug: "article-7",
    date: "Rédigé le 12 janvier 2026",
    title: "Article 7",
    excerpt:
      "Nunc velit augue, scelerisque dignissim, lobortis et, aliquam in, risus. In eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: IMG_ARTICLE_7,
  },
  {
    slug: "article-8",
    date: "Rédigé le 12 janvier 2026",
    title: "Article 8",
    excerpt:
      "Nunc velit augue, scelerisque dignissim, lobortis et, aliquam in, risus. In eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: IMG_ARTICLE_8,
  },
  {
    slug: "article-9",
    date: "Rédigé le 12 janvier 2026",
    title: "Article 9",
    excerpt:
      "Nunc velit augue, scelerisque dignissim, lobortis et, aliquam in, risus. In eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: IMG_ARTICLE_9,
  },
  {
    slug: "article-10",
    date: "Rédigé le 12 janvier 2026",
    title: "Article 10",
    excerpt:
      "Nunc velit augue, scelerisque dignissim, lobortis et, aliquam in, risus. In eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: IMG_ARTICLE_10,
  },
];

/* ────────────────────────── Sub-components ────────────────────────── */

function ArticleCard({ article }: { article: Article }) {
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

function PlusIcon() {
  return (
    <span className="flex h-5 w-5 items-center justify-center text-[18px] leading-none">
      +
    </span>
  );
}

function ChevronDown() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ────────────────────────── Main Component ────────────────────────── */

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* ─── Hero header ─── */}
      <section className="border-b border-[#dadada]">
        <div className="mx-auto max-w-350 px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
          {/* Breadcrumb */}
          <p className="mb-8 font-[Roboto_Mono] text-[12px] uppercase text-[#8f8f8f]">
            {"{ Le blog }"}
          </p>

          {/* Title + description grid */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <h1 className="font-[Neue_Montreal] text-[38px] font-medium leading-[1.1] text-black sm:text-[44px] lg:text-[52px]">
              Suivez toute l&apos;actualité
              <br />
              de Numispark
            </h1>
            <p className="self-center font-[Neue_Montreal] text-[16px] leading-7 text-black lg:text-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Filter bar ─── */}
      <section className="border-b border-[#dadada]">
        <div className="mx-auto flex max-w-350 flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8 lg:px-12 xl:px-16">
          {/* Article count */}
          <p className="font-[Neue_Montreal] text-[16px] font-medium text-black">
            22 articles
          </p>

          {/* Dropdowns */}
          <div className="flex flex-wrap gap-3">
            <div className="flex cursor-pointer items-center gap-2 rounded-full border border-[#d9d9d9] px-5 py-3.5 font-[Neue_Montreal] text-[14px] text-black transition-colors hover:border-black">
              <span>Toutes les catégories</span>
              <ChevronDown />
            </div>
            <div className="flex cursor-pointer items-center gap-2 rounded-full border border-[#d9d9d9] px-5 py-3.5 font-[Neue_Montreal] text-[14px] text-black transition-colors hover:border-black">
              <span>Du plus récent au plus vieux</span>
              <ChevronDown />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured article ─── */}
      <section className="border-b border-[#dadada]">
        <div className="mx-auto max-w-350 px-6 py-12 sm:px-8 lg:px-12 xl:px-16">
          <Link
            href={`/blog/${FEATURED_ARTICLE.slug}`}
            className="group grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-16"
          >
            {/* Image */}
            <div className="relative aspect-738/453 w-full overflow-hidden rounded-xl">
              <Image
                src={FEATURED_ARTICLE.image}
                alt={FEATURED_ARTICLE.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                unoptimized
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="font-[Roboto_Mono] text-[11px] uppercase tracking-widest text-[#676768]">
                  {FEATURED_ARTICLE.date}
                </p>
                <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[36px] lg:text-[42px]">
                  {FEATURED_ARTICLE.title}
                </h2>
                <p className="font-[Neue_Montreal] text-[15px] leading-7 text-[#676768]">
                  {FEATURED_ARTICLE.excerpt}
                </p>
              </div>

              {/* CTA button */}
              <div className="inline-flex w-fit items-center gap-8 rounded-full border border-black px-6 py-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                Lire l&apos;article
                <PlusIcon />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── Article grid ─── */}
      <section className="border-b border-[#dadada]">
        <div className="mx-auto max-w-350 px-6 py-12 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pagination ─── */}
      <section className="border-b border-[#dadada]">
        <div className="mx-auto flex max-w-350 items-center justify-center gap-3 px-6 py-10 sm:px-8 lg:px-12 xl:px-16">
          <button className="font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#8f8f8f] hover:text-black">
            Précédent
          </button>

          <div className="flex items-center gap-2">
            {/* Active page */}
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#05ffe0] font-[Neue_Montreal] text-[14px] font-medium text-black">
              1
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full font-[Neue_Montreal] text-[14px] text-black hover:bg-[#f1f1f1]">
              2
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full font-[Neue_Montreal] text-[14px] text-black hover:bg-[#f1f1f1]">
              3
            </button>
            <span className="px-1 font-[Neue_Montreal] text-[14px] text-[#8f8f8f]">
              …
            </span>
            <button className="flex h-9 w-9 items-center justify-center rounded-full font-[Neue_Montreal] text-[14px] text-black hover:bg-[#f1f1f1]">
              16
            </button>
          </div>

          <button className="font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-black hover:text-[#05ffe0]">
            Suivant
          </button>
        </div>
      </section>
    </main>
  );
}
