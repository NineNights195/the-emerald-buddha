import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-emerald-950 text-emerald-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <Link to="/" className="font-semibold text-white text-lg mb-2 hover:text-emerald-200 transition-colors block">
              {t.nav.brand}
            </Link>
            <p className="text-sm text-emerald-400">{t.footer.tagline}</p>
          </div>
          <div className="flex gap-8 text-sm">
            <Link to="/" className="hover:text-white transition-colors">{t.footer.links.home}</Link>
            <Link to="/#history" className="hover:text-white transition-colors">{t.footer.links.history}</Link>
            <Link to="/#culture" className="hover:text-white transition-colors">{t.footer.links.culture}</Link>
            <Link to="/#thai-society" className="hover:text-white transition-colors">{t.footer.links.thaiSociety}</Link>
          </div>
        </div>
        <div className="border-t border-emerald-800 pt-6 text-sm text-emerald-500">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
