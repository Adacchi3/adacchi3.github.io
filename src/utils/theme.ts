export const ANTI_FLASH_SCRIPT = `(function() {
  try {
    const theme = sessionStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light') {
      document.documentElement.classList.add('light')
    }
  } catch (e) {}
})()`
