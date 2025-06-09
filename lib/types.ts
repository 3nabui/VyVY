export interface VideoData {
  id: string
  title: string
  embedId: string
}

export type WorkCategory = "wedding" | "tvc" | "recap"

export interface ContactInfo {
  phone: string
  email: string
  social: {
    facebook: string
    instagram: string
  }
}
