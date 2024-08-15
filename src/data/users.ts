import { ReactNode } from 'react'

export interface userItem {
  id: number,
  username: string
  image: string
  bio?: string
  links: {
    title: string
    url: string
    icon?: string | ReactNode
  }[],
  socials?: {
    url: string
    icon?: string | ReactNode
  }[]
}

export const users: userItem[] = [
  {
    id: 14537,
    username: 'stellanova',
    image: '/user-pic.webp',
    bio: `⚡️ Booms and blooms 🌸 New single 'Neon Drama' out now!`,
    links: [
      {
        title: 'Decibel Outdoor Festival Aug 16-18',
        url: 'https://tickets.decibeloutdoor.com/',
      },
      {
        title: 'Creamfields Aug 22-24',
        url: 'https://creamfields.com/',
      },
      {
        title: 'Mysteryland Aug 30 - Sept 1',
        url: 'https://mysteryland.nl/en/',
      },
      {
        title: 'Decibel Open Air Sept 7-8',
        url: 'https://www.decibelopenair.com/',
      },
    ],
    socials: [
      {
        url: 'https://open.spotify.com/artist/1234stellanova5678',
        icon: '/social-icons/spotify.svg',
      },
      {
        url: 'https://www.youtube.com/watch?v=neondreams123',
        icon: '/social-icons/youtube.svg',
      },
      {
        url: 'https://music.apple.com/us/artist/stella-nova/1234567890',
        icon: '/social-icons/apple-music.svg',
      },
      {
        url: 'https://www.instagram.com/stellanova_la',
        icon: '/social-icons/instagram.svg',
      },
      {
        url: 'https://www.facebook.com/stellanovalaofficial',
        icon: '/social-icons/facebook.svg',
      },
    ],
  },
]
