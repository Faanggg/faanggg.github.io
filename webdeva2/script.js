const page1Button = document.querySelector("#page1Button");
const page2Button = document.querySelector("#page2Button");
const page3Button = document.querySelector("#page3Button");
var allpages = document.querySelectorAll(".page");

hideall();
show(1);

function hideall() { 
	for (let onepage of allpages) { 
		onepage.style.display="none";
	}
}

function show(pageNum) { 
	hideall();
	let onepage = document.querySelector("#page" + pageNum);
	onepage.style.display = "block";
}

page1Button.addEventListener("click", function() {
	show(1);
});
page2Button.addEventListener("click", function() {
	show(2);
});
page3Button.addEventListener("click", function() {
	show(3);
});
