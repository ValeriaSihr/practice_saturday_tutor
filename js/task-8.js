const circle = document.querySelector(".outerCircle")
circle.addEventListener("click", circkeClick)
function circkeClick(event) {
    const item = event.currentTarget
    console.log(item)
    if (item.style.position ==="absolute") {
        item.style.position = "static"
        window.removeEventListener("mousemove", onMauseMove)
        return
    }
    item.style.position = "absolute"
    window.addEventListener("mousemove", onMauseMove)
}
function onMauseMove(event) {
    let left = event.pageX 
    let top = event.pageY
    circle.style.top = `${top - 15}px`
    circle.style.left = `${left - 15}px`

    console.log(left)
    
}