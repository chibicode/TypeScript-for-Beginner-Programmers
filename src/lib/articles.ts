import { DateTime } from 'luxon'

export const articlesList: ReadonlyArray<keyof typeof articlesData> = [
  'generics'
]

export const articlesData = {
  generics: {
    title:
      'TypeScript Generics for People Who Gave Up on Understanding Generics',
    date: DateTime.fromISO('2019-11-22T12:00:00Z'),
    description: 'TypeScript Generics Too Hard?',
    ogImage: 'generics'
  }
}
