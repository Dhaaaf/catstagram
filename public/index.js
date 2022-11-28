import {
	setCatPic,
	resetScore,
	// removeCatPic,
	vote,
	addComment,
	reloadCatPic,
	reloadScore,
	removeAllComments,
	reloadComments
} from "./utilities.js";

window.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem("catImg")) {
		reloadCatPic();
		reloadScore();
		reloadComments();
	} else {
		setCatPic();
		resetScore();
	}

	const newCatButton = document.querySelector("#newCatButton");
	newCatButton.addEventListener("click", () => {
		// removeCatPic();
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

	let comments;

	const commentForm = document.querySelector("form");
	commentForm.addEventListener("submit", event => {
		event.preventDefault();
		if (localStorage.getItem("comments")) {
			comments = JSON.parse(localStorage.getItem("comments"));
		} else {
			comments = [];
		}
		comments.push(addComment());
		localStorage.setItem("comments", JSON.stringify(comments));
	});
});
