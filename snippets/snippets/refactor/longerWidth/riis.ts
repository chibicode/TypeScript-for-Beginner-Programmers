/**
 * Takes a string and adds "padding" to the left.
 *
 * If 'padding' is a number, then that number of
 * spaces is added to the left side.
 *
 * If 'padding' is a string, then 'padding' is
 * appended to the left side.
 */
function padLeft(
  value: string,
  padding: number | string
) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  } else {
    return padding + value
  }
}
