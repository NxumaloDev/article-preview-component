let shareBtn = document.querySelectorAll(".shareBtn")
let info = document.querySelector(".info")
let share = document.querySelector(".share-info")

share.style.pointerEvents = 'none'
shareBtn[0].addEventListener("click", () => {
        share.style.opacity = "1"
        info.style.opacity = "0"
        share.style.pointerEvents = 'fill'
        info.style.pointerEvents = 'none'
})

shareBtn[1].addEventListener("click", () => { 
        share.style.opacity = "0"
        info.style.opacity = "1"
        share.style.pointerEvents = 'none'
        info.style.pointerEvents = 'fill'
})