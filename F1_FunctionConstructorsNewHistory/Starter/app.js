function Likes(dance, drink){

	console.log(this);
	this.dance = dance;
	this.drink = drink;
	console.log('This function is invoked');

}

var mylikes = new Likes('Moonwalk', 'Rain');
console.log(mylikes);

var herlikes = new Likes('Bachata', 'Water');
console.log(herlikes);
