const btn = document.querySelector("#btn");
const img = document.getElementById('img');

btn.addEventListener ( "click" , () => {img.classList.toggle("show")})
console.log('click');
// nouveau changement
// ..btn.addEventListener("click", () => { img.classList.add ("show")})
