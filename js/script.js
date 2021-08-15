/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://uboraacademy.slack.com

/***
 * `quotes` array
 ***/
var quotes = [
	{
		quote: "The Way Get Started Is To Quit Talking And Begin Doing. ",
		source: "-Walt Disney",
	},
	{
		quote: "Creativity Is Intelligence Having Fun. ",
		source: "-Albert Einstein",
	},
	{
		quote: "You Only Live Once, But If You Do It Right Once Is Enough. ",
		source: "-Mae West",
	},
	{
		quote: "If You Can Dream It, You Can Do It. ",
		source: "-Walt Disney",
	},
	{
		quote: "Try Not To Became A Man Of Success. Rather Become A Man Of Value.",
		source: "-Albert Einstein ",
		citation: "Psychological ",
		year: "1840",
	},
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
	var randomQuotetion = Math.floor(Math.random() * quotes.length); //Generator a random number
	var randomquote = quotes[randomQuotetion]; // // randomquote variable with the index set to my randomNumber variable
	return randomquote; // Return randomquote variable
}

var result = getRandomQuote(quotes);

/***
 * `printQuote` function
 ***/
function printQuote() {
	var myrandomQuotes = getRandomQuote(); // Call the `getRandomQuote` function and assign it to a variable.
	var fullHTML =
		"<p class= quote >" +
		myrandomQuotes.quote +
		"</p>" + // Add the quote and source section to the HTML string.
		"<p class= source  >" +
		myrandomQuotes.source;

	//check for optional properties
	if (
		myrandomQuotes.hasOwnProperty("citation") === true &&
		myrandomQuotes.hasOwnProperty("year") === true
	) {
		fullHTML +=
			"<span class= citation >" +
			myrandomQuotes.citation +
			"</span>" +
			"<span class= year >" +
			myrandomQuotes.year +
			"</span>";
	}
	fullHTML += "</p>";
	// set the innnerHTML of the .quote-box to the complete HTML string
	document.getElementById("quote-box").innerHTML = fullHTML;
}

document
	.getElementById("load-quote")
	.addEventListener("click", printQuote, false);
