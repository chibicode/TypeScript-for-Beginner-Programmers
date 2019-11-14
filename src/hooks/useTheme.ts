import { useContext } from 'react'
import ThemeContext from 'src/components/ThemeContext'

const useTheme = () => useContext(ThemeContext)

export default useTheme
