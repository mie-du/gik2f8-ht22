const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}

/* Skapa funktion för att spara något */

/* Ta emot det som ska sparas */

/* Gör om det till JSON */

/* Skapa ett requestobjekt */

/* Skicka förfrågan */

/* Returnera förfrågans svar */

/* Skapa ny exempelfil där api-funktion anropas och dess svar tas emot */
