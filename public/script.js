fetch("https://randomuser.me/api/?results=100").then((value) =>{   
return value.json();
}).then((value) =>{
  console.log(value)
 
  value.results.forEach(function(result) {
      resultado(result)
    });
});

let container = document.getElementById('container')

function resultado(personaje){

  let div = document.createElement('div');
  let span = document.createElement('span');
  let imagen = document.createElement('img');
  imagen.src= personaje.picture.large;
  span.textContent = `${personaje.name.first}  ${personaje.name.first} `;
  div.appendChild(span)
  div.appendChild(imagen)
  div.classList.add('column');
  container.appendChild(div);
  container.classList.add('wrap');
}
