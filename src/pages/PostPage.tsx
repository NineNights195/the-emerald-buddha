import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'
import type { Category } from '../data/posts'
import { useLanguage } from '../contexts/LanguageContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CATEGORY_CHIP: Record<Category, string> = {
  history: 'bg-amber-100 text-amber-700 ring-amber-200',
  culture: 'bg-violet-100 text-violet-700 ring-violet-200',
  'thai-society': 'bg-sky-100 text-sky-700 ring-sky-200',
}

const IMG_PLACEHOLDER_BG: Record<Category, string> = {
  history: 'from-amber-50 to-stone-100',
  culture: 'from-violet-50 to-rose-50',
  'thai-society': 'from-sky-50 to-cyan-50',
}

export default function PostPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>()
  const { language, t } = useLanguage()

  const post = posts.find(
    (p) => p.slug === slug && p.category === (category as Category),
  )

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <p className="text-gray-400 mb-4">{t.post.notFound}</p>
            <Link to="/" className="text-emerald-700 font-semibold hover:underline">
              ← {t.post.back}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const chip = CATEGORY_CHIP[post.category]
  const imgBg = IMG_PLACEHOLDER_BG[post.category]

  const categoryLabel: Record<Category, string> = {
    history: t.nav.history,
    culture: t.nav.culture,
    'thai-society': t.nav.thaiSociety,
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4">

          {/* ── Back link ──────────────────────────────────────────── */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-700 transition-colors mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {t.post.back}
          </Link>

          {/* ── Meta row ───────────────────────────────────────────── */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ring-1 ${chip}`}>
              {categoryLabel[post.category]}
            </span>
            <time className="text-[12px] text-gray-400">{post.date}</time>
            <span className="text-gray-200">·</span>
            <span className="text-[12px] text-gray-400 flex items-center gap-1">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              {post.readMin} {t.card.minRead}
            </span>
          </div>

          {/* ── Title ──────────────────────────────────────────────── */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-10">
            {post.title[language]}
          </h1>

          {/* ── Cover image socket ─────────────────────────────────── */}
          <div className={`relative aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-br ${imgBg} ring-1 ring-inset ring-black/5 mb-10`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-300 select-none">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-[13px] font-medium tracking-wide">Cover Image</span>
            </div>
          </div>

          {/* ── Body text ──────────────────────────────────────────── */}
          <div className="space-y-5">
            {post.body[language].map((para, i) => (
              <p key={i} className="text-[15px] text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
