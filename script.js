const citations = [
  "La vie commence là où commence ta zone de confort.",
  "Le succès n’est pas la clé du bonheur, le bonheur est la clé du succès.",
  "Crois en toi et tout deviendra possible.",
  "Chaque jour est une nouvelle chance de te surpasser.",
  "Ne regarde pas l’escalier tout entier, commence par la première marche."
];

// 2️⃣ On récupère les éléments HTML
const citationElement = document.getElementById("citation");
const bouton = document.getElementById("changer-citation");

// 3️⃣ Quand on clique sur le bouton...
bouton.addEventListener("click", function() {
  // ... on choisit une citation au hasard
  const index = Math.floor(Math.random() * citations.length);
  const nouvelleCitation = citations[index];

  // ... et on l’affiche à la place de l’ancienne
  citationElement.textContent = `"${nouvelleCitation}"`;
});