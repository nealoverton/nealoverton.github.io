exports.generatePhrase = () => {
  const phraseList = [
    { phrase: "HASTA/LA/VISTA/BABY", category: "Movie quote" },
    { phrase: "HANS/GRUBER", category: "Movie villain" },
    { phrase: "DARTH/MAUL", category: "Movie villain" },
    { phrase: "THOUSAND/ISLAND/DRESSING", category: "Food" },
    { phrase: "BEEKEEPER", category: "Occupation" },
    { phrase: "ZOMBIE", category: "Occupation" },
  ];

  const index = Math.floor(Math.random() * phraseList.length);
  return phraseList[index];
};
