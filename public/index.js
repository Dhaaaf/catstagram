import { setCatPic, resetScore, removeCatPic, vote } from "./utilities.js"

// const scoreCounter = document.querySelector("#scoreCounter")

window.addEventListener("DOMContentLoaded", () => {
    setCatPic()
    resetScore()

    const newCatButton = document.querySelector('#newCatButton')
    newCatButton.addEventListener("click", () => {
        removeCatPic()
        setCatPic()
        resetScore()
    })

    const upVoteButton = document.querySelector("#upVoteButton")
    upVoteButton.addEventListener("click", () => {
        vote("upVote")
    })

    const downVoteButton = document.querySelector("#downVoteButton")
    downVoteButton.addEventListener("click", () => {
        vote("downVote")
    })

})

/// onload vs DOMContentLoaded
/// Should we put all our functions in our load function?
/// Why does this work as it is? Wasn't working outside the function
