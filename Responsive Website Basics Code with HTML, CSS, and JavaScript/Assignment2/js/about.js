var SCORE = 0;

function judgescore(){
	var score1 = 0;
	var score2 = 0;
	var score3 = 0;
	if (favoritenum.value == 6)
		score1 = 1;
	if ($("input[name='favoriteanimal']:checked").val() == "cat")
		score2 = 1;
	if (coke.checked)
		score3++;
	if (bread.checked)
		score3++;
	if (draw.checked)
		score3++;
	if (!dance.checked)
		score3++;
	if (!sour.checked)
		score3++;
	SCORE = (100 * score1 + 100 * score2 + 20 * score3) / 3;
}

function showscore(){
	document.getElementById("report").innerHTML = "You received " + SCORE + " points out of 100.";
	if (SCORE < 60)
		document.getElementById("judge").innerHTML = "Nice try. Have fun~";
	else if (SCORE < 80)
		document.getElementById("judge").innerHTML = "Good job!";
	else
		document.getElementById("judge").innerHTML = "Wonderful! You know me so well!";
	document.getElementById("result").style.display = "block";
}

function judgeshow(){
	judgescore();
	showscore();
}