export const copyText = (text: string) => {
  if (!navigator.clipboard.writeText) {
    return Promise.reject('The Clipboard API is not available.')
  }
  return navigator.clipboard.writeText(text)
}
