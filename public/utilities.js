const setCatPic = async () => {
	let request = await fetch("https://api.thecatapi.com/v1/images/search");
	const res = await request.json();
	const catUrl = res[0].url;

	const catImage = document.createElement("img");
	catImage.src = catUrl;
	const imgContainer = document.querySelector(".image-container");
	imgContainer.appendChild(catImage);
};

const removeCatPic = () => {
	const catImage = document.querySelector("img");
	catImage.remove();
};

function resetScore() {
	const scoreCounter = document.querySelector("#scoreCounter");
	let score = Number(scoreCounter.innerText);
	score = 0;
	scoreCounter.innerText = score;
}

function vote(type) {
	const scoreCounter = document.querySelector("#scoreCounter");
	let score = Number(scoreCounter.innerText);
	if (type === "upVote") score++;
	if (type === "downVote") score--;
	scoreCounter.innerText = score;
	if (score > 0) scoreCounter.className = "positive-score";
	if (score < 0) scoreCounter.className = "negative-score";
	if (score === 0) scoreCounter.className = "zero-score";
}

function addComment() {
	const commentInputField = document.querySelector("#addCommentInput");
	let text = commentInputField.value;
	if (text) {
		const commentContainer = document.querySelector(
			".comment-display-container"
		);
		// comment box
		const individualCommentBox = document.createElement("div");
		individualCommentBox.className = "comment-box";
		commentContainer.append(individualCommentBox);
		//comment
		const comment = document.createElement("p");
		comment.className = "comment-text";
		comment.innerText = text;
		individualCommentBox.append(comment);

		//deletbutton
		const deleteButton = document.createElement("button");
		deleteButton.className = "delete-button";
		deleteButton.innerText = "X";
		individualCommentBox.append(deleteButton);
		deleteButton.addEventListener("click", () => {
			individualCommentBox.remove();
		});
	}
	commentInputField.value = "";
}

export { setCatPic, resetScore, removeCatPic, vote, addComment };
