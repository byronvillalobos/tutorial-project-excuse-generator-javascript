function excuse(){

let who = ['the dog','my granma','his turtle','my bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework','the keys','the car'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let alert1= Math.floor(Math.random()*((who.length-1)+1));
let alert2= Math.floor(Math.random()*((who.length-1)+1));
let alert3= Math.floor(Math.random()*((who.length-1)+1));
let alert4= Math.floor(Math.random()*((who.length-1)+1));

let main =document.getElementById("principal");
let excuseComplete= who[alert1]+" "+action[alert2]+" "+what[alert3]+" "+when[alert4];

main.innerHTML=excuseComplete;
}

