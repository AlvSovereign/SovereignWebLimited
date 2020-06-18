export interface AllSanityWork {
  edges: {
    node: SanityWork[]
  }
}

export interface SanityImageWithAlt {
  _key: string
  _type: string
  altText: string
  image: SanityImage
}

export interface SanityImage {
  _key: string
  _type: string
  altText: string
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
  _type: string
  _createdAt(
    difference: String,
    formatString: String,
    fromNow: Boolean,
    locale: string
  ): Date
  id: string
  name: string
  title: string
  subtitle: string
  tagline: string
  slug: SanitySlug
  thumbnail: SanityImageWithAlt
  mainImage: SanityImageWithAlt
  technology: [SanityTechnology]
  body: [any]
  url: string
}
