import { DateTime } from 'luxon'

export const articleKeys: ReadonlyArray<keyof typeof articlesData> = [
  'generics'
]

export const articlesData = {
  todo: {
    title:
      'TypeScript Tutorial for JS Programmers Who Know How to Build a Todo App',
    date: DateTime.fromISO('2019-12-01T12:00:00Z'),
    description: 'Learn TypeScript by Building a Todo App',
    ogImage: 'todo'
  },
  generics: {
    title:
      'TypeScript Generics for People Who Gave Up on Understanding Generics',
    date: DateTime.fromISO('2019-11-22T12:00:00Z'),
    description: 'TypeScript Generics Too Hard?',
    ogImage: 'generics'
  }
}
