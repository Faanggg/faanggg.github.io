//target all elements to save to constants
const page1Button=document.querySelector("#page1Button");
const page2Button=document.querySelector("#page2Button");
const page3Button=document.querySelector("#page3Button");
var allpages=document.querySelectorAll(".page");

hideall();
show(1);
function hideall() { //function to hide all pages
	for(let onepage of allpages){ //go through all subtopic pages
		onepage.style.display="none"; //hide it
	}
}
function show(pgno) { //function to show selected page no
	hideall();
	//select the page based on the parameter passed in
	let onepage=document.querySelector("#page"+pgno);
	//show the page
	onepage.style.display="block";
}

page1Button.addEventListener("click", function () {
	show(1);
});
page2Button.addEventListener("click", function () {
	show(2);
});
page3Button.addEventListener("click", function () {
	show(3);
});

const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");

function toggleMenus() { 
	/*open and close menu*/
	menuItemsList.classList.toggle("menuShow");
}

hamBtn.addEventListener("click",toggleMenus);
