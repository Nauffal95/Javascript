const btn = document.querySelector("#btn");
const img = document.getElementById('img');

btn.addEventListener ( "click" , () => {img.classList.toggle("show")})
console.log('click');

// ..btn.addEventListener("click", () => { img.classList.add ("show")})
