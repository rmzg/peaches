import data from '../data.json'

// Typing .json files is incredibly annoying
const comics = data as unknown as Comic[]

export interface Comic {
  month: number
  num: number
  link: string
  year: number
  news: string
  safe_title: string
  transcript: string
  alt: string
  img: string
  title: string
  day: number
}

export function imgUri(comic: Comic) {
  return '/images/' + comic.img.split('/').pop()
}

export default comics
