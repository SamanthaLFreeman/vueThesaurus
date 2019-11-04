export const getSearchedSynonym = (synonym) => {
  return fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${synonym}?key=${process.env.VUE_APP_API_KEY}
`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not retrieve synonym.')
      }
      return response.json();
    })
}