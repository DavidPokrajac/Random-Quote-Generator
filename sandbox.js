window.onload = function(){

  // referencing button tag
  var button = document.querySelector(".container button");

  // referencing quote paragraph
  var quoteA = document.getElementById("quote");

  // referencing author paragraph
  var author = document.getElementById("author");

  // Choosing random quotes and storing them in one array
  var quotes = [
    {quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle"},
    {quote: "A good decision is based on knowledge and not on numbers.", author: "Plato"},
    {quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates"},
    {quote: "Educate the children and it won't be necessary to punish the men.", author: "Pythagoras"},
    {quote: "Be silent unless you can say something that is more useful than your silence.", author: "Archimedes"}
  ];

  button.addEventListener("click", function(){
    // Every time a button is clicked, new index variable will be generated so that it can be used as an index of a quote array
    var index = Math.floor(Math.random() * quotes.length);
    quoteA.textContent = quotes[index].quote;
    author.textContent = quotes[index].author;
  });

}
