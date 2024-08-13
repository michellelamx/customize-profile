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
    title: string
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
        title: 'Decibel Outdoor Festival August 16-18',
        url: 'https://tickets.decibeloutdoor.com/',
      },
      {
        title: 'Creamfields August 22-24',
        url: 'https://creamfields.com/',
      },
      {
        title: 'Mysteryland August 30 - September 1',
        url: 'https://mysteryland.nl/en/',
      },
      {
        title: 'Decibel Open Air September 7-8',
        url: 'https://www.decibelopenair.com/',
      },
    ],
    socials: [
      {
        title: `Stream 'Neon Drama' on Spotify`,
        url: 'https://open.spotify.com/artist/1234stellanova5678',
        icon: '/social-icons/spotify.svg',
      },
      {
        title: `Watch the 'Neon Dreams' music video`,
        url: 'https://www.youtube.com/watch?v=neondreams123',
        icon: '/social-icons/youtube.svg',
      },
      {
        title: 'Find my music on Apple Music',
        url: 'https://music.apple.com/us/artist/stella-nova/1234567890',
        icon: '/social-icons/apple-music.svg',
      },
      {
        title: 'Follow me on Instagram',
        url: 'https://www.instagram.com/stellanova_la',
        icon: '/social-icons/instagram.svg',
      },
      {
        title: 'Like my Facebook page',
        url: 'https://www.facebook.com/stellanovalaofficial',
        icon: '/social-icons/facebook.svg',
      },
    ],
  },
]
