var SELECT_ID;
var NUM_PIC = 5;

function selection(prev, next){
	var nextpic = document.getElementById("img" + next);
	nextpic.className = "smallpic selectedimage"
	if (prev != -1){
		var prevpic = document.getElementById("img" + prev);
		prevpic.className = "smallpic";
	}
}

function myselect(obj){
	var goal = document.getElementById("selectedimg");
	var prev = -1;
	if (SELECT_ID >= 1 && SELECT_ID <= 5)
		prev = SELECT_ID;	
	goal.src = obj.src;
	SELECT_ID = parseInt(obj.id.slice(-1));
	selection(prev, SELECT_ID);
}

function imgturnwarn(event, obj){
	// console.log(event.offsetX)
	var divwidth = $(obj).width();
	if (event.offsetX < 0.15 * divwidth || event.offsetX > 0.85 * divwidth)
		obj.className = "turnwarn";
	else
		obj.className = "";
}

function myturn(event, obj){
	// console.log("clicked" + event.offsetX);
	// console.log($(this).width());
	var prev = -1;
	if (SELECT_ID >= 1 && SELECT_ID <= 5)
		prev = SELECT_ID;
	var divwidth = $(obj).width();
	if (event.offsetX < 0.15 * divwidth)
		SELECT_ID = (SELECT_ID + NUM_PIC - 2) % NUM_PIC + 1;
	else if (event.offsetX > 0.85 * divwidth)
		SELECT_ID = SELECT_ID % NUM_PIC + 1;
	var goal = document.getElementById("selectedimg");
	goal.src = "image/img_" + SELECT_ID + ".jpg";
	//console.log(SELECT_ID);
	selection(prev, SELECT_ID);
}