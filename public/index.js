import {
	setCatPic,
	resetScore,
	removeCatPic,
	vote,
	addComment,
	reloadCatPic,
	reloadScore,
	removeAllComments
} from "./utilities.js";

window.addEventListener("DOMContentLoaded", () => {
	// const comments = [];
	if (localStorage.getItem("catImg")) {
		reloadCatPic();
		reloadScore();
	} else {
		setCatPic();
		resetScore();
	}

	const newCatButton = document.querySelector("#newCatButton");
	newCatButton.addEventListener("click", () => {
		removeCatPic();
		setCatPic();
		resetScore();
		removeAllComments();
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
		// comments.push(addComment());
		// localStorage.setItem("comments", JSON.stringify(comments));
	});
});
