const setCatPic = async () => {
    let request = await fetch("https://api.thecatapi.com/v1/images/search")
    const res = await request.json()
    const catUrl = res[0].url

    const catImage = document.createElement("img")
    catImage.src = catUrl
    const imgContainer = document.querySelector(".image-container");
    imgContainer.appendChild(catImage)
}

const removeCatPic = () => {
    const catImage = document.querySelector("img")
    catImage.remove()
}

function resetScore() {
    const scoreCounter = document.querySelector("#scoreCounter")
    let score = Number(scoreCounter.innerText)
    score = 0;
    console.log(scoreCounter)
    scoreCounter.innerText = score
}

function vote(type) {
    const scoreCounter = document.querySelector("#scoreCounter")
    let score = Number(scoreCounter.innerText)
    if (type === "upVote") score++
    if (type === "downVote") score--
    scoreCounter.innerText = score
}



export { setCatPic, resetScore, removeCatPic, vote }
