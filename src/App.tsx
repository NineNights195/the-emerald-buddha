import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { posts } from './data/posts'
import type { Category, Post } from './data/posts'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PostPage from './pages/PostPage'
import './App.css'

// ── Category style maps ─────────────────────────────────────────────────────

const CATEGORY_CHIP: Record<Category, string> = {
  history: 'bg-amber-100 text-amber-700 ring-amber-200',
  culture: 'bg-violet-100 text-violet-700 ring-violet-200',
  'thai-society': 'bg-sky-100 text-sky-700 ring-sky-200',
}

const CATEGORY_LABEL: Record<Category, { en: string; th: string }> = {
  history: { en: 'History', th: 'ประวัติศาสตร์' },
  culture: { en: 'Culture', th: 'วัฒนธรรม' },
  'thai-society': { en: 'Thai Society', th: 'สังคมไทย' },
}

const IMG_PLACEHOLDER_BG: Record<Category, string> = {
  history: 'from-amber-50 to-stone-100',
  culture: 'from-violet-50 to-rose-50',
  'thai-society': 'from-sky-50 to-cyan-50',
}

const LOREM = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
]

// ── Image socket ────────────────────────────────────────────────────────────

function ImageSocket({ category, index }: { category: Category; index: number }) {
  return (
    <div
      className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br ${IMG_PLACEHOLDER_BG[category]} ring-1 ring-inset ring-black/5`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-300 select-none">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className="text-[11px] font-medium tracking-wide">Image {index + 1}</span>
      </div>
    </div>
  )
}

// ── Post card ───────────────────────────────────────────────────────────────

function PostCard({ post, index }: { post: Post; index: number }) {
  const { t, language } = useLanguage()
  const chip = CATEGORY_CHIP[post.category]
  const label = CATEGORY_LABEL[post.category][language]

  return (
    <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
      {/* ── Header row ─────────────────────────────────────────── */}
      <div className="px-5 pt-5 flex items-center justify-between gap-3">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ring-1 ${chip}`}>
          {label}
        </span>
        <time className="text-[11px] text-gray-400 shrink-0">{post.date}</time>
      </div>

      {/* ── Title ──────────────────────────────────────────────── */}
      <div className="px-5 pt-3 pb-4">
        <h3 className="text-[15px] font-bold text-gray-900 leading-snug">
          {post.title[language]}
        </h3>
      </div>

      {/* ── Image socket ───────────────────────────────────────── */}
      <div className="px-5">
        <ImageSocket category={post.category} index={index} />
      </div>

      {/* ── Lorem ipsum body ───────────────────────────────────── */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
        <p className="text-[13px] text-gray-500 leading-relaxed flex-1">
          {LOREM[index % LOREM.length]}
        </p>

        {/* ── Footer meta ──────────────────────────────────────── */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[11px] text-gray-400 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readMin} {t.card.minRead}
          </span>
          <Link
            to={`/${post.category}/${post.slug}`}
            className="text-[12px] text-emerald-700 font-semibold group-hover:text-emerald-900 transition-colors"
          >
            {t.card.readMore}
          </Link>
        </div>
      </div>
    </article>
  )
}

// ── Section ─────────────────────────────────────────────────────────────────

function Section({
  id,
  category,
  overline,
  title,
  description,
  tinted,
}: {
  id: string
  category: Category
  overline: string
  title: string
  description: string
  tinted?: boolean
}) {
  const sectionPosts = posts.filter((p) => p.category === category)
  return (
    <section id={id} className={tinted ? 'bg-slate-50 py-20 px-4' : 'bg-white py-20 px-4'}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 pb-8 border-b border-gray-100">
          <p className="text-emerald-700 text-xs font-bold uppercase tracking-[0.18em] mb-3">{overline}</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-500 max-w-2xl text-[15px] leading-relaxed">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectionPosts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  const { t } = useLanguage()
  return (
    <section className="pt-32 pb-24 px-4 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block bg-emerald-700/50 border border-emerald-500/40 text-emerald-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
          {t.hero.badge}
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.hero.title}</h1>
        <p className="text-emerald-200 text-lg leading-relaxed mb-10">{t.hero.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#history"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-lg transition-colors"
          >
            {t.hero.ctaHistory}
          </a>
          <a
            href="#culture"
            className="px-6 py-3 border border-emerald-400/60 hover:bg-emerald-800/50 text-white font-semibold rounded-lg transition-colors"
          >
            {t.hero.ctaCulture}
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Home page ───────────────────────────────────────────────────────────────

function HomePage() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Section
        id="history"
        category="history"
        overline={t.sections.history.overline}
        title={t.sections.history.title}
        description={t.sections.history.description}
      />
      <Section
        id="culture"
        category="culture"
        overline={t.sections.culture.overline}
        title={t.sections.culture.title}
        description={t.sections.culture.description}
        tinted
      />
      <Section
        id="thai-society"
        category="thai-society"
        overline={t.sections.thaiSociety.overline}
        title={t.sections.thaiSociety.title}
        description={t.sections.thaiSociety.description}
      />
      <Footer />
    </div>
  )
}

// ── Root ────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category/:slug" element={<PostPage />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}
