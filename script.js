const btnMain = document.getElementsByClassName("btn");
const emailBox = document.getElementById("posicao-form");
const fundo = document.getElementById("fundo")
const btnSecond = document.getElementById("submit")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
for (let index = 0; index < btnMain.length; index+=1){
  btnMain[index].addEventListener("click", () => {
    emailBox.style.display = "block"
  })
  btnMain[index].addEventListener("mouseleave", () => {
    btnMain[index].style.transitionDuration = "3s"
  })
};

fundo.addEventListener("click", () => {
  emailBox.style.display = "none"
})

btnSecond.addEventListener("click", function(event){
  
  localStorage.setItem('firstname', 'marlon')
    window.location.href='./agradecimento.html'
  
});