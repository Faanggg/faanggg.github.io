//target all elements to save to constants
const page1Button = document.querySelector("#page1Button");
const page2Button = document.querySelector("#page2Button");
const page3Button = document.querySelector("#page3Button");
const page4Button = document.querySelector("#page4Button");
var allpages = document.querySelectorAll(".page");

hideAllPages();
showPage(4);
function hideAllPages() { //function to hide all pages
	for (let onepage of allpages) { //go through all subtopic pages
		onepage.style.display = "none"; //hide it
	}
}

function showPage(pageno) { //function to show selected page no
	hideAllPages();
	//select the page based on the parameter passed in
	let onepage = document.querySelector("#page" + pageno);
	//show the page
	onepage.style.display = "block";
}

page1Button.addEventListener("click", function() {
	showPage(1);
});
page2Button.addEventListener("click", function() {
	showPage(2);
});
page3Button.addEventListener("click", function() {
	showPage(3);
});
page4Button.addEventListener("click", function() {
	showPage(4);
});

const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("nav ul");

function toggleMenus() { 
	/*open and close menu*/
	menuItemsList.classList.toggle("menuShow");
}

hamBtn.addEventListener("click", toggleMenus);

var alldetails = document.querySelectorAll(".detail");
const detail1Button = document.querySelector("#detail1Button");
const detail2Button = document.querySelector("#detail2Button");
const detail3Button = document.querySelector("#detail3Button");
const detail4Button = document.querySelector("#detail4Button");
const detail5Button = document.querySelector("#detail5Button");
const detail6Button = document.querySelector("#detail6Button");

hideAllDetails();

function hideAllDetails() {
	 for (let onedetail of alldetails) {
		 onedetail.style.display = "none";
	 }
}

function showDetail(detailno) {
	let onedetail = document.querySelector("#detail" + detailno);
	if (onedetail.style.display == "none") {
		onedetail.style.display = "block";
	}
	else {
		onedetail.style.display = "none";
	}
}

detail1Button.addEventListener("click", function() {
	showDetail(1);
});
detail2Button.addEventListener("click", function() {
	showDetail(2);
});
detail3Button.addEventListener("click", function() {
	showDetail(3);
});
detail4Button.addEventListener("click", function() {
	showDetail(4);
});
detail5Button.addEventListener("click", function() {
	showDetail(5);
});
detail6Button.addEventListener("click", function() {
	showDetail(6);
});

// Function to enter fullscreen mode
function enterFullscreen() {
	if (document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
	} 
	else if (document.documentElement.mozRequestFullScreen) { // Firefox
		document.documentElement.mozRequestFullScreen();
	} 
	else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
			document.documentElement.webkitRequestFullscreen();
	} 
	else if (document.documentElement.msRequestFullscreen) { // IE/Edge
	document.documentElement.msRequestFullscreen();
	}
}

// Function to exit fullscreen mode
function exitFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} 
	else if (document.mozCancelFullScreen) { // Firefox
		document.mozCancelFullScreen();
	} 
	else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
		document.webkitExitFullscreen();
	} 
	else if (document.msExitFullscreen) { // IE/Edge
		document.msExitFullscreen();
	}
}

const fullscreenButton = document.querySelector("#fullscreen");
let isFullscreen = "false";

fullscreenButton.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
	if (isFullscreen == "false") {
		enterFullscreen();
		isFullscreen = "true";
	}
	else if (isFullscreen == "true") {
		exitFullscreen();
		isFullscreen = "false";
	}
}

const questions = [
	{
		question: "What was the largest battleship ever built?",
		answers: [
			{text: "Yamato", correct: true},
			{text: "Bismarck", correct: false},
			{text: "USS Iowa", correct: false},
			{text: "Satsuma", correct: false},
		]
	},
	{
		question: "What did the Washington Naval Treaty restrict about the construction of battleships?",
		answers: [
			{text: "Height of a battleship", correct: false},
			{text: "Shape of a battleship", correct: false},
			{text: "Speed of a battleship", correct: false},
			{text: "Size of a battleship", correct: true},
		]
	},
	{
		question: "What was the first \"all-big-gun\" battleship??",
		answers: [
			{text: "Satsuma", correct: false},
			{text: "HMS Dreadnought", correct: true},
			{text: "Kii", correct: false},
			{text: "USS Texas", correct: false},
		]
	},
	{
		question: "What was the ship that started the Dreadnought era of battleships?",
		answers: [
			{text: "Napolean", correct: false},
			{text: "HMS Dreadnought", correct: true},
			{text: "Bismarck", correct: false},
			{text: "Vittorio Veneto", correct: false},
		]
	},
	{
		question: "Which nations caused America to push for the Washington Naval Treaty to be signed?",
		answers: [
			{text: "Britain and Japan", correct: true},
			{text: "Britain and Germany", correct: false},
			{text: "Japan and Italy", correct: false},
			{text: "Japan and France", correct: false},
		]
	},
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answerButtons");
const nextButton = document.querySelector("#nextButton");

let currentQuestionNo = 0;
let score = 0;

function startQuiz() {
	currentQuestionNo = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

function showQuestion() {
	resetState();
	let currentQuestion = questions[currentQuestionNo];
	let questionNo = currentQuestionNo + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
	
	currentQuestion.answers.forEach(answer => {
		const ansButton = document.createElement("button");
		ansButton.innerHTML = answer.text;
		ansButton.classList.add("quizButton");
		answerButtons.appendChild(ansButton);
		if (answer.correct) {
			answerButtons.dataset.correct = answer.correct;
		}
		ansButton.addEventListener("click", selectAnswer);
	});
}

function resetState() {
	nextButton.style.display = "none";
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e) {
	const selectedButton = e.target;
	const isCorrect = selectedButton.dataset.correct === "true";
	console.log(isCorrect);
	if (isCorrect) {
		selectedButton.classList.add("correct");
		score++;
	}
	else if (!isCorrect) { 
		selectedButton.classList.add("incorrect");
	}
	Array.from(answerButtons.children).forEach(ansButton => {
		if (ansButton.dataset.correct === "true") {
			ansButton.classList.add("correct");
		}
		ansButton.disabled = true;
	});
	nextButton.style.display = "block";
}

function showScore() {
	resetState();
	questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
	nextButton.innerHTML = "Play Again";
	nextButton.style.display = "block";
}

function handleNextButton() {
	currentQuestionNo++;
	if (currentQuestionNo < questions.length) {
		showQuestion();
	}
	else {
		showScore();
	}
}

nextButton.addEventListener("click", ()=>{
	if (currentQuestionNo < questions.length) {
		handleNextButton();
	}
	else {
		startQuiz();
	}
});

startQuiz();
