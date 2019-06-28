
console.log("START");

const getPosts = () => {

    return fetch(`https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22`)
    .then(res => res.json())
    .then(posts => console.log(posts))

}




/*
var value;
$.getJSON("https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1", function(data){
    console.log(data);
    $(".temp").append(temp);
});
data.
$.getJSON("https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-fc97c0d6-b9dd-4620-aad2-efd99ef9c81b", function(data){
 //   console.log(data);

    console.log(data.freeChampionIds);
});*/

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('champs');
const url = 'https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-fc97c0d6-b9dd-4620-aad2-efd99ef9c81b';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  
    console.log(data.freeChampionIds[0].renderToString());
    let champs = data.list;
    
  /*
  return champs.map(function(champ) {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
    span.innerHTML = `${champ.name.first} ${champ.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })*/
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});   
