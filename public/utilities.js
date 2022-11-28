const setCatPic = async () => {
	let request = await fetch("https://api.thecatapi.com/v1/images/search");
	const res = await request.json();
	const catUrl = res[0].url;

	// const catImage = document.createElement("div");
	// catImage.style.backgroundImage = `url(${catUrl})`;
	localStorage.setItem("catImg", catUrl);
	const imgContainer = document.querySelector(".image-container");
	imgContainer.style.backgroundImage = `url(${catUrl})`;
};

function reloadCatPic() {
	const catUrl = localStorage.getItem("catImg");
	const imgContainer = document.querySelector(".image-container");
	imgContainer.style.backgroundImage = `url(${catUrl})`;
}

function resetScore() {
	const scoreCounter = document.querySelector("#scoreCounter");
	let score = Number(scoreCounter.innerText);
	score = 0;
	scoreCounter.className = "zero-score";
	scoreCounter.innerText = score;
	localStorage.setItem("score", score);
}

function reloadScore() {
	const scoreCounter = document.querySelector("#scoreCounter");
	let score = Number(scoreCounter.innerText); // lets change this
	score = localStorage.getItem("score");
	scoreCounter.innerText = score;
	if (score > 0) scoreCounter.className = "positive-score";
	if (score < 0) scoreCounter.className = "negative-score";
	if (score === 0) scoreCounter.className = "zero-score";
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
	localStorage.setItem("score", score);
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
			let comments = JSON.parse(localStorage.getItem("comments"));
			comments = comments.filter(el => {
				return el !== text;
			});
			localStorage.setItem("comments", JSON.stringify(comments));
		});
		commentInputField.value = "";
		return text;
	}
}

function reloadComments() {
	if (localStorage.getItem("comments")) {
		let comments = JSON.parse(localStorage.getItem("comments"));
		comments.forEach(text => {
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
				let comments = JSON.parse(localStorage.getItem("comments"));
				comments = comments.filter(el => {
					return el !== text;
				});
				localStorage.setItem("comments", JSON.stringify(comments));
			});
		});
	}
}

function removeAllComments() {
	const comments = document.querySelectorAll(".comment-box");
	comments.forEach(comment => {
		comment.remove();
	});
	localStorage.removeItem("comments");
}

export {
	setCatPic,
	resetScore,
	// removeCatPic,
	vote,
	addComment,
	reloadCatPic,
	reloadScore,
	removeAllComments,
	reloadComments
};
