let hamburger = document.querySelector(".burger")
let links = document.querySelectorAll(".list-item__link")
let elBody = document.body
let activeBurger = document.querySelector(".active-burger")

hamburger.addEventListener("click", ()=>{
    activeBurger.classList.toggle("org")
    elBody.classList.toggle("scroll")
})
for(let name of links) {
    name.addEventListener("click", ()=>{
        activeBurger.classList.remove("org")
        elBody.classList.remove("scroll")
    })
}

let elBtns = document.querySelector(".plus")
let elSpan = document.querySelector(".span2")
let elText = document.querySelector(".p21")
elBtns.addEventListener("click", ()=>{
    elSpan.classList.toggle("hidden2")
    elText.classList.toggle("hidden")
})

let elBtns2 = document.querySelector(".plus2")
let elSpan2 = document.querySelector(".span2-2")
let elText2 = document.querySelector(".p21-2")
elBtns2.addEventListener("click", ()=>{
    elSpan2.classList.toggle("hidden2")
    elText2.classList.toggle("hidden")
})

let elBtns3 = document.querySelector(".plus3")
let elSpan3 = document.querySelector(".span2-3")
let elText3 = document.querySelector(".p21-3")
elBtns3.addEventListener("click", ()=>{
    elSpan3.classList.toggle("hidden2")
    elText3.classList.toggle("hidden")
})

let elBtns4 = document.querySelector(".plus4")
let elSpan4 = document.querySelector(".span2-4")
let elText4 = document.querySelector(".p21-4")
elBtns4.addEventListener("click", ()=>{
    elSpan4.classList.toggle("hidden2")
    elText4.classList.toggle("hidden")
})

let elBtns5 = document.querySelector(".plus5")
let elSpan5 = document.querySelector(".span2-5")
let elText5 = document.querySelector(".p21-5")
elBtns5.addEventListener("click", ()=>{
    elSpan5.classList.toggle("hidden2")
    elText5.classList.toggle("hidden")
})

let elBtns6 = document.querySelector(".plus6")
let elSpan6 = document.querySelector(".span2-6")
let elText6 = document.querySelector(".p21-6")
elBtns6.addEventListener("click", ()=>{
    elSpan6.classList.toggle("hidden2")
    elText6.classList.toggle("hidden")
})

let elBtns7 = document.querySelector(".plus7")
let elSpan7 = document.querySelector(".span2-7")
let elText7 = document.querySelector(".p21-7")
elBtns7.addEventListener("click", ()=>{
    elSpan7.classList.toggle("hidden2")
    elText7.classList.toggle("hidden")
})

let elBtns8 = document.querySelector(".plus8")
let elSpan8 = document.querySelector(".span2-8")
let elText8 = document.querySelector(".p21-8")
elBtns8.addEventListener("click", ()=>{
    elSpan8.classList.toggle("hidden2")
    elText8.classList.toggle("hidden")
})

let elBtns9 = document.querySelector(".plus9")
let elSpan9 = document.querySelector(".span2-9")
let elText9 = document.querySelector(".p21-9")
elBtns9.addEventListener("click", ()=>{
    elSpan9.classList.toggle("hidden2")
    elText9.classList.toggle("hidden")
})



// let elBtns = document.querySelectorAll(".button")
// let elSpan = document.querySelectorAll(".span2")
// let elText = document.querySelectorAll(".p21")

// for(let nomi of elBtns) {
//     nomi.addEventListener("click", ()=>{
//         for(let names of elSpan) {
//             names.classList.toggle("hidden2")
//         }
//         for(let nomlari of elText) {
//             nomlari.classList.toggle("hidden")
//         }
//     })
// }