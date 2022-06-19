let holder = document.getElementById("imgHolder");
let btnReload = document.getElementById("reload");
const url = "https://api.thecatapi.com/v1/images/search";

btnReload.addEventListener("click", () =>{
  fetch(url).then((resp) => resp.json()).then(function(data){
    holder.innerHTML = `<img src="${data[0].url}"/>`
  })
})