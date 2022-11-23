import {
	setCatPic,
	resetScore,
	removeCatPic,
	vote,
	addComment
} from "./utilities.js";

window.addEventListener("DOMContentLoaded", () => {
	setCatPic();
	resetScore();

	const newCatButton = document.querySelector("#newCatButton");
	newCatButton.addEventListener("click", () => {
		removeCatPic();
		setCatPic();
		resetScore();
	});

	const upVoteButton = document.querySelector("#upVoteButton");
	upVoteButton.addEventListener("click", () => {
		vote("upVote");
	});

	const downVoteButton = document.querySelector("#downVoteButton");
	downVoteButton.addEventListener("click", () => {
		vote("downVote");
	});

	const commentButton = document.querySelector("#comment-submit-button");
	commentButton.addEventListener("click", event => {
		event.preventDefault();
		addComment();
	});
});
