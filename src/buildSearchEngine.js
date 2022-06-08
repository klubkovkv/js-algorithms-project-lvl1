export default (docs) => {
  return {
    docs,
    search: (str) => {
      if (!str) {
        return []
      }
      const cleanToken = str.replace(/\W/g, '');
      return docs.filter(doc => new RegExp('\\b' + cleanToken + '\\b', 'i').test(doc.text))
    }
  }
};
