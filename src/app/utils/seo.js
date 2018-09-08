/**
 * Возвращает текст без тегов
 * @param html
 * @returns {((string | null) | string) | string}
 */
export const stripTags = (html) => {
  return html.replace(/<\/?[^>]+(>|$)/g, '')
}

/**
 * Возвращает слова через запятую
 * @param text
 * @returns {string}
 */
export const getWords = (text) => {
  const words = text.split(' ')
  return words.join(', ')
}
