// Greeter.js
var config = require('./config.json');
var GreeterCss = require('./css/Greeter.css'); //require引入css

module.exports = function() {
	var greet = document.createElement('div');
	greet.setAttribute('class', GreeterCss.root)
	console.log(GreeterCss)
	greet.textContent = config.greetText;
	return greet;
}
