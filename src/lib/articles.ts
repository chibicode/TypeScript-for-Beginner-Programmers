import { DateTime } from 'luxon'

export const articleKeys: ReadonlyArray<keyof typeof articlesData> = [
  'refactor',
  'todo',
  'generics'
]

export const articlesData = {
  todo: {
    title:
      'TypeScript Tutorial for JS Programmers Who Know How to Build a Todo App',
    date: DateTime.fromISO('2019-12-18T12:00:00Z'),
    description: 'Learn TypeScript by Building a Todo App',
    ogImage: 'todo-v2'
  },
  generics: {
    title:
      'TypeScript Generics for People Who Gave Up on Understanding Generics',
    date: DateTime.fromISO('2019-11-22T12:00:00Z'),
    description: 'TypeScript Generics Too Hard?',
    ogImage: 'generics'
  },
  refactor: {
    title: 'Your Coding Tutorial Might Need Some Refactoring',
    date: DateTime.fromISO('2020-01-01T09:00:00Z'),
    description: 'Seven Opinionated Tips',
    ogImage: 'refactor'
  }
}
