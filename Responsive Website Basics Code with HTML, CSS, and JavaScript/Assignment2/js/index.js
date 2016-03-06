// greeting
function mygreeting(obj) {
	var name = null;
	while (name == null)
		name = prompt("What's your name, please?");
	obj.className = "";
	if (name.length > 0)
		obj.innerHTML = "My name is Patricia Xiao. Nice to meet you, dear " + name + ".";
	else
		obj.innerHTML = "My name is Patricia Xiao. Nice to meet you, mysterious anonymous friend.";
}

function mystarting() {
	// expand
	document.getElementById("fold").style.display = "block";
	var goal = document.getElementById("starting");
	goal.className = "";
	goal.innerHTML = "This is a personal webpage written by Patricia Xiao."
}

function myfold() {
	// fold up
	var goal = document.getElementById("starting");
	goal.innerHTML = "Shall We Start? >>";
	goal.className = "hrefwarn";
	document.getElementById("fold").style.display = "none";
}