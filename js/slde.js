let fornGrop = document.querySelector('.form-group')
let label = document.querySelectorAll('.labell')
// let HH2 = document.querySelectorAll('li h2')


label.forEach(clilebel => {
    clilebel.addEventListener("click", function(){
    fornGrop.querySelector('.active').classList.remove('active')


    clilebel.classList.add('active')
      // HH2.classList.add('HE2')
   })
})

let firstintP = document.querySelector('.firstintp')
let closeforM = document.querySelector('.closeform')

let forM = document.querySelector('.form')
firstintP.addEventListener("click", clicte)
closeforM.addEventListener("click", closeforMM)


function clicte() {
   forM.classList.add("active")
}
function closeforMM() {
   forM.classList.remove("active")
}
// closeform
