var Person = {
	strength: 'happy',
	power: 'intelligence',
	talk: function(){
		console.log(this.strength + ' with '+ this.power)
	}

}

var rennie = Object.create(Person);
rennie.strength = 'none';
rennie.power = 'wisdom';
console.log(rennie);

rennie.talk();