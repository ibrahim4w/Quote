
var quoteContent = document.getElementById("quote-content");
var quoteAuthor = document.getElementById("quote-author");
var randomContent = [
    {content: "“Be yourself; everyone else is already taken.”" , author: "--Oscar Wilde" } , 
    {content: "“So many books, so little time.”" , author: "--Frank Zappa" } , 
    {content: "“Two things are infinite: the universe and human stupidity.”" , author: "--Albert Einstein" } , 
    {content: "“A room without books is like a body without a soul.”" , author: "--Marcus Tullius Cicero" } , 
    {content: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”" , author: "--Mahatma Gandhi" } , 
    {content: "“To be yourself in a world that is constantly trying to make you something.”" , author: "--Ralph Waldo Emerson" }  
];
var prevRandomContents = null ;

function quote(){
    var randomIndex = Math.floor(Math.random() * randomContent.length);
    var randomContents = randomContent[randomIndex];

    while (randomContents == prevRandomContents) {
        var randomIndex = Math.floor(Math.random() * randomContent.length);
        var randomContents = randomContent[randomIndex];
    }

    quoteContent.innerHTML = randomContents.content;
    quoteAuthor.innerHTML = randomContents.author;
}