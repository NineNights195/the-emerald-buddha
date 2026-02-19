export interface Translations {
  nav: {
    brand: string
    home: string
    history: string
    culture: string
    thaiSociety: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    ctaHistory: string
    ctaCulture: string
  }
  sections: {
    history: {
      overline: string
      title: string
      description: string
    }
    culture: {
      overline: string
      title: string
      description: string
    }
    thaiSociety: {
      overline: string
      title: string
      description: string
    }
  }
  card: {
    readMore: string
    minRead: string
  }
  footer: {
    tagline: string
    copyright: string
    links: {
      home: string
      history: string
      culture: string
      thaiSociety: string
    }
  }
  post: {
    back: string
    notFound: string
  }
}

export type Language = 'en' | 'th'
