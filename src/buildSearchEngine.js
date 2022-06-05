export default (docs) => {
  return {
    docs,
    search: (str) => {
      return docs.filter(doc => doc.text.split(' ').includes(str))
    }
  }
};
