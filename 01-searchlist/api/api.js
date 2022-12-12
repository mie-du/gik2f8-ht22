const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}

/* Skapa funktion för att spara något (api.js) */
async function create(objectToCreateAtServer) {
  /* Ta emot det som ska sparas */

  /* objectToCreateAtServer - JavaScript-objekt 
  {
    name: "Hej"
  }
  */

  /* Gör om det till JSON */
  const JSONData = JSON.stringify(objectToCreateAtServer);

  /* Skapa ett requestobjekt */

  /* Metoden POST */
  const request = new Request(url, {
    method: 'POST',
    body: JSONData
  });

  /* const result = fetch(url, {
    method: 'POST',
    body: JSONData
  }) */

  /* Det som finns i promiset som fetch returneras skickas till callbackfunktion som skickas till then.  */
  /* const jsonResult = fetch(request).then((response) => response.json()); */

  /* const objResult = jsonResult.then((data) => data); */
  /* const objResult = jsonResult.then(handleTranslatedResult); */

  /*   function handleTranslatedResult(data) {
           return data(); 
        } 
  */

  /*   const objResult = jsonResult.then(function (data) {
    return data;
  });
 */
  return [
    { id: 1, title: 'hej', author: 'hej' },
    { id: 2, title: 'hej', author: 'hej' }
  ];
}
