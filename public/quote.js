var quotes = [
  "They way get started is to quit talking and begin doing",
  "The pessimist See Difficulty in Every Oppurtunity. The optimist see the opportunity in every difficulty",
]

function newQuote() {
  var randomNumber = Math.floor(Math.random()* (quotes.length));
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
