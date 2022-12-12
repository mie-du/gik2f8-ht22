/* Skapa funktion för att spara något (api.js) */
/* Fungerar inte */
/* const data = create({ title: 'hej', author: 'hej' }).then((data) => {
  return data;
}); */

const data = create({ title: 'hej', author: 'hej' }).then((data) => {
  /* Hämta element där data ska skrivas ut */

  /* Skriv det man vill göra med data HÄR, eller skicka till annan funktion */
  const div = document.getElementById('apiData');

  /* let html = ''; */

  data.forEach((obj) => {
    /* html += `<p>${obj.id}</p>`; */
    div.insertAdjacentHTML('beforeend', `<p>${obj.id}</p>`);
  });

  /* console.log(html); */

  div.className = 'test2';
  /* innerHTML ersätter allt */
  /* div.innerHTML = html; */
  /* div.insertAdjacentHTML('beforeend', html); */
  console.log(div);
});
