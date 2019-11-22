import { useRef, useEffect } from 'react'

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export default function useInterval(
  callback: (...args: any[]) => void,
  delay: number | null
) {
  const savedCallback = useRef<(...args: any[]) => void>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
