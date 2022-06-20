let container = document.getElementById("container");
let url = "https://api.thecatapi.com/v1/images/search";

function gerar(numero){
  for(let i = 0; i < numero; i++){
    fetch(url).then((resp) => resp.json()).then(function(data){
      container.innerHTML += `<img src="${data[0].url}"/>`
    })
  }
}
gerar(20);

window.addEventListener('scroll',()=>{
  if(window.scrollY + window.innerHeight >= 
  document.documentElement.scrollHeight){
  gerar(10);
  }
})