const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

e.preventDefault();

alert("Mensagem enviada com sucesso! 🌱");

formulario.reset();

});

const cards = document.querySelectorAll(".card");

const observador = new IntersectionObserver((entradas)=>{

entradas.forEach((entrada)=>{

if(entrada.isIntersecting){

entrada.target.style.opacity = "1";
entrada.target.style.transform = "translateY(0px)";

}

});

},{
threshold:0.2
});

cards.forEach((card)=>{

card.style.opacity = "0";
card.style.transform = "translateY(40px)";
card.style.transition = "0.8s";

observador.observe(card);

});

const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", () => {

links.forEach(item => item.classList.remove("ativo"));

link.classList.add("ativo");

});

});

window.addEventListener("scroll", ()=>{

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background = "#123020";

}else{

header.style.background = "#173f2b";

}

});
