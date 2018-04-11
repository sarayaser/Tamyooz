function fadePeople() {
	document.getElementById('peopleImg').src = "images/intro-blogdetails/peopleFade.png";
	document.getElementById('people').style.color = " rgba( 255, 255, 255, 0.4 )";

	document.getElementById('carImg').src = "images/intro-blogdetails/car.png";
	document.getElementById('car').style.color = "white";
}

function fadeCar() {
	document.getElementById('carImg').src = "images/intro-blogdetails/carFade.png";
	document.getElementById('car').style.color = " rgba( 255, 255, 255, 0.4 )";

	document.getElementById('peopleImg').src = "images/intro-blogdetails/people.png";
	document.getElementById('people').style.color = "white";
}
