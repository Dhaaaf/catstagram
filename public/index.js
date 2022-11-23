import { setCatPic, resetScore, removeCatPic, vote } from "./utilities.js"

const newCatButton = document.querySelector('#newCatButton')
const scoreCounter = document.querySelector("#scoreCounter")
const upVoteButton = document.querySelector("#upVoteButton")
const downVoteButton = document.querySelector("#downVoteButton")

window.onload = () => {
    setCatPic()
    resetScore()
}

newCatButton.addEventListener("click", () => {
    removeCatPic()
    setCatPic()
    resetScore()
})

upVoteButton.addEventListener("click", () => {
    vote("upVote")
})

downVoteButton.addEventListener("click", () => {
    vote("downVote")
})
