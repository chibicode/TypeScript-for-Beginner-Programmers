import { DateTime } from 'luxon'

export const dateString = (date: DateTime) =>
  date
    .setLocale('en')
    .setZone('America/Los_Angeles')
    .toFormat('LLL d, yyyy')

export const dateSchemaString = (date: DateTime) =>
  date.setZone('America/Los_Angeles').toISO()
