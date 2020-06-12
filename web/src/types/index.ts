export interface AllSanityWork {
  edges: {
    node: SanityWork[]
  }
}

export interface SanityImage {
  _key: string
  _type: string
  asset: any
  hotspot: any
  crop: any
}

export interface SanitySlug {
  _key: string
  _type: string
  current: string
}

export interface SanityTechnology {
  _id: string
  name: string
  techImage: SanityImage
  id: string
}

export interface SanityWork {
  _id: string
  _rawBody: any
  id: string
  _type: string
  _createdAt(
    difference: String,
    formatString: String,
    fromNow: Boolean,
    locale: string
  ): Date
  name: string
  title: string
  subtitle: string
  tagline: string
  slug: SanitySlug
  thumbnail: SanityImage
  mainImage: SanityImage
  technology: [SanityTechnology]
  body: [any]
}
