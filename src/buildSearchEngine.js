export default (docs) => {
  return {
    docs,
    search: (str) => {
      if (!str) {
        return [];
      }
      const cleanToken = str.replace(/\W/g, '');
      return docs.map(doc => {
        return {
          ...doc,
          score: doc.text.match(new RegExp('\\b' + cleanToken + '\\b', 'gi'))?.length ?? 0
        }
      }).filter(doc => doc.score).sort((left, right) => right.score - left.score)
    }
  }
};
