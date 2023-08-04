//target all elements to save to constants
const page1Button = document.querySelector("#page1Button");
const page2Button = document.querySelector("#page2Button");
const page3Button = document.querySelector("#page3Button");
var allpages = document.querySelectorAll(".page");

hideAllPages();
showPage(2);
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





