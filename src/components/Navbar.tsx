import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-emerald-800 text-lg hover:text-emerald-600 transition-colors">
          {t.nav.brand}
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link to="/#hero" className="hover:text-emerald-700 transition-colors">{t.nav.home}</Link>
          <Link to="/#history" className="hover:text-emerald-700 transition-colors">{t.nav.history}</Link>
          <Link to="/#culture" className="hover:text-emerald-700 transition-colors">{t.nav.culture}</Link>
          <Link to="/#thai-society" className="hover:text-emerald-700 transition-colors">{t.nav.thaiSociety}</Link>
        </div>
        <button
          onClick={toggleLanguage}
          className="px-3 py-1.5 rounded-full border border-emerald-700 text-emerald-700 text-sm font-medium hover:bg-emerald-700 hover:text-white transition-colors cursor-pointer"
        >
          {language === 'en' ? 'ภาษาไทย' : 'English'}
        </button>
      </div>
    </nav>
  )
}
